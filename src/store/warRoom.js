import { create } from 'zustand'
import { runFullAudit } from '../lib/auditPipeline'

const FLOOD_INTERVAL = 3500
const BACKLOG_INCREMENT = 42

const initialState = {
  applications: [],
  activeApplication: null,
  analysisStream: '',
  isAnalyzing: false,
  backlogDays: 847,
  applicationsToday: 0,
  auditResults: null,
  floodActive: false,
  _floodIndex: 0,
  _floodTimer: null,
}

export const useWarRoom = create((set, get) => ({
  ...initialState,

  reset: () => {
    const timer = get()._floodTimer
    if (timer) clearTimeout(timer)
    set({ ...initialState })
  },

  startFlood: async () => {
    if (get().floodActive || get().applications.length > 0) return
    set({ floodActive: true })

    let apps
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/applications`)
      apps = await res.json()
    } catch {
      const { DEMO_APPLICATIONS } = await import('../lib/demoApplications')
      apps = DEMO_APPLICATIONS
    }

    let index = 0
    const scheduleNext = () => {
      if (index >= apps.length) {
        set({ floodActive: false, _floodTimer: null })
        return
      }

      const jitter = Math.floor(Math.random() * 400) - 200 // ±200ms
      const delay = FLOOD_INTERVAL + jitter
      const timer = setTimeout(() => {
        const app = { ...apps[index] }
        set((state) => ({
          applications: [...state.applications, app],
          applicationsToday: state.applicationsToday + 1,
          backlogDays: state.backlogDays + BACKLOG_INCREMENT,
          _floodIndex: index + 1,
        }))
        index++
        scheduleNext()
      }, delay)
      set({ _floodTimer: timer })
    }

    scheduleNext()
  },

  setActiveApplication: (id) => {
    set({ activeApplication: id, auditResults: null, analysisStream: '' })
  },

  reviewApplication: async (id) => {
    set({
      activeApplication: id,
      isAnalyzing: true,
      auditResults: null,
      analysisStream: '',
    })
    get().updateApplicationStatus(id, 'reviewing')

    const app = get().applications.find((a) => a.id === id)
    if (!app) return

    try {
      const results = await runFullAudit(app, {
        onLayerComplete: (layer, data) => {
          // Progressive update — components react to partial results
          set((state) => ({
            auditResults: { ...state.auditResults, [layer]: data },
          }))
        },
      })
      get().setAuditResults(results)
    } catch (err) {
      console.error('Audit failed:', err)
      set({ isAnalyzing: false })
      get().updateApplicationStatus(id, 'error')
    }
  },

  setAuditResults: (results) => {
    set({ auditResults: results, isAnalyzing: false })
    const activeId = get().activeApplication
    if (activeId) {
      const severity = results?.report?.overallSeverity?.color
      const status = severity === 'critical' ? 'critical' : severity === 'warning' ? 'action_required' : 'reviewed'
      get().updateApplicationStatus(activeId, status)
    }
  },

  appendAnalysisStream: (text) => {
    set((state) => ({ analysisStream: state.analysisStream + text }))
  },

  updateApplicationStatus: (id, status) => {
    set((state) => ({
      applications: state.applications.map((app) =>
        app.id === id ? { ...app, status } : app
      ),
    }))
  },
}))
