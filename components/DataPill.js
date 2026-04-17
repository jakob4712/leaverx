const VARIANTS = {
  eligible: 'pill-stamp',
  likely: 'pill-seal',
  notEligible: 'pill-fog text-graphite',
  unknown: 'pill-fog',
  bureau: 'pill-bureau',
  alarm: 'pill-alarm',
};

const LABELS = {
  eligible: 'Eligible',
  likely: 'Likely',
  notEligible: 'Not Eligible',
  unknown: '—',
};

export default function DataPill({ status, label, className = '' }) {
  const cls = VARIANTS[status] || 'pill-fog';
  const text = label || LABELS[status] || status;
  return <span className={`${cls} ${className}`}>{text}</span>;
}
