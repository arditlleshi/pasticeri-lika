import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";

const categories = [
  "All",
  "Breads",
  "Pastries",
  "Cakes",
  "Cookies",
  "Traditional",
  "Seasonal",
];

const products = [
  {
    id: 2,
    name: "Chocolate Éclair",
    price: "280 LEK",
    category: "Pastries",
    description: "Classic French pastry filled with chocolate cream",
    image:
      "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Wedding Cake",
    price: "25000 LEK",
    category: "Cakes",
    description: "Custom-designed wedding cakes with your choice of flavors",
    image:
      "https://images.unsplash.com/photo-1678473289821-1818e3f82e9a?w=500&auto=format&fit=crop&q=120",
  },
  {
    id: 4,
    name: "Traditional Baklava",
    price: "180 LEK",
    category: "Traditional",
    description: "Handmade baklava with walnuts and honey syrup",
    image:
      "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80",
    bestseller: true,
  },
  // Add more products as needed
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = products
    .filter(
      (product) =>
        (selectedCategory === "All" || product.category === selectedCategory) &&
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "price-asc") return parseInt(a.price) - parseInt(b.price);
      if (sortBy === "price-desc") return parseInt(b.price) - parseInt(a.price);
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0; // featured
    });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Produktet Tona
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Discover our wide range of freshly baked goods, from traditional
            Albanian pastries to international favorites.
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white sticky top-20 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border rounded-full px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-rose-500">
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name">Name</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              </div>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1 rounded-full whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? "bg-rose-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}>
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-square overflow-hidden rounded-2xl max-h-96">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.bestseller && (
                  <div className="absolute top-4 left-4 bg-rose-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Bestseller
                  </div>
                )}
              </div>
              <div className="mt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-sm text-rose-600">{product.category}</p>
                  </div>
                  <span className="text-lg font-medium text-gray-900">
                    {product.price}
                  </span>
                </div>
                <p className="mt-2 text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
