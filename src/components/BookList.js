function BookList({ books }) {
  const renderedBooks = () => {
    return books.map((book) => {
      return <li key={book.id}>{book.title}</li>;
    });
  };

  return (
    <div className="book-list">
      <h3>Books: </h3>
      <ul>{renderedBooks()}</ul>
    </div>
  )
}

export default BookList;
