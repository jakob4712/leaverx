import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function HIPAA() {
  return (
    <div>
      <Nav />
      <div className="container-x py-16 max-w-3xl">
        <h1 className="text-4xl font-bold text-navy">HIPAA Notice of Privacy Practices</h1>
        <p className="text-navy/70 mt-2">Effective: 2026-04-15</p>
        <div className="mt-6 space-y-4 text-navy/80 leading-relaxed">
          <p>This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully.</p>
          <p>LeaveRx uses your protected health information (PHI) only to: (1) enable physician review of your case, (2) complete DOL Form WH-380 certification, (3) comply with legal obligations, and (4) operate our service.</p>
          <p>We do not sell PHI. We do not use PHI for marketing. We share PHI only with the reviewing physician, with your employer when you direct us to send the completed form, and with business associates bound by HIPAA.</p>
          <p>You have the right to inspect, copy, amend, and request restrictions on your PHI. Contact our Privacy Officer at privacy@leaverx.co.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
