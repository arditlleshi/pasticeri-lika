import { useRef, useState } from "react";
import { menuBarCategories } from "../data/menu-bar-categories";
import { menuBarItems } from "../data/menu-bar-items";

export default function BarMenu() {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof menuBarItems>("coffee");
  const currentCategory = menuBarCategories.find((cat) => cat.id === selectedCategory);
  const menuItemsRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = (categoryId: keyof typeof menuBarItems) => {
    setSelectedCategory(categoryId);
    if (menuItemsRef.current) {
      const headerOffset = 150;
      const elementPosition = menuItemsRef.current.getBoundingClientRect().top;
      const offsetPosition = window.pageYOffset + elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Dynamic Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={currentCategory?.image}
            loading="lazy"
            alt={currentCategory?.name}
            className="w-full h-full object-cover transition-all duration-700 transform"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-[2px]" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
          <span className="inline-block mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium">
            {currentCategory?.name} Menu
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 tracking-tight">
            {currentCategory?.name}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-light">
            {currentCategory?.description}
          </p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="sticky top-20 bg-white/80 backdrop-blur-md shadow-sm z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-3 py-4 hide-scrollbar">
            {menuBarCategories.map(({ id, name, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleCategoryClick(id)}
                className={`group flex items-center gap-2 px-6 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === id
                    ? "bg-gradient-to-r from-rose-600 to-rose-500 text-white shadow-lg shadow-rose-500/20"
                    : "bg-white/80 text-gray-700 hover:bg-gray-100 hover:shadow-md"
                }`}
                aria-pressed={selectedCategory === id}
              >
                <Icon
                  className={`h-4 w-4 transition-transform duration-300 ${
                    selectedCategory === id
                      ? "scale-105"
                      : "group-hover:scale-105"
                  }`}
                />
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div ref={menuItemsRef} className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-4">
          {menuBarItems[selectedCategory].map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-rose-600 transition-colors duration-300">
                      {item.name}
                    </h3>
                    {index === 0 && (
                      <span className="px-2 py-0.5 bg-rose-100 text-rose-600 text-xs font-medium rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mt-1 group-hover:text-gray-700 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-lg font-medium text-rose-600 group-hover:scale-105 transition-transform duration-300">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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