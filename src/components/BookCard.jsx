export default function BookCard({ book }) {
  const { title, author, genre, year, coverUrl, status } = book;

  // Map status to Ukrainian labels
  const statusMap = {
    "To Read": "Планую",
    "Reading": "Читаю",
    "Completed": "Прочитано",
    "Wishlist": "Список бажань"
  };

  return (
    <article className="book-card">
      <div className="book-cover">
         <img src={coverUrl} alt={title} />
         {status && <span className={`badge badge-${status.toLowerCase().replace(' ', '-')}`}>{statusMap[status] || status}</span>}
      </div>
      <div className="book-info">
        <h3>{title}</h3>
        <p className="author">Автор: {author}</p>
        <div className="metadata">
          <span className="genre">{genre}</span>
          <span className="year">{year} р.</span>
        </div>
        <button className="book-action-btn">Керувати</button>
      </div>
    </article>
  );
}
