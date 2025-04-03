import React from 'react';
import './Footer.css';
import logo from '../assets/logo-new.svg';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo">
              <img src={logo} alt="Open Inference Logo" />
              <h4>Open Inference</h4>
            </div>
            <p>
              Open Inference — лидер в области разработки веб-сайтов и внедрения 
              технологий искусственного интеллекта для бизнеса любого масштаба.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="social-icon">f</i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="social-icon">t</i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="social-icon">in</i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="social-icon">ig</i>
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h4>Услуги</h4>
            <ul className="footer-links">
              <li><a href="#">Разработка веб-сайтов</a></li>
              <li><a href="#">Разработка ИИ-решений</a></li>
              <li><a href="#">Интеграция ИИ</a></li>
              <li><a href="#">Поддержка и обслуживание</a></li>
              <li><a href="#">Консультации</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Ресурсы</h4>
            <ul className="footer-links">
              <li><a href="#">Блог</a></li>
              <li><a href="#">Кейсы</a></li>
              <li><a href="#">Документация</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Вебинары</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Контакты</h4>
            <ul className="contact-info">
              <li>
                <i className="contact-icon">📍</i>
                <span>г. Алматы, ул. Мамыр-2, дом 15</span>
              </li>
              <li>
                <i className="contact-icon">📱</i>
                <span>+7 (777) 356-22-24</span>
              </li>
              <li>
                <i className="contact-icon">✉️</i>
                <span>openinference17@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Open Inference. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
