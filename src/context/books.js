import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    await axios.get("http://localhost:3001/books").then((res) => {
      setBooks(res.data);
    });
  };

  const stableFetchBooks = useCallback(fetchBooks, []);

  const createBook = async (title) => {
    await axios.post("http://localhost:3001/books", { title }).then((res) => {
      setBooks([...books, res.data]);
    });
  };

  const deleteBook = (id) => {
    axios.delete(`http://localhost:3001/books/${id}`).then((res) => {
      setBooks(books.filter((book) => book.id !== id));
    });
  };

  const editBook = (id, title) => {
    axios.put(`http://localhost:3001/books/${id}`, { title }).then((res) => {
      setBooks(
        books.map((book) => {
          if (book.id === id) {
            return { ...book, ...res.data };
          } else {
            return book;
          }
        })
      );
    });
  };

  return (
    <BooksContext.Provider value={{ books, stableFetchBooks, createBook, deleteBook, editBook }}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
