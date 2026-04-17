export const PROGRAMS = [
  {
    slug: 'fmla',
    name: 'FMLA — Family & Medical Leave Act',
    shortName: 'FMLA',
    badge: 'Federal',
    tagline: 'Up to 12 weeks of job-protected leave per year.',
    bullets: [
      'Up to 12 weeks of job-protected leave per year',
      'Federal law, applies if employer has 50+ employees',
      'Continuous, intermittent, or reduced schedule',
    ],
    hero: {
      eyebrow: 'Family & Medical Leave Act',
      h1: 'Get approved for FMLA leave online — in 24 hours.',
      sub: 'A board-certified physician evaluates your case via telehealth and completes the federal DOL Form WH-380. Your job is protected by federal law for up to 12 weeks.',
    },
    overview: {
      who: 'You qualify for FMLA if you have worked for your employer for at least 12 months, logged 1,250+ hours in the past year, and your employer has 50 or more employees within a 75-mile radius of your worksite.',
      what: 'FMLA provides up to 12 weeks of unpaid, job-protected leave per year for serious health conditions — yours or a covered family member\'s. Your employer must hold your job (or an equivalent one) for your return.',
      how: 'You can take FMLA continuously, intermittently (separate blocks), or as a reduced schedule. Mental health and physical health conditions are treated equally under federal law.',
    },
    duration: 'Up to 12 weeks per 12-month period (26 weeks for military caregivers).',
    pay: 'Unpaid (federal) — but often combined with state paid family leave or short-term disability for income replacement.',
    formName: 'DOL Form WH-380-E (own condition) or WH-380-F (family member)',
    faq: [
      {
        q: 'Will my employer accept this certification?',
        a: 'Yes. The DOL Form WH-380 is the federal standard your employer is legally required to accept under 29 CFR § 825.306 when signed by a licensed physician.',
      },
      {
        q: 'Is my medical information shared with my employer?',
        a: 'No. Your employer receives only the completed certification form. Your symptoms, diagnosis details, and records remain between you and the reviewing physician.',
      },
      {
        q: 'Can I take FMLA intermittently?',
        a: 'Yes. Our physicians regularly document continuous, intermittent, and reduced-schedule leave based on clinical need.',
      },
      {
        q: 'What if my employer is smaller than 50 employees?',
        a: 'You may not qualify for federal FMLA, but you may still qualify for state paid leave, short-term disability, or ADA accommodations. The pre-qualification quiz checks all programs.',
      },
    ],
  },
  {
    slug: 'paid-family-leave',
    name: 'Paid Family Leave',
    shortName: 'Paid Family Leave',
    badge: 'State',
    tagline: 'State income replacement while you\'re on leave.',
    bullets: [
      'State income replacement while on leave',
      'Available in CA, NY, NJ, WA, CO, OR, MA, CT, DC, RI',
      'Typically covers 60–90% of wages for 8–12 weeks',
    ],
    hero: {
      eyebrow: 'Paid Family Leave',
      h1: 'Get paid leave certification — fast, in your state.',
      sub: 'Eleven states and DC offer paid family leave with income replacement. Our doctors complete the medical certification required by your state\'s program.',
    },
    overview: {
      who: 'Available to employees in CA, NY, NJ, WA, CO, OR, MA, CT, DC, and RI. Each state has its own work-history requirements.',
      what: 'Paid Family Leave provides partial wage replacement (typically 60–90% of pay, capped) while you take leave for your own serious health condition, to bond with a new child, or to care for a family member.',
      how: 'After our physician completes your medical certification, you submit it to your state\'s leave program (separate from your employer). Most states pay weekly for 8–12 weeks.',
    },
    duration: 'Varies by state — typically 8–12 weeks per year.',
    pay: '60–90% of average weekly wages, subject to state-specific weekly caps.',
    formName: 'State-specific medical certification (varies)',
    faq: [
      {
        q: 'Does paid family leave protect my job?',
        a: 'In most states, yes — but some states require concurrent FMLA filing for full job protection. Our doctors complete both certifications when applicable.',
      },
      {
        q: 'Can I take paid family leave and FMLA at the same time?',
        a: 'Yes — they typically run concurrently. PFL provides the income replacement; FMLA provides the federal job protection.',
      },
    ],
  },
  {
    slug: 'short-term-disability',
    name: 'Short-Term Disability',
    shortName: 'Short-Term Disability',
    badge: 'Employer / State',
    tagline: 'Partial income replacement for your own illness or injury.',
    bullets: [
      'Partial income replacement for your own illness or injury',
      'Employer-provided (most common) or state program',
      'Typically covers 50–70% of wages',
    ],
    hero: {
      eyebrow: 'Short-Term Disability',
      h1: 'Short-term disability certification, completed by a doctor.',
      sub: 'If your employer offers STD coverage — or you live in a state with a public disability program (CA, NY, NJ, HI, RI) — our physicians complete the medical certification required.',
    },
    overview: {
      who: 'Available to employees with employer-sponsored STD insurance, plus residents of CA (SDI), NY (DBL), NJ (TDI), HI (TDI), and RI (TDI).',
      what: 'Short-term disability replaces 50–70% of your wages while you\'re medically unable to work due to your own illness, injury, surgery, or pregnancy.',
      how: 'Our physician completes the medical certification (Attending Physician\'s Statement, or state form). You submit it to your insurer or state agency.',
    },
    duration: 'Typically 13–26 weeks, varies by policy or state.',
    pay: '50–70% of weekly wages, up to plan or state cap.',
    formName: 'Attending Physician\'s Statement (insurer) or state disability form',
    faq: [
      {
        q: 'Do I need an employer-provided STD plan to qualify?',
        a: 'Not always. CA, NY, NJ, HI, and RI all have state-funded disability programs. The pre-qualification quiz tells you what\'s available.',
      },
    ],
  },
  {
    slug: 'state-disability',
    name: 'State Disability (SDI/TDI)',
    shortName: 'State Disability',
    badge: 'State',
    tagline: 'Public disability programs in select states.',
    bullets: [
      'Public state-funded disability programs',
      'CA SDI, NY DBL, NJ TDI, HI TDI, RI TDI',
      'Typically 60–70% of wages, up to weekly cap',
    ],
    hero: {
      eyebrow: 'State Disability Insurance',
      h1: 'State disability paperwork, signed by a board-certified doctor.',
      sub: 'CA, NY, NJ, HI, and RI run their own disability insurance programs that pay out when you\'re medically unable to work. We handle the medical certification.',
    },
    overview: {
      who: 'Residents of CA (SDI), NY (DBL), NJ (TDI), HI (TDI), and RI (TDI) who have earned enough wages to qualify under state rules.',
      what: 'State disability replaces a portion of your wages when illness or injury prevents you from working — independent of any employer-provided coverage.',
      how: 'Our physician completes the appropriate state disability medical form. You submit it to your state\'s EDD or equivalent agency.',
    },
    duration: 'Up to 52 weeks (CA), 26 weeks (most other states).',
    pay: '60–70% of average weekly wages, subject to state caps.',
    formName: 'State-specific disability form',
    faq: [
      {
        q: 'Is this the same as Social Security Disability (SSDI)?',
        a: 'No. SDI/TDI are short-term state programs (weeks to months). SSDI is a federal long-term program with separate eligibility — we don\'t handle SSDI.',
      },
    ],
  },
  {
    slug: 'ada-accommodations',
    name: 'ADA Accommodations',
    shortName: 'ADA Accommodations',
    badge: 'Federal',
    tagline: 'Reasonable workplace modifications — no leave required.',
    bullets: [
      'Reasonable workplace modifications',
      'Remote work, schedule changes, reduced hours',
      'No leave required — keeps you working',
    ],
    hero: {
      eyebrow: 'Americans with Disabilities Act',
      h1: 'Get an ADA accommodation letter — keep working, on your terms.',
      sub: 'The ADA requires most employers to make reasonable accommodations for employees with qualifying conditions. Our doctors document the medical basis for the accommodation you need.',
    },
    overview: {
      who: 'Most U.S. employees with a qualifying physical or mental impairment that substantially limits a major life activity. The ADA covers nearly all employers with 15+ employees.',
      what: 'Reasonable accommodations might include remote/hybrid work, modified schedule, reduced hours, time off for treatment, ergonomic equipment, or quiet workspace.',
      how: 'Our physician documents your condition and the accommodation that\'s medically appropriate. You submit the letter to HR as part of an interactive accommodation request.',
    },
    duration: 'Ongoing as long as the medical need exists.',
    pay: 'No income replacement — you continue working with accommodation.',
    formName: 'Physician accommodation letter (custom)',
    faq: [
      {
        q: 'Can my employer refuse an ADA accommodation?',
        a: 'Only if it would cause an "undue hardship" — a high legal bar. Most reasonable accommodations (remote work, schedule changes, reduced hours) are required to be granted.',
      },
      {
        q: 'Is mental health covered under the ADA?',
        a: 'Yes. Anxiety, depression, PTSD, ADHD, and bipolar disorder are all recognized as qualifying conditions when they substantially limit a major life activity.',
      },
    ],
  },
];

export function getProgram(slug) {
  return PROGRAMS.find((p) => p.slug === slug);
}
