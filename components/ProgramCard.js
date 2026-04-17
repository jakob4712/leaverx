import { motion, AnimatePresence } from 'framer-motion';
import DataPill from './DataPill';

export default function ProgramCard({
  number,
  name,
  dataPoint,
  status,
  why,
  highlight = false,
}) {
  const dim = status === 'unknown' || status === 'notEligible';
  return (
    <motion.div
      layout
      initial={false}
      animate={{
        backgroundColor: dim ? '#F4F4EF' : '#FFFFFF',
        borderColor: highlight ? '#1E3A5F' : '#D4D4CE',
      }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="border rounded-sm p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="num text-[11px] text-ash">{number}</span>
          <h3 className={`font-body font-semibold text-[17px] ${dim ? 'text-ash' : 'text-ink'}`}>
            {name}
          </h3>
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={status}
            initial={{ opacity: 0, y: -4, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.96 }}
            transition={{ duration: 0.18 }}
          >
            <DataPill status={status} />
          </motion.span>
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`${status}-${dataPoint}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className={`mt-3 num text-[13px] tracking-wide ${
            dim ? 'text-ash' : status === 'eligible' ? 'text-bureau' : 'text-graphite'
          }`}
        >
          {dataPoint}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={why}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="mt-3 text-[13.5px] text-graphite leading-relaxed"
        >
          {why}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
