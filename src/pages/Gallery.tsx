import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Instagram } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: "Traditional Baklava",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80",
    category: "Traditional",
    description: "Layers of phyllo dough filled with chopped nuts and sweetened with syrup",
  },
  {
    id: 2,
    title: "Chocolate Truffles",
    image: "https://images.unsplash.com/photo-1548907040-4d2be3f515d9?auto=format&fit=crop&q=80",
    category: "Chocolates",
    description: "Handcrafted chocolate truffles with various flavors",
  },
  {
    id: 3,
    title: "Wedding Cake",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80",
    category: "Special Occasions",
    description: "Elegant three-tier wedding cake with sugar flowers",
  },
  {
    id: 4,
    title: "Fruit Tart",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80",
    category: "Pastries",
    description: "Fresh seasonal fruits atop vanilla custard in a buttery crust",
  },
  {
    id: 5,
    title: "Assorted Macarons",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43? <boltAction type="file" filePath="src/pages/Gallery.tsx">import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Instagram } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: "Traditional Baklava",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80",
    category: "Traditional",
    description: "Layers of phyllo dough filled with chopped nuts and sweetened with syrup",
  },
  {
    id: 2,
    title: "Chocolate Truffles",
    image: "https://images.unsplash.com/photo-1548907040-4d2be3f515d9?auto=format&fit=crop&q=80",
    category: "Chocolates",
    description: "Handcrafted chocolate truffles with various flavors",
  },
  {
    id: 3,
    title: "Wedding Cake",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80",
    category: "Special Occasions",
    description: "Elegant three-tier wedding cake with sugar flowers",
  },
  {
    id: 4,
    title: "Fruit Tart",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80",
    category: "Pastries",
    description: "Fresh seasonal fruits atop vanilla custard in a buttery crust",
  },
  {
    id: 5,
    title: "Assorted Macarons",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80",
    category: "Pastries",
    description: "Colorful French macarons in various flavors",
  },
  {
    id: 6,
    title: "Birthday Cake",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80",
    category: "Special Occasions",
    description: "Customized birthday cake with chocolate ganache",
  },
  {
    id: 7,
    title: "Chocolate Eclairs",
    image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&q=80",
    category: "Pastries",
    description: "Classic French éclairs filled with chocolate cream",
  },
  {
    id: 8,
    title: "Traditional Trilece",
    image: "https://images.unsplash.com/photo-1464195244916-405fa0a82545?auto=format&fit=crop&q=80",
    category: "Traditional",
    description: "Albanian three-milk cake with caramel topping",
  },
  {
    id: 9,
    title: "Assorted Cookies",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80",
    category: "Cookies",
    description: "Selection of freshly baked cookies",
  },
  {
    id: 10,
    title: "Artisan Bread",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80",
    category: "Breads",
    description: "Freshly baked artisan sourdough bread",
  },
  {
    id: 11,
    title: "Chocolate Fountain",
    image: "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?auto=format&fit=crop&q=80",
    category: "Special Events",
    description: "Chocolate fountain for special events and celebrations",
  },
  {
    id: 12,
    title: "Holiday Cookies",
    image: "https://images.unsplash.com/photo-1481390915718-84930b788814?auto=format&fit=crop&q=80",
    category: "Seasonal",
    description: "Festive holiday cookies with special decorations",
  },
];

const categories = [
  "All",
  "Traditional",
  "Pastries",
  "Special Occasions",
  "Chocolates",
  "Cookies",
  "Breads",
  "Seasonal",
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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&q=80"
            alt="Gallery Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-serif font-bold mb-4">Our Gallery</h1>
            <p className="text-xl max-w-2xl">
              Explore our collection of handcrafted pastries, cakes, and traditional
              Albanian delicacies
            </p>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-12 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram className="h-6 w-6 text-rose-600" />
            <span className="text-xl font-semibold text-gray-900">Follow us on Instagram</span>
          </div>
          <p className="text-gray-600 mb-6">
            @PasticeriLika • #PasticeriLika #TiranaBakery #AlbanianPastries
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-rose-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
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
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-rose-500 transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={handlePrevious}
            className="absolute left-4 text-white hover:text-rose-500 transition-colors"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 text-white hover:text-rose-500 transition-colors"
          >
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
              <p className="text-sm mt-2">
                {filteredItems[selectedImage].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}