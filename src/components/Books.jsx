import RenderBooks from "./subcomponents/RenderBooks";
import AddBookForm from "./subcomponents/AddBookForm";

const Books = () => (
    <section className="bg-lotion py-8 min-h-screen">
      <RenderBooks />
      <hr className="container mx-auto my-10"></hr>
      <div className="container mx-auto">
        <h3 className="text-taupe-gray font-bold text-xl pb-4">ADD NEW BOOK</h3>
        <AddBookForm />
      </div>
    </section>
);

export default Books;