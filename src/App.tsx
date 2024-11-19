import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import BarMenu from "./pages/BarMenu";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/pasticeri-lika" element={<Home />} />
        <Route path="/pasticeri-lika/our-products" element={<Products />} />
        <Route path="/pasticeri-lika/gallery" element={<Gallery />} />
        <Route path="/pasticeri-lika/about-us" element={<About />} />
        <Route path="/pasticeri-lika/bar-menu" element={<BarMenu />} />
        <Route path="/pasticeri-lika/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
