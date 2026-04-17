// Pure client-side eligibility logic for Tool 01.
// All rules are illustrative simplifications of the underlying programs;
// final approval is at the discretion of the consulting physician.

export const PFL_STATES = {
  CA: { name: 'California', weeks: 8, replacement: [60, 90] },
  NY: { name: 'New York', weeks: 12, replacement: [67, 67] },
  NJ: { name: 'New Jersey', weeks: 12, replacement: [85, 85] },
  WA: { name: 'Washington', weeks: 12, replacement: [70, 90] },
  CO: { name: 'Colorado', weeks: 12, replacement: [60, 90] },
  OR: { name: 'Oregon', weeks: 12, replacement: [65, 100] },
  MA: { name: 'Massachusetts', weeks: 12, replacement: [64, 80] },
  CT: { name: 'Connecticut', weeks: 12, replacement: [60, 95] },
  DC: { name: 'District of Columbia', weeks: 12, replacement: [90, 90] },
  RI: { name: 'Rhode Island', weeks: 6, replacement: [60, 60] },
  DE: { name: 'Delaware', weeks: 12, replacement: [80, 80] },
  MD: { name: 'Maryland', weeks: 12, replacement: [80, 90] },
  MN: { name: 'Minnesota', weeks: 12, replacement: [55, 90] },
  ME: { name: 'Maine', weeks: 12, replacement: [66, 90] },
};

export const SDI_STATES = {
  CA: { name: 'California', weeks: 52, replacement: [60, 70] },
  NY: { name: 'New York', weeks: 26, replacement: [50, 50] },
  NJ: { name: 'New Jersey', weeks: 26, replacement: [85, 85] },
  HI: { name: 'Hawaii', weeks: 26, replacement: [58, 58] },
  RI: { name: 'Rhode Island', weeks: 30, replacement: [62, 62] },
};

export const STATES = [
  ['AL', 'Alabama'], ['AK', 'Alaska'], ['AZ', 'Arizona'], ['AR', 'Arkansas'],
  ['CA', 'California'], ['CO', 'Colorado'], ['CT', 'Connecticut'], ['DE', 'Delaware'],
  ['DC', 'District of Columbia'], ['FL', 'Florida'], ['GA', 'Georgia'], ['HI', 'Hawaii'],
  ['ID', 'Idaho'], ['IL', 'Illinois'], ['IN', 'Indiana'], ['IA', 'Iowa'],
  ['KS', 'Kansas'], ['KY', 'Kentucky'], ['LA', 'Louisiana'], ['ME', 'Maine'],
  ['MD', 'Maryland'], ['MA', 'Massachusetts'], ['MI', 'Michigan'], ['MN', 'Minnesota'],
  ['MS', 'Mississippi'], ['MO', 'Missouri'], ['MT', 'Montana'], ['NE', 'Nebraska'],
  ['NV', 'Nevada'], ['NH', 'New Hampshire'], ['NJ', 'New Jersey'], ['NM', 'New Mexico'],
  ['NY', 'New York'], ['NC', 'North Carolina'], ['ND', 'North Dakota'], ['OH', 'Ohio'],
  ['OK', 'Oklahoma'], ['OR', 'Oregon'], ['PA', 'Pennsylvania'], ['RI', 'Rhode Island'],
  ['SC', 'South Carolina'], ['SD', 'South Dakota'], ['TN', 'Tennessee'], ['TX', 'Texas'],
  ['UT', 'Utah'], ['VT', 'Vermont'], ['VA', 'Virginia'], ['WA', 'Washington'],
  ['WV', 'West Virginia'], ['WI', 'Wisconsin'], ['WY', 'Wyoming'],
];

const HOURS_TWELVE_MONTHS = 1250;

