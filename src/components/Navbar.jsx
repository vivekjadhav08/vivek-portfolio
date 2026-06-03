import { useState, useEffect } from 'react'
import s from './Navbar.module.css'

const LINKS = ['Home', 'About', 'Education', 'Certifications', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const [active,   setActive]   = useState('Home')
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16)
      // Highlight the current section
      for (let i = LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(LINKS[i])
        if (el && el.getBoundingClientRect().top <= 88) {
          setActive(LINKS[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className={`${s.header} ${scrolled ? s.scrolled : ''}`}>
      <div className={s.inner}>

        {/* Logo */}
        <div className={s.logo} onClick={() => scrollTo('Home')}>
          Vivek <span>Jadhav</span>
        </div>

        {/* Desktop nav */}
        <nav className={s.desktopNav}>
          {LINKS.map(l => (
            <button
              key={l}
              className={`${s.link} ${active === l ? s.active : ''}`}
              onClick={() => scrollTo(l)}
            >
              {l}
            </button>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className={`${s.ham} ${open ? s.hamOpen : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className={s.mobileMenu}>
          {LINKS.map(l => (
            <button
              key={l}
              className={`${s.mobileLink} ${active === l ? s.active : ''}`}
              onClick={() => scrollTo(l)}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
