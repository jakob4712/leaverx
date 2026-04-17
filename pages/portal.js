import { useState } from 'react';
import Head from 'next/head';
import { Download, Check, Clock, FileText } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const TIMELINE = [
  { key: 'quiz', label: 'Pre-Qualification', done: true },
  { key: 'intake', label: 'Intake Complete', done: true },
  { key: 'doctor', label: 'Doctor Reviewing', done: true },
  { key: 'consult', label: 'Consultation', done: true },
  { key: 'evaluation', label: 'In Evaluation', done: true },
  { key: 'approved', label: 'Approved', done: true },
  { key: 'delivered', label: 'Paperwork Delivered', done: true },
];

const MOCK_CERTS = [
  {
    id: 'C-10482',
    type: 'FMLA — WH-380-E',
    status: 'Completed',
    date: 'April 10, 2026',
    clinician: 'Dr. Maya Patel, MD',
  },
];

export default function Portal() {
  const [email, setEmail] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  if (!signedIn) {
    return (
      <>
        <Head>
          <title>Patient Portal — LeaveRx</title>
        </Head>
        <div className="bg-cream min-h-screen text-ink">
          <Nav />
          <div className="container-narrow py-20 max-w-md mx-auto">
            <div className="card p-8">
              <h1 className="font-display text-2xl text-ink">Patient Portal</h1>
              <p className="mt-2 text-[14.5px] text-slate">
                Enter the email you used during intake. We&apos;ll send a secure sign-in link.
              </p>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="field-input mt-5"
              />
              <button onClick={() => setSignedIn(true)} className="btn-primary w-full mt-4 justify-center">
                Send sign-in link
              </button>
              <p className="mt-4 text-[12px] text-fog">HIPAA-compliant. Passwordless magic link.</p>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Your Certifications — LeaveRx</title>
      </Head>
      <div className="bg-cream min-h-screen text-ink">
        <Nav />
        <div className="container-x py-12 max-w-5xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="font-display text-3xl md:text-4xl text-ink">Your certifications</h1>
              <p className="mt-2 text-slate text-[14.5px]">Signed in as {email || 'patient@example.com'}</p>
            </div>
            <span className="pill bg-approved/15 text-approved">All systems normal</span>
          </div>

          <div className="mt-10 card p-6">
            <div className="eyebrow">Active leave status</div>
            <h2 className="mt-2 font-display text-xl text-ink">Approved · FMLA Continuous Leave</h2>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-7 gap-2">
              {TIMELINE.map((s, i) => (
                <div key={s.key} className="flex flex-col items-center text-center">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center ${
                      s.done ? 'bg-approved text-white' : 'bg-mist text-fog'
                    }`}
                  >
                    {s.done ? <Check className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                  </div>
                  <div className="mt-2 text-[11px] text-slate leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {MOCK_CERTS.map((c) => (
              <div key={c.id} className="card flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-navy-soft text-navy flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display text-[18px] text-ink">{c.id} — {c.type}</div>
                    <div className="text-[13.5px] text-slate">{c.clinician} · {c.date}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="pill bg-approved/15 text-approved">{c.status}</span>
                  <button className="btn-secondary !py-2.5 !px-4 text-sm">
                    <Download className="w-4 h-4" /> Download PDF
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-4">
            <div className="card">
              <h3 className="font-display text-[18px] text-ink">Request recertification</h3>
              <p className="mt-2 text-[14px] text-slate">
                Employer asking for updated paperwork? Recertify for $99.
              </p>
              <button className="btn-secondary mt-4 text-sm">Start recertification</button>
            </div>
            <div className="card">
              <h3 className="font-display text-[18px] text-ink">Upload additional documentation</h3>
              <p className="mt-2 text-[14px] text-slate">
                Add supporting medical records at any time.
              </p>
              <button className="btn-secondary mt-4 text-sm">Upload files</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
