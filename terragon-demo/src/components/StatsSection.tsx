// src/components/StatsSection.tsx
import React from 'react'
import './StatsSection.scss'
import icon40 from '../assets/40plus.svg'
import iconTop from '../assets/top.svg'
import iconTier1 from '../assets/tier1.svg'
import icon5G from '../assets/5g.svg'
import iconBest from '../assets/best.svg'

interface StatItem {
  icon: string
  bigText: string
  smallText: string
}

const stats: StatItem[] = [
  { icon: icon40, bigText: '40+', smallText: '超過40年的<br/>累積製造' },
  { icon: iconTop, bigText: 'Top', smallText: '業界首選<br/>頻率元件供應商' },
  { icon: iconTier1, bigText: 'Tier 1', smallText: '致力發展<br/>車用電子領域' },
  { icon: icon5G, bigText: '5G', smallText: '全面支持5G通訊<br/>應用場景' },
  { icon: iconBest, bigText: 'Best', smallText: '卓越品質獲獎項<br/>頂尖企業' },
]

const StatsSection: React.FC = () => (
  <section className="stats">
    <div className="stats__overlay" /> {/* world-map 背景 */}
    <div className="stats__inner">
      <h2 className="stats__title">關於晶技</h2>
      <p className="stats__subtitle">
        始終如一的卓越品質，來自全球的信任
      </p>
      <div className="stats__items">
        {stats.map((s, idx) => (
          <div className="stats__item" key={idx}>
            <img src={s.icon} alt={s.bigText} className="stats__icon" />
            <div
              className="stats__big"
              dangerouslySetInnerHTML={{ __html: s.bigText }}
            />
            <div
              className="stats__small"
              dangerouslySetInnerHTML={{ __html: s.smallText }}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default StatsSection
