import BookCard from './BookCard.jsx';

export default function BookList({ books, onToggle, onRemove }) {
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
      </div>
      <div className="book-grid">
        {books.map((book) => (
          <BookCard 
            key={book.id} 
            book={book} 
            onToggle={onToggle} 
            onRemove={onRemove}
          />
        ))}
      </div>
    </section>
  );
}
