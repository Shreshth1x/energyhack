import { create } from 'zustand'
import { detectPermitTriggers } from '../lib/triggerDetector'

const DEFAULT_PROFILE = {
  id: 'bldg-001',
  address: '100 Congress Ave, Austin, TX 78701',
  currentUse: 'office',
  yearBuilt: 1985,
  squareFeet: 45000,
  floors: 4,
  electricalCapacityKW: 200,
  occupancy: 150,
  hazmatStorage: false,
  energySystems: ['Grid (200kW service)', 'Natural gas HVAC', 'Emergency generator (50kW diesel)'],
  activePermits: ['MEP Upgrade (2023)', 'ADA Restroom Renovation (2024)'],
  changeHistory: [
    { year: 1985, description: 'Original construction — Class B office' },
    { year: 2001, description: 'Roof replacement and HVAC modernization' },
    { year: 2018, description: 'Lobby renovation and ADA upgrades' },
  ],
}

const initialState = {
  profiles: [DEFAULT_PROFILE],
  activeProfile: DEFAULT_PROFILE.id,
  proposedChange: {},
  permitCascade: [],
}

export const useBuildingProfiles = create((set, get) => ({
  ...initialState,

  reset: () => set({ ...initialState }),

  setActiveProfile: (id) => set({ activeProfile: id }),

  setProposedChange: (change) => set({ proposedChange: change }),

  computePermitCascade: () => {
    const { profiles, activeProfile, proposedChange } = get()
    const profile = profiles.find((p) => p.id === activeProfile)
    if (!profile) {
      set({ permitCascade: [] })
      return
    }
    const triggers = detectPermitTriggers(profile, proposedChange)
    set({ permitCascade: triggers })
  },
}))
