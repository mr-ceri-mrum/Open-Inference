import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Проверяем наличие согласия в localStorage
  useEffect(() => {
    const consentAccepted = localStorage.getItem('cookieConsent');
    
    // Показываем уведомление с небольшой задержкой
    if (!consentAccepted) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  // Обработчик принятия согласия
  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
  };

  // Обработчик закрытия уведомления
  const handleClose = () => {
    setVisible(false);
  };

  // Открытие модального окна с политикой
  const openModal = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  // Закрытие модального окна
  const closeModal = () => {
    setModalOpen(false);
  };

  if (!visible) return null;

  return (
    <>
      <div className="cookie-consent">
        <div className="cookie-content">
          <p>
            Мы используем cookie-файлы для улучшения вашего опыта на нашем сайте. Используя наш сайт, вы соглашаетесь с нашей {' '}
            <a href="#" onClick={openModal}>Политикой конфиденциальности</a>.
          </p>
          <div className="cookie-buttons">
            <button className="cookie-accept" onClick={handleAccept}>Принять</button>
            <button className="cookie-close" onClick={handleClose}>✕</button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="privacy-modal">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>✕</button>
            <h2>Политика конфиденциальности</h2>
            <div className="policy-content">
              <h3>1. Введение</h3>
              <p>Компания Open Inference (далее - «Open Inference», «Мы», «Наше») серьезно относится к защите ваших личных данных. Настоящая Политика конфиденциальности описывает, какие данные мы собираем и как мы их используем.</p>
              
              <h3>2. Сбор информации</h3>
              <p>Мы можем собирать следующие типы информации:</p>
              <ul>
                <li>Контактная информация (имя, электронная почта, телефон)</li>
                <li>Техническая информация (адрес IP, тип браузера, тип устройства)</li>
                <li>Файлы cookie и аналогичные технологии</li>
              </ul>
              
              <h3>3. Использование информации</h3>
              <p>Мы используем собранную информацию для:</p>
              <ul>
                <li>Предоставления и улучшения наших услуг</li>
                <li>Ответов на ваши запросы</li>
                <li>Отправки важных уведомлений о наших услугах</li>
                <li>Улучшения работы нашего сайта</li>
              </ul>
              
              <h3>4. Безопасность данных</h3>
              <p>Мы принимаем разумные меры для защиты ваших личных данных от потери, кражи и несанкционированного доступа. Однако, ни один метод передачи данных через интернет или метод электронного хранения не является абсолютно безопасным.</p>
              
              <h3>5. Изменения в политике конфиденциальности</h3>
              <p>Мы можем обновлять нашу Политику конфиденциальности время от времени. Мы будем уведомлять о любых изменениях путем публикации новой Политики конфиденциальности на этой странице.</p>
              
              <h3>6. Связь с нами</h3>
              <p>Если у вас есть вопросы о нашей Политике конфиденциальности, пожалуйста, свяжитесь с нами по электронной почте openinference17@gmail.com.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
