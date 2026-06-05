import { useTyped } from '../hooks/useTyped'
import { ROLES }    from '../data'
import s from './Hero.module.css'

export default function Hero() {
  const typed = useTyped(ROLES)

  return (
    <section id="Home" className={s.hero}>
      <div className={s.blob1} aria-hidden />
      <div className={s.blob2} aria-hidden />

      <div className={s.inner}>

        {/* ── Left: text ── */}
        <div className={s.textSide}>
          <div className={s.badge}>
            <span className={s.dot} aria-hidden />
            Available for opportunities
          </div>

          <h1 className={s.name}>
            <span className={s.hi}>Hi there, I'm</span>
            <span className={s.grad}>Vivek Jadhav</span>
          </h1>

          <p className={s.typed}>
            {typed}<span className={s.cursor}>|</span>
          </p>

          <p className={s.desc}>
            MCA graduate specialising in Salesforce Development &amp; .NET.
            Building scalable APIs, Blazor apps, and Salesforce solutions
            that drive real-world impact.
          </p>

          <div className={s.btns}>
            <button className={s.btnPrimary} onClick={() => window.open('Vivek_Jadhav_Resume.pdf')}>
              View Resume ↗
            </button>
            <a href="#Contact" className={s.btnOutline}>Get in Touch</a>
          </div>

          {/* Quick stats */}
          <div className={s.stats}>
            {[['2+', 'Years Exp'], ['6+', 'Certifications'], ['8+', 'Projects']].map(([n, l]) => (
              <div key={l} className={s.stat}>
                <span className={s.statNum}>{n}</span>
                <span className={s.statLabel}>{l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: avatar ── */}
        <div className={s.photoSide}>
          <div className={s.ring}>
            {/* Replace the src below with your actual photo path e.g. /images/vivek.jpg */}
            <img
              src="/images/vivek.jpg"
              alt="Vivek Jadhav"
              className={s.photo}
              onError={e => {
                e.currentTarget.style.display = 'none'
                document.getElementById('avatar-fallback').style.display = 'flex'
              }}
            />
            <div id="avatar-fallback" className={s.fallback} style={{ display: 'none' }}>VJ</div>
          </div>
          <div className={s.statusChip}>
            <span className={s.greenDot} aria-hidden />
            Open to work
          </div>
        </div>

      </div>
    </section>
  )
}
