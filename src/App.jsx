import React from 'react';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

const booksData = [
  {
    id: 1,
    title: "Великий Гетсбі",
    author: "Ф. Скотт Фіцджеральд",
    genre: "Класика",
    year: 1925,
    coverUrl: "https://i.ibb.co/68fDkCg/gatsby.jpg",
    status: "To Read"
  },
  {
    id: 2,
    title: "1984",
    author: "Джордж Орвелл",
    genre: "Антиутопія",
    year: 1949,
    coverUrl: "https://i.ibb.co/8Ym8x4m/1984.jpg",
    status: "Reading"
  },
  {
    id: 3,
    title: "Гобіт",
    author: "Дж. Р. Р. Толкін",
    genre: "Фентезі",
    year: 1937,
    coverUrl: "https://i.ibb.co/r7XW6n2/hobbit.jpg",
    status: "Completed"
  },
  {
    id: 4,
    title: "Прекрасний новий світ",
    author: "Олдос Хакслі",
    genre: "Наукова фантастика",
    year: 1932,
    coverUrl: "https://i.ibb.co/zXqNf08/brave-new-world.jpg",
    status: "Wishlist"
  },
  {
    id: 5,
    title: "Убити пересмішника",
    author: "Гарпер Лі",
    genre: "Художня література",
    year: 1960,
    coverUrl: "https://i.ibb.co/hK5S8C6/mockingbird.jpg",
    status: "To Read"
  },
  {
    id: 6,
    title: "Ловець у житі",
    author: "Дж. Д. Селінджер",
    genre: "Реалізм",
    year: 1951,
    coverUrl: "https://i.ibb.co/5G78Lrk/catcher.jpg",
    status: "Reading"
  }
];

function App() {
  return (
    <div className="app">
      <Header />
      <Main books={booksData} />
      <Footer />
    </div>
  );
}

export default App;
