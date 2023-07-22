import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const NavBar = () => (
  <header className="border-b border-b-platinum">
    <nav className="container mx-auto lg:px-14 flex justify-between py-8">
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-3xl text-azure">Bookstore CMS</h1>
        <ul className="flex">
          <li className="ml-16"><Link to="/">BOOKS</Link></li>
          <li className="ml-16"><Link to="/Categories">CATEGORIES</Link></li>
        </ul>
      </div>
      <div className="flex justify-center items-center w-11 h-11 rounded-full object-cover border border-platinum">
        <FaUser color="#0290ff" />
      </div>
    </nav>
  </header>
)

export default NavBar;