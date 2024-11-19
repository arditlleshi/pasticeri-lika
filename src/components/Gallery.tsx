import { Search } from "lucide-react";
import { useRef, useState } from "react";
import { categories } from "../data/categories";
import { products } from "../data/products";
import { Product } from "../data/types";

const cakeSubcategories: { [key: string]: string[] } = {
  Frozen: ["Ice Cream Cakes", "Frozen Yogurt Cakes", "Gelato Cakes"],
  Traditional: ["Chocolate", "Vanilla", "Red Velvet", "Carrot"],
  Premium: ["Wedding Cakes", "Custom Design", "Special Occasion"],
};

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const productsGridRef = useRef<HTMLDivElement>(null);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory("");
    // Smooth scroll to products grid with offset for the sticky header
    if (productsGridRef.current) {
      window.scrollTo({
        top: 200,
        behavior: "smooth",
      });
    }
  };

  const handleSubcategoryChange = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
    // Smooth scroll to products grid
    if (productsGridRef.current) {
      window.scrollTo({
        top: 200,
        behavior: "smooth",
      });
    }
  };

  const filteredProducts = products.filter((product: Product) => {
    const categoryMatch =
      selectedCategory === "All" || product.category === selectedCategory;
    const subcategoryMatch =
      !selectedSubcategory || product.subcategory === selectedSubcategory;
    const searchMatch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return categoryMatch && subcategoryMatch && searchMatch;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rose-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Galeria jonë
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Eksploroni galerinë tonë të produkteve të shijshme dhe të krijesave
            të mësojshme
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
                  placeholder="Search gallery..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>
              {/* Removed Sorting Dropdown */}
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 w-full md:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-1 rounded-full whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-rose-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 "
                  }`}
                >
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
                  onClick={() => handleSubcategoryChange(subcategory)}
                  className={`px-3 py-1 rounded-full text-sm whitespace-nowrap transition-all duration-300 ${
                    selectedSubcategory === subcategory
                      ? "bg-rose-200 text-rose-800 shadow-md "
                      : "bg-rose-50 text-rose-600 hover:bg-rose-100"
                  }`}
                >
                  {subcategory}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div ref={productsGridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  {product.name}
                </h3>
                {/* <p className="text-xs text-rose-600">{product.category}</p> */}
                {/* {product.subcategory && (
                  <p className="text-xs text-gray-500">{product.subcategory}</p>
                )} */}
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
