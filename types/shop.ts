import { DivideIcon as LucideIcon } from "lucide-react";

export interface ProductSize {
  name: string;
  price: number;
}

export interface Artist {
  name: string;
  bio: string;
  portfolio: string;
}

export interface Product {
  id: number;
  name: string;
  href: string;
  price: number;
  description: string;
  longDescription: string;
  category: string;
  icon: typeof LucideIcon;
  imageSrc: string;
  imageAlt: string;
  features: string[];
  sizes: ProductSize[];
  additionalImages: string[];
  artist: Artist;
}