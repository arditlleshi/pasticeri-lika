import { Cake, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-footer-gradient text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <div className="md:-mt-1.5 flex items-center mb-6">
              <div className="bg-gradient-to-r from-rose-600 to-rose-500 p-2 rounded-lg">
                <Cake className="h-6 w-6 text-white" />
              </div>
              <span className="ml-2 text-xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-500">
                Pasticeri Lika
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Crafting moments of joy with our freshly baked goods since 1995. A
              family tradition of excellence in every bite.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-rose-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-rose-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-500">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-rose-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-rose-500 transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-300 hover:text-rose-500 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-rose-500 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-500">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-rose-500" />
                <span>+355 67 400 4072</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-rose-500" />
                <span>+355 69 874 3912</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-rose-500" />
                <a href="mailto:info@pasticerilika.al">info@pasticerilika.al</a>
              </li>
              <li className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-rose-500" />
                <span>Tirana, Albania</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-500">
              Opening Hours
            </h4>
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
        <div className=" pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Pasticeri Lika. All rights reserved.
            </p>
            {/* <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-rose-400 transition-colors">
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-rose-400 transition-colors">
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-rose-400 transition-colors">
                Cookie Policy
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}