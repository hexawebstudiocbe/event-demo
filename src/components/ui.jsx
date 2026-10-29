import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate, useSpring } from 'framer-motion'
import {
  Sparkles, ClipboardCheck, Crown, Heart, Gem, Presentation, Cake, Users, Palmtree,
  CalendarCheck, Smile, Award, UsersRound, ArrowRight, Grid3x3,
} from 'lucide-react'

const ICONS = { Sparkles, ClipboardCheck, Crown, Heart, Gem, Presentation, Cake, Users, Palmtree, CalendarCheck, Smile, Award, UsersRound, ArrowRight, Grid3x3 }

export const Icon = ({ name, ...p }) => {
  const C = ICONS[name]
  return C ? <C strokeWidth={1.4} {...p} /> : null
}

export const Img = ({ src, alt = '', className = '', onClick }) => {
  const [ok, setOk] = useState(true)
  return (
    <div className={`img ${className}`} onClick={onClick}>
      {ok && <img src={src} alt={alt} loading="lazy" onError={() => setOk(false)} />}
    </div>
  )
}

export const Reveal = ({ children, delay = 0, y = 40, className = '', as = 'div' }) => {
  const M = motion[as]
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </M>
  )
}

export const SectionHead = ({ kicker, children }) => (
  <Reveal className="section-head">
    <span className="kicker">{kicker}</span>
    <h2>{children}</h2>
    <motion.span className="head-line" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }} />
  </Reveal>
)

export const Counter = ({ to }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (v) => { if (ref.current) ref.current.textContent = Math.round(v) + '+' },
    })
    return () => c.stop()
  }, [inView, to])
  return <span ref={ref}>0+</span>
}

export const Btn = ({ children, variant = 'gold', href = '#', icon = true, ...p }) => {
  const x = useSpring(0, { stiffness: 220, damping: 15 })
  const y = useSpring(0, { stiffness: 220, damping: 15 })
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.25)
    y.set((e.clientY - r.top - r.height / 2) * 0.35)
  }
  const leave = () => { x.set(0); y.set(0) }
  return (
    <motion.a href={href} className={`btn btn-${variant}`} style={{ x, y }} onMouseMove={move} onMouseLeave={leave} whileTap={{ scale: 0.95 }} {...p}>
      <span className="btn-txt">{children}</span>
      {icon && <span className="btn-ic"><ArrowRight size={14} /></span>}
    </motion.a>
  )
}

export const Logo = () => (
  <a href="#home" className="logo" aria-label="Eventora">
    <span className="logo-name">Eventora</span>
    <span className="logo-sub">EVENTS &amp; EXPERIENCES</span>
  </a>
)
