// src/components/FeaturesSection.tsx
import React from 'react'
import './FeaturesSection.scss'
import curved from '../assets/curved.png'   // 你的半圓 PNG
import feat1 from '../assets/feature1.png'
import feat2 from '../assets/feature2.png'
import feat3 from '../assets/feature3.png'
import feat4 from '../assets/feature4.png'

interface Feature {
  img: string
  title: string
  desc: string
}

const featureData: Feature[] = [
  { img: feat1, title: 'Purpose Built for Operators', desc: 'Designed from firsthand experience...' },
  { img: feat2, title: 'Optimized Engagement Strategies', desc: 'Years of player-focused insights...' },
  { img: feat3, title: 'Efficiency at Scale', desc: 'Built to scale effortlessly...' },
  { img: feat4, title: 'Empowering Brand Differentiation', desc: 'Our bespoke design and build service...' },
]

const FeaturesSection: React.FC = () => (
  <section className="features">
    {/* 半圓圖 */}
    <img src={curved} alt="curve" className="features__curve" />

    <div className="features__inner">
      <h2 className="features__title">
        Developed by Operators,<br />
        for Operators
      </h2>
      <p className="features__subtitle">
        Custom solutions crafted by industry insiders who’ve tackled the challenges, so you don’t have to.
      </p>
      <div className="features__grid">
        {featureData.map((item, idx) => (
          <div key={idx} className="features__card" style={{ backgroundImage: `url(${item.img})` }}>
            <div className="features__overlay" />
            <div className="features__text">
              <h3 className="features__card-title">{item.title}</h3>
              <p className="features__card-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default FeaturesSection
