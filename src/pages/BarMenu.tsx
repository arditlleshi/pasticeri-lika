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
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Dynamic Hero Section */}
      <div className="relative h-[40vh]">
        <div className="absolute inset-0">
          <img
            src={currentCategory?.image}
            loading="lazy"
            alt={currentCategory?.name}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            {currentCategory?.name}
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            {currentCategory?.description}
          </p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="sticky top-20 bg-white shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 py-4 hide-scrollbar">
            {menuBarCategories.map(({ id, name, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleCategoryClick(id)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full whitespace-nowrap transition-colors ${
                  selectedCategory === id
                    ? "bg-rose-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                aria-pressed={selectedCategory === id}
              >
                <Icon className="h-4 w-4" />
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
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mt-1">{item.description}</p>
                </div>
                <span className="text-lg font-medium text-rose-600">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
