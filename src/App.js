import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AiSolutions from './components/AiSolutions';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ThemeToggle from './components/ThemeToggle';
import CallbackButton from './components/CallbackButton';
import CookieConsent from './components/CookieConsent';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  // Имитация загрузки ресурсов
  useEffect(() => {
    // Добавляем класс для скрытия полосы прокрутки при загрузке
    document.body.style.overflow = 'hidden';
    
    // Эмуляция загрузки ресурсов
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'auto';
    }, 1500);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);
  
  // Добавляем анимацию при скролле
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };
    
    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    };
    
    // Создаем observer для анимаций при скролле
    const animationObserver = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Находим все элементы для анимации
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => animationObserver.observe(el));
    
    // Добавляем стаггер эффект для списков
    const staggerContainers = document.querySelectorAll('.stagger-container');
    staggerContainers.forEach(container => {
      const items = container.querySelectorAll('.stagger-item');
      items.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
      });
    });
    
    return () => {
      if (animationObserver) {
        animatedElements.forEach(el => animationObserver.unobserve(el));
      }
    };
  }, [loading]); // Запускаем после загрузки страницы

  return (
    <div className="App">
      {/* Прелоадер */}
      <div className={`preloader ${loading ? '' : 'hidden'}`}>
        <div className="preloader-spinner"></div>
      </div>
      
      <Header />
      <main>
        <Hero />
        <Services />
        <AiSolutions />
        <About />
        <Portfolio />
        <Testimonials />
        <Contact />
        <CtaSection />
      </main>
      <Footer />
      
      {/* Дополнительные компоненты */}
      <ScrollToTop />
      <ThemeToggle />
      <CallbackButton />
      <CookieConsent />
    </div>
  );
}

export default App;
