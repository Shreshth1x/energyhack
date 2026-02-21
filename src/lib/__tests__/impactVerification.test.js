import { describe, it, expect } from 'vitest'
import { verifyGridImpactClaim, verifyWaterUsageClaim, TEXAS_GRID_BASELINES } from '../impactVerification'

describe('TEXAS_GRID_BASELINES', () => {
  it('has required baseline data', () => {
    expect(TEXAS_GRID_BASELINES).toHaveProperty('averageCountyPeakMW')
    expect(TEXAS_GRID_BASELINES).toHaveProperty('aquiferRechargeRateGPD')
  })
})

describe('verifyGridImpactClaim', () => {
  it('480MW in Loving County = 6000% of peak → UNSUBSTANTIATED/critical', () => {
    const result = verifyGridImpactClaim(480, 8)
    expect(result.percentOfPeak).toBe(6000)
    expect(result.verdict).toBe('UNSUBSTANTIATED')
    expect(result.severity).toBe('critical')
  })

  it('small load under threshold is SUBSTANTIATED', () => {
    const result = verifyGridImpactClaim(0.5, 8)
    expect(result.verdict).toBe('SUBSTANTIATED')
    expect(result.severity).toBe('info')
  })

  it('moderate load triggers NEEDS_REVIEW', () => {
    const result = verifyGridImpactClaim(4, 8)
    expect(result.verdict).toBe('NEEDS_REVIEW')
    expect(result.severity).toBe('warning')
  })

  it('returns correct shape', () => {
    const result = verifyGridImpactClaim(100, 8)
    expect(result).toHaveProperty('loadMW')
    expect(result).toHaveProperty('peakMW')
    expect(result).toHaveProperty('percentOfPeak')
    expect(result).toHaveProperty('verdict')
    expect(result).toHaveProperty('severity')
    expect(result).toHaveProperty('analysis')
  })

  it('edge case at exactly 25% threshold', () => {
    const result = verifyGridImpactClaim(2, 8)
    expect(result.percentOfPeak).toBe(25)
    expect(result.verdict).toBe('SUBSTANTIATED')
  })

  it('edge case just over 50% threshold', () => {
    const result = verifyGridImpactClaim(4.1, 8)
    expect(result.percentOfPeak).toBeCloseTo(51.25)
    expect(result.verdict).toBe('NEEDS_REVIEW')
  })
})

describe('verifyWaterUsageClaim', () => {
  it('2M GPD = 83% aquifer → UNSUBSTANTIATED/critical', () => {
    const result = verifyWaterUsageClaim(2_000_000, 2_400_000)
    expect(result.percentOfRecharge).toBeCloseTo(83.33, 0)
    expect(result.verdict).toBe('UNSUBSTANTIATED')
    expect(result.severity).toBe('critical')
  })

  it('small usage is SUBSTANTIATED', () => {
    const result = verifyWaterUsageClaim(100_000, 2_400_000)
    expect(result.verdict).toBe('SUBSTANTIATED')
    expect(result.severity).toBe('info')
  })

  it('moderate usage triggers NEEDS_REVIEW', () => {
    const result = verifyWaterUsageClaim(750_000, 2_400_000)
    expect(result.verdict).toBe('NEEDS_REVIEW')
    expect(result.severity).toBe('warning')
  })

  it('returns correct shape', () => {
    const result = verifyWaterUsageClaim(500_000, 2_400_000)
    expect(result).toHaveProperty('usageGPD')
    expect(result).toHaveProperty('rechargeRateGPD')
    expect(result).toHaveProperty('percentOfRecharge')
    expect(result).toHaveProperty('verdict')
    expect(result).toHaveProperty('severity')
    expect(result).toHaveProperty('analysis')
  })
})
