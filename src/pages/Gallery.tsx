import { Search } from "lucide-react";
import { useRef, useState, useEffect, useMemo } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { categories } from "../data/categories";
import { products } from "../data/products";
import { Product } from "../data/types";

const cakeSubcategories: { [key: string]: string[] } = {
  Frozen: ["Ice Cream Cakes", "Frozen Yogurt Cakes", "Gelato Cakes"],
  Traditional: ["Chocolate", "Vanilla", "Red Velvet", "Carrot"],
  Premium: ["Wedding Cakes", "Custom Design", "Special Occasion"],
};

// Mapping from display category names to internal category identifiers
const categoryMapping: { [key: string]: string } = {
  "Pastritë Tradicionale": "Pastries",
  "Bukë Artisanale": "Breads",
  "Torta Premium": "Cakes",
};

export default function Gallery() {
  // Initialize search parameters
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const categoryFromParams = searchParams.get("category");

  // State management
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const productsGridRef = useRef<HTMLDivElement>(null);

  // Effect to handle category changes from URL
  useEffect(() => {
    if (categoryFromParams) {
      const mappedCategory = categoryMapping[categoryFromParams];
      if (mappedCategory && categories.includes(mappedCategory)) {
        setSelectedCategory(mappedCategory);
        setSelectedSubcategory("");
        if (productsGridRef.current) {
          console.log("productsGridRef.current.offsetTop 44", productsGridRef.current.offsetTop);
          window.scrollTo({
            top: 175,
            behavior: "smooth",
          });
        }
      } else {
        // If the category from params is invalid, reset to 'All'
        setSelectedCategory("All");
        setSelectedSubcategory("");
      }
    }
  }, [categoryFromParams]);

  // Handler for category change via buttons
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory("");
    const params = new URLSearchParams();
    if (category !== "All") {
      const displayCategory = Object.keys(categoryMapping).find(
        (key) => categoryMapping[key] === category
      );
      if (displayCategory) {
        params.set("category", displayCategory);
      }
    }
    navigate({
      pathname: "/pasticeri-lika/gallery",
      search: params.toString(),
    });
    if (productsGridRef.current) {
      console.log("productsGridRef.current.offsetTop 76", productsGridRef.current.offsetTop);
      window.scrollTo({
        top: 175,
        behavior: "smooth",
      });
    }
  };

  // Handler for subcategory change
  const handleSubcategoryChange = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
    const params = new URLSearchParams(searchParams);
    if (subcategory) {
      params.set("subcategory", subcategory);
    } else {
      params.delete("subcategory");
    }
    navigate({
      pathname: "/pasticeri-lika/gallery",
      search: params.toString(),
    });
    if (productsGridRef.current) {
      window.scrollTo({
        top: 175,
        behavior: "smooth",
      });
    }
  };

  // Effect to handle subcategory from URL (optional)
  useEffect(() => {
    const subcategoryFromParams = searchParams.get("subcategory");
    if (
      categoryFromParams &&
      categoryMapping[categoryFromParams] === selectedCategory &&
      subcategoryFromParams &&
      cakeSubcategories[selectedCategory]?.includes(subcategoryFromParams)
    ) {
      setSelectedSubcategory(subcategoryFromParams);
    }
  }, [searchParams, categoryFromParams, selectedCategory]);

  // Filter products based on selected filters
  const filteredProducts = useMemo(() => {
    return products.filter((product: Product) => {
      const categoryMatch =
        selectedCategory === "All" || product.category === selectedCategory;
      const subcategoryMatch =
        !selectedSubcategory || product.subcategory === selectedSubcategory;
      const searchMatch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return categoryMatch && subcategoryMatch && searchMatch;
    });
  }, [selectedCategory, selectedSubcategory, searchQuery]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rose-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <h1 className="mb-4 font-serif text-4xl font-bold text-gray-900 md:text-5xl">
            Galeria jonë
          </h1>
          <p className="max-w-2xl text-lg text-gray-600">
            Eksploroni galerinë tonë të produkteve të shijshme dhe të krijesave
            të mësojshme
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="sticky top-20 z-40 border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Search Bar */}
            <div className="flex w-full items-center gap-4 md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                <input
                  type="text"
                  placeholder="Search gallery..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>
            </div>

            {/* Category Buttons */}
            <div className="flex w-full gap-2 overflow-x-auto pb-2 md:w-auto lg:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`whitespace-nowrap rounded-full px-4 py-1 transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-rose-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
                  className={`whitespace-nowrap rounded-full px-3 py-1 text-sm transition-all duration-300 ${
                    selectedSubcategory === subcategory
                      ? "bg-rose-200 text-rose-800 shadow-md"
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
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div
          ref={productsGridRef}
          className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4"
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <h3 className="mb-1 text-sm font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs text-gray-600">
                    {product.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
