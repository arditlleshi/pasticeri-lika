import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cake, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <Cake className="h-8 w-8 text-rose-600" />
            <span className="ml-2 text-2xl font-serif font-bold text-gray-900">Pasticeri Lika</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link 
                to="/" 
                className={`${isActive('/') ? 'text-rose-600' : 'text-gray-900'} hover:text-rose-600 transition-colors`}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className={`${isActive('/products') ? 'text-rose-600' : 'text-gray-900'} hover:text-rose-600 transition-colors`}
              >
                Our Products
              </Link>
              <Link 
                to="/gallery" 
                className={`${isActive('/gallery') ? 'text-rose-600' : 'text-gray-900'} hover:text-rose-600 transition-colors`}
              >
                Gallery
              </Link>
              <Link 
                to="/bar-menu" 
                className={`${isActive('/bar-menu') ? 'text-rose-600' : 'text-gray-900'} hover:text-rose-600 transition-colors`}
              >
                Bar Menu
              </Link>
              <Link 
                to="/about" 
                className={`${isActive('/about') ? 'text-rose-600' : 'text-gray-900'} hover:text-rose-600 transition-colors`}
              >
                About
              </Link>
              <button className="flex items-center bg-rose-600 text-white px-4 py-2 rounded-full hover:bg-rose-700 transition-colors">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Order Now
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link 
              to="/" 
              className={`block px-3 py-2 ${isActive('/') ? 'text-rose-600' : 'text-gray-900'} hover:text-rose-600`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`block px-3 py-2 ${isActive('/products') ? 'text-rose-600' : 'text-gray-900'} hover:text-rose-600`}
              onClick={() => setIsOpen(false)}
            >
              Our Products
            </Link>
            <Link 
              to="/gallery" 
              className={`block px-3 py-2 ${isActive('/gallery') ? 'text-rose-600' : 'text-gray-900'} hover:text-rose-600`}
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/bar-menu" 
              className={`block px-3 py-2 ${isActive('/bar-menu') ? 'text-rose-600' : 'text-gray-900'} hover:text-rose-600`}
              onClick={() => setIsOpen(false)}
            >
              Bar Menu
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 ${isActive('/about') ? 'text-rose-600' : 'text-gray-900'} hover:text-rose-600`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <button className="flex items-center w-full bg-rose-600 text-white px-4 py-2 rounded-full hover:bg-rose-700">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Order Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}