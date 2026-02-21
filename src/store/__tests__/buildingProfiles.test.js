import { describe, it, expect, beforeEach } from 'vitest'
import { useBuildingProfiles } from '../buildingProfiles'

describe('buildingProfiles store', () => {
  beforeEach(() => {
    useBuildingProfiles.getState().reset()
  })

  it('has default profile', () => {
    const state = useBuildingProfiles.getState()
    expect(state.profiles.length).toBeGreaterThan(0)
    expect(state.activeProfile).not.toBeNull()
  })

  it('setActiveProfile changes active profile', () => {
    const profiles = useBuildingProfiles.getState().profiles
    useBuildingProfiles.getState().setActiveProfile(profiles[0].id)
    expect(useBuildingProfiles.getState().activeProfile).toBe(profiles[0].id)
  })

  it('setProposedChange updates proposed change', () => {
    useBuildingProfiles.getState().setProposedChange({ newUse: 'data_center' })
    expect(useBuildingProfiles.getState().proposedChange.newUse).toBe('data_center')
  })

  it('computePermitCascade returns triggers for use change', () => {
    useBuildingProfiles.getState().setProposedChange({ newUse: 'data_center' })
    useBuildingProfiles.getState().computePermitCascade()
    const cascade = useBuildingProfiles.getState().permitCascade
    expect(cascade.length).toBeGreaterThan(0)
    expect(cascade.some((t) => t.type === 'ZONING')).toBe(true)
  })

  it('computePermitCascade returns empty for no changes', () => {
    useBuildingProfiles.getState().setProposedChange({})
    useBuildingProfiles.getState().computePermitCascade()
    expect(useBuildingProfiles.getState().permitCascade).toHaveLength(0)
  })
})
