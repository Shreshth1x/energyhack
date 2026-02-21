const COLOR_MAP = {
  critical: { text: 'text-critical', bg: 'bg-critical/10', border: 'border-critical/30' },
  warning: { text: 'text-warning', bg: 'bg-warning/10', border: 'border-warning/30' },
  approved: { text: 'text-approved', bg: 'bg-approved/10', border: 'border-approved/30' },
}

const TARGET_COLORS = {
  APPLICANT: 'text-warning',
  COUNTY: 'text-accent',
  BOTH: 'text-processing',
}

export default function AuditReport({ report }) {
  if (!report) return null

  const colors = COLOR_MAP[report.overallSeverity?.color] || COLOR_MAP.warning

  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-4">
        <h3 className="text-xs font-bold tracking-widest text-text-secondary">AUDIT REPORT</h3>
        <span className={`text-sm font-black px-3 py-1 rounded ${colors.bg} ${colors.text} border ${colors.border}`}>
          {report.overallSeverity?.label}
        </span>
      </div>

      <div className="text-sm text-text-primary leading-relaxed mb-4 whitespace-pre-wrap">
        {report.executiveSummary}
      </div>

      <div className="mb-4">
        <div className="text-[10px] font-bold tracking-widest text-text-secondary mb-2">REQUIRED ACTIONS</div>
        <div className="space-y-2">
          {report.actions?.map((action, i) => (
            <div key={i} className="flex items-start gap-3 p-3 border border-border rounded">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded bg-panel shrink-0 ${TARGET_COLORS[action.target] || 'text-text-primary'}`}>
                {action.target}
              </span>
              <span className="text-xs text-text-primary">{action.action}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
