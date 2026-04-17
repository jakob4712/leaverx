import Head from 'next/head';
import Link from 'next/link';
import { Check } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
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
  return (
    <>
      <Head>
        <title>{`${state.name} FMLA & Paid Leave Certification | LeaveRx`}</title>
        <meta name="description" content={`Get FMLA, paid leave, and disability certification in ${state.name}. Board-certified physicians, approved in 24 hours.`} />
      </Head>
      <Nav />
      <article>
        <section className="container-x py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="spec text-bureau">Available in {state.abbr || state.name}</span>
              {state.tier === 'premium' && <span className="pill-stamp">Premium State</span>}
            </div>
            <h1 className="mt-4 text-ink leading-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
              {state.name} FMLA & Paid Leave Certification
            </h1>
            <p className="mt-6 text-graphite text-[17px] leading-relaxed">{state.note}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#tool-01" className="btn-bureau">
                Check My Eligibility
              </Link>
              <Link href="/intake" className="btn-ghost">
                Get Certified — $149
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-shelf border-y border-rule">
          <div className="container-x py-16">
            <div className="spec text-bureau">Programs Available</div>
            <h2 className="mt-3 text-ink" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>
              What {state.name} employees qualify for.
            </h2>
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {state.programs.map((p) => (
                <div key={p} className="card-paper p-5">
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-stamp" />
                    <span className="font-body font-semibold text-[16px] text-ink">{p}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-bureau text-paper">
          <div className="container-x py-16 text-center">
            <h2 className="display-italic text-paper" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Get certified in {state.name} — in 24 hours.
            </h2>
            <Link href="/#tool-01" className="btn-paper-on-bureau mt-8">
              Run the eligibility check →
            </Link>
          </div>
        </section>
      </article>
      <Footer />
    </>
  );
}
