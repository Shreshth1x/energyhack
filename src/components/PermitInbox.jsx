import { useEffect } from 'react'
import { useWarRoom } from '../store/warRoom'
import PermitCard from './PermitCard'
import FloodIndicator from './FloodIndicator'

export default function PermitInbox() {
  const applications = useWarRoom((s) => s.applications)
  const activeApplication = useWarRoom((s) => s.activeApplication)
  const startFlood = useWarRoom((s) => s.startFlood)
  const reviewApplication = useWarRoom((s) => s.reviewApplication)

  useEffect(() => {
    startFlood()
  }, [startFlood])

  const handleCardClick = (id) => {
    reviewApplication(id)
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
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
