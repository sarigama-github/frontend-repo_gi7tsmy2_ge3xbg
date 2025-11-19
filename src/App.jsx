import React from 'react'
import Hero from './components/Hero'
import Architecture from './components/Architecture'
import ParallaxSections from './components/ParallaxSections'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#070a0f] text-white">
      <Hero />
      <Architecture />
      <ParallaxSections />
      <Footer />
    </div>
  )
}

export default App
