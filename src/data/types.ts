export interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  subcategory?: string;
  description: string;
  image: string;
  bestseller?: boolean;
}
