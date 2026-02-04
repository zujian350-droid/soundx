import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import AppDownload from '@/components/AppDownload'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <HowItWorks />
      <Testimonials />
      <AppDownload />
      <CTA />
    </>
  )
}
