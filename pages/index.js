import Link from 'next/link';
import Head from 'next/head';
import { ArrowRight, Check, ShieldCheck } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import TrustBar from '@/components/TrustBar';
import DoctorStrip from '@/components/DoctorStrip';
import ProgramGrid from '@/components/ProgramGrid';
import ConditionGrid from '@/components/ConditionGrid';
import HowItWorks from '@/components/HowItWorks';
import GuaranteeSection from '@/components/GuaranteeSection';
import ReviewCard from '@/components/ReviewCard';
import FAQ from '@/components/FAQ';
import CertificationMockup from '@/components/CertificationMockup';
import { PREMIUM_STATES } from '@/lib/states';

const REVIEWS = [
  {
    quote:
      'I was terrified of losing my job while dealing with my mother\'s cancer. LeaveRx got my FMLA paperwork done in 18 hours. My HR had zero issues with it. I could focus on what mattered.',
    name: 'Sarah M.',
    role: 'Marketing Director',
    state: 'California',
    date: 'March 2026',
    initials: 'SM',
  },
  {
    quote:
      'Anxiety had gotten to the point I couldn\'t function at work, but I didn\'t know I qualified for FMLA. The doctor walked me through everything. Approved for intermittent leave. Game-changer.',
    name: 'David K.',
    role: 'Operations Lead',
    state: 'Texas',
    date: 'February 2026',
    initials: 'DK',
  },
  {
    quote:
      'Doctor was incredibly kind during the consult. Didn\'t feel rushed. Got approved for short-term disability and FMLA at the same time. Saved me weeks of back-and-forth with HR.',
    name: 'Jessica R.',
    role: 'RN',
    state: 'New York',
    date: 'January 2026',
    initials: 'JR',
  },
];

