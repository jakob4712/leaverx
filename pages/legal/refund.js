import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Refund() {
  return (
    <div>
      <Nav />
      <div className="container-x py-16 max-w-3xl">
        <h1 className="text-4xl font-bold text-navy">Refund Policy</h1>
        <p className="text-navy/70 mt-2">Last updated: 2026-04-15</p>
        <div className="mt-6 space-y-4 text-navy/80 leading-relaxed">
          <p>If the reviewing physician determines that your condition cannot be clinically certified for FMLA leave, you receive a full refund. No exceptions, no questions asked.</p>
          <p>Refunds are processed to your original payment method within 5–7 business days.</p>
          <p>Refunds are not available once a certification has been completed and delivered.</p>
          <p>Contact support@leaverx.co with any refund questions.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
