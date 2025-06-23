// src/components/Header.tsx
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import logo from '../assets/logoNB.png'

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="container header__inner">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <nav className="header__nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/contact" className="btn header__btn">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
