import { useState } from 'react';

export default function AddBookForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('Класика');

  function handleSubmit(e) {
    e.preventDefault();

    // Валідація: перевірка на порожню назву
    if (!title.trim() || !author.trim()) return;

    const newBook = {
      id: Date.now(),
      title: title.trim(),
      author: author.trim(),
      genre: genre,
      year: new Date().getFullYear(),
      coverUrl: "https://i.ibb.co/68fDkCg/gatsby.jpg",
      status: "To Read",
      completed: false
    };

    onAdd(newBook);

    // Очищення полів
    setTitle('');
    setAuthor('');
    setGenre('Класика');
  }

  return (
    <section className="add-book-section">
      <h3>Додати нову книгу</h3>
      <form onSubmit={handleSubmit} className="add-book-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Назва книги..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Автор..."
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="Класика">Класика</option>
            <option value="Фентезі">Фентезі</option>
            <option value="Наукова фантастика">Наукова фантастика</option>
            <option value="Антиутопія">Антиутопія</option>
            <option value="Реалізм">Реалізм</option>
            <option value="Художня література">Художня література</option>
          </select>
        </div>
        <button type="submit" className="btn-primary">Додати</button>
      </form>
    </section>
  );
}
