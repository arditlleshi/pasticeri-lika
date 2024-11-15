import { Cake, Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/main-logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Pasticeri Lika" className="h-12 w-52" />
            {/* <div className="bg-gradient-to-r from-rose-600 to-rose-500 p-2 rounded-lg">
              <Cake className="h-8 w-8 text-white" />
            </div>
            <span className="ml-2 text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-500">
              Pasticeri Lika
            </span> */}
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                to="/"
                className={`${
                  isActive("/")
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-500"
                    : "text-gray-900"
                } hover:text-rose-600 group relative transition-colors`}>
                Home
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-600 to-rose-500 group-hover:w-full transition-all duration-300 ease-out"></div>
              </Link>
              <Link
                to="/products"
                className={`${
                  isActive("/products")
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-500"
                    : "text-gray-900"
                } hover:text-rose-600 group relative transition-colors`}>
                Our Products
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-600 to-rose-500 group-hover:w-full transition-all duration-300 ease-out"></div>
              </Link>
              <Link
                to="/gallery"
                className={`${
                  isActive("/gallery")
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-500"
                    : "text-gray-900"
                } hover:text-rose-600 group relative transition-colors`}>
                Gallery
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-600 to-rose-500 group-hover:w-full transition-all duration-300 ease-out"></div>
              </Link>
              <Link
                to="/bar-menu"
                className={`${
                  isActive("/bar-menu")
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-500"
                    : "text-gray-900"
                } hover:text-rose-600 group relative transition-colors`}>
                Bar Menu
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-600 to-rose-500 group-hover:w-full transition-all duration-300 ease-out"></div>
              </Link>
              <Link
                to="/about"
                className={`${
                  isActive("/about")
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-500"
                    : "text-gray-900"
                } hover:text-rose-600 group relative transition-colors`}>
                About
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-600 to-rose-500 group-hover:w-full transition-all duration-300 ease-out"></div>
              </Link>
              <Link
                to="/contact"
                className={`${
                  isActive("/contact")
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-500"
                    : "text-gray-900"
                } hover:text-rose-600 group relative transition-colors`}>
                Contact
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-600 to-rose-500 group-hover:w-full transition-all duration-300 ease-out"></div>
              </Link>
              <button className="flex items-center bg-gradient-to-r from-rose-700 to-rose-500 text-white px-6 py-2 rounded-full hover:from-rose-500 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Order Now
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900">
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-md">
            <Link
              to="/"
              className={`block px-3 py-2 ${
                isActive("/")
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-500"
                  : "text-gray-900"
              } hover:text-rose-600`}
              onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link
              to="/products"
              className={`block px-3 py-2 ${
                isActive("/products")
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-500"
                  : "text-gray-900"
              } hover:text-rose-600`}
              onClick={() => setIsOpen(false)}>
              Our Products
            </Link>
            <Link
              to="/gallery"
              className={`block px-3 py-2 ${
                isActive("/gallery")
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-500"
                  : "text-gray-900"
              } hover:text-rose-600`}
              onClick={() => setIsOpen(false)}>
              Gallery
            </Link>
            <Link
              to="/bar-menu"
              className={`block px-3 py-2 ${
                isActive("/bar-menu")
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-500"
                  : "text-gray-900"
              } hover:text-rose-600`}
              onClick={() => setIsOpen(false)}>
              Bar Menu
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 ${
                isActive("/about")
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-500"
                  : "text-gray-900"
              } hover:text-rose-600`}
              onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 ${
                isActive("/contact")
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-500"
                  : "text-gray-900"
              } hover:text-rose-600`}
              onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <button className="flex items-center w-full bg-gradient-to-r from-rose-600 to-rose-500 text-white px-4 py-2 rounded-full hover:from-rose-700 hover:to-rose-600">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Order Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
