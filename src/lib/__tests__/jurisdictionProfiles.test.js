import { describe, it, expect } from 'vitest'
import { JURISDICTION_PROFILES } from '../jurisdictionProfiles'

describe('JURISDICTION_PROFILES', () => {
  it('has loving_county_tx profile', () => {
    expect(JURISDICTION_PROFILES).toHaveProperty('loving_county_tx')
  })

  it('loving_county_tx has at least 3 applicable codes', () => {
    const lc = JURISDICTION_PROFILES.loving_county_tx
    expect(lc.applicableCodes.length).toBeGreaterThanOrEqual(3)
  })

  it('loving_county_tx has at least 5 classification gaps', () => {
    const lc = JURISDICTION_PROFILES.loving_county_tx
    expect(lc.classificationGaps.length).toBeGreaterThanOrEqual(5)
  })

  it('profiles have required structure', () => {
    Object.values(JURISDICTION_PROFILES).forEach((profile) => {
      expect(profile).toHaveProperty('name')
      expect(profile).toHaveProperty('population')
      expect(profile).toHaveProperty('applicableCodes')
      expect(profile).toHaveProperty('classificationGaps')
      expect(profile).toHaveProperty('peakDemandMW')
    })
  })

  it('has stub profiles for austin_tx and travis_county_tx', () => {
    expect(JURISDICTION_PROFILES).toHaveProperty('austin_tx')
    expect(JURISDICTION_PROFILES).toHaveProperty('travis_county_tx')
  })

  it('loving county peak demand is 8 MW', () => {
    expect(JURISDICTION_PROFILES.loving_county_tx.peakDemandMW).toBe(8)
  })
})
