// State × Program availability matrix used by Tool 02.
import { STATES, PFL_STATES, SDI_STATES } from './eligibilityLogic';

// Status: "yes" / "maybe" / "no"
// FMLA & ADA = federal, available everywhere
// PFL = state-run paid family leave
// STD = employer-dependent, but state-run in SDI states
// SDI = state-run disability programs

export const PROGRAMS = ['FMLA', 'PFL', 'STD', 'SDI', 'ADA'];

export function buildMatrix() {
  return STATES.map(([abbr, name]) => {
    const pfl = PFL_STATES[abbr];
    const sdi = SDI_STATES[abbr];
    return {
      abbr,
      name,
      cells: {
        FMLA: {
          status: 'yes',
          label: 'Available',
          detail: `Federal FMLA applies in ${name} for employers with 50+ employees. Up to 12 weeks of unpaid, job-protected leave per year.`,
        },
        PFL: {
          status: pfl ? 'yes' : 'no',
          label: pfl ? `${pfl.weeks}w · ${pfl.replacement[0]}–${pfl.replacement[1]}%` : 'Not available',
          detail: pfl
            ? `${name} runs a paid family leave program — up to ${pfl.weeks} weeks at ${pfl.replacement[0]}–${pfl.replacement[1]}% wage replacement.`
            : `${name} does not currently have a state paid family leave program. Federal FMLA still applies.`,
        },
        STD: {
          status: sdi ? 'yes' : 'maybe',
          label: sdi ? `State-run · ${sdi.weeks}w` : 'Employer-dependent',
          detail: sdi
            ? `${name}'s state disability program also functions as short-term disability. ${sdi.weeks} weeks at ${sdi.replacement[0]}–${sdi.replacement[1]}%.`
            : 'Most employers offer short-term disability insurance. Coverage and rates depend on your employer plan.',
        },
        SDI: {
          status: sdi ? 'yes' : 'no',
          label: sdi ? `${sdi.weeks}w · ${sdi.replacement[0]}–${sdi.replacement[1]}%` : 'Not available',
          detail: sdi
            ? `${name} operates a state-funded disability insurance program. Up to ${sdi.weeks} weeks at ${sdi.replacement[0]}–${sdi.replacement[1]}% wage replacement.`
            : `${name} does not run a state disability insurance program.`,
        },
        ADA: {
          status: 'yes',
          label: 'Available',
          detail: 'The ADA applies federally to most employers with 15+ employees. Reasonable accommodations include remote work, schedule changes, and modified duties.',
        },
      },
    };
  });
}
