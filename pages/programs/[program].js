import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import GuaranteeSection from '@/components/GuaranteeSection';
import { PROGRAMS, getProgram } from '@/lib/programs';

export async function getStaticPaths() {
  return {
    paths: PROGRAMS.map((p) => ({ params: { program: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const program = getProgram(params.program);
  if (!program) return { notFound: true };
  return { props: { program } };
}

export default function ProgramPage({ program }) {
  const title = `${program.name} Online — Approved in 24 Hours | LeaveRx`;
  const description = `${program.shortName} certification by a board-certified physician. ${program.tagline} Approved in 24 hours or your money back.`;
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
            <div className="eyebrow">{program.hero.eyebrow}</div>
            <h1 className="mt-4 font-display text-4xl md:text-6xl text-ink leading-tight text-balance">
              {program.hero.h1}
            </h1>
            <p className="mt-7 text-slate text-lg leading-relaxed text-pretty">{program.hero.sub}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/quiz" className="btn-primary btn-lg">
                Check My Eligibility — Free <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/intake" className="btn-secondary btn-lg">
                Get Certified — $149
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-paper border-y border-mist">
          <div className="container-x py-20">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="eyebrow">Who qualifies</div>
                <p className="mt-3 text-slate text-[15.5px] leading-relaxed">{program.overview.who}</p>
              </div>
              <div>
                <div className="eyebrow">What it covers</div>
                <p className="mt-3 text-slate text-[15.5px] leading-relaxed">{program.overview.what}</p>
              </div>
              <div>
                <div className="eyebrow">How it works</div>
                <p className="mt-3 text-slate text-[15.5px] leading-relaxed">{program.overview.how}</p>
              </div>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-4">
              <Stat label="Duration" value={program.duration} />
              <Stat label="Pay" value={program.pay} />
              <Stat label="Form" value={program.formName} />
            </div>
          </div>
        </section>

        <section className="container-x py-20">
          <div className="max-w-3xl">
            <div className="eyebrow">How LeaveRx Handles It</div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-ink text-balance">
              The same evaluation that unlocks every program you qualify for.
            </h2>
            <p className="mt-6 text-slate text-[16.5px] leading-relaxed">
              You don&apos;t have to pick one program upfront. A single 15–20 minute consultation with a board-certified physician evaluates your eligibility for {program.shortName} and any other federal, state, or employer-provided protections that apply to your situation.
            </p>
            <ul className="mt-8 space-y-3">
              {program.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-approved mt-0.5 flex-shrink-0" />
                  <span className="text-slate text-[15.5px]">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <GuaranteeSection />

        <section className="bg-paper border-y border-mist">
          <div className="container-x py-20">
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-5">
                <div className="eyebrow">FAQ</div>
                <h2 className="mt-4 font-display text-3xl md:text-4xl text-ink text-balance">
                  Common questions about {program.shortName}.
                </h2>
              </div>
              <div className="md:col-span-7">
                <FAQ items={program.faq} />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-ink text-white">
          <div className="container-x py-20 text-center">
            <h2 className="font-display text-3xl md:text-5xl text-white text-balance max-w-2xl mx-auto">
              See if you qualify in 2 minutes — free.
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

function Stat({ label, value }) {
  return (
    <div className="card">
      <div className="eyebrow">{label}</div>
      <div className="mt-2 text-ink text-[16px] font-medium">{value}</div>
    </div>
  );
}
