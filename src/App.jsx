import React from 'react';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

/**
 * App Component
 * 
 * Main entry point for the Book Shelf application.
 * Assembles the layout using semantic components: Header, Main, and Footer.
 */
function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
