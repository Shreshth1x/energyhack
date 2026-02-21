import { useBuildingProfiles } from '../store/buildingProfiles'

export default function BuildingProfile() {
  const profiles = useBuildingProfiles((s) => s.profiles)
  const activeProfileId = useBuildingProfiles((s) => s.activeProfile)
  const profile = profiles.find((p) => p.id === activeProfileId)

  if (!profile) return null

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-panel rounded-lg p-4">
        <div className="text-xs font-bold tracking-widest text-accent/60 mb-2">BUILDING PROFILE</div>
        <div className="text-lg font-bold text-text-primary">{profile.address}</div>
        <div className="flex gap-4 mt-2 text-xs text-text-secondary">
          <span>Current Use: <span className="text-text-primary font-semibold">{profile.currentUse}</span></span>
          <span>Built: <span className="text-text-primary">{profile.yearBuilt}</span></span>
          <span>{profile.squareFeet?.toLocaleString()} sqft</span>
          <span>{profile.floors} floors</span>
        </div>
      </div>

      {/* Energy Systems */}
      <div className="glass-panel rounded-lg p-4">
        <div className="text-xs font-bold tracking-widest text-accent/60 mb-3">ENERGY SYSTEMS</div>
        <div className="space-y-1">
          {profile.energySystems?.map((sys, i) => (
            <div key={i} className="text-xs text-text-primary flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-processing" />
              {sys}
            </div>
          ))}
        </div>
        <div className="mt-3 text-xs text-text-secondary">
          Electrical Capacity: <span className="text-text-primary font-bold">{profile.electricalCapacityKW}kW</span>
          {' | '}Occupancy: <span className="text-text-primary">{profile.occupancy}</span>
          {' | '}HAZMAT: <span className={profile.hazmatStorage ? 'text-warning' : 'text-approved'}>{profile.hazmatStorage ? 'YES' : 'NO'}</span>
        </div>
      </div>

      {/* Active Permits */}
      <div className="glass-panel rounded-lg p-4">
        <div className="text-xs font-bold tracking-widest text-accent/60 mb-3">ACTIVE PERMITS</div>
        {profile.activePermits?.map((permit, i) => (
          <div key={i} className="text-xs text-text-primary flex items-center gap-2 py-1">
            <span className="text-processing">-</span>
            {permit}
          </div>
        ))}
      </div>

      {/* Change History */}
      <div className="glass-panel rounded-lg p-4">
        <div className="text-xs font-bold tracking-widest text-accent/60 mb-3">CHANGE HISTORY</div>
        <div className="space-y-2">
          {profile.changeHistory?.map((entry, i) => (
            <div key={i} className="flex gap-3 text-xs">
              <span className="text-accent font-bold shrink-0">{entry.year}</span>
              <span className="text-text-primary">{entry.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
