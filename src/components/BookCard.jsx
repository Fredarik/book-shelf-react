export default function BookCard({ book, onToggle }) {
  const { id, title, author, genre, year, coverUrl, status, completed } = book;

  const statusMap = {
    "To Read": "Планую",
    "Reading": "Читаю",
    "Completed": "Прочитано",
    "Wishlist": "Список бажань"
  };

  return (
    <article className={`book-card ${completed ? 'is-completed' : ''}`}>
      <div className="book-cover">
        <img src={coverUrl} alt={title} style={completed ? { filter: 'grayscale(100%)', opacity: 0.6 } : {}} />
        {status && <span className={`badge badge-${status.toLowerCase().replace(' ', '-')}`}>{statusMap[status] || status}</span>}
        <div className="book-checkbox-overlay">
          <input
            type="checkbox"
            checked={completed}
            onChange={() => onToggle(id)}
            id={`check-${id}`}
          />
          <label htmlFor={`check-${id}`}>{completed ? 'Прочитано' : 'Не прочитано'}</label>
        </div>
      </div>
      <div className="book-info">
        <h3>{title}</h3>
        <p className="author">Автор: {author}</p>
        <div className="metadata">
          <span className="genre">{genre}</span>
          <span className="year">{year} р.</span>
        </div>
        <button className="book-action-btn" onClick={() => onToggle(id)}>
          {completed ? 'Скасувати позначку' : 'Позначити як прочитану'}
        </button>
      </div>
    </article>
  );
}
