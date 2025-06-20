import React from 'react';
import './StatsSection.scss';
import icon40 from '../assets/Stats1.png';
import iconTop from '../assets/Stats2.png';
import iconTier1 from '../assets/Stats3.png';
import icon5G from '../assets/Stats4.png';
import iconBest from '../assets/Stats5.png';

interface StatItem {
  icon: string;
  bigText: string;
  smallText: string;
}

const stats: StatItem[] = [
  { icon: icon40, bigText: '40+', smallText: 'Expertise in precision component manufacturing' },
  { icon: iconTop, bigText: 'Top', smallText: 'Trusted electronics parts provider' },
  { icon: iconTier1, bigText: 'Tier 1', smallText: 'Driving growth in automotive electronics' },
  { icon: icon5G, bigText: '5G', smallText: 'Empowering next-gen communication solutions' },
  { icon: iconBest, bigText: 'Best', smallText: 'Preferred by top global enterprises' },
];

const StatsSection: React.FC = () => (
  <section className="stats">
    {/* 一定要有這行 overlay */}
    <div className="stats__overlay" />

    <div className="stats__inner">
      <h2 className="stats__title">About PolarPoint Tech</h2>
      <p className="stats__subtitle">
        Pioneering Quality, Trusted Globally
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
);

export default StatsSection;
