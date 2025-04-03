import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Интернет-магазин TechStore',
      category: 'web',
      image: '/api/placeholder/370/300',
      description: 'Разработка современного интернет-магазина электроники с интеграцией системы оплаты и CRM.'
    },
    {
      id: 2,
      title: 'ИИ-ассистент для FinLight',
      category: 'ai',
      image: '/api/placeholder/370/300',
      description: 'Разработка ИИ-ассистента для анализа финансовых данных и предоставления рекомендаций.'
    },
    {
      id: 3,
      title: 'Корпоративный портал ТехноПлюс',
      category: 'web',
      image: '/api/placeholder/370/300',
      description: 'Разработка внутреннего портала для сотрудников с различными уровнями доступа и функционалом.'
    },
    {
      id: 4,
      title: 'Интеллектуальный чат-бот для поддержки клиентов',
      category: 'ai',
      image: '/api/placeholder/370/300',
      description: 'Разработка интеллектуального чат-бота для обработки запросов клиентов и предоставления релевантной информации.'
    },
    {
      id: 5,
      title: 'Система рекомендаций для интернет-магазина',
      category: 'ai',
      image: '/api/placeholder/370/300',
      description: 'Внедрение системы рекомендаций на основе ИИ, которая анализирует поведение пользователей и предлагает релевантные товары.'
    },
    {
      id: 6,
      title: 'Корпоративный сайт ФинТех',
      category: 'web',
      image: '/api/placeholder/370/300',
      description: 'Разработка современного корпоративного сайта с адаптивным дизайном и интерактивными элементами.'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-title">
          <h3>Наше портфолио</h3>
          <p>Ознакомьтесь с нашими последними работами</p>
        </div>
        <div className="portfolio-filters">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            Все проекты
          </button>
          <button 
            className={filter === 'web' ? 'active' : ''} 
            onClick={() => setFilter('web')}
          >
            Веб-разработка
          </button>
          <button 
            className={filter === 'ai' ? 'active' : ''} 
            onClick={() => setFilter('ai')}
          >
            ИИ-решения
          </button>
        </div>
        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div className="portfolio-item" key={project.id}>
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <a href={`#project-${project.id}`} className="portfolio-link">
                    <i>🔍</i>
                  </a>
                </div>
              </div>
              <div className="portfolio-info">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <span className={`portfolio-category ${project.category}`}>
                  {project.category === 'web' ? 'Веб-разработка' : 'ИИ-решения'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
