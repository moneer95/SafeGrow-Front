import { Code, Camera, Palette, CookingPot, Download } from "lucide-react";
import type { Product, Category } from "../../types/shop";

export const categories: Category[] = [
  {
    id: "photography",
    name: "Digital Photography",
    description: "High-resolution digital prints delivered instantly to your inbox",
    icon: Camera,
    color: "text-green-600",
    bgColor: "bg-gray-200",
    image: "shop-photos/olive-women.jpg"
  },
  {
    id: "coloring-books",
    name: "Palestinian Coloring Books",
    description: `Palestinian-Themed Coloring Books.
`,
    icon: Palette,
    color: "text-purple-600",
    bgColor: "bg-gray-200",
    image: "/colorin-book-cover.png"
  },
  {
    id: "cook-books",
    name: "Recipe Books",
    description: "Discover the rich flavors and timeless recipes of Palestine with Palestinian cookbooks",
    icon: CookingPot,
    color: "text-amber-600",
    bgColor: "bg-gray-200",
    image: "/cook-book-cover.jpeg"
  }
];





const API_URL = "https://dash.safe-grow.com/api/method/safegrow.api.get_products";

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch products from Frappe");
    }

    let result = await response.json();
    result = result.message; // Adjust based on API response structure

    // Map the fetched data to match your Product interface
    const products: Product[] = result.map((product: any, index: number) => ({
      id: product.product_id,
      name: product.product_name || "Untitled Product",
      href: `/shop/${product.product_id}`,
      price: product.price || 0,
      categoryId: product.category_id || "unknown",
      description: product.short_description || "No description available",
      longDescription: product.long_description || "No additional details",
      category: product.category_id || "Uncategorized",
      icon:
        product.category_id === "photography"
          ? Camera
          : product.category_id === "coloring books"
            ? Palette
            : CookingPot,
      imageSrc: product.product_image || "https://via.placeholder.com/800",
      imageAlt: product.image_alt_text || "",
      features: product.features ? product.features.split(",") : [],
      sizes: product.sizes
        ? product.sizes.map((size: any) => ({
          name: size.name,
          price: size.price,
        }))
        : [],
      additionalImages: Array.isArray(product.gallery)
        ? product.gallery
        : product.gallery
          ? [product.gallery]
          : [],
      artist: {
        name: product.artist_name || "Unknown Artist",
        bio: product.artist_bio || "No biography available",
        portfolio: product.artist_portfolio || "#",
      },
    }));

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
