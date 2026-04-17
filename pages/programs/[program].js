import Head from 'next/head';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Hairline from '@/components/Hairline';
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
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`${program.shortName} certification by a board-certified physician. ${program.tagline}`} />
      </Head>
      <Nav />
      <article>
        <section className="container-x py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="spec text-bureau">{program.hero.eyebrow}</div>
            <h1 className="mt-4 text-ink leading-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
              {program.hero.h1}
            </h1>
            <p className="mt-6 text-graphite text-[17px] leading-relaxed">{program.hero.sub}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#tool-01" className="btn-bureau">
                Check My Eligibility — Free
              </Link>
              <Link href="/intake" className="btn-ghost">
                Get Certified — $149
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-shelf border-y border-rule">
          <div className="container-x py-16">
            <div className="grid md:grid-cols-3 gap-8">
              <Block label="Who qualifies" body={program.overview.who} />
              <Block label="What it covers" body={program.overview.what} />
              <Block label="How it works" body={program.overview.how} />
            </div>
            <Hairline className="mt-12" />
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <Stat label="Duration" value={program.duration} />
              <Stat label="Pay" value={program.pay} />
              <Stat label="Form" value={program.formName} />
            </div>
          </div>
        </section>

        <section className="container-x py-20">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <div className="spec text-bureau">FAQ</div>
              <h2 className="mt-3 text-ink" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>
                Common questions about {program.shortName}.
              </h2>
            </div>
            <div className="md:col-span-7">
              <div className="border-t border-rule">
                {program.faq.map((f, i) => (
                  <div key={i} className="border-b border-rule py-5">
                    <div className="font-body font-semibold text-[17px] text-ink">{f.q}</div>
                    <p className="mt-2 text-graphite text-[14.5px] leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-bureau text-paper">
          <div className="container-x py-16 text-center">
            <h2 className="display-italic text-paper" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              See if you qualify in 30 seconds.
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

function Block({ label, body }) {
  return (
    <div>
      <div className="spec text-bureau">{label}</div>
      <p className="mt-3 text-graphite text-[15.5px] leading-relaxed">{body}</p>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="card-paper p-5">
      <div className="spec">{label}</div>
      <div className="mt-2 num text-[14px] text-ink">{value}</div>
    </div>
  );
}
