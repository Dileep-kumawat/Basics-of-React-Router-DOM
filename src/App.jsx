import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Mens from "./components/Mens.jsx";
import Women from "./components/Women.jsx";
import NotFound from "./Pages/404NotFound.jsx";

const App = () => {
  return (
    <div className="h-screen w-full bg-slate-950 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} >
          <Route path="men" element={<Mens />} />
          <Route path="women" element={<Women />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App