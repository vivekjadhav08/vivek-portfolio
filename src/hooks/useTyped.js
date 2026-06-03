import { useState, useEffect } from 'react'

/**
 * useTyped — cycles through an array of strings with a typing/deleting effect.
 * No external libraries needed.
 *
 * @param {string[]} strings   - Array of strings to cycle through
 * @param {number}   typeSpeed - ms per character while typing (default 75)
 * @param {number}   backSpeed - ms per character while deleting (default 42)
 * @param {number}   backDelay - ms to pause before deleting (default 1900)
 */
export function useTyped(strings, typeSpeed = 75, backSpeed = 42, backDelay = 1900) {
  const [display,  setDisplay]  = useState('')
  const [strIndex, setStrIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = strings[strIndex]
    let timer

    if (!deleting && charIndex < current.length) {
      // Typing forward
      timer = setTimeout(() => {
        setDisplay(current.slice(0, charIndex + 1))
        setCharIndex(i => i + 1)
      }, typeSpeed)
    } else if (!deleting && charIndex === current.length) {
      // Pause before deleting
      timer = setTimeout(() => setDeleting(true), backDelay)
    } else if (deleting && charIndex > 0) {
      // Deleting
      timer = setTimeout(() => {
        setDisplay(current.slice(0, charIndex - 1))
        setCharIndex(i => i - 1)
      }, backSpeed)
    } else {
      // Move to next string
      setDeleting(false)
      setStrIndex(i => (i + 1) % strings.length)
    }

    return () => clearTimeout(timer)
  }, [charIndex, deleting, strIndex, strings, typeSpeed, backSpeed, backDelay])

  return display
}
