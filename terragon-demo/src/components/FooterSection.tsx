// src/components/FooterSection.tsx
import React from 'react'
import './Footer.scss'

const FooterSection: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          © {new Date().getFullYear()}. ALL RIGHTS RESERVED. PolarPoint Tech
        </div>
        <nav className="footer__nav">
          <a href="/cookies"    className="footer__link">Cookies</a>
          <a href="/privacy"    className="footer__link">Privacy policy</a>
          <a href="/disclaimer" className="footer__link">Legal Disclaimer</a>
        </nav>
      </div>
    </footer>
  )
}

export default FooterSection
