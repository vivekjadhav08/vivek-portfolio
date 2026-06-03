import Reveal from './Reveal'
import { CERTIFICATIONS } from '../data'
import s from './Certifications.module.css'

export default function Certifications() {
  return (
    <section id="Certifications" className={s.sec}>
      <div className={s.inner}>
        <Reveal><p className={s.eyebrow}>Credentials</p></Reveal>
        <Reveal><h2 className={s.secTitle}>My <em className={s.em}>Certifications</em></h2></Reveal>
        <div className={s.grid}>
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div
                className={s.card}
                onClick={() => window.open(c.file)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && window.open(c.file)}
              >
                <div className={s.emoji}>{c.emoji}</div>
                <h3 className={s.title}>{c.title}</h3>
                <p className={s.issuer}>{c.issuer}</p>
                <p className={s.cta}>View Certificate →</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
