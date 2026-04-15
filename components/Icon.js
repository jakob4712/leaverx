const base = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const Icon = ({ name, className = "w-5 h-5" }) => {
  const paths = ICONS[name];
  if (!paths) return null;
  return <svg {...base} className={className}>{paths}</svg>;
};

const ICONS = {
  shield: <><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>,
  doc: <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6" /><path d="M9 13h6M9 17h4" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  heart: <path d="M20.8 7.6a5 5 0 0 0-8.8-2 5 5 0 0 0-8.8 2c-1 3.3 1.1 6.7 8.8 11.4 7.7-4.7 9.8-8.1 8.8-11.4Z" />,
  lock: <><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></>,
  stethoscope: <><path d="M5 3v5a4 4 0 0 0 8 0V3" /><path d="M9 15a5 5 0 0 0 10 0v-2" /><circle cx="19" cy="11" r="2" /></>,
  check: <path d="M4 12l5 5L20 6" />,
  arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  star: <path d="M12 3l2.6 5.6 6.1.9-4.4 4.3 1 6-5.3-2.8L6.7 20l1-6L3.3 9.5l6.1-.9L12 3Z" />,
  quote: <path d="M7 7h4v4c0 3-2 5-4 5M15 7h4v4c0 3-2 5-4 5" />,
  brain: <><path d="M9 3a3 3 0 0 0-3 3v0a3 3 0 0 0-3 3v2a3 3 0 0 0 2 2.8V16a3 3 0 0 0 4 3V3Z" /><path d="M15 3a3 3 0 0 1 3 3v0a3 3 0 0 1 3 3v2a3 3 0 0 1-2 2.8V16a3 3 0 0 1-4 3V3Z" /></>,
  users: <><circle cx="9" cy="8" r="3" /><path d="M3 20c1-3.5 3.5-5 6-5s5 1.5 6 5" /><circle cx="17" cy="9" r="2.5" /><path d="M15 14c3 0 5 1.5 6 5" /></>,
  pulse: <><path d="M3 12h4l2-6 4 12 2-6h6" /></>,
  refresh: <><path d="M21 12a9 9 0 1 1-3-6.7" /><path d="M21 3v6h-6" /></>,
  minus: <path d="M5 12h14" />,
  plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
};
