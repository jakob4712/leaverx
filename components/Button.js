import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const VARIANTS = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
};

export default function Button({
  children,
  href,
  variant = 'primary',
  size,
  arrow = false,
  className = '',
  ...rest
}) {
  const cls = `${VARIANTS[variant] || VARIANTS.primary} ${size === 'lg' ? 'btn-lg' : ''} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && <ArrowRight className="w-4 h-4" />}
    </>
  );
  if (href) {
    return (
      <Link href={href} className={cls} {...rest}>
        {inner}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {inner}
    </button>
  );
}
