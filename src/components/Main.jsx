import BookList from './BookList.jsx';


export default function Main({ books }) {
  return (
    <main className="main-content">
      <div className="container">
        <section className="hero">
          <div className="hero-text">
            <h2>Ваша персональна бібліотека</h2>
            <p>Керуйте колекцією, відстежуйте прогрес і знаходьте нове.</p>
          </div>
          <div className="hero-stats">
            <div className="stat"><span>{books.length}</span> Усього книг</div>
            <div className="stat"><span>12</span> Прочитано</div>
            <div className="stat"><span>3</span> У процесі</div>
          </div>
        </section>
        <BookList books={books} />
      </div>
    </main>
  );
}
