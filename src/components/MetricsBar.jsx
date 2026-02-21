import { useWarRoom } from '../store/warRoom'

export default function MetricsBar() {
  const applicationsToday = useWarRoom((s) => s.applicationsToday)
  const backlogDays = useWarRoom((s) => s.backlogDays)
  const floodActive = useWarRoom((s) => s.floodActive)

  const date = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <div className="flex items-center justify-between px-6 py-3 bg-panel border-b border-border">
      <div className="flex items-center gap-3">
        <h1 className="text-sm font-bold tracking-widest text-text-primary">
          GRIDMIND <span className="text-text-secondary">//</span> LOVING COUNTY PERMIT OFFICE <span className="text-text-secondary">//</span> {date}
        </h1>
        {floodActive && (
          <span className="flex items-center gap-1.5 text-xs text-processing">
            <span className="w-2 h-2 rounded-full bg-processing animate-pulse" />
            LIVE
          </span>
        )}
      </div>
      <div className="flex items-center gap-6 text-xs">
        <div className="text-text-secondary">
          APPS TODAY: <span className="text-text-primary font-bold">{applicationsToday}</span>
        </div>
        <div className="text-text-secondary">
          MANUAL REVIEW BACKLOG: <span className="text-warning font-bold">{backlogDays} days</span>
        </div>
      </div>
    </div>
  )
}
