import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Terms() {
  return (
    <div>
      <Nav />
      <div className="container-x py-16 max-w-3xl">
        <h1 className="text-4xl font-bold text-navy">Terms of Service</h1>
        <p className="text-navy/70 mt-2">Last updated: 2026-04-15</p>
        <div className="mt-6 space-y-4 text-navy/80 leading-relaxed">
          <p>By using LeaveRx, you agree to these Terms. LeaveRx provides a telehealth platform that connects patients with independently licensed physicians for the purpose of FMLA certification.</p>
          <p>Certification is not guaranteed. A physician may determine that the clinical evidence does not support certification. In such cases, you are entitled to a full refund.</p>
          <p>LeaveRx does not provide ongoing medical treatment. Physicians on the LeaveRx platform are not your primary care providers.</p>
          <p>You agree to provide accurate, truthful information. Providing false information may result in denial of certification and forfeiture of fees.</p>
          <p>All disputes are governed by the laws of the State of Delaware.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
