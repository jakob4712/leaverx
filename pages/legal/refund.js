import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import LegalLayout from '@/components/LegalLayout';

export default function Refund() {
  return (
    <>
      <Nav />
      <LegalLayout title="Refund Policy" updated="2026-04-15">
        <p>If the reviewing physician determines that your condition cannot be clinically certified, you receive a full refund. No exceptions, no questions asked.</p>
        <p>Refunds are processed to your original payment method within 5-7 business days.</p>
        <p>Refunds are not available once a certification has been completed and delivered.</p>
        <p>Contact support@leaverx.co with any refund questions.</p>
      </LegalLayout>
      <Footer />
    </>
  );
}
