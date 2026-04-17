import Head from 'next/head';
import Link from 'next/link';
import { Check } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { CONDITIONS, getCondition } from '@/lib/conditions';

export async function getStaticPaths() {
  return {
    paths: CONDITIONS.map((c) => ({ params: { condition: c.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const condition = getCondition(params.condition);
  if (!condition) return { notFound: true };
  return { props: { condition } };
}

export default function ConditionPage({ condition }) {
  return (
    <>
      <Head>
        <title>{`FMLA Leave for ${condition.name} | LeaveRx`}</title>
        <meta name="description" content={`${condition.name} qualifies for FMLA, paid leave, and disability programs.`} />
      </Head>
      <Nav />
      <article>
        <section className="container-x py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="spec text-bureau">Qualifying Condition</div>
            <h1 className="mt-4 text-ink leading-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
              FMLA leave for {condition.name.toLowerCase()}.
            </h1>
            <p className="mt-6 text-graphite text-[17px] leading-relaxed">{condition.detail}</p>
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
            <div className="spec text-bureau">Programs This Qualifies For</div>
            <h2 className="mt-3 text-ink" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>
              Most patients with {condition.name.toLowerCase()} qualify for multiple protections.
            </h2>
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {condition.programs.map((p) => (
                <div key={p} className="card-paper p-5 flex items-center gap-3">
                  <Check className="w-4 h-4 text-stamp" />
                  <span className="font-body font-semibold text-[15px] text-ink">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-bureau text-paper">
          <div className="container-x py-16 text-center">
            <h2 className="display-italic text-paper" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Get protected leave for {condition.name.toLowerCase()}.
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
