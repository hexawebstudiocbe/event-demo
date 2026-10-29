import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Play, X } from 'lucide-react'
import { IMG, WHY } from '../data'
import { Btn, Img, Reveal } from './ui'

export default function Why() {
  const [open, setOpen] = useState(false)
  return (
    <section id="aboutus" className="section why">
      <div className="container why-in">
        <Reveal y={0} className="why-media">
          <Img src={IMG.why} className="fill" />
          <button className="play" aria-label="Play video" onClick={() => setOpen(true)}><Play fill="currentColor" size={22} /></button>
        </Reveal>
        <div>
          <Reveal><span className="kicker left">WHY CHOOSE US</span><h2 className="left">Because Every Detail Matters</h2></Reveal>
          <ul className="ticks">
            {WHY.map((w, i) => (
              <Reveal as="li" key={w} delay={0.1 + i * 0.08} y={20}><CheckCircle2 size={18} strokeWidth={1.5} className="gold" />{w}</Reveal>
            ))}
          </ul>
          <Reveal delay={0.6}><Btn href="#contact">Know More About Us</Btn></Reveal>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
            <button className="modal-x" aria-label="Close"><X /></button>
            <motion.div className="modal-box" initial={{ scale: 0.9 }} animate={{ scale: 1 }} onClick={(e) => e.stopPropagation()}>
              <iframe title="Eventora showreel" src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1" allow="autoplay; encrypted-media" allowFullScreen />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
