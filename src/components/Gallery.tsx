import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Traditional Baklava",
    image:
      "https://pasticerilika.al/wp-content/uploads/2019/06/AI3I2283-300x250.jpg",
    category: "Traditional",
  },
  {
    id: 2,
    title: "Chocolate Truffles",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2058295571/display_1500/stock-photo-tasty-dark-chocolate-truffles-with-cocoa-dusting-on-a-brown-background-2058295571.jpg",
    category: "Chocolates",
  },
  {
    id: 3,
    title: "Wedding Cake",
    image:
      "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80",
    category: "Special Occasions",
  },
  {
    id: 4,
    title: "Fruit Tart",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80",
    category: "Pastries",
  },
  {
    id: 5,
    title: "Assorted Macarons",
    image:
      "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80",
    category: "Pastries",
  },
  {
    id: 6,
    title: "Birthday Cake",
    image:
      "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80",
    category: "Special Occasions",
  },
  {
    id: 7,
    title: "Chocolate Eclairs",
    image:
      "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&q=80",
    category: "Pastries",
  },
  {
    id: 8,
    title: "Traditional Trilece",
    image:
      "https://images.unsplash.com/photo-1488477304112-4944851de03d?auto=format&fit=crop&q=80",
    category: "Traditional",
  },
  {
    id: 9,
    title: "Assorted Cookies",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80",
    category: "Cookies",
  },
];

const categories = [
  "All",
  "Traditional",
  "Pastries",
  "Special Occasions",
  "Chocolates",
  "Cookies",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const handlePrevious = () => {
    setSelectedImage((prev) => {
      if (prev === null) return null;
      return prev === 0 ? filteredItems.length - 1 : prev - 1;
    });
  };

  const handleNext = () => {
    setSelectedImage((prev) => {
      if (prev === null) return null;
      return prev === filteredItems.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Our Sweet Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our delicious creations and get inspired for your next order
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-rose-600 text-white"
                  : "bg-white text-gray-700 hover:bg-rose-100"
              }`}>
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(index)}>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-rose-500 transition-colors">
              <X className="h-8 w-8" />
            </button>
            <button
              onClick={handlePrevious}
              className="absolute left-4 text-white hover:text-rose-500 transition-colors">
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 text-white hover:text-rose-500 transition-colors">
              <ChevronRight className="h-8 w-8" />
            </button>
            <div className="max-w-4xl max-h-[80vh] relative">
              <img
                src={filteredItems[selectedImage].image}
                alt={filteredItems[selectedImage].title}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                <h3 className="text-xl font-semibold">
                  {filteredItems[selectedImage].title}
                </h3>
                <p className="text-rose-400">
                  {filteredItems[selectedImage].category}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
