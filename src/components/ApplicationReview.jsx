import { useWarRoom } from '../store/warRoom'
import { motion, AnimatePresence } from 'framer-motion'
import SummarySection from './SummarySection'
import CompletenessLayer from './CompletenessLayer'
import ConsistencyLayer from './ConsistencyLayer'
import ComplianceLayer from './ComplianceLayer'
import ImpactLayer from './ImpactLayer'
import ReviewQuestions from './ReviewQuestions'
import RegulatoryDraft from './RegulatoryDraft'
import AuditReport from './AuditReport'

export default function ApplicationReview() {
  const activeApplication = useWarRoom((s) => s.activeApplication)
  const applications = useWarRoom((s) => s.applications)
  const isAnalyzing = useWarRoom((s) => s.isAnalyzing)
  const auditResults = useWarRoom((s) => s.auditResults)
  const analysisStream = useWarRoom((s) => s.analysisStream)

  const app = applications.find((a) => a.id === activeApplication)

  if (!activeApplication || !app) {
    return (
      <div className="flex-1 flex items-center justify-center text-text-secondary text-sm">
        Select an application to begin audit review
      </div>
    )
  }

  if (isAnalyzing && !auditResults) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-processing animate-pulse" />
            <span className="text-processing text-sm font-bold tracking-wider">AI REVIEWING...</span>
          </div>
          <div className="text-xs text-text-secondary">{app.company} — {app.scale}</div>
          <div className="flex gap-1 mt-2">
            {['Completeness', 'Consistency', 'Compliance', 'Impact'].map((layer, i) => (
              <motion.div
                key={layer}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }}
                className="text-[10px] text-processing/60 px-2 py-1 border border-processing/20 rounded"
              >
                {layer}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    )
  }

  if (!auditResults) return null

  const layers = [
    { key: 'report', component: <AuditReport report={auditResults.report} /> },
    { key: 'summary', component: <SummarySection text={auditResults.report?.executiveSummary} isStreaming={false} /> },
    { key: 'completeness', component: <CompletenessLayer data={auditResults.completeness} /> },
    { key: 'consistency', component: <ConsistencyLayer data={auditResults.consistency} /> },
    { key: 'compliance', component: <ComplianceLayer data={auditResults.compliance} /> },
    { key: 'impact', component: <ImpactLayer data={auditResults.impact} /> },
    { key: 'questions', component: <ReviewQuestions questions={auditResults.report?.reviewQuestions} /> },
    { key: 'draft', component: <RegulatoryDraft text={auditResults.report?.draftOrdinanceLanguage} /> },
  ]

  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="mb-4 pb-3 border-b border-border">
        <div className="text-sm font-bold text-text-primary">{app.company}</div>
        <div className="text-xs text-text-secondary">{app.scale} — {app.type} — {app.pageCount} pages</div>
      </div>
      <AnimatePresence>
        {layers.map((layer, i) => (
          <motion.div
            key={layer.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
          >
            {layer.component}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
