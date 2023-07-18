const AddBookForm = () => {
  return(
    <form className="flex">
      <input className="bg-white grow px-4 py-2 border border-platinum mr-4 outline-0" type="text" placeholder="Book title"></input>
      <select className="mx-4 px-12 text-center outline-0 border border-platinum">
        <option value="Author" disabled selected>Author</option>
        <option value="Miguel De Cervantes">Miguel De Cervantes</option>
        <option value="Marqués De Sade">Marqués De Sade</option>
        <option value="Goethe">Goethe</option>
      </select>
      <button className="bg-azure rounded text-xs text-white px-12 ml-4">ADD BOOK</button>
    </form>
  );
};

export default AddBookForm;