import { Clock, Award, Users, Cake } from 'lucide-react';

const stats = [
  { icon: Clock, label: "Years of Experience", value: "25+" },
  { icon: Award, label: "Awards Won", value: "15+" },
  { icon: Users, label: "Happy Customers", value: "50k+" },
  { icon: Cake, label: "Products Made Daily", value: "100+" },
];

const locations = [
  {
    name: "Rruga e Durrësit",
    description: "Our flagship store, where the Pasticeri Lika story began. This location features our main bakery and café, serving fresh pastries and coffee daily.",
    image: "https://images.unsplash.com/photo-1564759298141-cef86f51d4d4?auto=format&fit=crop&q=80",
  },
  {
    name: "Pallatet Çabej",
    description: "Located in Tirana's trendiest neighborhood, this modern location combines traditional favorites with contemporary café culture.",
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80",
  },
  {
    name: "Rruga Xhanfize Keko",
    description: "Our newest location in the historic New Bazaar area, featuring an open kitchen where you can watch our bakers at work.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
  },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80"
            alt="Bakery Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-serif font-bold mb-6">Our Story</h1>
            <p className="text-xl">
              A family tradition of baking excellence since 1995, bringing joy to the
              hearts of Tirana one pastry at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-rose-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                A Legacy of Excellence
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 1995 by the Lika family, our bakery began as a small shop
                with big dreams. Today, we're proud to be one of Tirana's most beloved
                bakeries, known for our commitment to quality and tradition.
              </p>
              <p className="text-gray-600 mb-6">
                We combine time-honored Albanian baking traditions with modern
                techniques to create pastries and breads that delight our customers.
                Every recipe has been perfected over generations, ensuring that each
                bite tells our story of passion and dedication.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1579494376631-9363b9a0709e?auto=format&fit=crop&q=80"
                alt="Old Bakery"
                className="rounded-xl"
              />
              <img
                src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80"
                alt="Modern Bakery"
                className="rounded-xl mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-gray-900 text-center mb-16">
            Dyqanet tona
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {locations.map((location, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3]">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {location.name}
                  </h3>
                  <p className="text-gray-600">
                    {location.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}