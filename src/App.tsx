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
      
      {/* Quick Actions */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="flex flex-col gap-3">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <svg
              className="w-5 h-5 text-gray-600 group-hover:text-rose-600 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
