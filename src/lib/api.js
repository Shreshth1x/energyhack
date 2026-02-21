import { callGrok } from './aiClient'
import { PERMIT_CHECKLISTS } from './permitChecklists'
import { JURISDICTION_PROFILES } from './jurisdictionProfiles'
import { verifyGridImpactClaim, verifyWaterUsageClaim } from './impactVerification'
import { MOCK_RESPONSES } from './mockResponses'

const isDemoMode = () => import.meta.env.VITE_DEMO_MODE === 'true'

export function parseLayerResponse(raw) {
  let cleaned = raw.trim()
  // Strip markdown fences
  if (cleaned.startsWith('```json')) cleaned = cleaned.slice(7)
  else if (cleaned.startsWith('```')) cleaned = cleaned.slice(3)
  if (cleaned.endsWith('```')) cleaned = cleaned.slice(0, -3)
  return JSON.parse(cleaned.trim())
}

export function buildCompletenessPrompt(application) {
  const checklist = PERMIT_CHECKLISTS[application.type] || []
  return {
    system: `You are a municipal permit completeness auditor. Evaluate the application against each checklist item. Return JSON with: { severity: "info"|"warning"|"critical", score: number (0-100), total: number, passed: number, failed: number, missing: number, items: [{ item: string, status: "pass"|"fail"|"missing", note: string }] }`,
    user: `APPLICATION TYPE: ${application.type}\nCOMPANY: ${application.company}\n\nCHECKLIST:\n${checklist.map((c, i) => `${i + 1}. ${c}`).join('\n')}\n\nFULL APPLICATION TEXT:\n${application.fullText}`,
  }
}

export function buildConsistencyPrompt(application) {
  return {
    system: `You are an internal consistency auditor. Find contradictions within the application. Return JSON with: { severity: "info"|"warning"|"critical", findingCount: number, findings: [{ id: number, severity: "critical"|"warning", claim1: { section: string, text: string }, claim2: { section: string, text: string }, analysis: string }] }`,
    user: `APPLICATION: ${application.company}\nTYPE: ${application.type}\n\nFULL TEXT:\n${application.fullText}`,
  }
}

export function buildCompliancePrompt(application, jurisdictionId = 'loving_county_tx') {
  const profile = JURISDICTION_PROFILES[jurisdictionId]
  return {
    system: `You are a code compliance auditor for ${profile.name}. Evaluate the application against local codes. Return JSON with: { severity: "info"|"warning"|"critical", codes: [{ code: string, title: string, status: "COMPLIANT"|"NON_COMPLIANT"|"NO_CODE_EXISTS", note: string }], gapCount: number, gaps: [string] }`,
    user: `APPLICATION: ${application.company}\nTYPE: ${application.type}\n\nAPPLICABLE CODES:\n${profile.applicableCodes.map((c) => `${c.code} — ${c.title}: ${c.description}`).join('\n')}\n\nKNOWN CLASSIFICATION GAPS:\n${profile.classificationGaps.join('\n')}\n\nFULL TEXT:\n${application.fullText}`,
  }
}

export function buildReportPrompt(application, completeness, consistency, compliance, impact) {
  return {
    system: `You are a senior permit review officer synthesizing an audit report. Return JSON with: { executiveSummary: string (2-3 paragraphs), actions: [{ target: "APPLICANT"|"COUNTY"|"BOTH", action: string }] (exactly 3), reviewQuestions: [string] (3-5 questions) }`,
    user: `APPLICATION: ${application.company} — ${application.scale}\nTYPE: ${application.type}\n\nCOMPLETENESS: Score ${completeness.score}/100, ${completeness.failed} failed, ${completeness.missing} missing\nCONSISTENCY: ${consistency.findingCount} findings\nCOMPLIANCE: ${compliance.gapCount} code gaps\nIMPACT: Grid=${impact.grid.verdict}, Water=${impact.water.verdict}\n\nKey finding: ${impact.grid.analysis}\n\nSynthesize a final audit report.`,
  }
}

export async function runLayer(promptBuilder, application, ...args) {
  if (isDemoMode()) {
    return null // handled by runFullAudit
  }
  const { system, user } = promptBuilder(application, ...args)
  const raw = await callGrok(system, user)
  return parseLayerResponse(raw)
}
