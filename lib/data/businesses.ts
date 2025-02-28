import { ShoppingBag, Utensils, Camera, Code, Youtube, BookOpen, Coffee } from "lucide-react";

export interface Business {
  id: string;
  name: string;
  logo: string;
  description: string;
  instagram: string;
  website?: string;
  location: string;
  facebook?: string;
  youtube?: string;
}

// Map category IDs to their respective icons
const categoryIcons: { [key: string]: any } = {
  food: Utensils,
  retail: ShoppingBag,
  creative: Camera,
  online: Code,
  fashion: ShoppingBag,
};

// Fetch businesses from the API
export async function getBusinesses(): Promise<Business[]> {
  const endpoint = "https://dash.safe-grow.com/api/method/safegrow.api.get_directors";

  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Add any required headers (e.g., authorization)
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch businesses from the API");
  }

  let result = await response.json();

  result = result.message


  // Map the fetched data to match your Business interface
  const businesses: Business[] = result.map((business: any) => ({
    id: business.id,
    name: business.business_name,
    logo: business.logo,
    description: business.short_description,
    instagram: business.instagram_link,
    website: business.website_link,
    location: business.location,
    facebook: business.facebook_link,
    youtube: business.youtupe_link,
  }));

  return businesses;
}