import { useInView } from '../hooks/useInView'

/**
 * Reveal — wraps children in a div that fades + slides up
 * when it enters the viewport.
 *
 * Props:
 *   delay    {number}  transition-delay in seconds (default 0)
 *   style    {object}  extra inline styles on wrapper div
 *   as       {string}  element tag, default 'div'
 */
export default function Reveal({ children, delay = 0, style = {}, className = '' }) {
  const [ref, visible] = useInView()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity .65s ease ${delay}s, transform .65s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
