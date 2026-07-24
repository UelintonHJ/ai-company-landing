import { useState } from 'react'
import BackToTopButton from './components/common/BackToTopButton'
import SiteFooter from './components/layout/SiteFooter'
import SiteHeader from './components/layout/SiteHeader'
import LandingSections from './components/sections/LandingSections'
import {
  faqs,
  features,
  integrations,
  pricing,
  service,
  showcase,
  stats,
  team,
  testimonials,
  workflowSteps,
} from './data/landingData'
import { useAutoRotate } from './hooks/useAutoRotate'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'
import { useScrollState } from './hooks/useScrollState'

function App() {
  const [annualBilling, setAnnualBilling] = useState(true)
  const [openFaq, setOpenFaq] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [activeShowcase, setActiveShowcase] = useState(0)

  useRevealOnScroll()
  const { isScrolled, showTopButton } = useScrollState()
  useAutoRotate(setActiveTestimonial, testimonials.length, 4500)
  useAutoRotate(setActiveShowcase, showcase.length, 3600)

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-zinc-100">
      <div className='glow glow-cyan' />
      <div className='glow glow-violet' />
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top, rgba(255,255,255,0.08), transparent_45%)]' />

      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <SiteHeader isScrolled={isScrolled} menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((prev) => !prev)} onCloseMenu={() => setMenuOpen(false)} />

        <LandingSections stats={stats} workflowSteps={workflowSteps} services={service} showcases={showcase} activeShowcase={activeShowcase} setActiveShowcase={setActiveShowcase} features={features} testimonials={testimonials} activeTestimonial={activeTestimonial} setActiveTestimonial={setActiveTestimonial} integrations={integrations} pricing={pricing} annualBilling={annualBilling} setAnnualBilling={setAnnualBilling} team={team} faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />

        <SiteFooter />
      </div>
      <BackToTopButton show={showTopButton} />
    </div>
  )
}

export default App
