import { Cake, Mail, Phone, MapPin, Instagram, Facebook, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-rose-600">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-rose-100">Stay updated with our latest products and special offers</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60"
              />
              <button className="bg-white text-rose-600 px-6 py-2 rounded-full hover:bg-rose-100 transition-colors flex items-center">
                Subscribe
                <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-6">
              <Cake className="h-6 w-6 text-rose-500" />
              <span className="ml-2 text-xl font-serif font-bold">Pasticeri Lika</span>
            </div>
            <p className="text-gray-400 mb-6">
              Crafting moments of joy with our freshly baked goods since 1995. A family tradition of excellence in every bite.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-rose-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-rose-500 transition-colors">Our Products</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-rose-500 transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-rose-500 transition-colors">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-3 text-rose-500" />
                <span>+355 69 123 4567</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-3 text-rose-500" />
                <span>info@pasticerilika.com</span>
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-3 text-rose-500" />
                <span>Rruga e Barrikadave, Tirana, Albania</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Opening Hours</h4>
            <ul className="space-y-4">
              <li>
                <span className="text-gray-400">Monday - Friday</span>
                <p className="text-white">7:00 AM - 8:00 PM</p>
              </li>
              <li>
                <span className="text-gray-400">Saturday</span>
                <p className="text-white">8:00 AM - 9:00 PM</p>
              </li>
              <li>
                <span className="text-gray-400">Sunday</span>
                <p className="text-white">8:00 AM - 7:00 PM</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Pasticeri Lika. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}