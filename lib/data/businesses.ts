import { ShoppingBag, Utensils, Camera, Code, Youtube, BookOpen, Coffee } from "lucide-react";

export interface Business {
  id: string;
  name: string;
  logo: string;
  category: string;
  categoryIcon: any;
  description: string;
  instagram: string;
  website?: string;
  email?: string;
  phone?: string;
  location: string;
  featured?: boolean;
  facebook?: string;
  youtube?: string;
}

export const categories = [
  { id: "all", name: "All Businesses" },
  { id: "food", name: "Food & Beverage", icon: Utensils },
  { id: "retail", name: "Shopping & Retail", icon: ShoppingBag },
  { id: "creative", name: "Creative Services", icon: Camera },
  { id: "online", name: "Online", icon: Code },
  { id: "fashion", name: "Fashion & Design", icon: ShoppingBag },
];

export const businesses: Business[] = [
  {
    id: "safegrow-shop",
    name: "SafeGrow Shop",
    logo: "/Logo.png",
    category: "online",
    categoryIcon: Code,
    description: "We sell digital products created by Palestinians that support displaced Palestinians. Products such as Palestinian made cookbooks, coloring books and photography prints.",
    instagram: "safegrow_org",
    website: "https://safe-grow.com",
    location: "Online",
    featured: true
  },
  {
    id: "palestineco-restaurant",
    name: "Palestineco Restaurant",
    logo: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    category: "food",
    categoryIcon: Utensils,
    description: "Palestinian restaurant serving authentic cuisine in Cairo, Egypt.",
    instagram: "palestineco_restaurant2024",
    location: "Cairo, Egypt"
  },
  {
    id: "al-remal-restaurant",
    name: "Al Remal Restaurant",
    logo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop",
    category: "food",
    categoryIcon: Utensils,
    description: "This restaurant serves traditional Palestinian shawarma sandwiches and fatteh, drenched in tahini, decorated with pickles, and wrapped in hand-baked bread made the Palestinian way.",
    instagram: "el_remal_restaurant",
    website: "https://www.talabat.com/egypt/restaurant/753882/hay-al-rimal-restaurant-nasr-city--makram-ebeid?aid=7689",
    location: "Nasr City, Cairo"
  },
  {
    id: "haneen-gaza-kitchen",
    name: "Haneen, Gaza Kitchen",
    logo: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&auto=format&fit=crop",
    category: "food",
    categoryIcon: Utensils,
    description: "Displaced Palestinian that does catering and cooking classes locally in Cairo, Egypt. Palestinian Food.",
    instagram: "haneengazakitchen",
    website: "https://haneengazakitchen.shop",
    location: "Cairo, Egypt"
  },
  {
    id: "ayas-handmade",
    name: "Aya's Handmade",
    logo: "https://images.unsplash.com/photo-1464219789935-c2d9d9eb4b39?w=800&auto=format&fit=crop",
    category: "retail",
    categoryIcon: ShoppingBag,
    description: "A mother from Gaza making artisan items with classic tatreez style embroidered on hoodies and clothing.",
    instagram: "ayahandmade",
    location: "Cairo, Egypt"
  },
  {
    id: "rahaf-handmade",
    name: "Rahaf Handmade",
    logo: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop",
    category: "retail",
    categoryIcon: ShoppingBag,
    description: "Hand-drawn Palestinian themed hoodies in Cairo Egypt & Netherlands.",
    instagram: "rahaf.handmade.gaza",
    location: "Cairo, Egypt & Netherlands"
  },
  {
    id: "zains-spices",
    name: "Zain's Spices",
    logo: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=800&auto=format&fit=crop",
    category: "food",
    categoryIcon: Utensils,
    description: "A Gazan father making over 30 delicious, homemade spice blends Palestinian style.",
    instagram: "zain.spices",
    location: "Cairo, Egypt"
  },
  {
    id: "sitti-soap",
    name: "Sitti Soap",
    logo: "https://images.unsplash.com/photo-1602164945536-c4de0aa2c979?w=800&auto=format&fit=crop",
    category: "retail",
    categoryIcon: ShoppingBag,
    description: "All natural olive oil soaps social enterprise with opportunities for refugee community.",
    instagram: "sittisoap",
    website: "https://www.sittisoap.com",
    location: "Canada (worldwide shipping)"
  },
  {
    id: "bon-gaza",
    name: "Bon Gaza",
    logo: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop",
    category: "food",
    categoryIcon: Coffee,
    description: "Palestinian Coffee (traditional Gazan blends) made in Cairo by a displaced Palestinian from Gaza.",
    instagram: "bngaza1",
    location: "Cairo, Egypt"
  },
  {
    id: "marmar-store",
    name: "Marmar Store",
    logo: "https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?w=800&auto=format&fit=crop",
    category: "retail",
    categoryIcon: ShoppingBag,
    description: "An architect and mother of two children who was displaced to Cairo and now creates gorgeous handmade Tatreez accessories.",
    instagram: "marmarstore11",
    location: "Cairo, Egypt"
  },
  {
    id: "shireen-gaza-boutique",
    name: "Shireen Gaza Boutique",
    logo: "https://images.unsplash.com/photo-1459501462159-97d5bded1416?w=800&auto=format&fit=crop",
    category: "retail",
    categoryIcon: ShoppingBag,
    description: "A handmade crafts project that combines traditional folk embroidery with modern accessory designs.",
    instagram: "shireensgazaboutique",
    location: "Cairo, Egypt"
  },
  {
    id: "mouvel-story",
    name: "Mouvel Story",
    logo: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop",
    category: "retail",
    categoryIcon: BookOpen,
    description: "Books that take your child to a magical world. Our story is made and customized just for your child by placing the child's pictures in the story.",
    instagram: "mouvel.story",
    location: "Cairo, Egypt"
  },
  {
    id: "rouh-gaza",
    name: "Rouh Gaza",
    logo: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    category: "food",
    categoryIcon: Utensils,
    description: "Presenting all Palestinian products with a Gaza spirit from the heart of Egypt.",
    instagram: "rouh.gaza",
    location: "Cairo, Egypt"
  },
  {
    id: "lili-space",
    name: "Lili Space",
    logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop",
    category: "online",
    categoryIcon: Youtube,
    description: "A YouTube channel born from our journey through hardship in Gaza, where hope was our guiding light. A place where kids can learn, laugh, and explore in a fun and engaging way.",
    youtube: "https://youtube.com/@lilispace-kids?feature=shared",
    location: "Online",
    // instagram: "rouh.gaza",
  },
  {
    id: "suzana-fashion",
    name: "Suzana Fashion",
    logo: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop",
    category: "fashion",
    categoryIcon: ShoppingBag,
    description: "A professional fashion designer with 30 years of experience.",
    instagram: "suzanakhz369",
    location: "Cairo, Egypt"
  },
  {
    id: "from-gaza-with-love",
    name: "From Gaza with Love",
    logo: "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?w=800&auto=format&fit=crop",
    category: "food",
    categoryIcon: Utensils,
    description: "A Palestinian family working together, with both parents and children, to offer the finest Ma'amoul, olive oil, and Palestinian pickles.",
    facebook: "https://www.facebook.com/share/1AJ2nnCSfS/",
    location: "Cairo, Egypt"
  }
];