const FAQS = [
  {
    q: 'Is this confidential from my employer?',
    a: 'Yes. Your employer never sees your symptoms, diagnosis, or medical records — only the completed certification form they\'re legally required to receive. LeaveRx is HIPAA-compliant and we never disclose patient information without authorization.',
  },
  {
    q: 'How quickly will I get my paperwork?',
    a: 'Most certifications are completed and delivered within 24 hours. Same-day turnaround is available with our expedited option.',
  },
  {
    q: 'What if I don\'t qualify?',
    a: 'You receive a full refund. No deductions, no questions, no documentation required on your end. We only charge when the doctor can clinically certify your case.',
  },
  {
    q: 'Is a telehealth FMLA certification legally valid?',
    a: 'Yes. Federal regulations (29 CFR § 825.306) require employers to accept FMLA Form WH-380 when signed by a licensed physician — telehealth or in-person.',
  },
  {
    q: 'Will my employer accept this?',
    a: 'Employers are legally obligated to accept properly completed DOL Form WH-380 from a licensed physician. We also offer a verification page (leaverx.co/verify) where HR can confirm your certification\'s authenticity.',
  },
  {
    q: 'What\'s the difference between FMLA and paid family leave?',
    a: 'FMLA is federal job protection — your employer must hold your job for up to 12 weeks. Paid family leave (state-level) provides income replacement during that time. They\'re often used together.',
  },
  {
    q: 'Do I need to provide medical records?',
    a: 'Records are not strictly required, but they meaningfully improve both speed and likelihood of certification. Without records, a brief clinical follow-up may be required.',
  },
  {
    q: 'Can I take intermittent leave?',
    a: 'Yes. Intermittent leave (taking FMLA in separate blocks for flare-ups, treatments, or appointments) is one of the most common patterns we certify.',
  },
  {
    q: 'How long is my FMLA certification valid?',
    a: 'Certifications are valid for the duration of leave specified by the physician — up to 12 months. Recertification may be requested by HR every 30 days in limited circumstances.',
  },
  {
    q: 'What if my condition is mental health related?',
    a: 'Mental health conditions are treated equally to physical conditions under FMLA, paid leave, and ADA. Anxiety, depression, PTSD, bipolar disorder, and ADHD are all commonly certified.',
  },
  {
    q: 'Can I get FMLA to care for a family member?',
    a: 'Yes. FMLA covers caring for a spouse, child (under 18 or incapable of self-care), or parent with a serious health condition. We use Form WH-380-F for family-care cases.',
  },
  {
    q: 'What if I work for a small employer (under 50 employees)?',
    a: 'You may not qualify for federal FMLA, but you may still qualify for state paid leave, employer-provided short-term disability, or ADA accommodations. The pre-qualification quiz checks every program.',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>LeaveRx — FMLA & Paid Leave Certification Online | Approved in 24 Hours</title>
      </Head>
      <div className="bg-cream text-ink">
        {/* Pre-qualification banner */}
        <div className="bg-navy-soft text-navy-deep">
          <div className="container-x py-2.5 text-center text-[13px] font-medium">
            Not sure if you qualify?{' '}
            <Link href="/quiz" className="underline underline-offset-2 font-semibold">
              Take our 2-minute pre-qualification quiz — free, no commitment →
            </Link>
          </div>
        </div>

        <Nav />

        {/* HERO */}
        <section className="bg-cream">
          <div className="container-x py-16 md:py-24">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="pill mb-6">
                  <Check className="w-3.5 h-3.5" />
                  Trusted by 10,000+ employees nationwide
                </div>
                <div className="eyebrow">FMLA & Paid Leave Certification</div>
                <h1 className="mt-4 font-display text-4xl md:text-6xl lg:text-7xl text-ink leading-[1.05] text-balance">
                  Protect your job while you take care of yourself.
                </h1>
                <p className="mt-7 text-lg md:text-xl text-slate leading-relaxed max-w-xl text-pretty">
                  FMLA, paid family leave, short-term disability, ADA accommodations — one evaluation with a board-certified doctor identifies every program you qualify for. Job-protected. Confidential. Approved in 24 hours or your money back.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link href="/quiz" className="btn-primary btn-lg">
                    Start Free Pre-Qualification <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/intake" className="btn-secondary btn-lg">
                    Get Certified Now — $149
                  </Link>
                </div>
                <ul className="mt-9 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-[14px] text-slate max-w-xl">
                  {[
                    'Board-certified physicians in all 50 states',
                    'Approved or 100% money back',
                    'HIPAA-compliant & private from your employer',
                    'Federal + state programs — one evaluation',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-0.5 text-approved flex-shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-mist">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=900&h=1100&fit=crop&q=80"
                    alt="A person at home, taking a quiet moment for themselves."
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 md:-left-10 hidden md:block">
                  <CertificationMockup />
                </div>
              </div>
            </div>
          </div>
        </section>

        <DoctorStrip />
        <TrustBar />
        <ProgramGrid />
        <HowItWorks />
        <ConditionGrid />

        {/* STATE COVERAGE */}
        <section className="bg-paper border-y border-mist">
          <div className="container-x py-24">
            <div className="max-w-3xl">
              <div className="eyebrow">Available Nationwide</div>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink text-balance">
                FMLA in all 50 states. Paid leave where it&apos;s available.
              </h2>
              <p className="mt-6 text-slate text-[17px] leading-relaxed">
                Federal FMLA and ADA cover employees in every state. Eleven states (highlighted below) also offer paid family leave or state disability programs that stack on top.
              </p>
            </div>

            <div className="mt-14 grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {PREMIUM_STATES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/states/${s.slug}`}
                  className="card card-hover block"
                >
                  <div className="flex items-center justify-between">
                    <div className="font-display text-[19px] text-ink">{s.name}</div>
                    <span className="pill-sm">{s.abbr}</span>
                  </div>
                  <div className="mt-3 text-[13px] text-slate">{s.programs.join(' · ')}</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-[12px] text-approved font-semibold">
                    <Check className="w-3 h-3" />
                    Avg 24-hour turnaround
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href="/states/california" className="link-soft text-[14px]">
                View all 50 states →
              </Link>
            </div>
          </div>
        </section>

        <GuaranteeSection />

        {/* SOCIAL PROOF */}
        <section className="container-x py-24">
          <div className="max-w-3xl">
            <div className="eyebrow">What Patients Say</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink text-balance">
              Real people. Real protection.
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <ReviewCard key={i} {...r} />
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-paper border-y border-mist">
          <div className="container-x py-24">
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-5">
                <div className="eyebrow">Frequently Asked</div>
                <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink text-balance">
                  Your questions, answered.
                </h2>
                <p className="mt-6 text-slate text-[16px] leading-relaxed">
                  Still have questions? Email{' '}
                  <a href="mailto:support@leaverx.co" className="link-soft">
                    support@leaverx.co
                  </a>{' '}
                  — we respond within an hour during business hours.
                </p>
              </div>
              <div className="md:col-span-7">
                <FAQ items={FAQS} />
                {/* TODO: legal review for FMLA FAQ */}
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-ink text-white">
          <div className="container-x py-24 md:py-32 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="text-[12px] font-semibold uppercase tracking-eyebrow text-white/60">
                You Have Legal Rights. Use Them.
              </div>
              <h2 className="mt-4 font-display text-4xl md:text-6xl text-white text-balance">
                Protect your job. Protect your health.
              </h2>
              <p className="mt-6 text-white/75 text-lg leading-relaxed">
                Start your free pre-qualification quiz — see what you&apos;re entitled to in 2 minutes.
              </p>
              <Link href="/quiz" className="btn-primary btn-lg mt-10 inline-flex bg-white text-navy hover:bg-navy-soft">
                Start Free Pre-Qualification <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="mt-6 text-[12px] text-white/55 flex items-center justify-center gap-2 flex-wrap">
                <ShieldCheck className="w-3.5 h-3.5" />
                100% refund if not approved · HIPAA secure · 24-hour turnaround
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
