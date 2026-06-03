import Reveal from './Reveal'
import { SKILLS } from '../data'
import s from './About.module.css'

const colorMap = { sf: s.tagSf, net: s.tagNet, web: s.tagWeb }

export default function About() {
  return (
    <section id="About" className={s.sec}>
      <div className={s.inner}>
        <Reveal><p className={s.eyebrow}>Who I Am</p></Reveal>
        <Reveal><h2 className={s.title}>About <em className={s.em}>Me</em></h2></Reveal>

        <div className={s.grid}>
          {/* Left — bio + stats */}
          <div>
            <Reveal>
              <p className={s.body}>
                Enthusiastic MCA graduate with expertise in Salesforce Development &amp;
                Administration (Apex, LWC, Flows, Visualforce), .NET, and API integrations.
                Skilled in HTML, CSS, JavaScript, Python, and ASP.NET.
              </p>
            </Reveal>
            <Reveal delay={0.07}>
              <p className={s.body} style={{ marginTop: 14 }}>
                Currently working as a Software Developer at Xchange Data Technologies.
                A quick learner with a problem-solving mindset — I thrive in collaborative
                teams and adapt to new technologies effortlessly.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className={s.stats}>
                {[['2+', 'Years Experience'], ['6+', 'Certifications'], ['8+', 'Projects Built']].map(([n, l]) => (
                  <div key={l} className={s.stat}>
                    <span className={s.statNum}>{n}</span>
                    <span className={s.statLabel}>{l}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <button className={s.btn} onClick={() => window.open('Vivek_Jadhav_Resume.pdf')}>
                Download Resume ↗
              </button>
            </Reveal>
          </div>

          {/* Right — skill tags */}
          <Reveal delay={0.08}>
            <div>
              {SKILLS.map(g => (
                <div key={g.group} className={s.skillGroup}>
                  <p className={s.skillLabel}>{g.group}</p>
                  <div className={s.tagRow}>
                    {g.tags.map(t => (
                      <span key={t} className={`${s.tag} ${colorMap[g.color]}`}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
