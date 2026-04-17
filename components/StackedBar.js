// Custom stacked bar — Recharts is overkill for a single 3-segment bar
// and adds 50kb. Pure CSS does this cleanly with smooth transitions.

const COLORS = {
  fmla: 'bg-dv1',
  pfl: 'bg-dv2',
  std: 'bg-dv3',
};

export default function StackedBar({ fmlaWeeks, pflWeeks, stdWeeks, max = 52 }) {
  const total = fmlaWeeks + pflWeeks + stdWeeks;
  const widthOf = (w) => `${(w / max) * 100}%`;
  return (
    <div>
      <div className="h-3 w-full bg-shelf rounded-sm overflow-hidden flex">
        {fmlaWeeks > 0 && (
          <div
            className={`${COLORS.fmla} transition-all duration-500`}
            style={{ width: widthOf(fmlaWeeks) }}
            title={`FMLA: ${fmlaWeeks} weeks`}
          />
        )}
        {pflWeeks > 0 && (
          <div
            className={`${COLORS.pfl} transition-all duration-500`}
            style={{ width: widthOf(pflWeeks) }}
            title={`PFL: ${pflWeeks} weeks`}
          />
        )}
        {stdWeeks > 0 && (
          <div
            className={`${COLORS.std} transition-all duration-500`}
            style={{ width: widthOf(stdWeeks) }}
            title={`STD: ${stdWeeks} weeks`}
          />
        )}
      </div>
      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-[12px]">
        <Legend color="bg-dv1" label="FMLA (federal)" weeks={fmlaWeeks} />
        <Legend color="bg-dv2" label="Paid Family Leave (state)" weeks={pflWeeks} />
        <Legend color="bg-dv3" label="State Disability" weeks={stdWeeks} />
      </div>
      <div className="mt-2 spec">{`Scale: 0–${max} weeks · Total ${total} weeks`}</div>
    </div>
  );
}

function Legend({ color, label, weeks }) {
  const dim = weeks === 0;
  return (
    <div className={`flex items-center gap-2 ${dim ? 'opacity-40' : ''}`}>
      <span className={`block w-3 h-3 rounded-sm ${color}`} />
      <span className="text-graphite">{label}</span>
      <span className="num text-ink">{weeks}w</span>
    </div>
  );
}
