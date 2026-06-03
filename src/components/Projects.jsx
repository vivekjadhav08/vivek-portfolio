import { useState } from 'react'
import Reveal from './Reveal'
import { PROJECTS } from '../data'
import s from './Projects.module.css'

const FILTERS = ['All', 'BCA', 'MCA', 'Personal']

const catCls = { BCA: s.catBca, MCA: s.catMca, Personal: s.catPersonal }

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const list = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter)

  return (
    <section id="Projects" className={s.sec}>
      <div className={s.inner}>
        <Reveal><p className={s.eyebrow}>Work</p></Reveal>
        <Reveal><h2 className={s.secTitle}>Featured <em className={s.em}>Projects</em></h2></Reveal>

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

        {/* Project grid */}
        <div className={s.grid}>
          {list.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <div className={s.card} style={{ borderTop: `2.5px solid ${p.color}` }}>

                {/* Image / fallback thumbnail */}
                <div
                  className={s.imgWrap}
                  style={{ background: `linear-gradient(135deg,${p.color}14,${p.color}06)` }}
                >
                  {p.img ? (
                    <img
                      src={p.img}
                      alt={p.title}
                      className={s.img}
                      onError={e => {
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.nextSibling.style.display = 'flex'
                      }}
                    />
                  ) : null}
                  <div className={s.imgFallback} style={{ display: p.img ? 'none' : 'flex' }}>
                    <span style={{ fontSize: 48 }}>{p.emoji}</span>
                  </div>

                  {/* Category badge */}
                  <span className={`${s.catBadge} ${catCls[p.category]}`}>{p.category}</span>
                </div>

                {/* Body */}
                <div className={s.body}>
                  <h3 className={s.title}>{p.title}</h3>
                  <p className={s.stack}>{p.stack}</p>
                  <div className={s.actions}>
                    {p.link && (
                      <button className={s.btnMain} onClick={() => window.open(p.link)}>
                        Live Demo ↗
                      </button>
                    )}
                    {p.doc && (
                      <button className={s.btnGhost} onClick={() => window.open(p.doc)}>
                        View Docs
                      </button>
                    )}
                    {!p.link && !p.doc && (
                      <span className={s.noLink}>Android App</span>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}