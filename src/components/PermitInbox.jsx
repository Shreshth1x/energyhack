import { useWarRoom } from '../store/warRoom'
import PermitCard from './PermitCard'
import FloodIndicator from './FloodIndicator'

export default function PermitInbox() {
  const applications = useWarRoom((s) => s.applications)
  const activeApplication = useWarRoom((s) => s.activeApplication)
  const floodActive = useWarRoom((s) => s.floodActive)
  const startFlood = useWarRoom((s) => s.startFlood)
  const reviewApplication = useWarRoom((s) => s.reviewApplication)

  const handleCardClick = (id) => {
    reviewApplication(id)
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {applications.length === 0 && !floodActive && (
        <div className="flex-1 flex items-center justify-center p-6">
          <button
            onClick={startFlood}
            className="px-6 py-3 bg-accent text-bg font-bold text-sm tracking-wider rounded hover:brightness-110 transition-all"
          >
            START DEMO
          </button>
        </div>
      )}
      <div className="flex-1 overflow-y-auto">
        {applications.map((app) => (
          <PermitCard
            key={app.id}
            application={app}
            onClick={handleCardClick}
            isActive={activeApplication === app.id}
          />
        ))}
      </div>
      <FloodIndicator appCount={applications.length} />
    </div>
  )
}
