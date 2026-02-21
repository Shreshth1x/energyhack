import { describe, it, expect } from 'vitest'
import { parseLayerResponse, buildCompletenessPrompt, buildConsistencyPrompt, buildCompliancePrompt, buildReportPrompt } from '../api'
import { DEMO_APPLICATIONS } from '../demoApplications'

const app = DEMO_APPLICATIONS[0] // Microsoft

describe('parseLayerResponse', () => {
  it('parses raw JSON', () => {
    const result = parseLayerResponse('{"severity":"critical","score":62}')
    expect(result.severity).toBe('critical')
    expect(result.score).toBe(62)
  })

  it('strips markdown json fences', () => {
    const result = parseLayerResponse('```json\n{"severity":"warning"}\n```')
    expect(result.severity).toBe('warning')
  })

  it('strips generic markdown fences', () => {
    const result = parseLayerResponse('```\n{"score":100}\n```')
    expect(result.score).toBe(100)
  })

  it('handles whitespace around JSON', () => {
    const result = parseLayerResponse('  \n{"ok":true}\n  ')
    expect(result.ok).toBe(true)
  })
})

describe('buildCompletenessPrompt', () => {
  it('includes application data in user prompt', () => {
    const { system, user } = buildCompletenessPrompt(app)
    expect(user).toContain('Microsoft')
    expect(user).toContain('data_center')
    expect(system).toContain('completeness')
  })

  it('includes checklist items', () => {
    const { user } = buildCompletenessPrompt(app)
    expect(user).toContain('Site plan')
    expect(user).toContain('Electrical load')
  })
})

describe('buildConsistencyPrompt', () => {
  it('includes application text', () => {
    const { system, user } = buildConsistencyPrompt(app)
    expect(user).toContain(app.company)
    expect(system).toContain('consistency')
  })
})

describe('buildCompliancePrompt', () => {
  it('includes jurisdiction codes', () => {
    const { user } = buildCompliancePrompt(app)
    expect(user).toContain('LCC')
    expect(user).toContain('Loving County')
  })
})

describe('buildReportPrompt', () => {
  it('includes layer results in prompt', () => {
    const { user } = buildReportPrompt(
      app,
      { score: 62, failed: 3, missing: 3 },
      { findingCount: 4 },
      { gapCount: 4 },
      { grid: { verdict: 'UNSUBSTANTIATED', analysis: 'test' }, water: { verdict: 'UNSUBSTANTIATED' } }
    )
    expect(user).toContain('62')
    expect(user).toContain('UNSUBSTANTIATED')
  })
})
