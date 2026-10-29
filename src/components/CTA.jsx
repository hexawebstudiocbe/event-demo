import { IMG } from '../data'
import { Btn, Img, Reveal } from './ui'

export default function CTA() {
  return (
    <section id="packages" className="container cta-wrap">
      <Reveal className="cta">
        <div>
          <h2>Ready to Plan Your Next Event?</h2>
          <p>Let's Create Something Extraordinary Together.</p>
          <Btn href="#contact">Get A Free Quote</Btn>
        </div>
        <div className="bubbles" aria-hidden>
          {[IMG.hero, IMG.wedding, IMG.social, IMG.destination].map((s, i) => <Img key={i} src={s} className={`bubble b${i}`} />)}
        </div>
      </Reveal>
    </section>
  )
}
