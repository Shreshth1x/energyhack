import { describe, it, expect, vi } from 'vitest'
import { runFullAudit } from '../lib/auditPipeline'
import { DEMO_APPLICATIONS } from '../lib/demoApplications'

// Force demo mode
vi.stubEnv('VITE_DEMO_MODE', 'true')

describe('Integration: runFullAudit in demo mode', () => {
  it('returns complete audit structure for Microsoft app', async () => {
    const app = DEMO_APPLICATIONS[0]
    const result = await runFullAudit(app)

    expect(result).toHaveProperty('completeness')
    expect(result).toHaveProperty('consistency')
    expect(result).toHaveProperty('compliance')
    expect(result).toHaveProperty('impact')
    expect(result).toHaveProperty('report')
  })

  it('completeness has expected shape', async () => {
    const result = await runFullAudit(DEMO_APPLICATIONS[0])
    expect(result.completeness).toHaveProperty('severity')
    expect(result.completeness).toHaveProperty('score')
    expect(result.completeness).toHaveProperty('items')
  })

  it('impact shows 6000% for Microsoft', async () => {
    const result = await runFullAudit(DEMO_APPLICATIONS[0])
    expect(result.impact.grid.percentOfPeak).toBe(6000)
    expect(result.impact.grid.verdict).toBe('UNSUBSTANTIATED')
  })

  it('report has exactly 3 actions', async () => {
    const result = await runFullAudit(DEMO_APPLICATIONS[0])
    expect(result.report.actions).toHaveLength(3)
  })

  it('calls onLayerComplete callback for each layer', async () => {
    const layers = []
    await runFullAudit(DEMO_APPLICATIONS[0], {
      onLayerComplete: (layer) => layers.push(layer),
    })
    expect(layers).toEqual(['completeness', 'consistency', 'compliance', 'impact', 'report'])
  })
})
