import { MOCK_RESPONSES } from './mockResponses'
import { JURISDICTION_PROFILES } from './jurisdictionProfiles'
import { verifyGridImpactClaim, verifyWaterUsageClaim } from './impactVerification'
import { buildCompletenessPrompt, buildConsistencyPrompt, buildCompliancePrompt, buildReportPrompt, parseLayerResponse } from './api'
import { callGrok } from './aiClient'

const isDemoMode = () => import.meta.env.VITE_DEMO_MODE === 'true'

export function getOverallSeverity(layerResults) {
  const severities = Object.values(layerResults).map((r) => r.severity)

  if (severities.includes('critical')) {
    return { label: 'CRITICAL', color: 'critical' }
  }
  if (severities.includes('warning')) {
    return { label: 'ACTION REQUIRED', color: 'warning' }
  }
  return { label: 'REVIEW COMPLETE', color: 'approved' }
}

export async function runFullAudit(application, options = {}) {
  const jurisdictionId = options.jurisdictionId || 'loving_county_tx'
  const jurisdiction = JURISDICTION_PROFILES[jurisdictionId]
  const onLayerComplete = options.onLayerComplete || (() => {})

  if (isDemoMode()) {
    const mock = MOCK_RESPONSES[application.id]
    if (!mock) {
      throw new Error(`No mock response for application ${application.id}`)
    }
    // Simulate slight delay for drama
    await new Promise((r) => setTimeout(r, 300))
    onLayerComplete('completeness', mock.completeness)
    await new Promise((r) => setTimeout(r, 200))
    onLayerComplete('consistency', mock.consistency)
    await new Promise((r) => setTimeout(r, 200))
    onLayerComplete('compliance', mock.compliance)
    await new Promise((r) => setTimeout(r, 200))
    onLayerComplete('impact', mock.impact)
    await new Promise((r) => setTimeout(r, 300))
    onLayerComplete('report', mock.report)
    return mock
  }

  // Live mode — parallel layer execution
  const [completeness, consistency, compliance] = await Promise.all([
    callGrok(...Object.values(buildCompletenessPrompt(application))).then(parseLayerResponse),
    callGrok(...Object.values(buildConsistencyPrompt(application))).then(parseLayerResponse),
    callGrok(...Object.values(buildCompliancePrompt(application, jurisdictionId))).then(parseLayerResponse),
  ])

  onLayerComplete('completeness', completeness)
  onLayerComplete('consistency', consistency)
  onLayerComplete('compliance', compliance)

  // Layer 4: Impact verification (pure computation, no AI needed)
  const grid = verifyGridImpactClaim(application.keySpecs.loadMW, jurisdiction.peakDemandMW)
  const water = verifyWaterUsageClaim(application.keySpecs.waterUsageGPD, jurisdiction.aquiferRechargeRateGPD)
  const impact = {
    severity: grid.severity === 'critical' || water.severity === 'critical' ? 'critical' : grid.severity === 'warning' || water.severity === 'warning' ? 'warning' : 'info',
    grid,
    water,
  }
  onLayerComplete('impact', impact)

  // Layer 5: Synthesize report
  const reportRaw = await callGrok(...Object.values(buildReportPrompt(application, completeness, consistency, compliance, impact)))
  const reportParsed = parseLayerResponse(reportRaw)
  const overallSeverity = getOverallSeverity({ completeness, consistency, compliance, impact })
  const report = { ...reportParsed, overallSeverity }
  onLayerComplete('report', report)

  return { completeness, consistency, compliance, impact, report }
}
