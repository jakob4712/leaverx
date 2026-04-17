export default function Hairline({ className = '', bold = false }) {
  return <div className={`${bold ? 'hairline-bold' : 'hairline'} ${className}`} />;
}
