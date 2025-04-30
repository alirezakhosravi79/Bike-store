import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Navbar from "./components/Navbar"
import Details from "./pages/Details"
import Blog from "./pages/Blog"
import BlogPost from "./components/BlogPost"
import About from "./pages/About"

function App() {
  return (
    <>
     <Navbar />
     <Routes>
      <Route path="/" element={ <Home /> }/>
      <Route path="/cart" element={ <Cart /> }/>
      <Route path="/about" element={ <About /> }/>
      <Route path="/blog" element={ <Blog /> }/>
      <Route path="/blog/:id" element={ <BlogPost /> }/>
      <Route path="/product/:id" element={ <Details /> }/>
     </Routes>
    </>
  )
}

export default App