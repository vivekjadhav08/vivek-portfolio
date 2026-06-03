// Education.jsx
import Reveal from './Reveal'
import { EDUCATION, INTERNSHIPS } from '../data'
import s from './Education.module.css'

function TCard({ item, delay }) {
  return (
    <Reveal delay={delay}>
      <div className={s.card}>
        <div className={s.dot} />
        <div>
          <p className={s.period}>{item.period}</p>
          <p className={s.title}>{item.degree || item.role}</p>
          <p className={s.sub}>{item.school || item.company}</p>
          {item.score && <p className={s.score}>{item.score}</p>}
        </div>
      </div>
    </Reveal>
  )
}

export default function Education() {
  return (
    <section id="Education" className={s.sec}>
      <div className={s.inner}>
        <Reveal><p className={s.eyebrow}>Background</p></Reveal>
        <Reveal><h2 className={s.secTitle}>Education &amp; <em className={s.em}>Training</em></h2></Reveal>
        <div className={s.grid}>
          <div>
            <Reveal><p className={s.colLabel}>Academic</p></Reveal>
            {EDUCATION.map((e, i) => <TCard key={i} item={e} delay={i * 0.1} />)}
          </div>
          <div>
            <Reveal><p className={s.colLabel}>Internships</p></Reveal>
            {INTERNSHIPS.map((e, i) => <TCard key={i} item={e} delay={i * 0.1} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
