import { useSpring, animated } from '@react-spring/web';

export default function DataNumber({
  value,
  prefix = '',
  suffix = '',
  className = '',
  decimals = 0,
}) {
  const { n } = useSpring({
    n: Number(value) || 0,
    config: { mass: 1, tension: 170, friction: 22 },
  });
  return (
    <animated.span className={`num ${className}`}>
      {n.to((v) => `${prefix}${v.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}${suffix}`)}
    </animated.span>
  );
}
