import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

const initialBooks = [
  {
    id: 1,
    title: "Великий Гетсбі",
    author: "Ф. Скотт Фіцджеральд",
    genre: "Класика",
    year: 1925,
    coverUrl: "https://i.ibb.co/68fDkCg/gatsby.jpg",
    status: "To Read",
    completed: false
  },
  {
    id: 2,
    title: "1984",
    author: "Джордж Орвелл",
    genre: "Антиутопія",
    year: 1949,
    coverUrl: "https://i.ibb.co/8Ym8x4m/1984.jpg",
    status: "Reading",
    completed: true
  },
  {
    id: 3,
    title: "Гобіт",
    author: "Дж. Р. Р. Толкін",
    genre: "Фентезі",
    year: 1937,
    coverUrl: "https://i.ibb.co/r7XW6n2/hobbit.jpg",
    status: "Completed",
    completed: true
  },
  {
    id: 4,
    title: "Прекрасний новий світ",
    author: "Олдос Хакслі",
    genre: "Наукова фантастика",
    year: 1932,
    coverUrl: "https://i.ibb.co/zXqNf08/brave-new-world.jpg",
    status: "Wishlist",
    completed: false
  },
  {
    id: 5,
    title: "Убити пересмішника",
    author: "Гарпер Лі",
    genre: "Художня література",
    year: 1960,
    coverUrl: "https://i.ibb.co/hK5S8C6/mockingbird.jpg",
    status: "To Read",
    completed: false
  },
  {
    id: 6,
    title: "Ловець у житі",
    author: "Дж. Д. Селінджер",
    genre: "Реалізм",
    year: 1951,
    coverUrl: "https://i.ibb.co/5G78Lrk/catcher.jpg",
    status: "Reading",
    completed: false
  }
];

function App() {
  const [books, setBooks] = useState(initialBooks);
  const [filter, setFilter] = useState('all');

  const toggleBookStatus = (id) => {
    setBooks(prevBooks => 
      prevBooks.map(book => 
        book.id === id ? { ...book, completed: !book.completed } : book
      )
    );
  };

  const filteredBooks = books.filter(book => {
    if (filter === 'active') return !book.completed;
    if (filter === 'completed') return book.completed;
    return true;
  });

  const completedCount = books.filter(b => b.completed).length;

  return (
    <div className="app">
      <Header completedCount={completedCount} />
      <Main 
        books={filteredBooks} 
        allBooksCount={books.length}
        onToggle={toggleBookStatus} 
        currentFilter={filter}
        onFilterChange={setFilter}
      />
      <Footer />
    </div>
  );
}

export default App;
