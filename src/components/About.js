import React from 'react';
import './About.css';
import aboutImage from '../assets/about-image.svg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-title">
          <h3>О нас</h3>
          <p>Познакомьтесь с командой Open Inference и нашими ценностями</p>
        </div>
        <div className="about-content">
          <div className="about-image">
            <img src={aboutImage} alt="Команда Open Inference" />
          </div>
          <div className="about-text">
            <h4>Мы помогаем бизнесу расти с помощью современных технологий</h4>
            <p>
              Open Inference - это команда профессионалов в области веб-разработки и искусственного интеллекта. 
              Мы создаем инновационные решения, которые помогают нашим клиентам достигать новых высот в цифровом мире.
            </p>
            <p>
              Наша миссия - делать сложные технологии доступными для бизнеса любого масштаба, помогая им расти и конкурировать 
              в современном мире.
            </p>
            <div className="about-features">
              <div className="feature">
                <i className="feature-icon">🔬</i>
                <div className="feature-text">
                  <h5>Опыт и экспертиза</h5>
                  <p>Более 10 лет опыта в разработке и внедрении технологических решений</p>
                </div>
              </div>
              <div className="feature">
                <i className="feature-icon">💪</i>
                <div className="feature-text">
                  <h5>Сильная команда</h5>
                  <p>Талантливые разработчики и эксперты в области ИИ</p>
                </div>
              </div>
              <div className="feature">
                <i className="feature-icon">💎</i>
                <div className="feature-text">
                  <h5>Качество и инновации</h5>
                  <p>Мы всегда стремимся к совершенству и внедряем новейшие технологии</p>
                </div>
              </div>
            </div>
            <a href="#contact" className="cta-button">Работать с нами</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
