import React from 'react';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  category: string;
}

export default function ProductCard({ name, price, image, category }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
          <Heart className="h-5 w-5 text-rose-600" />
        </button>
      </div>
      <div className="mt-4">
        <span className="text-sm text-rose-600">{category}</span>
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-700">{price}</p>
      </div>
    </div>
  );
}