import { motion } from 'framer-motion'
import { SERVICES } from '../data'
import { Icon, Img, Reveal, SectionHead } from './ui'
import { Tilt } from './Effects'

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHead kicker="WHAT WE DO">We Create. You Celebrate.</SectionHead>
        <div className="cards">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <Tilt className="tilt-fill"><motion.article className={`card ${s.featured ? 'featured' : ''}`} whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 250 }}>
                <div className="card-top">
                  <Icon name={s.icon} size={28} className="gold" />
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
                <Img src={s.img} alt={s.title} className="card-img" />
              </motion.article></Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
