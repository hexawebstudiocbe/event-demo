import { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { FILTERS, PROJECTS } from '../data'
import { Icon, Img, SectionHead } from './ui'
import { Lightbox } from './Effects'

export default function Portfolio() {
  const [f, setF] = useState('All Events')
  const [zoom, setZoom] = useState(null)
  const list = PROJECTS.filter((p) => f === 'All Events' || p.cat === f)
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <SectionHead kicker="OUR WORK">Moments We Created</SectionHead>
        <div className="filters">
          {FILTERS.map((x) => (
            <button key={x} className={x === f ? 'on' : ''} onClick={() => setF(x)}>{x}</button>
          ))}
        </div>
        <LayoutGroup>
          <motion.div layout className="gallery">
            <AnimatePresence mode="popLayout">
              {list.map((p, i) => (
                <motion.figure
                  layout key={p.img + p.cat}
                  className={`shot ${p.big && f === 'All Events' ? 'big' : ''}`}
                  initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.45, delay: i * 0.03 }}
                >
                  <Img src={p.img} alt={p.cat} className="fill" onClick={() => setZoom(p.img)} />
                  <figcaption>{p.cat}</figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
        <Lightbox src={zoom} onClose={() => setZoom(null)} />
        <div className="center">
          <motion.a href="#contact" className="btn btn-ghost small" whileHover={{ scale: 1.05 }}>View More Projects <Icon name="Grid3x3" size={14} /></motion.a>
        </div>
      </div>
    </section>
  )
}
