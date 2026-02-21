export default function RegulatoryDraft({ text }) {
  if (!text) return null

  return (
    <div className="mb-6">
      <h3 className="text-xs font-bold tracking-widest text-text-secondary mb-3">DRAFT ORDINANCE LANGUAGE</h3>
      <div className="bg-bg border border-accent/30 rounded p-4">
        <pre className="text-xs text-accent whitespace-pre-wrap font-mono leading-relaxed">{text}</pre>
      </div>
    </div>
  )
}
