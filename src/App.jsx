import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuemSomos from './components/QuemSomos'
import Numeros from './components/Numeros'
import Marcas from './components/Marcas'
import Diferenciais from './components/Diferenciais'
import Solucoes from './components/Solucoes'
import Sustentabilidade from './components/Sustentabilidade'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import CTAMobileBar from './components/CTAMobileBar'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <QuemSomos />
      <Numeros />
      <Marcas />
      <Diferenciais />
      <Solucoes />
      <Sustentabilidade />
      <CTAFinal />
      <Footer />
      <WhatsAppButton />
      <CTAMobileBar />
    </div>
  )
}
