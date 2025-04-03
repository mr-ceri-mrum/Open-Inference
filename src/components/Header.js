import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-placeholder"></div>
            <h1>Open Inference</h1>
          </div>
          <div className="mobile-menu-button" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className={mobileMenuOpen ? 'active' : ''}>
            <ul>
              <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Услуги</a></li>
              <li><a href="#ai-solutions" onClick={() => setMobileMenuOpen(false)}>ИИ-решения</a></li>
              <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>О нас</a></li>
              <li><a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>Портфолио</a></li>
              <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Контакты</a></li>
            </ul>
          </nav>
          <a href="#contact" className="cta-button" onClick={() => setMobileMenuOpen(false)}>Связаться с нами</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
