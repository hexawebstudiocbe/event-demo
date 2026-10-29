import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { REVIEWS } from '../data'
import { Reveal, SectionHead } from './ui'

const perView = () => (window.innerWidth < 700 ? 1 : window.innerWidth < 1000 ? 2 : 3)

export default function Reviews() {
  const [per, setPer] = useState(perView)
  const [page, setPage] = useState(0)
  const pages = Math.ceil(REVIEWS.length / per)
  useEffect(() => {
    const on = () => setPer(perView())
    window.addEventListener('resize', on)
    return () => window.removeEventListener('resize', on)
  }, [])
  useEffect(() => {
    const t = setInterval(() => setPage((p) => (p + 1) % pages), 5000)
    return () => clearInterval(t)
  }, [pages])
  const cur = Math.min(page, pages - 1)

  return (
    <section id="reviews" className="section">
      <div className="container">
        <SectionHead kicker="CLIENTS LOVE">What Our Clients Say</SectionHead>
        <Reveal>
          <div className="slider">
            <motion.div className="track" animate={{ x: `-${cur * 100}%` }} transition={{ type: 'spring', stiffness: 80, damping: 18 }}>
              {Array.from({ length: pages }, (_, pi) => (
                <div className="slide" key={pi} style={{ gridTemplateColumns: `repeat(${per},1fr)` }}>
                  {REVIEWS.slice(pi * per, pi * per + per).map((r) => (
                    <div className="review" key={r.name}>
                      <div className="who">
                        <span className="avatar">{r.name[0]}</span>
                        <div>
                          <b>{r.name}</b>
                          <div className="stars">{[0, 1, 2, 3, 4].map((s) => <Star key={s} size={12} fill="currentColor" />)}</div>
                        </div>
                      </div>
                      <p>{r.text}</p>
                      <Quote className="q" size={34} fill="currentColor" />
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </Reveal>
        <div className="dots">
          {Array.from({ length: pages }, (_, i) => <button key={i} aria-label={`Page ${i + 1}`} className={i === cur ? 'on' : ''} onClick={() => setPage(i)} />)}
        </div>
      </div>
    </section>
  )
}
