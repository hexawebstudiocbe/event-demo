import { motion, useScroll, useTransform } from 'framer-motion'
import { HIGHLIGHTS, IMG } from '../data'
import { Btn, Icon, Img } from './ui'

const sparks = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 53) % 100}%`, size: 2 + (i % 4), dur: 6 + (i % 7), delay: (i % 6) * 0.9,
}))

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 700], [0, 120])
  const up = (d) => ({ initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay: d, ease: [0.22, 1, 0.36, 1] } })

  return (
    <section id="home" className="hero">
      <motion.div className="hero-bg" style={{ y }}>
        <Img src={IMG.hero} className="fill" />
        <div className="hero-shade" />
      </motion.div>
      <div className="sparks" aria-hidden>
        {sparks.map((s, i) => (
          <span key={i} style={{ left: s.left, width: s.size, height: s.size, animationDuration: `${s.dur}s`, animationDelay: `${s.delay}s` }} />
        ))}
      </div>
      <div className="container hero-in">
        <motion.span className="pill" {...up(0.2)}>WE PLAN, YOU CELEBRATE</motion.span>
        <motion.h1 {...up(0.35)}>
          Extraordinary <span className="gold">Events <i className="twinkle">✦</i></span> Unforgettable Memories<span className="gold">.</span>
        </motion.h1>
        <motion.p {...up(0.55)}>From intimate gatherings to grand celebrations, we turn your vision into reality with perfection.</motion.p>
        <motion.div className="hero-btns" {...up(0.7)}>
          <Btn href="#contact">Plan Your Event</Btn>
          <Btn href="#services" variant="ghost">Explore Services</Btn>
        </motion.div>
      </div>
      <motion.div className="container highlights" {...up(0.9)}>
        <div className="hl-box">
          {HIGHLIGHTS.map(([ic, t, s]) => (
            <div className="hl" key={t}>
              <Icon name={ic} size={34} className="gold" />
              <div><b>{t}</b><small>{s}</small></div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
