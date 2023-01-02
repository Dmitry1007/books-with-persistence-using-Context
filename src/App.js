import axios from "axios";
import React, { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = async (title) => {
    await axios.post("http://localhost:3001/books", { title }).then((res) => {
      setBooks([...books, res.data]);
    });
  };
  
  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const editBook = (id, title) => {
    setBooks(books.map((book) => {
      if (book.id === id) {
        return { ...book, title };
      }
      return book;
    }));
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBook} onEdit={editBook} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
