import { useState, useEffect, useRef } from 'react'

/**
 * useInView — returns [ref, isVisible].
 * Attach `ref` to any DOM element; `isVisible` becomes true once
 * the element scrolls into the viewport (fires only once).
 */
export function useInView(threshold = 0.12) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()      // fire only once
        }
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}
