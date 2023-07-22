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
          <div key={index} className="flex justify-between bg-white border border-platinum px-6 py-8 my-4">
            <div>
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
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center w-20 h-20 rounded-full border-4 border-platinum"></div>
              <div className="block px-4">
                <h2 className="text-3xl">0%</h2>
                <p className="text-platinum">Completed</p>
              </div>
              <hr className="border border-platinum h-20 mx-14"></hr>
              <div className="block">
                <h3 className="text-platinum text-sm font-roboto">CURRENT CHAPTER</h3>
                <h3 className="font-roboto">Introduction</h3>
                <button className="bg-azure rounded text-sm text-white px-6 py-2 mt-6">UPDATE PROGRESS</button>
              </div>
            </div>
          </div>
        )
      })
    )
  );
};

export default RenderBooks;