import { motion } from 'framer-motion'

const STATUS_CONFIG = {
  pending: { label: 'PENDING', color: 'text-warning', bg: 'bg-warning/10' },
  reviewing: { label: 'REVIEWING', color: 'text-processing', bg: 'bg-processing/10' },
  critical: { label: 'CRITICAL', color: 'text-critical', bg: 'bg-critical/10' },
  action_required: { label: 'ACTION REQUIRED', color: 'text-warning', bg: 'bg-warning/10' },
  reviewed: { label: 'REVIEWED', color: 'text-approved', bg: 'bg-approved/10' },
  error: { label: 'ERROR', color: 'text-critical', bg: 'bg-critical/10' },
}

export default function PermitCard({ application, onClick, isActive }) {
  const status = STATUS_CONFIG[application.status] || STATUS_CONFIG.pending

  return (
    <motion.div
      layout
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      whileHover={{ backgroundColor: 'rgba(22, 163, 74, 0.07)' }}
      onClick={() => onClick(application.id)}
      className={`p-4 border-b border-border cursor-pointer transition-all ${
        isActive ? 'glass-panel-green border-l-2 border-l-accent' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-1">
        <span className="text-sm font-semibold text-text-primary truncate flex-1">{application.company}</span>
        <motion.span
          key={application.status}
          initial={{ scale: 1.3 }}
          animate={{ scale: 1 }}
          className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${status.bg} ${status.color}`}
        >
          {application.status === 'reviewing' && (
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-processing animate-pulse mr-1 align-middle" />
          )}
          {status.label}
        </motion.span>
      </div>
      <div className="flex items-center gap-3 text-xs text-text-secondary">
        <span>{application.type}</span>
        <span className="text-text-secondary/50">|</span>
        <span>{application.scale}</span>
      </div>
      <div className="text-[10px] text-text-secondary mt-1">{application.pageCount} pages</div>
    </motion.div>
  )
}
