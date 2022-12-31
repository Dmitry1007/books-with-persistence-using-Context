function BookCreate({ createBook }) {
  
  function handleCreate() {
    createBook({
      id: 1,
      title: "The Hobbit",
    });
  }

  return (
    <div>BookCreate
      <button title="Create" onClick={handleCreate}></button>
    </div>
  )
}

export default BookCreate;
