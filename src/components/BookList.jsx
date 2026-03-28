import BookCard from './BookCard.jsx';

export default function BookList({ books, onToggle }) {
  if (books.length === 0) {
    return (
      <section className="book-list-main">
        <div className="empty-message">
          <div className="empty-icon">📂</div>
          <p>На жаль, за вашим запитом не знайдено жодної книги.</p>
          <p className="empty-hint">Спробуйте змінити фільтр або додати нове видання.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="book-list-main">
      <div className="list-header">
        <h2>Ваша бібліотека ({books.length} книг)</h2>
        <div className="list-controls">
          <button className="btn-secondary">Додати книгу</button>
          <div className="filter-select">
            <label htmlFor="filter">Фільтр: </label>
            <select name="filter" id="filter">
              <option value="all">Усі жанри</option>
              <option value="classic">Класика</option>
              <option value="fantasy">Фентезі</option>
              <option value="sci-fi">Наукова фантастика</option>
            </select>
          </div>
        </div>
      </div>
      <div className="book-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} onToggle={onToggle} />
        ))}
      </div>
    </section>
  );
}
