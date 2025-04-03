import React from 'react';
import './CtaSection.css';

const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <h3>Готовы трансформировать ваш бизнес?</h3>
        <p>Свяжитесь с нами, чтобы обсудить, как наши веб-решения и технологии ИИ могут помочь вашему бизнесу достичь новых высот.</p>
        <div className="cta-buttons">
          <a href="#contact" className="cta-white">Связаться с нами</a>
          <a href="#services" className="cta-button">Наши услуги</a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
