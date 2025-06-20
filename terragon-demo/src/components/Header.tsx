// src/components/Header.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import logo from '../assets/logoNB.png'


const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <nav className="header__nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          {/* Contact Us 按鈕也改成 Link */}
          <Link to="/contact" className="btn header__btn">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
)

}
export default Header
