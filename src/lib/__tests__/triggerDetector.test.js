import { describe, it, expect } from 'vitest'
import { detectPermitTriggers } from '../triggerDetector'

describe('detectPermitTriggers', () => {
  const baseProfile = {
    currentUse: 'office',
    electricalCapacityKW: 200,
    occupancy: 150,
    hazmatStorage: false,
  }

  it('use change triggers ZONING', () => {
    const triggers = detectPermitTriggers(baseProfile, { newUse: 'data_center' })
    const types = triggers.map((t) => t.type)
    expect(types).toContain('ZONING')
  })

  it('load increase triggers ELECTRICAL', () => {
    const triggers = detectPermitTriggers(baseProfile, { newLoadKW: 5000 })
    const types = triggers.map((t) => t.type)
    expect(types).toContain('ELECTRICAL')
  })

  it('multiple changes → multiple triggers', () => {
    const triggers = detectPermitTriggers(baseProfile, {
      newUse: 'data_center',
      newLoadKW: 5000,
      newOccupancy: 500,
    })
    expect(triggers.length).toBeGreaterThanOrEqual(2)
  })

  it('no changes → empty array', () => {
    const triggers = detectPermitTriggers(baseProfile, {})
    expect(triggers).toHaveLength(0)
  })

  it('hazmat addition triggers FIRE_SAFETY', () => {
    const triggers = detectPermitTriggers(baseProfile, { addHazmat: true })
    const types = triggers.map((t) => t.type)
    expect(types).toContain('FIRE_SAFETY')
  })

  it('each trigger has required fields', () => {
    const triggers = detectPermitTriggers(baseProfile, { newUse: 'data_center' })
    triggers.forEach((t) => {
      expect(t).toHaveProperty('type')
      expect(t).toHaveProperty('reason')
      expect(t).toHaveProperty('timelineDays')
    })
  })
})
