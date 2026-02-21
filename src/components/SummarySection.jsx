export default function SummarySection({ text, isStreaming }) {
  if (!text) return null

  return (
    <div className="mb-6">
      <h3 className="text-xs font-bold tracking-widest text-text-secondary mb-3">EXECUTIVE SUMMARY</h3>
      <div className="text-sm text-text-primary leading-relaxed whitespace-pre-wrap">
        {text}
        {isStreaming && <span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse" />}
      </div>
    </div>
  )
}
