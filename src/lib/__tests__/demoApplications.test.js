import { describe, it, expect } from 'vitest'
import { DEMO_APPLICATIONS } from '../demoApplications'

describe('DEMO_APPLICATIONS', () => {
  it('contains exactly 8 applications', () => {
    expect(DEMO_APPLICATIONS).toHaveLength(8)
  })

  it('has all required fields on every application', () => {
    const requiredFields = ['id', 'company', 'type', 'scale', 'fullText', 'keySpecs', 'pageCount', 'status']
    DEMO_APPLICATIONS.forEach((app) => {
      requiredFields.forEach((field) => {
        expect(app).toHaveProperty(field)
      })
    })
  })

  it('starts with Microsoft and ends with Anonymous LLC', () => {
    expect(DEMO_APPLICATIONS[0].company).toMatch(/Microsoft/i)
    expect(DEMO_APPLICATIONS[7].company).toMatch(/Anonymous|residential/i)
  })

  it('has fullText of at least 500 characters per application', () => {
    DEMO_APPLICATIONS.forEach((app) => {
      expect(app.fullText.length).toBeGreaterThanOrEqual(500)
    })
  })

  it('has numeric keySpecs values', () => {
    DEMO_APPLICATIONS.forEach((app) => {
      expect(typeof app.keySpecs.loadMW).toBe('number')
      expect(typeof app.keySpecs.waterUsageGPD).toBe('number')
    })
  })

  it('all applications start with pending status', () => {
    DEMO_APPLICATIONS.forEach((app) => {
      expect(app.status).toBe('pending')
    })
  })

  it('has unique IDs', () => {
    const ids = DEMO_APPLICATIONS.map((a) => a.id)
    expect(new Set(ids).size).toBe(8)
  })

  it('has valid types', () => {
    const validTypes = ['data_center', 'battery_storage', 'ev_charging', 'building_use_change']
    DEMO_APPLICATIONS.forEach((app) => {
      expect(validTypes).toContain(app.type)
    })
  })
})
