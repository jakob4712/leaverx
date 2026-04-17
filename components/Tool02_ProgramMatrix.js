import { useMemo, useState } from 'react';
import { Check, Minus, X, Search } from 'lucide-react';
import { buildMatrix, PROGRAMS } from '@/lib/stateProgramMatrix';

const ICONS = {
  yes: <Check className="w-3 h-3" />,
  maybe: <Minus className="w-3 h-3" />,
  no: null,
};

const CELL_BG = {
  yes: 'bg-stamp text-paper hover:bg-stamp-soft hover:text-stamp',
  maybe: 'bg-bureau-soft text-bureau hover:bg-bureau hover:text-paper',
  no: 'bg-shelf text-fog hover:bg-rule',
};

export default function Tool02() {
  const matrix = useMemo(buildMatrix, []);
  const [filter, setFilter] = useState('');
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [active, setActive] = useState(null); // {abbr, program}

  const visible = matrix.filter((row) => {
    const matches =
      !filter ||
      row.name.toLowerCase().includes(filter.toLowerCase()) ||
      row.abbr.toLowerCase().includes(filter.toLowerCase());
    if (!matches) return false;
    if (onlyAvailable) {
      const anyState = PROGRAMS.some(
        (p) => row.cells[p].status === 'yes' || row.cells[p].status === 'maybe'
      );
      return anyState;
    }
    return true;
  });

  const cellDetail = active ? matrix.find((r) => r.abbr === active.abbr)?.cells[active.program] : null;
  const activeRow = active ? matrix.find((r) => r.abbr === active.abbr) : null;

  return (
    <section id="tool-02" className="bg-shelf border-b border-rule">
      <div className="container-x py-20">
        <div className="spec text-bureau">Tool 02 / State-Program Matrix</div>
        <h2 className="mt-3 text-ink leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
          Every state. Every program.
        </h2>
        <p className="mt-4 text-graphite text-[16px] max-w-2xl leading-relaxed">
          Explore which protections are available in your state. Data sourced from federal and state program documentation, updated quarterly.
        </p>

        {/* Filter bar */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <label className="flex items-center gap-2 bg-cardstock border border-rule rounded-sm px-3 py-2 flex-1 max-w-md">
            <Search className="w-4 h-4 text-ash" />
            <input
              type="text"
              placeholder="Jump to state…"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-transparent outline-none text-[14px] flex-1 placeholder:text-fog"
            />
          </label>
          <label className="flex items-center gap-2 text-[13px] text-graphite cursor-pointer">
            <input
              type="checkbox"
              checked={onlyAvailable}
              onChange={(e) => setOnlyAvailable(e.target.checked)}
              className="w-4 h-4 accent-bureau"
            />
            Show only states where I have programs
          </label>
        </div>

        {/* Matrix */}
        <div className="mt-8 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 overflow-x-auto">
            <div className="bg-cardstock border border-rule rounded-sm">
              {/* Header row */}
              <div className="grid sticky top-0 bg-cardstock border-b border-rule" style={{ gridTemplateColumns: '88px repeat(5, 1fr)' }}>
                <div className="p-3 spec">State</div>
                {PROGRAMS.map((p) => (
                  <div key={p} className="p-3 spec text-center border-l border-rule">
                    {p}
                  </div>
                ))}
              </div>
              {/* Rows */}
              <div className="max-h-[560px] overflow-y-auto">
                {visible.map((row) => (
                  <div
                    key={row.abbr}
                    className="grid border-b border-rule last:border-0 hover:bg-shelf/50 transition-colors"
                    style={{ gridTemplateColumns: '88px repeat(5, 1fr)' }}
                  >
                    <div className="p-3 num text-[12px] text-ink flex items-center gap-2">
                      <span className="text-bureau font-semibold">{row.abbr}</span>
                    </div>
                    {PROGRAMS.map((p) => {
                      const cell = row.cells[p];
                      const isActive =
                        active && active.abbr === row.abbr && active.program === p;
                      return (
                        <button
                          key={p}
                          onClick={() => setActive({ abbr: row.abbr, program: p })}
                          className={`p-3 border-l border-rule flex items-center justify-center gap-1.5 text-[10px] font-mono uppercase tracking-spec transition-colors ${
                            CELL_BG[cell.status]
                          } ${isActive ? 'ring-2 ring-bureau ring-inset' : ''}`}
                          title={`${row.name} · ${p}: ${cell.label}`}
                        >
                          {ICONS[cell.status]}
                          <span className="hidden md:inline">
                            {cell.status === 'yes' ? 'Yes' : cell.status === 'maybe' ? 'Maybe' : '—'}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                ))}
                {visible.length === 0 && (
                  <div className="p-8 text-center text-ash text-[14px]">No states match.</div>
                )}
              </div>
            </div>
          </div>

          {/* Detail panel */}
          <aside className="lg:col-span-4">
            <div className="bg-cardstock border border-rule rounded-sm p-6 sticky top-24">
              {!active ? (
                <div className="text-center py-8">
                  <div className="spec">Select a cell</div>
                  <p className="mt-3 text-[14px] text-graphite">
                    Click any state-program intersection to see coverage details.
                  </p>
                </div>
              ) : (
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="spec">
                        {activeRow.abbr} · {active.program}
                      </div>
                      <div className="font-body font-semibold text-[20px] text-ink mt-2">
                        {activeRow.name}
                      </div>
                    </div>
                    <button
                      onClick={() => setActive(null)}
                      aria-label="Close"
                      className="text-ash hover:text-ink"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="mt-5">
                    <div
                      className={`pill ${
                        cellDetail.status === 'yes'
                          ? 'pill-stamp'
                          : cellDetail.status === 'maybe'
                          ? 'pill-bureau'
                          : 'pill-fog'
                      }`}
                    >
                      {cellDetail.label}
                    </div>
                    <p className="mt-4 text-[14px] text-graphite leading-relaxed">
                      {cellDetail.detail}
                    </p>
                  </div>
                  <div className="mt-6 hairline" />
                  <a
                    href={`/states/${activeRow.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="mt-5 btn-ghost w-full justify-center"
                  >
                    See full {activeRow.name} guide →
                  </a>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
