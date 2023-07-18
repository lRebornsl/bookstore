const RenderBooks = () => {
  const book = [{
    category: 'Undefined',
    author: 'Goethe',
    title: 'Wild'
  }];

  return(
    book.map((book, index) => (
      <div key={index} className="container mx-auto bg-white border border-platinum px-6 py-8 my-4">
        <h3 className="font-bold text-black-two/50">{book.category}</h3>
        <h2 className="font-bold text-2xl">{book.title}</h2>
        <p className="text-cyan-blue">{book.author}</p>
        <div className="flex pt-4">
          <button className="mr-4 text-cyan-blue">Comments</button>
          <hr className="border border-platinum h-auto"></hr>
          <button className="mx-4 text-cyan-blue">Remove</button>
          <hr className="border border-platinum h-auto"></hr>
          <button className="ml-4 text-cyan-blue">Edit</button>
        </div>
      </div>
    ))
  );
};

export default RenderBooks;