// ServicesPage.tsx
import React from 'react';
import './ServicesPage.scss';

const sections = [
  {
    id: 'construction-materials',
    title: '建築營建材料',
    description: '電視牆石材設計與室內石材鋪設，提供耐候性高、可訂製紋路等專業解決方案。',
    items: ['電視牆石材設計', '室內石材鋪設'],
    highlights: ['耐候性高', '紋路可客製', '施工快速']
  },
  {
    id: 'it-services',
    title: '資訊服務',
    description: '專業網頁設計、RWD 開發、後端系統整合與 SEO 優化，助您品牌線上起飛。',
    items: ['網頁設計／RWD 開發', '後端系統整合', 'SEO 優化服務'],
    highlights: ['響應式布局', '效能最佳化', '搜尋引擎友好']
  },
  {
    id: 'tools-3d-printing',
    title: '治工具／3D 列印／設備',
    description: '提供治工具製作、3D 列印原型與工業設備維護，滿足多樣化製造需求。',
    items: ['治工具製作', '3D 列印原型', '工業設備維護'],
    highlights: ['快速打樣', '高精度', '設備保養']
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="services-page">
      <nav className="anchor-nav">
        {sections.map(sec => (
          <a key={sec.id} href={`#${sec.id}`} className="anchor-link">
            {sec.title}
          </a>
        ))}
      </nav>
      {sections.map(sec => (
        <section id={sec.id} key={sec.id} className="service-section">
          <h2>{sec.title}</h2>
          <p className="description">{sec.description}</p>
          <div className="items-accordion">
            {sec.items.map((item, idx) => (
              <details key={idx} className="item-detail">
                <summary>{item}</summary>
                <ul>
                  {sec.highlights.map((hl, i) => (
                    <li key={i}>{hl}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
          <button className="cta-button">立即諮詢</button>
        </section>
      ))}
      <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ⬆ 回頂
      </button>
    </div>
  );
};

export default ServicesPage;
