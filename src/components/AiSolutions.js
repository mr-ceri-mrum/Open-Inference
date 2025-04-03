import React from 'react';
import './AiSolutions.css';

const AiSolutions = () => {
  const solutions = [
    {
      icon: '🔍',
      title: 'Интеллектуальный поиск',
      description: 'Системы поиска, которые понимают намерения пользователей и предоставляют релевантные результаты.'
    },
    {
      icon: '💬',
      title: 'Чат-боты и виртуальные ассистенты',
      description: 'Умные боты, способные общаться с клиентами и решать их задачи в режиме реального времени.'
    },
    {
      icon: '📊',
      title: 'Аналитика данных',
      description: 'Системы анализа больших данных для выявления трендов и принятия обоснованных бизнес-решений.'
    }
  ];

  return (
    <section id="ai-solutions" className="ai-solutions">
      <div className="container">
        <div className="solutions-content">
          <div className="solutions-image">
            <div className="solutions-image-placeholder"></div>
          </div>
          <div className="solutions-text">
            <h3>Наши ИИ-решения для вашего бизнеса</h3>
            <p>
              Open Inference предлагает инновационные решения на базе искусственного интеллекта, 
              которые помогают оптимизировать бизнес-процессы, автоматизировать рутинные задачи 
              и повышать качество обслуживания клиентов.
            </p>
            <div className="solutions-list">
              {solutions.map((solution, index) => (
                <div className="solution-item" key={index}>
                  <div className="solution-icon">{solution.icon}</div>
                  <div className="solution-item-text">
                    <h5>{solution.title}</h5>
                    <p>{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#contact" className="cta-button">Узнать больше</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiSolutions;
