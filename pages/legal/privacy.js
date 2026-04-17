import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import LegalLayout from '@/components/LegalLayout';

export default function Privacy() {
  return (
    <>
      <Nav />
      <LegalLayout title="Privacy Policy" updated="2026-04-15">
        <p>LeaveRx is committed to protecting the privacy of your health information. We collect personal and medical information solely for the purpose of facilitating physician review and protected leave certification.</p>
        <h2>Information we collect</h2>
        <p>Identifying information (name, email, date of birth, address), employer information, and medical information you provide during intake or upload.</p>
        <h2>How we use it</h2>
        <p>Your information is shared only with the licensed physician reviewing your case and with payment processors as necessary to complete your transaction.</p>
        <h2>Security</h2>
        <p>All data is encrypted in transit (TLS) and at rest (AES-256). Access is limited to authorized personnel under HIPAA policies.</p>
        <h2>Your rights</h2>
        <p>You may request access, correction, or deletion of your records at any time by contacting support@leaverx.co.</p>
      </LegalLayout>
      <Footer />
    </>
  );
}
