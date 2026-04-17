import Head from 'next/head';
import LenisProvider from '@/components/Lenis';
import ScrollProgress from '@/components/ScrollProgress';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import Tool01 from '@/components/Tool01_EligibilityCalculator';
import Tool02 from '@/components/Tool02_ProgramMatrix';
import Tool03 from '@/components/Tool03_Timeline';
import Tool04 from '@/components/Tool04_DoctorPanel';
import Tool05 from '@/components/Tool05_ConditionsExplorer';
import Tool06 from '@/components/Tool06_Privacy';
import Tool07 from '@/components/Tool07_CaseArchive';
import Tool08 from '@/components/Tool08_DocumentPreview';
import Tool09 from '@/components/Tool09_Commitment';

export default function Home() {
  return (
    <>
      <Head>
        <title>LeaveRx — Eligibility Check & FMLA Certification</title>
      </Head>
      <LenisProvider>
        <ScrollProgress />
        <Nav />
        <main>
          <Tool01 />
          <Tool02 />
          <Tool03 />
          <Tool04 />
          <Tool05 />
          <Tool06 />
          <Tool07 />
          <Tool08 />
          <Tool09 />
        </main>
        <Footer />
        <MobileStickyBar />
      </LenisProvider>
    </>
  );
}
