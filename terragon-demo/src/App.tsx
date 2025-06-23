// src/App.tsx
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import ModulesSection from './components/ModulesSection'
import StatsSection from './components/StatsSection'

// 確認這兩行路徑跟你的實際檔案位置相符
import ContactPage from './components/ContactPage'
import ServicesPage from './components/ServicesPage'
//import AboutPage from './components/AboutPage'    // 如果有 AboutPage
import FooterSection from './components/FooterSection'

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <div className="spacer" /> {/* 預留 64px 給 fixed Header */}
    <main>
      <Routes>
        {/* 首頁 */}
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

        {/* Services 分頁 */}
        <Route path="/services" element={<ServicesPage />} />

        {/* About 分頁（如有） */}

        {/* Contact 分頁 */}
        <Route path="/contact" element={<ContactPage />} />

        {/* 建議加一個 fallback：Route path="*" */}
        <Route path="*" element={<h2>404 – 找不到頁面</h2>} />
      </Routes>
    </main>
    <FooterSection />
  </BrowserRouter>
)

export default App
