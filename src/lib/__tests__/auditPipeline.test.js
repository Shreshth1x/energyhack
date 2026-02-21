import { describe, it, expect } from 'vitest'
import { getOverallSeverity } from '../auditPipeline'

describe('getOverallSeverity', () => {
  it('returns CRITICAL when any layer has critical findings', () => {
    const result = getOverallSeverity({
      completeness: { severity: 'warning' },
      consistency: { severity: 'critical' },
      compliance: { severity: 'info' },
      impact: { severity: 'warning' },
    })
    expect(result.label).toBe('CRITICAL')
    expect(result.color).toBe('critical')
  })

  it('returns ACTION REQUIRED when any layer has warning but none critical', () => {
    const result = getOverallSeverity({
      completeness: { severity: 'warning' },
      consistency: { severity: 'info' },
      compliance: { severity: 'warning' },
      impact: { severity: 'info' },
    })
    expect(result.label).toBe('ACTION REQUIRED')
    expect(result.color).toBe('warning')
  })

  it('returns REVIEW COMPLETE when all layers are info', () => {
    const result = getOverallSeverity({
      completeness: { severity: 'info' },
      consistency: { severity: 'info' },
      compliance: { severity: 'info' },
      impact: { severity: 'info' },
    })
    expect(result.label).toBe('REVIEW COMPLETE')
    expect(result.color).toBe('approved')
  })

  it('returns correct shape', () => {
    const result = getOverallSeverity({
      completeness: { severity: 'info' },
      consistency: { severity: 'info' },
      compliance: { severity: 'info' },
      impact: { severity: 'info' },
    })
    expect(result).toHaveProperty('label')
    expect(result).toHaveProperty('color')
  })
})
