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
    <div
      className={`border border-rule rounded-sm p-5 transition-colors ${
        dim ? 'bg-shelf' : highlight ? 'bg-cardstock border-bureau' : 'bg-cardstock'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="num text-[11px] text-ash">{number}</span>
          <h3 className={`font-body font-semibold text-[17px] ${dim ? 'text-ash' : 'text-ink'}`}>
            {name}
          </h3>
        </div>
        <DataPill status={status} />
      </div>
      <div
        className={`mt-3 num text-[13px] tracking-wide ${
          dim ? 'text-ash' : status === 'eligible' ? 'text-bureau' : 'text-graphite'
        }`}
      >
        {dataPoint}
      </div>
      <div className="mt-3 text-[13.5px] text-graphite leading-relaxed">{why}</div>
    </div>
  );
}
