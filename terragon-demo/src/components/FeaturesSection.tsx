// src/components/FeaturesSection.tsx
import React from 'react'
import './FeaturesSection.scss'
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
  {
    img: feat1,
    title: 'Purpose Built for Operators',
    desc:
      'Designed from firsthand experience, our platform addresses the challenges brands face to keep the operation running smooth.',
  },
  {
    img: feat2,
    title: 'Optimized Engagement Strategies',
    desc:
      'Years of player-focused insights, poor tools like segmentation, gamification and real-time bonuses to drive loyalty and engagement.',
  },
  {
    img: feat3,
    title: 'Efficiency at Scale',
    desc:
      'Built to scale effortlessly, our platform handles traffic spikes, automates tasks and simplifies compliance to keep your operation running smooth.',
  },
  {
    img: feat4,
    title: 'Empowering Brand Differentiation',
    desc:
      'Our bespoke design and build service lets you craft a unique experience, helping you stand out in a competitive market.',
  },
]

const FeaturesSection: React.FC = () => {
  return (
    <section className="features">
      {/* 產生白色半圓弧形用的偽元素 */}
      <div className="features__inner">
        <h2 className="features__title">
          Developed by Operators,<br />
          for Operators
        </h2>
        <p className="features__subtitle">
          Custom solutions crafted by industry insiders who&apos;ve tackled the
          challenges, so you don&apos;t have to.
        </p>

        <div className="features__grid">
          {featureData.map((item, idx) => (
            <div
              key={idx}
              className="features__card"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              {/* 底部動態遮罩，用來讓文字看得清楚 */}
              <div className="features__overlay"></div>
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
}

export default FeaturesSection
