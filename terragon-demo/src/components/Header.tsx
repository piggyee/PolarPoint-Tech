import React from 'react'
import './Header.scss'
import logo from '../assets/logoNB.png' // 確認 logo.svg 的路徑正確

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="header__logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="header__nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <button className="btn header__btn">Contact Us</button>
        </nav>
      </div>
    </header>
  )
}

export default Header
