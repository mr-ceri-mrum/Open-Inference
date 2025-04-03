import React, { useState, useEffect } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Проверяем предпочтения пользователя при загрузке
  useEffect(() => {
    // Проверяем сохраненный режим в localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // Проверяем системные предпочтения
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDarkMode);
      document.documentElement.setAttribute('data-theme', prefersDarkMode ? 'dark' : 'light');
    }
  }, []);

  // Переключение темы
  const toggleTheme = () => {
    const newTheme = darkMode ? 'light' : 'dark';
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button 
      className={`theme-toggle ${darkMode ? 'dark' : 'light'}`} 
      onClick={toggleTheme}
      aria-label={darkMode ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'}
    >
      <div className="toggle-icon">
        {darkMode ? (
          <span className="moon">🌙</span>
        ) : (
          <span className="sun">☀️</span>
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
