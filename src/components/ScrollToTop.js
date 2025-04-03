import { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    // Добавляем кнопку прокрутки вверх
    const createScrollTopButton = () => {
      const button = document.createElement('button');
      button.innerHTML = '↑';
      button.className = 'scroll-to-top';
      button.setAttribute('aria-label', 'Прокрутить наверх');
      button.style.display = 'none';

      button.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });

      document.body.appendChild(button);
      return button;
    };

    const scrollTopButton = createScrollTopButton();

    // Показываем или скрываем кнопку в зависимости от положения прокрутки
    const toggleScrollTopButton = () => {
      if (window.pageYOffset > 300) {
        scrollTopButton.style.display = 'flex';
      } else {
        scrollTopButton.style.display = 'none';
      }
    };

    window.addEventListener('scroll', toggleScrollTopButton);

    // Очистка при размонтировании
    return () => {
      window.removeEventListener('scroll', toggleScrollTopButton);
      if (scrollTopButton && document.body.contains(scrollTopButton)) {
        document.body.removeChild(scrollTopButton);
      }
    };
  }, []);

  return null; // Этот компонент не рендерит видимый UI
};

export default ScrollToTop;
