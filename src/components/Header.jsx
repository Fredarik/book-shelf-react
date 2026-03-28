export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <span role="img" aria-label="books">📚</span>
          <h1>Моя Полиця</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#all" className="active">Усі книги</a></li>
            <li><a href="#favorites">Улюблені</a></li>
            <li><a href="#reading">Зараз читаю</a></li>
            <li><a href="#wishlist">Хочу прочитати</a></li>
          </ul>
        </nav>
        <div className="user-profile">
             <div className="avatar">В</div>
        </div>
      </div>
    </header>
  );
}
