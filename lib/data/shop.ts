import { Code, Camera, Palette, HeartHandshake } from "lucide-react";
import type { Product } from "../../types/shop";

export const products: Product[] = [
  {
    id: 1,
    name: 'Photography Print',
    href: '/shop/1',
    price: 175,
    description: 'High-quality digital photography print created by one of our talented professional photographers, capturing the essence of Palestinian culture and life.',
    longDescription: `Our photography prints are more than just images - they're windows into Palestinian life and culture. Each print is carefully produced using premium archival-quality materials, ensuring your piece will maintain its beauty for generations.

    These limited edition prints come with a certificate of authenticity and are individually signed by the artist. Your purchase directly supports the photographer and contributes to our mission of empowering Palestinian artists.`,
    category: 'Photography',
    icon: Camera,
    imageSrc: 'https://www.maxfosterphotography.com/images/xl/Rise-Above.webp',
    imageAlt: 'Professional photograph showing urban landscape.',
    features: [
      'Museum-quality printing',
      'Archival-grade paper',
      'Limited edition',
      'Signed by artist',
      'Certificate of authenticity'
    ],
    sizes: [
      { name: '12"x16"', price: 175 },
      { name: '16"x20"', price: 225 },
      { name: '20"x24"', price: 275 },
      { name: '24"x36"', price: 350 }
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
    price: 350,
    description: 'High-quality Coloring Book created by one of our talented professional painters, capturing the essence of Palestinian culture and life.',
    longDescription: `Each piece of our handwoven textile art represents centuries of Palestinian craftsmanship and cultural heritage. Created using traditional techniques passed down through generations, these textiles combine time-honored patterns with contemporary design sensibilities.

    Every textile is unique, handcrafted by skilled artisans who have preserved these traditional techniques. The intricate patterns and vibrant colors tell stories of Palestinian culture and heritage.`,
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
      { name: '2\'x3\'', price: 350 },
      { name: '3\'x5\'', price: 550 },
      { name: '4\'x6\'', price: 750 }
    ],
    additionalImages: [
    ],
    artist: {
      name: 'Layla Hassan',
      bio: 'A master weaver with 20 years of experience in traditional Palestinian textile arts.',
      portfolio: 'https://example.com/layla'
    }
  },
  {
    id: 3,
    name: 'Traditional Craft Piece',
    href: '/shop/3',
    price: 250,
    description: 'A unique, custom-made craft piece, carefully designed and created with traditional Palestinian artistry, representing cultural heritage.',
    longDescription: `Our traditional craft pieces are created by skilled artisans who combine centuries-old techniques with contemporary design. Each piece is handcrafted using traditional methods and materials, ensuring authenticity and quality.

    These pieces serve as both functional art and cultural preservation, keeping alive the rich traditions of Palestinian craftsmanship while creating sustainable livelihoods for displaced artisans.`,
    category: 'Artisan Crafts',
    icon: HeartHandshake,
    imageSrc: 'https://media.istockphoto.com/id/1346661870/photo/baskets-traditional-handicraft-products.jpg?s=612x612&w=0&k=20&c=CNV8ONrT8EoZFMPpdkHNOPqk2vTbLitB9n9FfmsLA88=',
    imageAlt: 'Handcrafted artisan piece showing traditional design.',
    features: [
      'Traditional crafting techniques',
      'Premium materials',
      'Custom designs available',
      'Artisan signed',
      'Certificate of authenticity'
    ],
    sizes: [
      { name: 'Small', price: 250 },
      { name: 'Medium', price: 350 },
      { name: 'Large', price: 450 }
    ],
    additionalImages: [
    ],
    artist: {
      name: 'Omar Nasser',
      bio: 'A third-generation craftsman specializing in traditional Palestinian decorative arts.',
      portfolio: 'https://example.com/omar'
    }
  }
];