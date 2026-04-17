import { useState } from 'react';
import Head from 'next/head';
import { Download, Check, Clock, FileText } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const TIMELINE = [
  { key: 'quiz', label: 'Pre-Qual', done: true },
  { key: 'intake', label: 'Intake', done: true },
  { key: 'doctor', label: 'Reviewing', done: true },
  { key: 'consult', label: 'Consult', done: true },
  { key: 'evaluation', label: 'Evaluation', done: true },
  { key: 'approved', label: 'Approved', done: true },
  { key: 'delivered', label: 'Delivered', done: true },
];

const MOCK_CERTS = [
  {
    id: 'C-10482',
    type: 'FMLA — WH-380-E',
    status: 'Completed',
    date: '2026-04-10',
    clinician: 'Dr. Maya Patel, MD',
  },
];

export default function Portal() {
  const [email, setEmail] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  if (!signedIn) {
    return (
      <>
        <Head><title>Patient Portal — LeaveRx</title></Head>
        <Nav />
        <div className="container-narrow py-20 max-w-md mx-auto">
          <div className="card-paper p-8">
            <div className="spec text-bureau">Patient Portal</div>
            <h1 className="mt-3 font-body font-semibold text-[24px] text-ink">Sign in</h1>
            <p className="mt-2 text-[14px] text-graphite">
              Enter the email you used during intake. We&apos;ll send a secure sign-in link.
            </p>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-line mt-5"
            />
            <button onClick={() => setSignedIn(true)} className="btn-bureau w-full mt-6 justify-center">
              Send sign-in link
            </button>
            <p className="mt-4 spec">HIPAA-compliant · Passwordless</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head><title>Your Certifications — LeaveRx</title></Head>
      <Nav />
      <div className="container-x py-12 max-w-5xl mx-auto">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="spec text-bureau">Your Certifications</div>
            <h1 className="mt-3 font-body font-semibold text-[28px] text-ink">
              Signed in · {email || 'patient@example.com'}
            </h1>
          </div>
          <span className="pill-stamp">All systems normal</span>
        </div>

        <div className="mt-10 card-paper p-6">
          <div className="spec">Active Leave Status</div>
          <div className="mt-2 font-body font-semibold text-[20px] text-ink">
            Approved · FMLA Continuous Leave
          </div>
          <div className="mt-6 grid grid-cols-7 gap-2">
            {TIMELINE.map((s) => (
              <div key={s.key} className="flex flex-col items-center text-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${s.done ? 'bg-stamp text-paper' : 'bg-shelf text-ash'}`}>
                  {s.done ? <Check className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
                </div>
                <div className="mt-2 spec text-center leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-3">
          {MOCK_CERTS.map((c) => (
            <div key={c.id} className="card-paper p-5 flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-bureau-soft text-bureau flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-body font-semibold text-[16px] text-ink">{c.id} — {c.type}</div>
                  <div className="num text-[12px] text-ash mt-1">{c.clinician} · {c.date}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="pill-stamp">{c.status}</span>
                <button className="btn-ghost text-[12px]">
                  <Download className="w-3.5 h-3.5" /> Download
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-4">
          <div className="card-paper p-6">
            <div className="spec">Recertification</div>
            <div className="mt-2 font-body font-semibold text-[16px] text-ink">Request updated paperwork</div>
            <p className="mt-2 text-[13.5px] text-graphite">Recertify with the same physician for $99.</p>
            <button className="btn-ghost mt-4 text-[12px]">Start recertification</button>
          </div>
          <div className="card-paper p-6">
            <div className="spec">Records</div>
            <div className="mt-2 font-body font-semibold text-[16px] text-ink">Upload additional documentation</div>
            <p className="mt-2 text-[13.5px] text-graphite">Add supporting medical records at any time.</p>
            <button className="btn-ghost mt-4 text-[12px]">Upload files</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
