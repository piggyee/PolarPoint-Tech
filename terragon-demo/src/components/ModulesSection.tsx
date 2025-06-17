// src/components/ModulesSection.tsx
import React from 'react'
import './ModulesSection.scss'
import icon1 from '../assets/1.png'
import icon2 from '../assets/2.png'
import icon3 from '../assets/3.png'
import icon4 from '../assets/4.png'
import icon5 from '../assets/5.png'
import icon6 from '../assets/6.png'
import icon7 from '../assets/7.png'
import icon8 from '../assets/8.png'
import icon9 from '../assets/9.png'
import icon10 from '../assets/10.png'

interface Module {
  img: string
  title: string
  desc: string
}

const modulesData: Module[] = [
  { img: icon1, title: 'Lightning-Fast Insights', desc: 'Get real-time analytics at blazing speeds.' },
  { img: icon2, title: 'Campaign Wizard',           desc: 'Automate targeted campaigns with ease.' },
  { img: icon3, title: 'Instant Rewards Engine',    desc: 'Deliver bonuses instantly to boost loyalty.' },
  { img: icon4, title: 'Elastic Cloud Power',       desc: 'Scale your infrastructure seamlessly.' },
  { img: icon5, title: 'Player Intelligence Suite', desc: 'Unlock unparalleled targeting with segmentation.' },
  { img: icon6, title: 'Universal Wallet System',   desc: 'Manage payments across currencies effortlessly.' },
  { img: icon7, title: 'Fortified Risk Shield',     desc: 'Protect your platform with advanced risk controls.' },
  { img: icon8, title: 'Gamification Catalyst',      desc: 'Drive engagement through customized gamification.' },
  { img: icon9, title: 'Smart Game Metadata Hub',   desc: 'Centralize metadata for all your game titles.' },
  { img: icon10, title: 'Plug-and-Play Magic',      desc: 'Integrate in minutes with zero downtime.' },
]

const ModulesSection: React.FC = () => (
  <section className="modules">
    <div className="modules__inner">
      <h2 className="modules__title">Technical Modules</h2>
      <p className="modules__subtitle">
        Advanced tools engineered to drive your brand’s success.
      </p>

      <div className="modules__grid">
        {modulesData.map((mod, i) => (
          <div key={i} className="modules__card">
            <div className="modules__shine" />
            <img src={mod.img} alt={mod.title} className="modules__icon" />
            <p className="modules__label">{mod.title}</p>
            <p className="modules__desc">{mod.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default ModulesSection
