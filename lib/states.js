// State data for /states/[state] pages.
// `tier`: "premium" = state with paid family leave or state disability programs.
// `programs`: list of programs that apply in this state in addition to federal FMLA + ADA.

const PREMIUM = {
  california: {
    name: 'California',
    abbr: 'CA',
    programs: ['FMLA', 'CFRA', 'PFL', 'SDI', 'ADA'],
    note: 'California offers the most comprehensive paid leave coverage in the country. CFRA mirrors FMLA for smaller employers (5+ employees), PFL pays 60–70% wages for 8 weeks of bonding/family-care leave, and SDI pays for your own disability up to 52 weeks.',
  },
  'new-york': {
    name: 'New York',
    abbr: 'NY',
    programs: ['FMLA', 'PFL', 'DBL', 'ADA'],
    note: 'New York PFL provides up to 12 weeks at 67% of your average weekly wage. DBL covers your own disability for up to 26 weeks at 50% of pay (capped).',
  },
  'new-jersey': {
    name: 'New Jersey',
    abbr: 'NJ',
    programs: ['FMLA', 'NJFLA', 'TDI', 'FLI', 'ADA'],
    note: 'New Jersey runs Temporary Disability Insurance (TDI) for your own illness and Family Leave Insurance (FLI) for caregiving — both at 85% of pay, up to a weekly cap.',
  },
  washington: {
    name: 'Washington',
    abbr: 'WA',
    programs: ['FMLA', 'PFML', 'ADA'],
    note: 'Washington Paid Family & Medical Leave covers up to 12 weeks of family or medical leave (16–18 weeks combined) at up to 90% of wages.',
  },
  colorado: {
    name: 'Colorado',
    abbr: 'CO',
    programs: ['FMLA', 'FAMLI', 'ADA'],
    note: 'Colorado FAMLI provides up to 12 weeks of paid family or medical leave per year at up to 90% of wages.',
  },
  oregon: {
    name: 'Oregon',
    abbr: 'OR',
    programs: ['FMLA', 'OFLA', 'PFMLI', 'ADA'],
    note: 'Oregon Paid Family & Medical Leave Insurance provides up to 12 weeks of paid leave for own illness, family care, or bonding.',
  },
  massachusetts: {
    name: 'Massachusetts',
    abbr: 'MA',
    programs: ['FMLA', 'PFML', 'ADA'],
    note: 'Massachusetts PFML provides up to 20 weeks of paid medical leave and 12 weeks of paid family leave per benefit year.',
  },
  connecticut: {
    name: 'Connecticut',
    abbr: 'CT',
    programs: ['FMLA', 'CTPL', 'ADA'],
    note: 'Connecticut Paid Leave provides up to 12 weeks at 95% of pay (capped at 60x state minimum wage per week).',
  },
  hawaii: {
    name: 'Hawaii',
    abbr: 'HI',
    programs: ['FMLA', 'TDI', 'ADA'],
    note: 'Hawaii TDI provides 58% of weekly wages for up to 26 weeks for your own non-work-related illness or injury.',
  },
  'rhode-island': {
    name: 'Rhode Island',
    abbr: 'RI',
    programs: ['FMLA', 'TDI', 'TCI', 'ADA'],
    note: 'Rhode Island TDI provides income replacement for your own illness; TCI provides up to 6 weeks of paid leave for caregiving or bonding.',
  },
  'district-of-columbia': {
    name: 'District of Columbia',
    abbr: 'DC',
    programs: ['FMLA', 'DCPFL', 'ADA'],
    note: 'DC Paid Family Leave provides up to 12 weeks of parental leave, 12 weeks of family leave, 12 weeks of medical leave, and 2 weeks of prenatal leave per year.',
  },
};

const ALL_STATE_NAMES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware',
  'District of Columbia','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa',
  'Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota',
  'Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey',
  'New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon',
  'Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah',
  'Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming',
];

export const ALL_STATES = ALL_STATE_NAMES.map((name) => {
  const slug = name.toLowerCase().replace(/\s+/g, '-');
  if (PREMIUM[slug]) return { ...PREMIUM[slug], slug, tier: 'premium' };
  return {
    slug,
    name,
    abbr: '',
    programs: ['FMLA', 'ADA'],
    note: `${name} follows federal FMLA and ADA. State-specific paid leave or disability programs are not currently available, but you may still qualify for FMLA, employer-provided STD, and ADA accommodations.`,
    tier: 'standard',
  };
});

export const PREMIUM_STATES = ALL_STATES.filter((s) => s.tier === 'premium');

export function getState(slug) {
  return ALL_STATES.find((s) => s.slug === slug);
}