export function evaluate(inputs) {
  const { state, hours, tenureMonths, employerSize, conditions } = inputs;
  const annualHours = (hours || 0) * 52;
  const stateInfo = state ? STATES.find((s) => s[0] === state) : null;
  const pfl = state && PFL_STATES[state];
  const sdi = state && SDI_STATES[state];

  const enoughInputs = !!(state && tenureMonths != null && hours != null && employerSize);

  // FMLA
  let fmla;
  if (!enoughInputs) {
    fmla = { status: 'unknown', why: 'Fill in employer size, hours, and tenure to evaluate.' };
  } else if (employerSize === 'large' && tenureMonths >= 12 && annualHours >= HOURS_TWELVE_MONTHS) {
    fmla = {
      status: 'eligible',
      why: 'You meet all three FMLA tests: 50+ employer, 12+ months of tenure, 1,250+ hours in the past 12 months.',
    };
  } else if (employerSize === 'large' && tenureMonths >= 12 && annualHours < HOURS_TWELVE_MONTHS) {
    fmla = {
      status: 'likely',
      why: `You're close — federal FMLA needs 1,250 hours in 12 months. At ${hours} hr/week you've logged ~${annualHours.toLocaleString()}.`,
    };
  } else if (employerSize === 'unsure') {
    fmla = {
      status: 'likely',
      why: 'Tenure and hours look good — final eligibility depends on whether your employer has 50+ employees within 75 miles.',
    };
  } else {
    fmla = {
      status: 'notEligible',
      why:
        employerSize === 'small'
          ? 'Federal FMLA only applies to employers with 50+ employees. State and ADA programs may still cover you.'
          : 'You don\'t yet meet the 12-month tenure / 1,250-hour test for federal FMLA.',
    };
  }

  // PFL
  let pflResult;
  if (!state) {
    pflResult = { status: 'unknown', why: 'Select your state to evaluate paid family leave.' };
  } else if (pfl) {
    pflResult = {
      status: 'eligible',
      why: `${pfl.name} runs a paid family leave program — up to ${pfl.weeks} weeks at ${pfl.replacement[0]}-${pfl.replacement[1]}% wage replacement.`,
      data: pfl,
    };
  } else {
    pflResult = {
      status: 'notEligible',
      why: `${stateInfo?.[1] || 'Your state'} does not currently have a state paid family leave program.`,
    };
  }

  // STD
  let stdResult;
  if (!state) {
    stdResult = { status: 'unknown', why: 'Select your state to evaluate disability options.' };
  } else if (sdi) {
    stdResult = {
      status: 'eligible',
      why: `${sdi.name} provides public state disability — up to ${sdi.weeks} weeks at ${sdi.replacement[0]}-${sdi.replacement[1]}% wage replacement.`,
      data: sdi,
    };
  } else {
    stdResult = {
      status: 'likely',
      why: 'Most employers offer short-term disability insurance. Our doctor can complete your insurer\'s Attending Physician Statement.',
    };
  }

  // SDI (separate card from STD per spec)
  let sdiResult;
  if (!state) {
    sdiResult = { status: 'unknown', why: 'Select your state to evaluate state disability.' };
  } else if (sdi) {
    sdiResult = {
      status: 'eligible',
      why: `${sdi.name} operates a state-run disability program funded via payroll. Coverage is automatic.`,
      data: sdi,
    };
  } else {
    sdiResult = {
      status: 'notEligible',
      why: `${stateInfo?.[1] || 'Your state'} does not run a state disability program.`,
    };
  }

  // ADA — almost always available
  let ada;
  if (!conditions || conditions.length === 0) {
    ada = {
      status: 'likely',
      why: 'Pick at least one condition. Most qualifying conditions are ADA-covered for employers with 15+ employees.',
    };
  } else if (employerSize === 'small') {
    ada = {
      status: 'likely',
      why: 'ADA applies to employers with 15+ employees. If your employer has at least 15, you\'re covered.',
    };
  } else {
    ada = {
      status: 'eligible',
      why: 'Reasonable accommodations include remote work, modified schedule, reduced hours, and time off for treatment.',
    };
  }

  return { fmla, pfl: pflResult, std: stdResult, sdi: sdiResult, ada, enoughInputs };
}

export function summary(results, inputs) {
  // Cumulative protected weeks
  const fmlaWeeks = results.fmla.status === 'eligible' || results.fmla.status === 'likely' ? 12 : 0;
  const pflWeeks = results.pfl.status === 'eligible' ? results.pfl.data?.weeks || 0 : 0;
  const stdWeeks = results.std.status === 'eligible' ? results.std.data?.weeks || 0 : 0;
  const totalWeeks = fmlaWeeks + pflWeeks + stdWeeks;

  // Income estimate — assumes a median full-time wage of $1,200/week ($62k/yr)
  // unless user supplied hours, in which case scale roughly off federal median hourly.
  const weeklyWage = inputs.hours ? Math.round(inputs.hours * 28) : 1200;
  const monthlyPfl =
    results.pfl.status === 'eligible'
      ? Math.round((weeklyWage * results.pfl.data.replacement[0]) / 100 * 4.33)
      : 0;
  const monthlyStd =
    results.std.status === 'eligible'
      ? Math.round((weeklyWage * results.std.data.replacement[0]) / 100 * 4.33)
      : 0;
  const totalIncome =
    (monthlyPfl * (pflWeeks / 4.33)) / 1 + (monthlyStd * (stdWeeks / 4.33)) / 1;

  return {
    fmlaWeeks,
    pflWeeks,
    stdWeeks,
    totalWeeks,
    weeklyWage,
    monthlyPfl,
    monthlyStd,
    totalIncome: Math.round(totalIncome),
  };
}

export function tenureLabel(months) {
  if (months >= 12) {
    const yrs = Math.floor(months / 12);
    const rem = months % 12;
    return `${yrs} ${yrs === 1 ? 'year' : 'years'}${rem ? ` ${rem} mo` : ''}`;
  }
  return `${months} ${months === 1 ? 'month' : 'months'}`;
}
