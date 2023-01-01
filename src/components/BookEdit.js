function BookEdit({ book }) {
  return (
    <div className="book-edit">
      <h3>Edit Book</h3>
      <form>
        <label>Title</label>
        <input className="input" value={book.title} />
        <button className="button">Update</button>
      </form>
    </div>
  );
}

export default BookEdit;
