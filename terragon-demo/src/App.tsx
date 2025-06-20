// src/App.tsx
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import ModulesSection from './components/ModulesSection'
import StatsSection from './components/StatsSection'
import ContactPage from './components/ContactPage'
import FooterSection from './components/FooterSection'
import './App.css'

const App: React.FC = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <div className="spacer" /> {/* 预留 64px 给 fixed Header */}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <FeaturesSection />
                <ModulesSection />
                <StatsSection />
              </>
            }
          />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <FooterSection />
    </div>
  </BrowserRouter>
)

export default App
