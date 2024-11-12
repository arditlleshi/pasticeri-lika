import { Clock, Award, Users, Cake, Star, ChevronRight } from 'lucide-react';

const stats = [
  { icon: Clock, label: "Years of Experience", value: "25+" },
  { icon: Award, label: "Awards Won", value: "15+" },
  { icon: Users, label: "Happy Customers", value: "50k+" },
  { icon: Cake, label: "Products Made Daily", value: "100+" },
];

const team = [
  {
    name: "Elena Lika",
    role: "Master Baker & Owner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    quote: "Baking is not just a profession, it's our family's legacy of love.",
  },
  {
    name: "Mark Hoxha",
    role: "Head Pastry Chef",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
    quote: "Every pastry tells a story of tradition and innovation.",
  },
  {
    name: "Ana Koci",
    role: "Cake Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    quote: "Creating beautiful cakes is my way of making dreams come true.",
  },
];

const testimonials = [
  {
    text: "The best bakery in Tirana! Their croissants are better than the ones I've had in Paris.",
    author: "Maria K.",
    rating: 5,
  },
  {
    text: "Our wedding cake was absolutely stunning. The team went above and beyond our expectations.",
    author: "John & Sarah",
    rating: 5,
  },
  {
    text: "Traditional Albanian pastries at their finest. Reminds me of my grandmother's baking.",
    author: "Arben M.",
    rating: 5,
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
              <button className="bg-rose-600 text-white px-6 py-3 rounded-full hover:bg-rose-700 transition-colors flex items-center">
                Read More About Our Journey
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
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

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-gray-900 text-center mb-16">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-rose-600 text-white px-4 py-1 rounded-full text-sm">
                      {member.role}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 italic">"{member.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-gray-900 text-center mb-16">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-gray-900 font-semibold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}