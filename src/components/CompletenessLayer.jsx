const STATUS_COLORS = {
  pass: { text: 'text-approved', bg: 'bg-approved/10', label: 'PASS' },
  fail: { text: 'text-critical', bg: 'bg-critical/10', label: 'FAIL' },
  missing: { text: 'text-warning', bg: 'bg-warning/10', label: 'MISSING' },
}

export default function CompletenessLayer({ data }) {
  if (!data) return null

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-bold tracking-widest text-text-secondary">LAYER 1 // COMPLETENESS CHECK</h3>
        <div className="flex items-center gap-3 text-xs">
          <span className="text-text-primary font-bold">{data.score}/100</span>
          <span className="text-approved">{data.passed} passed</span>
          <span className="text-critical">{data.failed} failed</span>
          <span className="text-warning">{data.missing} missing</span>
        </div>
      </div>
      <div className="space-y-1">
        {data.items?.map((item, i) => {
          const status = STATUS_COLORS[item.status]
          return (
            <div key={i} className="flex items-start gap-2 py-1.5 border-b border-border/50">
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0 mt-0.5 ${status.bg} ${status.text}`}>
                {status.label}
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-text-primary">{item.item}</div>
                {item.note && <div className="text-[10px] text-text-secondary mt-0.5">{item.note}</div>}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
