import { describe, it, expect } from 'vitest'
import { PERMIT_CHECKLISTS } from '../permitChecklists'

describe('PERMIT_CHECKLISTS', () => {
  it('has data_center checklist with 14 items', () => {
    expect(PERMIT_CHECKLISTS.data_center).toHaveLength(14)
  })

  it('has battery_storage checklist with 11 items', () => {
    expect(PERMIT_CHECKLISTS.battery_storage).toHaveLength(11)
  })

  it('has ev_charging checklist with 7 items', () => {
    expect(PERMIT_CHECKLISTS.ev_charging).toHaveLength(7)
  })

  it('has building_use_change checklist with 10 items', () => {
    expect(PERMIT_CHECKLISTS.building_use_change).toHaveLength(10)
  })

  it('all items are non-empty strings', () => {
    Object.values(PERMIT_CHECKLISTS).forEach((checklist) => {
      checklist.forEach((item) => {
        expect(typeof item).toBe('string')
        expect(item.length).toBeGreaterThan(0)
      })
    })
  })
})
