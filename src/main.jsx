import BookList from './BookList.jsx';

export default function Main({ books, allBooksCount, onToggle, currentFilter, onFilterChange }) {
  const completedCount = allBooksCount ? books.filter(b => b.completed).length : 0; 
  
  return (
    <main className="main-content">
      <div className="container">
        <section className="hero">
          <div className="hero-text">
            <h2>Ваша персональна бібліотека</h2>
            <p>Керуйте колекцією, відстежуйте прогрес і знаходьте нове.</p>
          </div>
          <div className="hero-stats">
             <div className="stat"><span>{allBooksCount}</span> Усього</div>
             <div className="stat highlight">
                <span>{currentFilter === 'all' ? books.length : '—'}</span> Поточне меню
             </div>
          </div>
        </section>

        <section className="filter-bar">
           <div className="filter-group">
              <button 
                className={`filter-btn ${currentFilter === 'all' ? 'active' : ''}`}
                onClick={() => onFilterChange('all')}
              >
                Усі
              </button>
              <button 
                className={`filter-btn ${currentFilter === 'active' ? 'active' : ''}`}
                onClick={() => onFilterChange('active')}
              >
                Читаю
              </button>
              <button 
                className={`filter-btn ${currentFilter === 'completed' ? 'active' : ''}`}
                onClick={() => onFilterChange('completed')}
              >
                Прочитано
              </button>
           </div>
           <p className="filter-info">
              Показано: <strong>{books.length}</strong> з {allBooksCount} книг
           </p>
        </section>

        <BookList books={books} onToggle={onToggle} />
      </div>
    </main>
  );
}
