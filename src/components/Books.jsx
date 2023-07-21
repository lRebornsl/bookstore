import RenderBooks from "./subcomponents/RenderBooks";
import AddBookForm from "./subcomponents/AddBookForm";

const Books = () => (
    <section className="bg-lotion py-8 min-h-screen">
      <div className="container mx-auto lg:px-14">
        <RenderBooks />
      </div>
      <div className="container mx-auto lg:px-14">
        <hr className="my-10"></hr>
      </div>
      <div className="container mx-auto lg:px-14">
        <h3 className="text-taupe-gray font-bold text-xl pb-4">ADD NEW BOOK</h3>
        <AddBookForm />
      </div>
    </section>
);

export default Books;