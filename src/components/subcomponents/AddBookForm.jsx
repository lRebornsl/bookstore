import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postBooks, getBooks } from "../../redux/books/booksSlice"

const AddBookForm = () => {
  const books = useSelector(state => state.books);
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [val, setVal] = useState(true);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setBookTitle(e.target.value);
  }

  const handleSelectChange = (e) => {
    setBookAuthor(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    let newId = "";
    const { bookList } = books;
    Object.keys(bookList).length === 0 ? newId = "item0" : newId = "item" + Object.keys(bookList).length;
    dispatch(postBooks({
      id: newId,
      title: bookTitle,
      author: bookAuthor,
      category: "undefined",
    }))
      .then(() => {
        setVal(true);
      })
    setBookTitle("");
  }
  
  useEffect(() => {
    if(val) {
      dispatch(getBooks());
      setVal(false);
    }
  }, [val, dispatch]);

  return(
    <form className="flex">
      <input className="bg-white grow px-4 py-2 border border-platinum mr-4 outline-0" type="text" placeholder="Book title" value={bookTitle} onChange={handleInputChange}></input>
      <select className="mx-4 px-8 text-center outline-0 border border-platinum" value="Author" onChange={handleSelectChange}>
        <option value="Author" disabled>Author</option>
        <option value="Miguel De Cervantes">Miguel De Cervantes</option>
        <option value="Marqués De Sade">Marqués De Sade</option>
        <option value="Goethe">Goethe</option>
      </select>
      <button className="bg-azure rounded text-xs text-white px-12 ml-4" onClick={handleClick}>ADD BOOK</button>
    </form>
  );
};

export default AddBookForm;