import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../redux/books/booksSlice"

const AddBookForm = () => {
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setBookTitle(e.target.value);
  }

  const handleSelectChange = (e) => {
    setBookAuthor(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(add({ title: bookTitle, author: bookAuthor }));
    setBookTitle("");
  }

  return(
    <form className="flex">
      <input className="bg-white grow px-4 py-2 border border-platinum mr-4 outline-0" type="text" placeholder="Book title" onChange={handleInputChange}></input>
      <select className="mx-4 px-16 text-center outline-0 border border-platinum" onChange={handleSelectChange}>
        <option value="Author" disabled selected>Author</option>
        <option value="Miguel De Cervantes">Miguel De Cervantes</option>
        <option value="Marqués De Sade">Marqués De Sade</option>
        <option value="Goethe">Goethe</option>
      </select>
      <button className="bg-azure rounded text-xs text-white px-12 ml-4" onClick={handleClick}>ADD BOOK</button>
    </form>
  );
};

export default AddBookForm;