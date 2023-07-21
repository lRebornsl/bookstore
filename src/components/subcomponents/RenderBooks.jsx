import { useDispatch, useSelector } from "react-redux";
import { deleteBooks, getBooks } from "../../redux/books/booksSlice"
import { useEffect, useState } from "react";

const RenderBooks = () => {
  const books = useSelector((state) => state.books);
  const [val, setVal] = useState(false);
  const dispatch = useDispatch();

  const {bookList} = books;

  const handleRemove = (e, index) => {
    e.preventDefault();
    const itemId = Object.keys(bookList)[index];
    dispatch(deleteBooks({id: itemId}))
      .then(() => setVal(true))
  }

  useEffect(() => {
    if(val) {
      dispatch(getBooks());
    }
    setVal(false);
  }, [val, dispatch])

  return (
    Object.keys(bookList).length === 0 ? (
      <h1 className="container mx-auto">No books available.</h1>
    ) : (
      Object.keys(bookList).map((item, index) => {
        const [book] = bookList[item];
        return(
          <div key={index} className="container mx-auto bg-white border border-platinum px-6 py-8 my-4">
            <h3 className="font-bold text-black-two/50">{book.category}</h3>
            <h2 className="font-bold text-2xl">{book.title}</h2>
            <p className="text-cyan-blue">{book.author}</p>
            <div className="flex pt-4">
              <button className="mr-4 text-cyan-blue">Comments</button>
              <hr className="border border-platinum h-auto"></hr>
              <button className="mx-4 text-cyan-blue" onClick={(e) => handleRemove(e, index)}>Remove</button>
              <hr className="border border-platinum h-auto"></hr>
              <button className="ml-4 text-cyan-blue">Edit</button>
            </div>
          </div>
        )
      })
    )
  );
};

export default RenderBooks;