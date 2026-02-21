export default function ReviewQuestions({ questions }) {
  if (!questions?.length) return null

  return (
    <div className="mb-6">
      <h3 className="text-xs font-bold tracking-widest text-text-secondary mb-3">REVIEW QUESTIONS FOR APPLICANT</h3>
      <ol className="space-y-2">
        {questions.map((q, i) => (
          <li key={i} role="listitem" className="flex gap-3 text-xs">
            <span className="text-accent font-bold shrink-0">{i + 1}.</span>
            <span className="text-text-primary">{q}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
