import React from 'react'
import './HeroSection.scss'
import heroBg from '../assets/hero-bg.png'
import heroIcon from '../assets/hero-icon.png'
import heroDashboard from '../assets/hero-dashboard.png'

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__overlay"></div>
      <div className="container hero__inner">
        <img className="hero__icon" src={heroIcon} alt="Hero Icon" />
        <h1 className="hero__title">
          CUSTOM SOLUTIONS<br />
          TAILORED FOR YOUR BRAND
        </h1>
        <div className="hero__dashboard">
          <img src={heroDashboard} alt="Dashboard Preview" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
