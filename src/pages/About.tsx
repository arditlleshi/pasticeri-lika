import { Clock, Award, Users, Cake, MapPin } from "lucide-react";

const stats = [
  { icon: Clock, label: "Years of Experience", value: "25+" },
  { icon: Award, label: "Awards Won", value: "15+" },
  { icon: Users, label: "Happy Customers", value: "50k+" },
  { icon: Cake, label: "Products Made Daily", value: "100+" },
];

const locations = [
  {
    name: "Rruga e Durrësit",
    description:
      "Our flagship store, where the Pastiçeri Lika story began. This location features our main bakery and café, serving fresh pastries and coffee daily.",
    image:
      "https://images.unsplash.com/photo-1564759298141-cef86f51d4d4?auto=format&fit=crop&q=80",
    mapUrl: "https://maps.google.com/?q=41.3275,19.8187",
  },
  {
    name: "Pallatet Çabej",
    description:
      "Located in Tirana's trendiest neighborhood, this modern location combines traditional favorites with contemporary café culture.",
    image:
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80",
    mapUrl: "https://maps.google.com/?q=41.3186,19.8145",
  },
  {
    name: "Rruga Xhanfize Keko",
    description:
      "Our newest location in the historic New Bazaar area, featuring an open kitchen where you can watch our bakers at work.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
    mapUrl: "https://maps.google.com/?q=41.3297,19.8235",
  },
];

const timeline = [
  {
    year: "1995",
    title: "The Beginning",
    description: "Founded as a small family bakery in Tirana",
  },
  {
    year: "2005",
    title: "First Expansion",
    description: "Opened our second location at Pallatet Çabej",
  },
  {
    year: "2015",
    title: "Innovation",
    description: "Introduced modern European pastries while maintaining traditional recipes",
  },
  {
    year: "2020",
    title: "New Chapter",
    description: "Opened our third location with an open-concept kitchen",
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="text-white max-w-2xl">
            <span className="inline-block mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium">
              Est. 1995
            </span>
            <h1 className="text-5xl font-serif font-bold mb-6">Our Story</h1>
            <p className="text-xl">
              A family tradition of baking excellence, bringing joy to the hearts
              of Tirana one pastry at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-rose-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <stat.icon className="h-8 w-8 text-rose-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-gray-900 text-center mb-16">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-rose-600 to-rose-300" />
            <div className="space-y-24">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className="w-1/2 pr-8 text-right">
                    <div
                      className={`${
                        index % 2 === 0 ? "text-right" : "text-left"
                      }`}
                    >
                      <span className="text-4xl font-bold text-rose-600">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900 mt-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-8">
                    <div className="h-8 w-8 bg-rose-600 rounded-full border-4 border-white shadow-lg" />
                  </div>
                  <div className="w-1/2 pl-8" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                A Legacy of Excellence
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 1995 by the Lika family, our bakery began as a small
                shop with big dreams. Today, we're proud to be one of Tirana's
                most beloved bakeries, known for our commitment to quality and
                tradition.
              </p>
              <p className="text-gray-600 mb-6">
                We combine time-honored Albanian baking traditions with modern
                techniques to create pastries and breads that delight our
                customers. Every recipe has been perfected over generations,
                ensuring that each bite tells our story of passion and
                dedication.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1534432182912-63863115e106?w=500&auto=format&fit=crop&q=80"
                alt="Old Bakery"
                className="rounded-xl transform hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80"
                alt="Modern Bakery"
                className="rounded-xl mt-8 transform hover:scale-105 transition-transform duration-300"
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
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300"
              >
                <div className="relative aspect-[4/3] group">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-rose-600 hover:text-white transition-colors transform hover:scale-105"
                    >
                      <MapPin className="h-5 w-5" />
                      View on Map
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {location.name}
                  </h3>
                  <p className="text-gray-600">{location.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}