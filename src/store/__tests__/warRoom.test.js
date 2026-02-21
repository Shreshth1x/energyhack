import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { useWarRoom } from '../warRoom'

// Mock fetch to reject so startFlood uses hardcoded fallback
beforeEach(() => {
  globalThis.fetch = vi.fn().mockRejectedValue(new Error('no server'))
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe('warRoom store', () => {
  beforeEach(() => {
    useWarRoom.getState().reset()
  })

  it('has correct initial state', () => {
    const state = useWarRoom.getState()
    expect(state.applications).toEqual([])
    expect(state.activeApplication).toBeNull()
    expect(state.analysisStream).toBe('')
    expect(state.isAnalyzing).toBe(false)
    expect(state.backlogDays).toBe(847)
    expect(state.applicationsToday).toBe(0)
    expect(state.auditResults).toBeNull()
    expect(state.floodActive).toBe(false)
  })

  it('startFlood adds applications at intervals via fake timers', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: false })
    vi.spyOn(Math, 'random').mockReturnValue(0.5) // jitter = 0
    await useWarRoom.getState().startFlood()
    expect(useWarRoom.getState().floodActive).toBe(true)

    // After first interval, 1 app should be added
    vi.advanceTimersByTime(3500)
    expect(useWarRoom.getState().applications.length).toBe(1)
    expect(useWarRoom.getState().applicationsToday).toBe(1)

    // After second interval, 2 apps
    vi.advanceTimersByTime(3500)
    expect(useWarRoom.getState().applications.length).toBe(2)

    // After all 8
    vi.advanceTimersByTime(3500 * 6)
    expect(useWarRoom.getState().applications.length).toBe(8)

    vi.useRealTimers()
  })

  it('backlog increases with each application', async () => {
    vi.useFakeTimers()
    vi.spyOn(Math, 'random').mockReturnValue(0.5)
    const initialBacklog = useWarRoom.getState().backlogDays
    await useWarRoom.getState().startFlood()

    vi.advanceTimersByTime(3500)
    expect(useWarRoom.getState().backlogDays).toBeGreaterThan(initialBacklog)

    vi.useRealTimers()
  })

  it('setActiveApplication sets active app', async () => {
    vi.useFakeTimers()
    vi.spyOn(Math, 'random').mockReturnValue(0.5)
    await useWarRoom.getState().startFlood()
    vi.advanceTimersByTime(3500)

    const app = useWarRoom.getState().applications[0]
    useWarRoom.getState().setActiveApplication(app.id)
    expect(useWarRoom.getState().activeApplication).toBe(app.id)

    vi.useRealTimers()
  })

  it('reviewApplication sets isAnalyzing', async () => {
    vi.useFakeTimers()
    vi.spyOn(Math, 'random').mockReturnValue(0.5)
    await useWarRoom.getState().startFlood()
    vi.advanceTimersByTime(3500)

    const app = useWarRoom.getState().applications[0]
    useWarRoom.getState().reviewApplication(app.id)
    expect(useWarRoom.getState().isAnalyzing).toBe(true)
    expect(useWarRoom.getState().activeApplication).toBe(app.id)

    vi.useRealTimers()
  })

  it('setAuditResults stores results and stops analyzing', () => {
    const mockResults = {
      completeness: { severity: 'warning', score: 65 },
      consistency: { severity: 'critical', findings: [] },
      compliance: { severity: 'warning', codes: [] },
      impact: { severity: 'critical', grid: {}, water: {} },
      report: { summary: 'test', actions: [] },
    }
    useWarRoom.getState().setAuditResults(mockResults)
    expect(useWarRoom.getState().auditResults).toEqual(mockResults)
    expect(useWarRoom.getState().isAnalyzing).toBe(false)
  })

  it('appendAnalysisStream appends text', () => {
    useWarRoom.getState().appendAnalysisStream('Hello ')
    useWarRoom.getState().appendAnalysisStream('World')
    expect(useWarRoom.getState().analysisStream).toBe('Hello World')
  })

  it('flood stops adding after 8 apps', async () => {
    vi.useFakeTimers()
    vi.spyOn(Math, 'random').mockReturnValue(0.5)
    await useWarRoom.getState().startFlood()
    vi.advanceTimersByTime(3500 * 10)
    expect(useWarRoom.getState().applications.length).toBe(8)
    expect(useWarRoom.getState().floodActive).toBe(false)
    vi.useRealTimers()
  })

  it('updateApplicationStatus changes app status', async () => {
    vi.useFakeTimers()
    vi.spyOn(Math, 'random').mockReturnValue(0.5)
    await useWarRoom.getState().startFlood()
    vi.advanceTimersByTime(3500)
    const app = useWarRoom.getState().applications[0]
    useWarRoom.getState().updateApplicationStatus(app.id, 'reviewing')
    expect(useWarRoom.getState().applications[0].status).toBe('reviewing')
    vi.useRealTimers()
  })
})
