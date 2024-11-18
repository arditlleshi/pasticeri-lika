
import { Coffee, Wine, Beer, Milk } from "lucide-react";
import { MenuBarCategory } from "./types";

export const menuBarCategories: MenuBarCategory[] = [
  {
    id: "coffee",
    name: "Coffee",
    icon: Coffee,
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80",
    description: "Expertly crafted coffee beverages made with premium beans",
  },
  {
    id: "alcohol",
    name: "Alcohol",
    icon: Wine,
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80",
    description: "Fine selection of wines and premium spirits",
  },
  {
    id: "beer",
    name: "Beer",
    icon: Beer,
    image:
      "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80",
    description: "Local and international craft beers",
  },
  {
    id: "cocktails",
    name: "Cocktails",
    icon: Wine,
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80",
    description: "Signature cocktails crafted by our expert mixologists",
  },
  {
    id: "hot-drinks",
    name: "Hot Drinks",
    icon: Coffee,
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80",
    description: "Comforting hot beverages for any time of day",
  },
  {
    id: "soft-drinks",
    name: "Soft Drinks",
    icon: Milk,
    image:
      "https://images.unsplash.com/photo-1437418747212-8d9709afab22?auto=format&fit=crop&q=80",
    description: "Refreshing non-alcoholic beverages and fresh juices",
  },
];
