const SEVERITY_COLORS = {
  critical: { text: 'text-critical', bg: 'bg-critical/10' },
  warning: { text: 'text-warning', bg: 'bg-warning/10' },
}

export default function ConsistencyLayer({ data }) {
  if (!data) return null

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-bold tracking-widest text-text-secondary">LAYER 2 // INTERNAL CONSISTENCY</h3>
        <span className="text-xs text-critical font-bold">{data.findingCount} CONTRADICTIONS FOUND</span>
      </div>
      <div className="space-y-3">
        {data.findings?.map((finding) => {
          const severity = SEVERITY_COLORS[finding.severity] || SEVERITY_COLORS.warning
          return (
            <div key={finding.id} className="border border-border rounded p-3">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${severity.bg} ${severity.text}`}>
                  {finding.severity.toUpperCase()}
                </span>
                <span className="text-xs text-text-secondary">Finding #{finding.id}</span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-2">
                <div className="bg-bg rounded p-2">
                  <div className="text-[10px] text-text-secondary mb-1">Section {finding.claim1.section}</div>
                  <div className="text-xs text-text-primary">{finding.claim1.text}</div>
                </div>
                <div className="bg-bg rounded p-2">
                  <div className="text-[10px] text-text-secondary mb-1">Section {finding.claim2.section}</div>
                  <div className="text-xs text-text-primary">{finding.claim2.text}</div>
                </div>
              </div>
              <div className="text-xs text-accent">{finding.analysis}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
