import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import GuaranteeSection from '@/components/GuaranteeSection';
import HowItWorks from '@/components/HowItWorks';
import { ALL_STATES, getState } from '@/lib/states';

export async function getStaticPaths() {
  return {
    paths: ALL_STATES.map((s) => ({ params: { state: s.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const state = getState(params.state);
  if (!state) return { notFound: true };
  return { props: { state } };
}

export default function StatePage({ state }) {
  const title = `${state.name} FMLA & Paid Leave Certification | LeaveRx`;
  const description = `Get FMLA, paid leave, and disability certification in ${state.name}. Board-certified physicians licensed in ${state.name}, approved in 24 hours. Money-back guarantee.`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="bg-cream text-ink">
        <Nav />

        <section className="container-x py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="eyebrow">Available in {state.abbr || state.name}</span>
              {state.tier === 'premium' && <span className="pill-sm">Premium State</span>}
            </div>
            <h1 className="mt-4 font-display text-4xl md:text-6xl text-ink leading-tight text-balance">
              {state.name} FMLA & Paid Leave Certification
            </h1>
            <p className="mt-6 text-slate text-lg leading-relaxed">{state.note}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/quiz?state=${state.slug}`} className="btn-primary btn-lg">
                Check My Eligibility <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/intake" className="btn-secondary btn-lg">
                Get Certified — $149
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-paper border-y border-mist">
          <div className="container-x py-20">
            <div className="max-w-3xl">
              <div className="eyebrow">Programs Available</div>
              <h2 className="mt-4 font-display text-3xl md:text-4xl text-ink">
                What {state.name} employees qualify for.
              </h2>
            </div>
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {state.programs.map((p) => (
                <div key={p} className="card">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-approved" />
                    <span className="font-display text-[18px] text-ink">{p}</span>
                  </div>
                  <div className="mt-3 text-[14px] text-slate">{programDescription(p, state)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <HowItWorks />
        <GuaranteeSection />

        <section className="bg-ink text-white">
          <div className="container-x py-20 text-center">
            <h2 className="font-display text-3xl md:text-5xl text-white text-balance max-w-2xl mx-auto">
              Get certified in {state.name} — in 24 hours.
            </h2>
            <p className="mt-4 text-white/75 text-lg">
              Board-certified physicians licensed in {state.name}. Approved or full refund.
            </p>
            <Link href={`/quiz?state=${state.slug}`} className="btn-primary btn-lg bg-white text-navy hover:bg-navy-soft mt-8 inline-flex">
              Start Free Pre-Qualification <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

function programDescription(program, state) {
  const map = {
    FMLA: 'Federal job protection — up to 12 weeks of unpaid, job-protected leave per year.',
    ADA: 'Reasonable workplace accommodations including remote work, schedule changes, and reduced hours.',
    CFRA: 'California Family Rights Act — mirrors FMLA for employers as small as 5 employees.',
    PFL: `${state.name} Paid Family Leave — wage replacement during leave for caregiving or bonding.`,
    SDI: `${state.name} State Disability Insurance — wage replacement for your own illness or injury.`,
    DBL: 'New York Disability Benefits Law — partial wage replacement during your own disability.',
    NJFLA: 'New Jersey Family Leave Act — state-level family leave, separate from federal FMLA.',
    TDI: `${state.name} Temporary Disability Insurance — wage replacement during your own illness or injury.`,
    FLI: 'New Jersey Family Leave Insurance — paid family leave for caregiving and bonding.',
    PFML: `${state.name} Paid Family & Medical Leave — combined paid family + medical leave program.`,
    FAMLI: 'Colorado Family & Medical Leave Insurance — paid family + medical leave (up to 12 weeks).',
    OFLA: 'Oregon Family Leave Act — state-level family leave protections.',
    PFMLI: 'Oregon Paid Family & Medical Leave Insurance — wage replacement during leave.',
    CTPL: 'Connecticut Paid Leave — up to 12 weeks at 95% of pay (capped).',
    TCI: 'Rhode Island Temporary Caregiver Insurance — paid caregiving and bonding leave.',
    DCPFL: 'DC Paid Family Leave — comprehensive paid leave with prenatal coverage.',
  };
  return map[program] || `${program} program available in ${state.name}.`;
}
