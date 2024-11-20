import { MapPin } from "lucide-react";
import { locations, stats, timeline } from "../data/about-data";


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
            <h1 className="mb-6 font-serif text-5xl font-bold">
              Historia Jonë
            </h1>
            <p className="text-xl">
              Një traditë familjare e përkryerisë së pjekjes, duke sjellë gëzim
              në zemrat e Tiranës një pastërtie në çdo kohë.
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
            Udhëtimi Ynë
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
                Një Trashëgimi e Eksperiencës
              </h2>
              <p className="mb-6 text-gray-600">
                Themeluar në vitin 1995 nga familja Lika, pjekuria jonë filloi
                si një dyqan i vogël me ëndrra të mëdha. Sot, jemi krenarë të
                jemi një nga pjekuritë më të dashura të Shqipërisë, të njohura
                për përkushtimin tonë ndaj cilësisë dhe traditës.
              </p>
              <p className="mb-6 text-gray-600">
                Ne kombinoni traditat e pjekjes shqiptare të kaluara me teknikat
                moderne për të krijuar pastërtitë dhe bukën që kënaqin
                konsumatorët tanë. Çdo recetë është përkryer nëpër breza, duke
                siguruar që çdo kafshim tregon historinë tonë të pasionit dhe
                përkushtimit.
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
                      Shiko në Hartë
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
