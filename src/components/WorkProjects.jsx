import { useState } from 'react'
import Reveal from './Reveal'
import { WORK_PROJECTS } from '../data'
import s from './WorkProjects.module.css'

const FILTERS = ['All', '.NET', 'Full Stack']

export default function WorkProjects() {
  const [filter, setFilter] = useState('All')
  const list = filter === 'All'
    ? WORK_PROJECTS
    : WORK_PROJECTS.filter(p => p.category === filter)

  return (
    <section id="Work" className={s.sec}>
      <div className={s.inner}>
        <Reveal><p className={s.eyebrow}>Professional Deliveries</p></Reveal>
        <Reveal>
          <h2 className={s.secTitle}>
            Live Client <em className={s.em}>Projects</em>
          </h2>
        </Reveal>

        {/* Filter pills */}
        <Reveal>
          <div className={s.filters}>
            {FILTERS.map(f => (
              <button
                key={f}
                className={`${s.filterBtn} ${filter === f ? s.filterActive : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Cards grid */}
        <div className={s.grid}>
          {list.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.07}>
              <div
                className={s.card}
                style={{ '--accent': p.color, borderTop: `2.5px solid ${p.color}` }}
              >
                {/* Card header */}
                <div className={s.cardTop}>
                  <div className={s.iconWrap} style={{ background: `${p.color}14` }}>
                    <span className={s.emoji}>{p.emoji}</span>
                  </div>
                  <div className={s.headerText}>
                    <h3 className={s.name}>{p.name}</h3>
                    <span className={s.date}>{p.date}</span>
                  </div>
                </div>

                {/* Category tag */}
                <span
                  className={s.catTag}
                  style={{ background: `${p.color}14`, color: p.color, border: `1px solid ${p.color}30` }}
                >
                  {p.category}
                </span>

                {/* Tech stack */}
                <div className={s.techRow}>
                  {p.tech.map(t => (
                    <span key={t} className={s.techTag}>{t}</span>
                  ))}
                </div>

                {/* Bullet points */}
                <ul className={s.points}>
                  {p.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>

                {/* Footer */}
                {/* <div className={s.cardFooter}>
                  <span className={`${s.status} ${p.status === 'Completed' ? s.done : s.inprogress}`}>
                    {p.status === 'Completed' ? '✓ Completed' : '● In Progress'}
                  </span>
                  {p.url && (
                    <button
                      className={s.siteBtn}
                      onClick={() => window.open(p.url)}
                    >
                      View Site ↗
                    </button>
                  )}
                </div> */}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
