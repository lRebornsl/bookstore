import { useDispatch } from "react-redux";
import { remove } from "../../redux/books/booksSlice"
import { useSelector } from "react-redux";

const RenderBooks = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const {bookList} = books;

  const handleRemove = (e, index) => {
    e.preventDefault();
    dispatch(remove(index));
  }

  return(
    bookList.map((book, index) => (
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
    ))
  );
};

export default RenderBooks;