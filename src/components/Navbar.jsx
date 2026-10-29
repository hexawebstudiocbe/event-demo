import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV } from '../data'
import { Btn, Logo } from './ui'

const id = (n) => (n === 'Home' ? '#home' : '#' + n.toLowerCase().replace(/\s+/g, ''))

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => {
    const ids = NAV.map(id)
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive('#' + e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    ids.forEach((h) => { const el = document.querySelector(h); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <motion.header className={`nav ${scrolled ? 'scrolled' : ''}`} initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
      <div className="container nav-in">
        <Logo />
        <nav className="nav-links">
          {NAV.map((n) => <a key={n} href={id(n)} className={active === id(n) ? 'active' : ''}>{n}</a>)}
        </nav>
        <div className="nav-cta"><Btn href="#contact">Get A Quote</Btn></div>
        <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div className="drawer" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            {NAV.map((n, i) => (
              <motion.a key={n} href={id(n)} onClick={() => setOpen(false)} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>{n}</motion.a>
            ))}
            <Btn href="#contact" onClick={() => setOpen(false)}>Get A Quote</Btn>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
