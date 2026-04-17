import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import LegalLayout from '@/components/LegalLayout';

export default function HIPAA() {
  return (
    <>
      <Nav />
      <LegalLayout title="HIPAA Notice of Privacy Practices" updated="2026-04-15">
        <p>This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully.</p>
        <p>LeaveRx uses your protected health information (PHI) only to: (1) enable physician review of your case, (2) complete leave certification paperwork, (3) comply with legal obligations, and (4) operate our service.</p>
        <p>We do not sell PHI. We do not use PHI for marketing. We share PHI only with the reviewing physician, with your employer when you direct us to send the completed form, and with business associates bound by HIPAA.</p>
        <p>You have the right to inspect, copy, amend, and request restrictions on your PHI. Contact our Privacy Officer at privacy@leaverx.co.</p>
      </LegalLayout>
      <Footer />
    </>
  );
}
