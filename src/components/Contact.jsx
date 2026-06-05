import Reveal from './Reveal'
import { CONTACT } from '../data'
import s from './Contact.module.css'

export default function Contact() {
  return (
    <section id="Contact" className={s.sec}>
      <div className={s.inner}>
        <div className={s.wrap}>
          <Reveal><p className={s.eyebrow}>Let's Connect</p></Reveal>
          <Reveal>
            <h2 className={s.secTitle} style={{ marginBottom: 14 }}>
              Get In <em className={s.em}>Touch</em>
            </h2>
          </Reveal>
          <Reveal>
            <p className={s.sub}>
              Open to Salesforce &amp; .NET opportunities.
              Let's build something great together.
            </p>
          </Reveal>

          <div className={s.grid}>
            {CONTACT.map((c, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <a href={c.href} target="_blank" rel="noopener noreferrer" className={s.card}>
                  <span className={s.icon}>{c.emoji}</span>
                  <div>
                    <p className={s.type}>{c.type}</p>
                    <p className={s.value}>{c.value}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.28}>
            <p className={s.location}>📍 Pune, Maharashtra</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
