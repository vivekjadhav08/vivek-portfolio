import Reveal from './Reveal'
import { EXPERIENCE } from '../data'
import s from './Experience.module.css'

export default function Experience() {
  return (
    <section id="Experience" className={s.sec}>
      <div className={s.inner}>
        <Reveal><p className={s.eyebrow}>Career</p></Reveal>
        <Reveal><h2 className={s.secTitle}>Work <em className={s.em}>Experience</em></h2></Reveal>

        {EXPERIENCE.map((exp, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className={s.card}>
              <div className={s.bar} style={{ background: exp.bar }} />

              <div className={s.header}>
                <div>
                  <h3 className={s.role}>{exp.role}</h3>
                  <p className={s.company}>{exp.company}</p>
                </div>
                <span className={`${s.pill} ${exp.current ? s.pillLive : s.pillPast}`}>
                  {exp.current && <span className={s.liveDot} />}
                  {exp.period}
                </span>
              </div>

              <ul className={s.points}>
                {exp.points.map((pt, j) => <li key={j}>{pt}</li>)}
              </ul>

              {exp.projects.length > 0 && (
                <div className={s.projSection}>
                  <p className={s.projLabel}>Key Projects</p>
                  <div className={s.chips}>
                    {exp.projects.map((pr, j) => (
                      <div key={j} className={s.chip}>
                        <p className={s.chipName}>{pr.name}</p>
                        <p className={s.chipDesc}>{pr.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
