import { Artist } from "../../types/artist";

export const photographers: Artist[] = [
  {
    id: "ahmad-khalil",
    name: "Ahmad Khalil",
    bio: "A Palestinian photographer with over 10 years of experience capturing the beauty and resilience of his culture.",
    portfolio: [
      {
        id: "urban-life-1",
        title: "Urban Life in Palestine",
        description: "A glimpse into daily life in Palestinian cities",
        price: 175,
        sizes: ["12\"x16\"", "16\"x20\"", "20\"x24\"", "24\"x36\""],
        images: [
          "https://images.unsplash.com/photo-1469817805249-72b7df1c3c05?w=1200&q=80",
          "https://images.unsplash.com/photo-1465447142348-e9952c393450?w=1200&q=80",
          "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=80",
          "https://images.unsplash.com/photo-1524645343120-a4ae9f7d4343?w=1200&q=80"
        ]
      }
    ]
  },
  {
    id: "layla-hassan",
    name: "Layla Hassan",
    bio: "Capturing the essence of Palestinian culture through her lens for over 15 years.",
    portfolio: [
      {
        id: "cultural-heritage",
        title: "Cultural Heritage",
        description: "Traditional Palestinian life and customs",
        price: 200,
        sizes: ["12\"x16\"", "16\"x20\"", "20\"x24\""],
        images: [
          "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=1200&q=80",
          "https://images.unsplash.com/photo-1515859005217-8a1f08870f59?w=1200&q=80",
          "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=80",
          "https://images.unsplash.com/photo-1468078809804-4c7b3e60a478?w=1200&q=80"
        ]
      }
    ]
  }
];