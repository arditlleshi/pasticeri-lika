import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80",
    alt: "Fresh Bakery",
  },
  {
    url: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80",
    alt: "Bakery Interior",
  },
  {
    url: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80",
    alt: "Fresh Pastries",
  },
];

const categoryShowcase = [
  {
    name: "Traditional Pastries",
    description: "Handcrafted with love using time-honored Albanian recipes passed down through generations",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80",
    products: [
      "Baklava",
      "Kadaif",
      "Trilece",
      "Revani"
    ]
  },
  {
    name: "Artisan Breads",
    description: "Fresh, crusty, and aromatic breads baked daily using premium ingredients",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80",
    products: [
      "Sourdough",
      "Baguette",
      "Whole Wheat",
      "Rye Bread"
    ]
  },
  {
    name: "Premium Cakes",
    description: "Elegant and delicious cakes perfect for any special occasion",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80",
    products: [
      "Wedding Cakes",
      "Birthday Cakes",
      "Chocolate Gateaux",
      "Fruit Cakes"
    ]
  }
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <img
              key={image.url}
              src={image.url}
              alt={image.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Artisanal Bakery in the Heart of Tirana
            </h1>
            <p className="text-xl mb-8">
              Crafting moments of joy with our freshly baked goods since 1995
            </p>
            <Link
              to="/pasticeri-lika/our-products"
              className="w-fit bg-gradient-to-r from-rose-600 to-rose-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-rose-700 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
            >
              Eksploroni Produktet Tona
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Produktet tona kryesore
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Zbuloni një gamë të gjerë të produkteve të freskëta të bëra me
              dashuri dhe traditë
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              name="Classic Croissant"
              category="Ëmbëlsira"
              image="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80"
            />
            <ProductCard
              name="Chocolate Cake"
              category="Torta"
              image="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80"
            />
            <ProductCard
              name="Sourdough Bread"
              category="Buke"
              image="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      {/* Category Showcase Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Explore Our Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the artistry and tradition behind our diverse range of products
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-24">
            {categoryShowcase.map((category, index) => (
              <div 
                key={category.name}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-600/20 to-rose-500/20 rounded-3xl transform -rotate-3" />
                    <img
                      src={category.image}
                      alt={category.name}
                      className="relative rounded-3xl shadow-xl w-full aspect-[4/3] object-cover transform hover:rotate-3 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 space-y-6">
                  <h3 className="text-3xl font-serif font-bold text-gray-900">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {category.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {category.products.map((product) => (
                      <div
                        key={product}
                        className="bg-rose-50 p-4 rounded-xl flex items-center"
                      >
                        <div className="w-2 h-2 rounded-full bg-rose-500 mr-3" />
                        <span className="text-gray-800">{product}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/pasticeri-lika/our-products"
                    className="inline-flex items-center text-rose-600 hover:text-rose-700 transition-colors"
                  >
                    View All Products <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80"
                alt="Our Story"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6">
                For over 25 years, Pastiçeri Lika has been serving the people of
                Tirana with the finest baked goods. Our commitment to quality
                ingredients and traditional recipes has made us a beloved
                destination for those seeking authentic Albanian pastries and
                international delicacies.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="font-semibold text-2xl text-gray-900 mb-2">
                    {new Date().getFullYear() - 1995}
                  </div>
                  <p className="text-gray-600">Years of excellence</p>
                </div>
                <div>
                  <div className="font-semibold text-2xl text-gray-900 mb-2">
                    3
                  </div>
                  <p className="text-gray-600">Locations in Tirana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}