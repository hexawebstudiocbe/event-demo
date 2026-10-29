import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Stats from './components/Stats'
import Why from './components/Why'
import Portfolio from './components/Portfolio'
import Reviews from './components/Reviews'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { Loader, ScrollProgress, CursorGlow, BackToTop, Marquee, FloatingContact } from './components/Effects'
import { MARQUEE, CONTACT } from './data'

export default function App() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <CursorGlow />
      <BackToTop />
      <FloatingContact {...CONTACT} />
      <Navbar />
      <main>
        <Hero />
        <Marquee items={MARQUEE} />
        <Services />
        <Stats />
        <Why />
        <Portfolio />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
