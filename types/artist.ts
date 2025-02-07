export interface Portfolio {
    id: string;
    title: string;
    description: string;
    price: number;
    sizes: string[];
    images: string[];
  }
  
  export interface Artist {
    id: string;
    name: string;
    bio: string;
    portfolio: Portfolio[];
  }