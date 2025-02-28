import { Building, Coffee, Palette, ShoppingBag, Utensils, Camera, Code } from "lucide-react";

export interface Business {
  id: string;
  name: string;
  logo: string;
  category: string;
  categoryIcon: any;
  description: string;
  instagram: string;
  website?: string;
  email: string;
  phone: string;
  location: string;
  featured?: boolean;
}

export const categories = [
  { id: "all", name: "All Businesses" },
  { id: "food", name: "Food & Beverage", icon: Utensils },
  { id: "retail", name: "Retail & Crafts", icon: ShoppingBag },
  { id: "creative", name: "Creative Services", icon: Palette },
  { id: "tech", name: "Technology", icon: Code },
  { id: "photography", name: "Photography", icon: Camera },
  { id: "cafe", name: "Cafés", icon: Coffee },
];

export const businesses: Business[] = [
  {
    id: "palestinian-crafts",
    name: "Palestinian Crafts Co.",
    logo: "https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?w=800&auto=format&fit=crop",
    category: "retail",
    categoryIcon: ShoppingBag,
    description: "Handcrafted Palestinian embroidery, ceramics, and traditional crafts made by skilled artisans.",
    instagram: "palestiniancraftsco",
    website: "https://palestiniancrafts.com",
    email: "info@palestiniancrafts.com",
    phone: "+20 123 456 7890",
    location: "Maadi, Cairo",
    featured: true
  },
  {
    id: "digital-nomads",
    name: "Digital Nomads",
    logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop",
    category: "tech",
    categoryIcon: Code,
    description: "Web development and digital marketing agency specializing in e-commerce solutions for small businesses.",
    instagram: "digitalnomads_eg",
    website: "https://digitalnomads.eg",
    email: "hello@digitalnomads.eg",
    phone: "+20 123 456 7891",
    location: "New Cairo, Egypt",
    featured: true
  },
  {
    id: "olive-branch-cafe",
    name: "Olive Branch Café",
    logo: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop",
    category: "cafe",
    categoryIcon: Coffee,
    description: "A cozy café serving authentic Palestinian cuisine, coffee, and pastries in a welcoming atmosphere.",
    instagram: "olivebranchcairo",
    email: "hello@olivebranch.com",
    phone: "+20 123 456 7892",
    location: "Zamalek, Cairo"
  },
  {
    id: "lens-culture",
    name: "Lens Culture",
    logo: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop",
    category: "photography",
    categoryIcon: Camera,
    description: "Professional photography services specializing in portraits, events, and commercial photography.",
    instagram: "lensculture_cairo",
    website: "https://lensculture.eg",
    email: "info@lensculture.eg",
    phone: "+20 123 456 7893",
    location: "Heliopolis, Cairo"
  },
  {
    id: "creative-minds",
    name: "Creative Minds",
    logo: "https://images.unsplash.com/photo-1560421683-6856ea585c78?w=800&auto=format&fit=crop",
    category: "creative",
    categoryIcon: Palette,
    description: "Graphic design studio offering branding, packaging, and digital design services for businesses.",
    instagram: "creativeminds_eg",
    website: "https://creativeminds.eg",
    email: "hello@creativeminds.eg",
    phone: "+20 123 456 7894",
    location: "Downtown, Cairo",
    featured: true
  },
  {
    id: "taste-of-palestine",
    name: "Taste of Palestine",
    logo: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    category: "food",
    categoryIcon: Utensils,
    description: "Authentic Palestinian restaurant offering traditional dishes made with imported spices and local ingredients.",
    instagram: "tasteofpalestine",
    website: "https://tasteofpalestine.com",
    email: "info@tasteofpalestine.com",
    phone: "+20 123 456 7895",
    location: "6th of October City, Egypt"
  },
  {
    id: "tech-solutions",
    name: "Tech Solutions",
    logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
    category: "tech",
    categoryIcon: Code,
    description: "IT consulting and software development company specializing in custom business solutions.",
    instagram: "techsolutions_cairo",
    website: "https://techsolutions.eg",
    email: "contact@techsolutions.eg",
    phone: "+20 123 456 7896",
    location: "Smart Village, Cairo"
  },
  {
    id: "artisan-bakery",
    name: "Artisan Bakery",
    logo: "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?w=800&auto=format&fit=crop",
    category: "food",
    categoryIcon: Utensils,
    description: "Artisanal bakery specializing in traditional Palestinian breads, pastries, and desserts.",
    instagram: "artisanbakery_cairo",
    email: "hello@artisanbakery.com",
    phone: "+20 123 456 7897",
    location: "Nasr City, Cairo"
  }
];