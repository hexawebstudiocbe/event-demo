import { useState } from 'react'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { Logo } from './ui'

const Fb = () => <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M14 8V6.5c0-.7.3-1 1-1h2V2h-3c-3 0-4 2-4 4.3V8H7v3.5h3V22h4V11.5h2.8L17.5 8z" /></svg>
const Ig = () => <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
const Pi = () => <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M10.5 21l2-8M9 11c0-2 1.5-3 3-3s3 1 3 2.500-1 3-3 3" /></svg>
const Yt = () => <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M21.600 7.200a2.500 2.500 0 0 0-1.800-1.800C18.200 5 12 5 12 5s-6.200 0-7.800.4A2.500 2.500 0 0 0 2.400 7.200C2 8.800 2 12 2 12s0 3.200.4 4.800a2.500 2.500 0 0 0 1.800 1.800C5.800 19 12 19 12 19s6.200 0 7.800-.4a2.500 2.500 0 0 0 1.800-1.800c.4-1.600.4-4.800.4-4.800s0-3.200-.4-4.800zM10 15V9l5 3z" /></svg>

const LINKS = [['Home', '#home'], ['About Us', '#aboutus'], ['Services', '#services'], ['Portfolio', '#portfolio'], ['Packages', '#packages'], ['Contact', '#contact']]
const SVCS = ['Wedding Planning', 'Corporate Events', 'Birthday Parties', 'Social Gatherings', 'Destination Events']

export default function Footer() {
  const [sent, setSent] = useState(false)
  return (
    <footer id="contact" className="footer">
      <div className="container foot-grid">
        <div className="foot-brand">
          <Logo />
          <p>We don't just plan events, we create experiences that stay with you forever.</p>
          <div className="socials">
            {[Fb, Ig, Pi, Yt].map((I, i) => <a key={i} href="#" aria-label="social"><I /></a>)}
          </div>
        </div>
        <div><h4>Quick Links</h4><ul>{LINKS.map(([l, h]) => <li key={l}><a href={h}>{l}</a></li>)}</ul></div>
        <div><h4>Our Services</h4><ul>{SVCS.map((l) => <li key={l}><a href="#services">{l}</a></li>)}</ul></div>
        <div>
          <h4>Contact Us</h4>
          <ul className="contact">
            <li><Phone size={14} className="gold" /> +91 9876543210</li>
            <li><Mail size={14} className="gold" /> info@eventora.com</li>
            <li><MapPin size={14} className="gold" /> 123, Celebration Street, Coimbatore, Tamil Nadu 641001</li>
          </ul>
        </div>
        <div>
          <h4>Newsletter</h4>
          <p className="small">Subscribe to get updates on our latest events.</p>
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); e.target.reset() }} className="news">
            <input type="email" required placeholder="Enter your email" />
            <button aria-label="Subscribe"><ArrowRight size={16} /></button>
          </form>
          {sent && <p className="small gold">Thank you for subscribing!</p>}
        </div>
      </div>
      <div className="container foot-bottom">
        <span>© 2025 Eventora Events &amp; Experiences. All Rights Reserved.</span>
        <span><a href="#">Privacy Policy</a><a href="#">Terms &amp; Conditions</a></span>
      </div>
    </footer>
  )
}
