const STATUS_COLORS = {
  COMPLIANT: { text: 'text-approved', bg: 'bg-approved/10' },
  NON_COMPLIANT: { text: 'text-critical', bg: 'bg-critical/10' },
  NO_CODE_EXISTS: { text: 'text-text-primary', bg: 'bg-bg' },
}

export default function ComplianceLayer({ data }) {
  if (!data) return null

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-bold tracking-widest text-text-secondary">LAYER 3 // CODE COMPLIANCE</h3>
        <span className="text-xs text-warning font-bold">{data.gapCount} CODE GAPS</span>
      </div>
      <div className="space-y-2">
        {data.codes?.map((code, i) => {
          const status = STATUS_COLORS[code.status] || STATUS_COLORS.NON_COMPLIANT
          return (
            <div
              key={i}
              className={`border border-border rounded p-3 ${code.status === 'NO_CODE_EXISTS' ? 'border-text-secondary/30 bg-bg' : ''}`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-text-primary font-bold">{code.code} — {code.title}</span>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${status.bg} ${status.text}`}>
                  {code.status}
                </span>
              </div>
              <div className="text-xs text-text-secondary">{code.note}</div>
            </div>
          )
        })}
      </div>
      {data.gaps?.length > 0 && (
        <div className="mt-3 p-3 border border-border rounded">
          <div className="text-[10px] font-bold tracking-widest text-text-secondary mb-2">CLASSIFICATION GAPS</div>
          <ul className="space-y-1">
            {data.gaps.map((gap, i) => (
              <li key={i} className="text-xs text-warning flex items-start gap-2">
                <span className="text-warning/50 mt-0.5">-</span>
                {gap}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
