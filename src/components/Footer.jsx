export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3>Проєкт "Книжкова Полиця"</h3>
          <p>Створено як Практичну роботу №1 - Варіант 4 (React & Vite)</p>
        </div>
        <div className="footer-section">
          <h4>Посилання</h4>
          <ul>
            <li><a href="#about">Про нас</a></li>
            <li><a href="#contact">Контакти</a></li>
            <li><a href="#github">GitHub</a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Влад. Усі права захищені. Академічна практика React.</p>
        </div>
      </div>
    </footer>
  );
}
