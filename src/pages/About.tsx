import { Clock, Award, Users, Cake, MapPin } from "lucide-react";

const years = new Date().getFullYear() - 1995;

const stats = [
  { icon: Clock, label: "Years of Experience", value: years + "+" },
  { icon: Award, label: "Awards Won", value: "15+" },
  { icon: Users, label: "Happy Customers", value: "100k+" },
  { icon: Cake, label: "Products Made Daily", value: "1000+" },
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
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-4">
          <div className="max-w-2xl text-white">
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-md">
              Est. 1995
            </span>
            <h1 className="mb-6 font-serif text-5xl font-bold">Our Story</h1>
            <p className="text-xl">
              A family tradition of baking excellence, bringing joy to the
              hearts of Tirana one pastry at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-rose-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="transform text-center transition-transform duration-300 hover:scale-105"
              >
                <div className="rounded-2xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl">
                  <stat.icon className="mx-auto mb-4 h-8 w-8 text-rose-600" />
                  <div className="mb-2 text-3xl font-bold text-gray-900">
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
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-16 text-center font-serif text-4xl font-bold text-gray-900">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-gradient-to-b from-rose-600 to-rose-300" />
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
                      <h3 className="mt-2 text-xl font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative flex w-8 items-center justify-center">
                    <div className="h-8 w-8 rounded-full border-4 border-white bg-rose-600 shadow-lg" />
                  </div>
                  <div className="w-1/2 pl-8" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-serif text-4xl font-bold text-gray-900">
                A Legacy of Excellence
              </h2>
              <p className="mb-6 text-gray-600">
                Founded in 1995 by the Lika family, our bakery began as a small
                shop with big dreams. Today, we're proud to be one of Albania's
                most beloved bakeries, known for our commitment to quality and
                tradition.
              </p>
              <p className="mb-6 text-gray-600">
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
                className="transform rounded-xl transition-transform duration-300 hover:scale-105"
              />
              <img
                src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80"
                alt="Modern Bakery"
                className="mt-8 transform rounded-xl transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-16 text-center font-serif text-4xl font-bold text-gray-900">
            Dyqanet tona
          </h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {locations.map((location, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl"
              >
                <div className="group relative aspect-[4/3]">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <a
                      href={location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex transform items-center gap-2 rounded-full bg-white px-6 py-3 text-gray-900 transition-colors hover:scale-105 hover:bg-rose-600 hover:text-white"
                    >
                      <MapPin className="h-5 w-5" />
                      View on Map
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
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