import '@/styles/globals.css';
import Head from 'next/head';
import { Source_Serif_4, Inter } from 'next/font/google';

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${sourceSerif.variable} ${inter.variable}`}>
      <Head>
        <title>LeaveRx — FMLA & Paid Leave Certification Online | Approved in 24 Hours</title>
        <meta name="description" content="Protect your job while you take care of yourself. FMLA, paid family leave, short-term disability, and ADA accommodations — one evaluation with a board-certified physician. Approved in 24 hours or your money back." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="LeaveRx — Protected Leave, Made Simple" />
        <meta property="og:description" content="FMLA, paid leave, disability, and ADA accommodations — one telehealth evaluation, every program you qualify for. Approved in 24 hours." />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#F7F5F0" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
