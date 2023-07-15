import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Books from "./components/Books"
import Categorires from "./components/Categories"

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Categories" element={<Categorires />} />
      </Routes>
    </>
  )
}

export default App
