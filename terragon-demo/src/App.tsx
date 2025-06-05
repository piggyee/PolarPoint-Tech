// src/App.tsx
import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="spacer" />

      <main>
        <HeroSection />
        <FeaturesSection />   {/* 加在這一行 */}
        {/* 之後更多區塊可以再放在下面 */}
      </main>
    </div>
  )
}

export default App
