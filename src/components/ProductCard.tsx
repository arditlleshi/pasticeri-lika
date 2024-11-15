interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  category: string;
}

export default function ProductCard({
  name,
  price,
  image,
  category,
}: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-square w-full overflow-hidden rounded-xl bg-gradient-to-br from-rose-50 to-white">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="mt-4 p-4 rounded-xl bg-card-gradient backdrop-blur-sm">
        <span className="text-sm text-rose-600 font-medium">{category}</span>
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-700">{price}</p>
      </div>
    </div>
  );
}
