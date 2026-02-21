const VERDICT_COLORS = {
  SUBSTANTIATED: { text: 'text-approved', bg: 'bg-approved/10' },
  NEEDS_REVIEW: { text: 'text-warning', bg: 'bg-warning/10' },
  UNSUBSTANTIATED: { text: 'text-critical', bg: 'bg-critical/10' },
}

function formatPercent(n) {
  return n >= 1000 ? n.toLocaleString() + '%' : n.toFixed(1) + '%'
}

export default function ImpactLayer({ data }) {
  if (!data) return null

  const { grid, water } = data

  return (
    <div className="mb-6">
      <h3 className="text-xs font-bold tracking-widest text-text-secondary mb-3">LAYER 4 // IMPACT VERIFICATION</h3>
      <div className="grid grid-cols-2 gap-4">
        {/* Grid Impact */}
        <div className="border border-border rounded p-3">
          <div className="text-[10px] font-bold tracking-widest text-text-secondary mb-2">GRID IMPACT</div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-2xl font-black text-text-primary">{formatPercent(grid.percentOfPeak)}</span>
            <span className="text-xs text-text-secondary">of county peak demand</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-text-secondary">{grid.loadMW}MW proposed</span>
            <span className="text-text-secondary/30">vs</span>
            <span className="text-xs text-text-secondary">{grid.peakMW}MW county peak</span>
          </div>
          <div className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2 py-1 rounded ${VERDICT_COLORS[grid.verdict].bg} ${VERDICT_COLORS[grid.verdict].text}`}>
            {grid.verdict}
          </div>
          <div className="text-xs text-accent mt-2">{grid.analysis}</div>
        </div>

        {/* Water Impact */}
        <div className="border border-border rounded p-3">
          <div className="text-[10px] font-bold tracking-widest text-text-secondary mb-2">WATER IMPACT</div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-2xl font-black text-text-primary">{formatPercent(water.percentOfRecharge)}</span>
            <span className="text-xs text-text-secondary">of aquifer recharge</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-text-secondary">{water.usageGPD?.toLocaleString()} GPD</span>
            <span className="text-text-secondary/30">vs</span>
            <span className="text-xs text-text-secondary">{water.rechargeRateGPD?.toLocaleString()} GPD recharge</span>
          </div>
          <div className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2 py-1 rounded ${VERDICT_COLORS[water.verdict].bg} ${VERDICT_COLORS[water.verdict].text}`}>
            {water.verdict}
          </div>
          <div className="text-xs text-accent mt-2">{water.analysis}</div>
        </div>
      </div>
    </div>
  )
}
