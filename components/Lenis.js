import { useEffect } from 'react';
import LenisLib from 'lenis';

export default function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new LenisLib({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
  return children;
}
