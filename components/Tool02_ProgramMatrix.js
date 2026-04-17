import { useMemo, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Star } from 'lucide-react';
import { buildMatrix, PROGRAMS } from '@/lib/stateProgramMatrix';

const POWER_STATES = new Set(['CA', 'NY', 'NJ', 'HI', 'RI']);

export default function Tool02() {
  const matrix = useMemo(buildMatrix, []);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('alpha');
  const [active, setActive] = useState(null);

  const visible = useMemo(() => {
    const filtered = matrix.filter(
      (row) =>
        !filter ||
        row.name.toLowerCase().includes(filter.toLowerCase()) ||
        row.abbr.toLowerCase().includes(filter.toLowerCase())
    );
    if (sort === 'most') {
      return [...filtered].sort((a, b) => countProtections(b) - countProtections(a));
    }
    return filtered;
  }, [matrix, filter, sort]);

  const activeRow = active ? matrix.find((r) => r.abbr === active) : null;

  // ESC closes drawer
  useEffect(() => {
    if (!active) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  // Lock scroll on mobile when drawer is open
  useEffect(() => {
    if (!active) return;
    const mq = window.matchMedia('(max-width: 1023px)');
    if (mq.matches) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [active]);

  return (
    <section id="tool-02" className="bg-shelf border-b border-rule">
      <div className="container-x py-20">
        <div className="spec text-bureau">Tool 02 / State-Program Matrix</div>
        <h2 className="mt-3 text-ink leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
          Coverage across all 50 states.
        </h2>
        <p className="mt-4 text-graphite text-[16px] max-w-2xl leading-relaxed">
          Every federal and state-level protection program, mapped by state. The darker a state&apos;s row, the more programs stack for its employees.
        </p>

        {/* Filter bar */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <label className="flex items-center gap-2 bg-cardstock border border-rule rounded-sm px-3 py-2 flex-1 max-w-md">
            <Search className="w-4 h-4 text-ash" />
            <input
              type="text"
              placeholder="Your state…"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-transparent outline-none text-[14px] flex-1 placeholder:text-fog"
            />
          </label>
          <label className="flex items-center gap-2 spec">
            Sort by
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-cardstock border border-rule rounded-sm px-2 py-1.5 text-[12px] font-mono uppercase tracking-spec text-graphite"
            >
              <option value="alpha">Alphabetical</option>
              <option value="most">Most protections</option>
            </select>
          </label>
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap items-center gap-4 text-[12px] text-graphite">
          <LegendSwatch cls="bg-stamp" label="Available" />
          <LegendSwatch cls="bg-seal" label="Employer-dependent" />
          <LegendSwatch cls="bg-shelf border border-rule" label="Not available" />
          <span className="ml-auto spec">
            <Star className="inline w-3 h-3 text-bureau fill-bureau" /> Power state (all 5 programs)
          </span>
        </div>

        {/* Matrix + Drawer */}
        <div className="mt-6 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <div className="bg-cardstock border border-rule rounded-sm overflow-hidden">
              <div
                className="grid bg-cardstock border-b border-rule"
                style={{ gridTemplateColumns: '110px repeat(5, 1fr)' }}
              >
                <div className="p-3 spec">State</div>
                {PROGRAMS.map((p) => (
                  <div key={p} className="p-3 spec text-center border-l border-rule">
                    {p}
                  </div>
                ))}
              </div>
              <div className="max-h-[560px] overflow-y-auto">
                {visible.map((row) => {
                  const power = POWER_STATES.has(row.abbr);
                  return (
                    <button
                      key={row.abbr}
                      onClick={() => setActive(row.abbr)}
                      className={`w-full grid border-b border-rule text-left transition-colors hover:bg-shelf/60 ${
                        active === row.abbr ? 'bg-bureau-soft' : ''
                      } ${power ? 'bg-bureau/[0.04]' : ''}`}
                      style={{ gridTemplateColumns: '110px repeat(5, 1fr)' }}
                    >
                      <div className="p-3 flex items-center gap-2 num text-[12px] text-ink">
                        {power && (
                          <Star className="w-3 h-3 text-bureau fill-bureau flex-shrink-0" />
                        )}
                        <span className={`${power ? 'text-bureau font-semibold' : ''}`}>
                          {row.abbr}
                        </span>
                        <span className="text-ash hidden xl:inline">{row.name}</span>
                      </div>
                      {PROGRAMS.map((p) => {
                        const cell = row.cells[p];
                        return (
                          <div
                            key={p}
                            className="p-3 border-l border-rule flex items-center justify-center"
                          >
                            <DensitySquare status={cell.status} />
                          </div>
                        );
                      })}
                    </button>
                  );
                })}
                {visible.length === 0 && (
                  <div className="p-8 text-center text-ash text-[14px]">No states match.</div>
                )}
              </div>
            </div>
          </div>

          {/* Desktop drawer — sticky, contents fade/slide on change */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="bg-cardstock border border-rule rounded-sm p-6 sticky top-20 min-h-[400px] relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!activeRow ? (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.22 }}
                    className="py-8"
                  >
                    <PlaceholderPanel matrix={matrix} onSelect={setActive} />
                  </motion.div>
                ) : (
                  <motion.div
                    key={activeRow.abbr}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  >
                    <StateDetail row={activeRow} onClose={() => setActive(null)} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </aside>
        </div>

        {/* Mobile bottom-sheet drawer — slide up from bottom */}
        <AnimatePresence>
          {activeRow && (
            <MobileDrawer
              row={activeRow}
              onClose={() => setActive(null)}
              key="mobile-drawer"
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function MobileDrawer({ row, onClose }) {
  const panelRef = useRef(null);

  // Click-outside to close
  useEffect(() => {
    const onClick = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        onClose();
      }
    };
    const t = setTimeout(() => document.addEventListener('mousedown', onClick), 0);
    return () => {
      clearTimeout(t);
      document.removeEventListener('mousedown', onClick);
    };
  }, [onClose]);

  return (
    <div className="lg:hidden fixed inset-0 z-50 flex items-end">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
      />
      <motion.div
        ref={panelRef}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 240 }}
        className="relative w-full bg-cardstock border-t border-rule rounded-t-xl p-6 max-h-[85vh] overflow-y-auto"
      >
        <div className="mx-auto mb-4 w-10 h-1 bg-rule rounded-full" />
        <StateDetail row={row} onClose={onClose} />
      </motion.div>
    </div>
  );
}

function StateDetail({ row, onClose }) {
  return (
    <div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="spec">{row.abbr}</div>
          <div className="display-italic text-ink text-[24px] mt-1 leading-tight">{row.name}</div>
          <div className="mt-2 spec text-bureau">
            {countProtections(row)} / 5 protections available
          </div>
        </div>
        <button onClick={onClose} aria-label="Close" className="text-ash hover:text-ink">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-6 space-y-3">
        {PROGRAMS.map((p) => {
          const cell = row.cells[p];
          return (
            <div key={p} className="border-t border-rule pt-3">
              <div className="flex items-baseline justify-between gap-3">
                <div className="font-body font-semibold text-[14px] text-ink">{p}</div>
                <div className="num text-[11px] text-ash">{cell.label}</div>
              </div>
              <p className="mt-1.5 text-[13px] text-graphite leading-relaxed">{cell.detail}</p>
            </div>
          );
        })}
      </div>

      <Link
        href={`/intake?state=${row.abbr}`}
        className="btn-bureau w-full mt-6 justify-center"
      >
        Begin Evaluation in {row.abbr} → $149
      </Link>
      <Link
        href={`/states/${row.name.toLowerCase().replace(/\s+/g, '-')}`}
        className="block text-center spec mt-3 text-bureau hover:underline"
      >
        See full {row.name} guide →
      </Link>
    </div>
  );
}

function PlaceholderPanel({ matrix, onSelect }) {
  return (
    <>
      <div className="spec">Select a state</div>
      <p className="mt-3 text-[14px] text-graphite leading-relaxed">
        Click any row to see exactly which programs stack for that state, with a direct path to begin evaluation. Press <span className="spec">ESC</span> to close.
      </p>
      <div className="mt-6">
        <div className="spec">Power states (5/5 programs)</div>
        <div className="mt-3 flex flex-wrap gap-2">
          {['CA', 'NY', 'NJ', 'HI', 'RI'].map((s) => {
            const row = matrix.find((r) => r.abbr === s);
            return (
              <button
                key={s}
                onClick={() => onSelect(s)}
                className="pill-bureau hover:bg-bureau hover:text-paper transition-colors"
              >
                {row?.name}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

function DensitySquare({ status }) {
  const cls =
    status === 'yes'
      ? 'bg-stamp'
      : status === 'maybe'
      ? 'bg-seal'
      : 'bg-shelf border border-rule';
  return <span className={`block w-5 h-5 rounded-[2px] ${cls}`} />;
}

function LegendSwatch({ cls, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`block w-4 h-4 rounded-[2px] ${cls}`} />
      <span>{label}</span>
    </div>
  );
}

function countProtections(row) {
  return Object.values(row.cells).filter((c) => c.status === 'yes').length;
}
