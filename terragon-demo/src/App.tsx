import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import ModulesSection from './components/ModulesSection'
import './App.css'

const App: React.FC = () => (
  <div className="App">
    <Header />
    <div className="spacer" />  {/* 留出 Header 高度 64px */}
    <main>
      <HeroSection />
      <FeaturesSection />
      <ModulesSection />
      {/* 後續區塊… */}
    </main>
  </div>
)

export default App
