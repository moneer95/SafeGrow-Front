import { Artist } from "../../types/artist";

export const photographers: Artist[] = [
  {
    id: "abdelrahman-zaqout",
    name: "Abdelrahman Zaqout",
    bio: "A Palestinian photographer with over 10 years of experience capturing the beauty and resilience of his culture.",
    portfolio: [
      {
        id: "urban-life-1",
        title: "Urban Life in Palestine",
        description: "A glimpse into daily life in Palestinian cities",
        price: 175,
        sizes: ["12\"x16\"", "16\"x20\"", "20\"x24\"", "24\"x36\""],
        images: [
            "/shop-photos/gaza-destroyed.jpg", 
            "/shop-photos/olive-women.jpg", 
            "/shop-photos/kids-wheel.jpg", 
            "/shop-photos/night-light.jpg", 
            "/shop-photos/olive-picking.jpg", 
        ]
      }
    ]
  },
];