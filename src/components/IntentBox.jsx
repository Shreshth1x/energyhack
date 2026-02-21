import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useBuildingProfiles } from '../store/buildingProfiles'

const TRIGGER_COLORS = {
  ZONING: 'text-critical',
  ELECTRICAL: 'text-warning',
  FIRE_SAFETY: 'text-critical',
  OCCUPANCY: 'text-warning',
  STRUCTURAL: 'text-accent',
}

function parseIntent(text) {
  const lower = text.toLowerCase()
  const change = {}

  // Detect use changes
  const usePatterns = {
    data_center: /data center|server|computing|ai training/,
    warehouse: /warehouse|storage|distribution/,
    restaurant: /restaurant|food|dining/,
    retail: /retail|shop|store/,
    residential: /residential|apartment|housing/,
  }

  for (const [use, pattern] of Object.entries(usePatterns)) {
    if (pattern.test(lower)) {
      change.newUse = use
      break
    }
  }

  // Detect electrical changes
  const loadMatch = lower.match(/(\d+)\s*(?:kw|kilowatt)/i)
  if (loadMatch) {
    change.newLoadKW = parseInt(loadMatch[1])
  } else if (/high.?power|heavy.?electrical|industrial.?power/i.test(lower)) {
    change.newLoadKW = 5000
  }

  // Detect hazmat
  if (/hazmat|hazardous|chemical|battery|lithium/i.test(lower)) {
    change.addHazmat = true
  }

  // Detect occupancy
  const occMatch = lower.match(/(\d+)\s*(?:people|occupants|employees|workers)/i)
  if (occMatch) {
    change.newOccupancy = parseInt(occMatch[1])
  }

  // Detect structural
  if (/structural|demolish|load.?bearing|foundation|floor.?load/i.test(lower)) {
    change.structuralModification = true
  }

  return change
}

export default function IntentBox() {
  const [text, setText] = useState('')
  const [hasAnalyzed, setHasAnalyzed] = useState(false)
  const permitCascade = useBuildingProfiles((s) => s.permitCascade)
  const setProposedChange = useBuildingProfiles((s) => s.setProposedChange)
  const computePermitCascade = useBuildingProfiles((s) => s.computePermitCascade)

  const handleAnalyze = () => {
    const change = parseIntent(text)
    setProposedChange(change)
    computePermitCascade()
    setHasAnalyzed(true)
  }

  return (
    <div className="space-y-4">
      <div className="glass-panel rounded-lg p-4">
        <div className="text-xs font-bold tracking-widest text-text-secondary mb-3">WHAT DO YOU WANT TO DO WITH THIS BUILDING?</div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Describe your intended change (e.g., 'convert top floor to data center with 5000kW electrical service')"
          className="w-full bg-bg border border-border rounded p-3 text-sm text-text-primary placeholder:text-text-secondary/50 resize-none h-24 focus:outline-none focus:border-accent"
        />
        <button
          onClick={handleAnalyze}
          disabled={!text.trim()}
          className="mt-2 px-4 py-2.5 bg-accent text-bg text-xs font-bold tracking-wider rounded btn-elevated hover:brightness-110 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:shadow-none"
        >
          ANALYZE PERMIT CASCADE
        </button>
      </div>

      <AnimatePresence>
        {hasAnalyzed && permitCascade.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="border border-border rounded p-4"
          >
            <div className="text-xs font-bold tracking-widest text-text-secondary mb-2">
              NO PERMIT TRIGGERS DETECTED
            </div>
            <div className="text-xs text-text-secondary">
              Try being more specific — mention a use change (e.g., "data center", "restaurant", "warehouse"), electrical load (e.g., "5000kW"), occupancy count (e.g., "500 employees"), hazardous materials, or structural modifications.
            </div>
          </motion.div>
        )}
        {permitCascade.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel-green rounded-lg p-4"
          >
            <div className="text-xs font-bold tracking-widest text-accent mb-3">
              PERMIT CASCADE — {permitCascade.length} TRIGGERS DETECTED
            </div>
            <div className="space-y-3">
              {permitCascade.map((trigger, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="border border-border rounded p-3"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-xs font-bold ${TRIGGER_COLORS[trigger.type] || 'text-text-primary'}`}>
                      {trigger.type}
                    </span>
                    <span className="text-[10px] text-text-secondary">~{trigger.timelineDays} days</span>
                  </div>
                  <div className="text-xs text-text-secondary">{trigger.reason}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
