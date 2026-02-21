import { motion, AnimatePresence } from 'framer-motion'
import { useWarRoom } from '../store/warRoom'

export default function FloodIndicator({ appCount }) {
  const backlogDays = useWarRoom((s) => s.backlogDays)

  if (appCount < 4) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="px-4 py-3 bg-critical/5 border-t border-critical/20"
      >
        <div className="flex items-center gap-2 text-xs text-critical font-bold">
          <span className="w-2 h-2 rounded-full bg-critical animate-pulse" />
          BACKLOG GROWING
        </div>
        <div className="text-xs text-text-secondary mt-1">
          Manual review estimated{' '}
          <motion.span
            key={backlogDays}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-warning font-bold"
          >
            {backlogDays} days
          </motion.span>
          {' '}at current staffing
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
