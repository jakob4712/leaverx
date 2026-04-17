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
      setResult({ valid: false });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Verify a LeaveRx Certification</title>
      </Head>
      <Nav />
      <div className="container-narrow py-16 md:py-24">
        <div className="text-center">
          <div className="w-12 h-12 rounded-sm bg-bureau-soft text-bureau flex items-center justify-center mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="spec text-bureau mt-6">For HR & Employers</div>
          <h1 className="mt-3 text-ink" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
            Verify a LeaveRx certification.
          </h1>
          <p className="mt-4 text-graphite text-[16px] max-w-xl mx-auto leading-relaxed">
            Confirm that a leave certification presented by your employee was issued by a licensed, board-certified physician through LeaveRx.
          </p>
        </div>

        <form onSubmit={lookup} className="mt-10 card-paper p-6">
          <div className="spec mb-3">Certification Number</div>
          <div className="flex gap-2 flex-col sm:flex-row">
            <input
              type="text"
              placeholder="e.g. C-10482"
              value={certNumber}
              onChange={(e) => setCertNumber(e.target.value)}
              className="input-shelf flex-1 num"
            />
            <button type="submit" disabled={loading || !certNumber.trim()} className="btn-bureau disabled:opacity-50">
              <Search className="w-3.5 h-3.5" />
              {loading ? 'Verifying…' : 'Verify'}
            </button>
          </div>
          <p className="mt-3 spec">Number appears top-right of every LeaveRx certification PDF.</p>
        </form>

        {result && (
          <div className="mt-6">
            {result.valid ? (
              <div className="card-paper p-6 border-stamp">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm bg-stamp-soft text-stamp flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="spec text-stamp">Valid Certification</div>
                    <div className="font-body font-semibold text-[20px] text-ink mt-1">
                      Certification {result.id}
                    </div>
                    <div className="mt-4 grid sm:grid-cols-2 gap-3">
                      <Detail label="Form Type" value={result.formType} />
                      <Detail label="Issued On" value={result.issuedOn} />
                      <Detail label="Physician" value={result.physician} />
                      <Detail label="License" value={result.license} />
                    </div>
                    <p className="mt-5 text-[13px] text-graphite leading-relaxed">
                      Issued by a U.S. board-certified physician licensed in the patient&apos;s state. Recognized under federal FMLA regulations (29 CFR § 825.306). Patient PHI protected under HIPAA.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="card-paper p-6 border-alarm">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm bg-alarm-soft text-alarm flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="spec text-alarm">Not Found</div>
                    <div className="font-body font-semibold text-[18px] text-ink mt-1">
                      We couldn&apos;t verify this certification.
                    </div>
                    <p className="mt-3 text-[14px] text-graphite leading-relaxed">
                      Double-check the number, or contact <a className="link-ink" href="mailto:compliance@leaverx.co">compliance@leaverx.co</a>.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link href="/" className="link-ink text-[14px]">
            ← Back to LeaveRx
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <div className="spec">{label}</div>
      <div className="text-ink mt-1 text-[14px]">{value}</div>
    </div>
  );
}
