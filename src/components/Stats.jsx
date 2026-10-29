import { STATS } from '../data'
import { Counter, Icon, Reveal } from './ui'

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats-in">
        {STATS.map(([ic, n, l], i) => (
          <Reveal key={l} delay={i * 0.1} className="stat">
            <Icon name={ic} size={26} className="gold" />
            <b><Counter to={n} /></b>
            <small>{l}</small>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
