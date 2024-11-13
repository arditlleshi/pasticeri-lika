import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Gallery from "./components/Gallery";
import About from "./pages/About";
import Footer from "./components/Footer";
import BarMenu from "./pages/BarMenu";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/bar-menu" element={<BarMenu />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
