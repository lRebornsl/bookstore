import { useEffect, useState } from "react";

const Books = () => {
  const [books, setBook] = useState([{}])
  
  useEffect(() => {
    setBook([
      {
        category: 'Action',
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
      }
    ]);
  }, []);

  const [bookList] = books;

  return(
    <section className="bg-lotion py-8 min-h-screen">
      <div className="container mx-auto bg-white border border-platinum px-6 py-8 my-4">
        <div>
          <h3 className="font-bold text-black-two/50">{bookList.category}</h3>
          <h2 className="font-bold text-2xl">{bookList.title}</h2>
          <p className="text-cyan-blue">{bookList.author}</p>
          <div className="flex pt-4">
            <button className="mr-4 text-cyan-blue">Comments</button>
            <hr className="border border-platinum h-auto"></hr>
            <button className="mx-4 text-cyan-blue">Remove</button>
            <hr className="border border-platinum h-auto"></hr>
            <button className="ml-4 text-cyan-blue">Edit</button>
          </div>
        </div>
      </div>
      <hr className="container mx-auto my-10"></hr>
      <div className="container mx-auto">
        <h3 className="text-taupe-gray font-bold text-xl pb-4">ADD NEW BOOK</h3>
        <form className="flex">
          <input className="bg-white grow px-4 py-2 border border-platinum mr-4 outline-0" type="text" placeholder="Book title"></input>
          <select className="mx-4 px-16 text-left outline-0 border border-platinum">
            <option value="" disabled selected>Author</option>
          </select>
          <button className="bg-azure rounded text-xs text-white px-12 ml-4">ADD BOOK</button>
        </form>
      </div>
    </section>
  )
};

export default Books;