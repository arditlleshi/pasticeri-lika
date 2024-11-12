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

const cakeSubcategories = {
  Frozen: ["Ice Cream Cakes", "Frozen Yogurt Cakes", "Gelato Cakes"],
  Traditional: ["Chocolate", "Vanilla", "Red Velvet", "Carrot"],
  Premium: ["Wedding Cakes", "Custom Design", "Special Occasion"],
};

const products = [
  {
    id: 1,
    name: "Ice Cream Cake",
    price: "3800 LEK",
    category: "Cakes",
    subcategory: "Frozen",
    description: "Delicious layers of ice cream and cake",
    image:
      "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    name: "Wedding Cake",
    price: "25000 LEK",
    category: "Cakes",
    subcategory: "Premium",
    description: "Custom-designed wedding cakes with your choice of flavors",
    image:
      "https://plus.unsplash.com/premium_photo-1674498802496-c9a5983ef176?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FrZSUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Traditional Chocolate Cake",
    price: "2800 LEK",
    category: "Cakes",
    subcategory: "Traditional",
    description: "Classic chocolate cake with rich ganache",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Traditional Vanilla Cake",
    price: "2800 LEK",
    category: "Cakes",
    subcategory: "Traditional",
    description: "Classic vanilla cake with a hint of sweetness",
    image:
      "https://plus.unsplash.com/premium_photo-1664391788731-8b6b992dc042?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    name: "Red Velvet Cake",
    price: "2800 LEK",
    category: "Cakes",
    subcategory: "Traditional",
    description: "Classic red velvet cake with a hint of sweetness",
    image:
      "https://plus.unsplash.com/premium_photo-1713920189876-e07a673cd572?w=500&auto=format&fit=crop&q=60",
  },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory("");
  };

  const filteredProducts = products
    .filter((product) => {
      const categoryMatch =
        selectedCategory === "All" || product.category === selectedCategory;
      const subcategoryMatch =
        !selectedSubcategory || product.subcategory === selectedSubcategory;
      const searchMatch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return categoryMatch && subcategoryMatch && searchMatch;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return parseInt(a.price) - parseInt(b.price);
      if (sortBy === "price-desc") return parseInt(b.price) - parseInt(a.price);
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Our Products
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
                  onClick={() => handleCategoryChange(category)}
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

          {/* Subcategories for Cakes */}
          {selectedCategory === "Cakes" && (
            <div className="mt-4 flex gap-2 overflow-x-auto">
              {Object.keys(cakeSubcategories).map((subcategory) => (
                <button
                  key={subcategory}
                  onClick={() => setSelectedSubcategory(subcategory)}
                  className={`px-3 py-1 rounded-full text-sm whitespace-nowrap transition-colors ${
                    selectedSubcategory === subcategory
                      ? "bg-rose-200 text-rose-800"
                      : "bg-rose-50 text-rose-600 hover:bg-rose-100"
                  }`}>
                  {subcategory}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* {product.bestseller && (
                  <div className="absolute top-2 left-2 bg-rose-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Bestseller
                  </div>
                )} */}
              </div>
              <div className="mt-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-xs text-rose-600">{product.category}</p>
                    {product.subcategory && (
                      <p className="text-xs text-gray-500">
                        {product.subcategory}
                      </p>
                    )}
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {product.price}
                  </span>
                </div>
                <p className="mt-1 text-xs text-gray-600 line-clamp-2">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
