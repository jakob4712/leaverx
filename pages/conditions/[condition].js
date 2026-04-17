import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import * as Icons from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import GuaranteeSection from '@/components/GuaranteeSection';
import HowItWorks from '@/components/HowItWorks';
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
  const Icon = Icons[condition.icon] || Icons.Heart;
  const title = `FMLA Leave for ${condition.name} | LeaveRx`;
  const description = `${condition.name} qualifies for FMLA, paid leave, and disability programs. Get certified by a board-certified physician in 24 hours.`;

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
              <div className="w-10 h-10 rounded-lg bg-navy-soft flex items-center justify-center text-navy">
                <Icon className="w-5 h-5" />
              </div>
              <div className="eyebrow">Qualifying Condition</div>
            </div>
            <h1 className="mt-6 font-display text-4xl md:text-6xl text-ink leading-tight text-balance">
              FMLA leave for {condition.name.toLowerCase()}.
            </h1>
            <p className="mt-6 text-slate text-lg leading-relaxed">{condition.detail}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/quiz" className="btn-primary btn-lg">
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
              <div className="eyebrow">Programs This Qualifies For</div>
              <h2 className="mt-4 font-display text-3xl md:text-4xl text-ink">
                Most patients with {condition.name.toLowerCase()} qualify for multiple protections.
              </h2>
            </div>
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {condition.programs.map((p) => (
                <div key={p} className="card flex items-center gap-3">
                  <Check className="w-5 h-5 text-approved" />
                  <span className="font-display text-[16px] text-ink">{p}</span>
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
              Get protected leave for {condition.name.toLowerCase()} — fast.
            </h2>
            <Link href="/quiz" className="btn-primary btn-lg bg-white text-navy hover:bg-navy-soft mt-8 inline-flex">
              Start Free Pre-Qualification <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
