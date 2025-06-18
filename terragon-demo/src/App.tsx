// src/App.tsx
import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import ModulesSection from './components/ModulesSection'
import StatsSection from './components/StatsSection'
import FooterSection from './components/FooterSection'
import './App.css'

const App: React.FC = () => (
  <div className="App">
    <Header />
    <div className="spacer" />  {/* 留出 Header 高度 64px */}
    <main>
      <HeroSection />
      <FeaturesSection />
      <ModulesSection />
      <StatsSection />
     {/* 在這裡插入 Footer */}
      
      {/* 後續區塊… */}
    </main>
    <FooterSection />
  </div>
)

export default App
