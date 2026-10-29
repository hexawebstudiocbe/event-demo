import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring, useMotionValue, useTransform } from 'framer-motion'
import { ArrowUp, Phone } from 'lucide-react'

export function Loader() {
  const [show, setShow] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1600)
    return () => clearTimeout(t)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.div className="loader" exit={{ opacity: 0, scale: 1.1 }} transition={{ duration: 0.7 }}>
          <motion.span className="loader-logo" initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.9 }}>Eventora</motion.span>
          <motion.span className="loader-bar" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.3, ease: 'easeInOut' }} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })
  return <motion.div className="progress" style={{ scaleX }} />
}

export function CursorGlow() {
  const ref = useRef(null)
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    const el = ref.current
    let x = 0, y = 0, cx = 0, cy = 0, raf
    const move = (e) => { x = e.clientX; y = e.clientY; el.style.opacity = 1 }
    const loop = () => {
      cx += (x - cx) * 0.12
      cy += (y - cy) * 0.12
      el.style.transform = `translate(${cx - 200}px, ${cy - 200}px)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', move)
    raf = requestAnimationFrame(loop)
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf) }
  }, [])
  return <div ref={ref} className="cursor-glow" aria-hidden />
}

export function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.button className="to-top" aria-label="Back to top" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} whileHover={{ y: -4 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

/* 3D tilt + moving glare on hover */
export function Tilt({ children, max = 10, className = '' }) {
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rx = useSpring(useTransform(my, [0, 1], [max, -max]), { stiffness: 200, damping: 18 })
  const ry = useSpring(useTransform(mx, [0, 1], [-max, max]), { stiffness: 200, damping: 18 })
  const glare = useTransform([mx, my], ([x, y]) => `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,235,180,0.22), transparent 55%)`)
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width)
    my.set((e.clientY - r.top) / r.height)
  }
  const leave = () => { mx.set(0.5); my.set(0.5) }
  return (
    <motion.div className={`tilt ${className}`} style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }} onMouseMove={move} onMouseLeave={leave}>
      {children}
      <motion.span className="glare" style={{ background: glare }} />
    </motion.div>
  )
}

export function Marquee({ items }) {
  const row = [...items, ...items]
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {row.map((t, i) => <span key={i}>{t}<i>✦</i></span>)}
      </div>
    </div>
  )
}

export function Lightbox({ src, onClose }) {
  useEffect(() => {
    if (!src) return
    const k = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [src, onClose])
  return (
    <AnimatePresence>
      {src && (
        <motion.div className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.img src={src} alt="" className="lightbox-img" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const WaIcon = () => (
  <svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor" aria-hidden>
    <path d="M16 3C9 3 3.400 8.600 3.400 15.500c0 2.300.6 4.400 1.700 6.300L3 29l7.400-2c1.800 1 3.700 1.500 5.600 1.500 7 0 12.600-5.600 12.600-12.500S23 3 16 3zm0 22.800c-1.800 0-3.500-.5-5-1.400l-.4-.2-4.400 1.200 1.200-4.300-.3-.4a10 10 0 0 1-1.500-5.300C5.600 9.900 10.300 5.300 16 5.300s10.400 4.600 10.400 10.300S21.700 25.800 16 25.800zm5.700-7.600c-.3-.2-1.900-.9-2.200-1s-.5-.2-.7.200-.8 1-1 1.200-.4.200-.7 0a8.500 8.500 0 0 1-4.200-3.700c-.3-.6.300-.6.900-1.800.1-.2 0-.4 0-.5s-.7-1.700-1-2.300c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.100-.9.400s-1.200 1.200-1.200 2.800 1.200 3.300 1.400 3.500 2.400 3.700 5.800 5.100c2.100.9 2.900 1 4 .8.600-.1 1.900-.8 2.200-1.500s.3-1.400.2-1.500-.3-.2-.6-.4z" />
  </svg>
)

export function FloatingContact({ phone, whatsapp, msg }) {
  return (
    <div className="float-contact">
      <motion.a
        className="fc fc-call" href={`tel:${phone}`} aria-label="Call us"
        initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2, type: 'spring' }} whileHover={{ scale: 1.12 }}
      >
        <Phone size={26} />
      </motion.a>
      <motion.a
        className="fc fc-wa" href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(msg)}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.2, type: 'spring' }} whileHover={{ scale: 1.12 }}
      >
        <WaIcon />
      </motion.a>
    </div>
  )
}
