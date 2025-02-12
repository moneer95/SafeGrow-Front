import { Code, Camera, Palette, HeartHandshake, Book } from "lucide-react";
import type { Product } from "../../types/shop";

export const products: Product[] = [
  {
    id: 1,
    name: 'Photography Print',
    href: '/shop/1',
    price: 60,
    description: 'High-quality digital photography print created by one of our talented professional photographers, capturing the essence of Palestinian culture and life.',
    longDescription: `Our Photography Prints collection features high-quality digital photographs captured by talented Palestinian photographers. These prints are not just pieces of art; they are powerful expressions of the Palestinian experience, capturing moments of resilience, beauty, and culture amidst displacement. When you purchase a photography print from SafeGrow, you’re supporting a local Palestinian artist and helping to provide essential resources for displaced individuals striving to rebuild their lives. Each print tells a story—one that reflects the strength, creativity, and perseverance of the people of Palestine. This is more than a purchase; it’s a way to keep their stories alive and contribute to their future.`,
    category: 'Photography',
    icon: Camera,
    imageSrc: 'https://www.maxfosterphotography.com/images/xl/Rise-Above.webp',
    imageAlt: 'Professional photograph showing urban landscape.',
    features: [
      'Limited edition',
    ],
    sizes: [
      { name: '12"x16"', price: 60 },
    ],
    additionalImages: [
      "/shop-photos/gaza-destroyed.jpg",
      "/shop-photos/olive-women.jpg",
      "/shop-photos/kids-wheel.jpg",
      "/shop-photos/night-light.jpg",
      "/shop-photos/olive-picking.jpg",
    ],
    artist: {
      name: 'Ahmad Khalil',
      bio: 'A Palestinian photographer with over 10 years of experience capturing the beauty and resilience of his culture.',
      portfolio: 'https://unsplash.com/@ahmad'
    }
  },
  {
    id: 2,
    name: 'Coloring Book',
    href: '/shop/2',
    price: 20,
    description: 'High-quality Coloring Book created by one of our talented professional painters, capturing the essence of Palestinian culture and life.',
    longDescription: `This Palestinian-Themed Children's Coloring Book features a collection of beautiful illustrations that celebrate Palestinian culture, heritage, and traditions. Designed by a talented displaced Palestinian teenager, the book includes images of traditional dress, iconic landmarks, and patterns inspired by Palestinian art and history.
Perfect for young creative minds, this printable coloring book offers hours of fun while teaching children about the importance of cultural preservation. Each page highlights the beauty of Palestine and its rich history, providing both an educational and artistic experience. Once purchased, you can print the pages as many times as you like for endless creativity.
By purchasing this book, you’re supporting a young Palestinian artist while also contributing to SafeGrow’s programs that help displaced Palestinians rebuild their lives. Your purchase empowers the artist to continue her creative journey and supports SafeGrow's mission of offering mentorship, resources, and opportunities for a brighter future.
`,
    category: 'Textile Arts',
    icon: Palette,
    imageSrc: '/coloring-book1.png',
    imageAlt: 'Handwoven textile piece with intricate patterns.',
    features: [
      'Traditional handweaving techniques',
      'Natural materials',
      'Unique patterns',
      'Fair trade certified',
      'Artisan signed'
    ],
    sizes: [
      { name: '2\'x3\'', price: 20 },
    ],
    additionalImages: [
      '/shop-photos/coloring-2.png',
    ],
    artist: {
      name: 'Layla Hassan',
      bio: 'A master weaver with 20 years of experience in traditional Palestinian textile arts.',
      portfolio: 'https://example.com/layla'
    }
  },
  {
    id: 3,
    name: 'Palestinian Cookbook',
    href: '/shop/3',
    price: 35,
    description: 'Discover the rich flavors and timeless recipes of Palestine with this Palestinian Cookbook.',
    longDescription: `Discover the rich flavors and timeless recipes of Palestine with this Palestinian Cookbook, thoughtfully written and designed by two talented Palestinian women. The book features a collection of traditional Palestinian dishes passed down through generations, offering a true taste of Palestinian culture. From hearty stews to sweet desserts, each recipe is a celebration of the ingredients, spices, and cooking methods that define Palestinian cuisine.
This cookbook not only shares delicious recipes but also highlights the stories behind each dish, connecting food to heritage and tradition. Beautifully designed with vibrant images and easy-to-follow instructions, it’s perfect for both experienced cooks and those new to Palestinian cooking.
By purchasing this cookbook, you’re supporting the two Palestinian women who wrote and designed it, while also contributing to SafeGrow’s mission. Proceeds from the book will help fund SafeGrow’s programs that empower displaced Palestinians with the resources, mentorship, and opportunities they need to rebuild their lives and create sustainable futures.`,
    category: 'Cook Books',
    icon: Book,
    imageSrc: 'coloring-2.png',
    imageAlt: 'Sample Page of the Cooking Book',
    features: [
      'Traditional crafting techniques',
      'Premium materials',
      'Custom designs available',
      'Artisan signed',
      'Certificate of authenticity'
    ],
    sizes: [
      { name: 'Small', price: 35 },
    ],
    additionalImages: [
    ],
    artist: {
      name: 'Two Palestinian Womens',
      bio: 'A third-generation craftsman specializing in traditional Palestinian decorative arts.',
      portfolio: 'https://example.com/omar'
    }
  }
];