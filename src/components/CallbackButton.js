import React, { useState } from 'react';
import './CallbackButton.css';

const CallbackButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    time: 'any'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleToggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Симуляция отправки данных на сервер
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Сброс формы и скрытие после успешной отправки
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          time: 'any'
        });
        setIsSubmitted(false);
        setIsOpen(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className={`callback-container ${isOpen ? 'open' : ''}`}>
      <button
        className="callback-button"
        onClick={handleToggleForm}
        aria-label="Заказать обратный звонок"
      >
        <span className="callback-icon">☎️</span>
        <span className="callback-text">Заказать звонок</span>
      </button>
      
      <div className="callback-form-container">
        {isSubmitted ? (
          <div className="callback-success">
            <p>Спасибо! Мы свяжемся с вами в ближайшее время.</p>
          </div>
        ) : (
          <form className="callback-form" onSubmit={handleSubmit}>
            <h3>Заказать обратный звонок</h3>
            <p>Оставьте свои контакты, и мы перезвоним вам в удобное время</p>
            
            <div className="form-group">
              <label htmlFor="name">Ваше имя</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Иван Иванов"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Телефон</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+7 (___) ___-__-__"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="time">Удобное время для звонка</label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
              >
                <option value="any">В любое время</option>
                <option value="morning">Утро (9:00 - 12:00)</option>
                <option value="afternoon">День (12:00 - 18:00)</option>
                <option value="evening">Вечер (18:00 - 21:00)</option>
              </select>
            </div>
            
            <div className="form-actions">
              <button type="button" className="cancel-btn" onClick={handleToggleForm}>Отмена</button>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Отправка...' : 'Заказать звонок'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CallbackButton;
