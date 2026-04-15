import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const MOCK = [
  { id: 'C-10482', type: 'WH-380-E', status: 'Completed', date: '2026-04-10', clinician: 'Dr. A. Reyes, MD' },
];

export default function Portal() {
  const [email, setEmail] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  if (!signedIn) {
    return (
      <div className="bg-warm-gray min-h-screen">
        <Nav />
        <div className="container-x py-20 max-w-md">
          <div className="card">
            <h1 className="text-2xl font-bold text-navy">Patient Portal</h1>
            <p className="mt-2 text-sm text-navy/70">Enter the email you used during intake. We’ll send a secure sign-in link.</p>
            <input type="email" placeholder="you@example.com" value={email} onChange={e=>setEmail(e.target.value)} className="mt-5 w-full rounded-lg border border-navy/15 px-4 py-3" />
            <button onClick={()=>setSignedIn(true)} className="btn-primary w-full mt-4">Send sign-in link</button>
            <p className="mt-4 text-xs text-navy/50">HIPAA-compliant. Passwordless magic link.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-warm-gray min-h-screen">
      <Nav />
      <div className="container-x py-12 max-w-4xl">
        <h1 className="text-3xl font-bold text-navy">Your certifications</h1>
        <p className="mt-2 text-navy/70">Signed in as {email || 'patient@example.com'}</p>

        <div className="mt-8 space-y-4">
          {MOCK.map(c => (
            <div key={c.id} className="card flex items-center justify-between gap-4">
              <div>
                <div className="font-bold text-navy">{c.id} — {c.type}</div>
                <div className="text-sm text-navy/60">{c.clinician} · {c.date}</div>
              </div>
              <div className="flex items-center gap-3">
                <span className="chip !bg-accent-green/10 !text-accent-green">{c.status}</span>
                <button className="btn-secondary !py-2.5 !px-4 text-sm">Download PDF</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-4">
          <div className="card">
            <h3 className="font-bold text-navy">Request recertification</h3>
            <p className="mt-2 text-sm text-navy/70">Employer asking for updated paperwork? Recertify for $99.</p>
            <button className="btn-secondary mt-4 text-sm">Start recertification</button>
          </div>
          <div className="card">
            <h3 className="font-bold text-navy">Upload additional documentation</h3>
            <p className="mt-2 text-sm text-navy/70">Add supporting medical records at any time.</p>
            <button className="btn-secondary mt-4 text-sm">Upload files</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
