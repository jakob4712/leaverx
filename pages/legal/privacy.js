import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <div>
      <Nav />
      <div className="container-x py-16 max-w-3xl prose prose-slate">
        <h1 className="text-4xl font-bold text-navy">Privacy Policy</h1>
        <p className="text-navy/70 mt-2">Last updated: 2026-04-15</p>
        <p className="mt-6 text-navy/80">LeaveRx is committed to protecting the privacy of your health information. We collect personal and medical information solely for the purpose of facilitating physician review and FMLA certification.</p>
        <h2 className="mt-8 text-xl font-bold text-navy">Information we collect</h2>
        <p className="text-navy/80">Identifying information (name, email, date of birth, address), employer information, and medical information you provide during intake or upload.</p>
        <h2 className="mt-8 text-xl font-bold text-navy">How we use it</h2>
        <p className="text-navy/80">Your information is shared only with the licensed physician reviewing your case and with payment processors as necessary to complete your transaction.</p>
        <h2 className="mt-8 text-xl font-bold text-navy">Security</h2>
        <p className="text-navy/80">All data is encrypted in transit (TLS) and at rest. Access is limited to authorized personnel under HIPAA policies.</p>
        <h2 className="mt-8 text-xl font-bold text-navy">Your rights</h2>
        <p className="text-navy/80">You may request access, correction, or deletion of your records at any time by contacting support@leaverx.co.</p>
      </div>
      <Footer />
    </div>
  );
}
