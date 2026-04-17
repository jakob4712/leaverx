import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ShieldCheck, AlertTriangle, Search } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Verify() {
  const [certNumber, setCertNumber] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function lookup(e) {
    e.preventDefault();
    if (!certNumber.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch(`/api/verify?cert=${encodeURIComponent(certNumber.trim())}`);
      const json = await res.json();
      setResult(json);
    } catch {
      setResult({ valid: false, error: 'Network error. Try again.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Verify a LeaveRx Certification — Employer Verification Portal</title>
        <meta name="description" content="Confirm the authenticity of a LeaveRx-issued FMLA certification. Enter the certification number to verify it was issued by a board-certified physician." />
      </Head>
      <div className="bg-cream min-h-screen text-ink">
        <Nav />

        <section className="container-narrow py-16 md:py-24">
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-navy-soft text-navy flex items-center justify-center mx-auto">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div className="eyebrow mt-6">For HR & Employers</div>
            <h1 className="mt-4 font-display text-3xl md:text-5xl text-ink text-balance">
              Verify a LeaveRx certification.
            </h1>
            <p className="mt-5 text-slate text-[16.5px] leading-relaxed max-w-xl mx-auto">
              Confirm that a leave certification presented by your employee was issued by a licensed, board-certified physician through LeaveRx.
            </p>
          </div>

          <form onSubmit={lookup} className="mt-10 card p-6 md:p-8">
            <label className="field-label">Certification number</label>
            <div className="mt-2 flex gap-2 flex-col sm:flex-row">
              <input
                type="text"
                placeholder="e.g. C-10482 or CRT-2026-04-XXXXX"
                value={certNumber}
                onChange={(e) => setCertNumber(e.target.value)}
                className="field-input flex-1"
              />
              <button type="submit" disabled={loading || !certNumber.trim()} className="btn-primary disabled:opacity-50">
                <Search className="w-4 h-4" />
                {loading ? 'Verifying…' : 'Verify'}
              </button>
            </div>
            <p className="mt-3 text-[12.5px] text-fog">
              The certification number appears in the top-right of every LeaveRx certification PDF.
            </p>
          </form>

          {result && (
            <div className="mt-6">
              {result.valid ? (
                <div className="card border-approved">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-approved/15 text-approved flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[12px] font-semibold uppercase tracking-eyebrow text-approved">
                        Valid certification
                      </div>
                      <div className="font-display text-xl text-ink mt-1">
                        Certification {result.id}
                      </div>
                      <div className="mt-4 grid sm:grid-cols-2 gap-3 text-[14px]">
                        <Detail label="Form type" value={result.formType} />
                        <Detail label="Issued on" value={result.issuedOn} />
                        <Detail label="Certifying physician" value={result.physician} />
                        <Detail label="Physician license" value={result.license} />
                      </div>
                      <p className="mt-5 text-[13px] text-slate leading-relaxed">
                        This certification was issued by a U.S. board-certified physician licensed in the patient&apos;s state and is recognized under federal FMLA regulations (29 CFR § 825.306). Patient medical details are protected under HIPAA and not disclosed by this verification service.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="card border-alert">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-alert/15 text-alert flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[12px] font-semibold uppercase tracking-eyebrow text-alert">
                        Not found
                      </div>
                      <div className="font-display text-xl text-ink mt-1">
                        We couldn&apos;t verify this certification.
                      </div>
                      <p className="mt-3 text-[14px] text-slate leading-relaxed">
                        Double-check the certification number — it appears in the top-right of every LeaveRx PDF. If the issue persists, contact our compliance team at{' '}
                        <a className="link-soft" href="mailto:compliance@leaverx.co">
                          compliance@leaverx.co
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="mt-12 grid md:grid-cols-3 gap-4">
            <InfoCard
              title="What LeaveRx certifies"
              body="LeaveRx issues DOL Form WH-380-E (own condition) and WH-380-F (family member), as well as state-specific paid leave and disability medical certifications."
            />
            <InfoCard
              title="Physician credentials"
              body="Every certification is signed by a U.S. board-certified physician (MD or DO) licensed in the patient's state. License numbers are included on every form."
            />
            <InfoCard
              title="Compliance team"
              body="Questions? Reach our compliance team at compliance@leaverx.co. Response within one business day."
            />
          </div>

          <div className="mt-10 text-center">
            <Link href="/" className="link-soft text-[14px]">
              ← Back to LeaveRx
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-eyebrow text-fog font-semibold">{label}</div>
      <div className="text-ink mt-0.5">{value}</div>
    </div>
  );
}

function InfoCard({ title, body }) {
  return (
    <div className="card">
      <div className="font-display text-[16px] text-ink">{title}</div>
      <p className="mt-2 text-[13.5px] text-slate leading-relaxed">{body}</p>
    </div>
  );
}
