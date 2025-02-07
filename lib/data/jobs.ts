import { Code, Camera, Palette } from "lucide-react";

export interface Job {
  id: number;
  title: string;
  type: string;
  company: string;
  location: string;
  icon: any;
  description: string;
  requirements: string[];
  salary: string;
  contact: {
    whatsapp: string;
    email: string;
  };
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "Web Developer",
    type: "Remote",
    company: "TechCo International",
    location: "Remote (Global)",
    icon: Code,
    description: "Looking for a skilled web developer with experience in React and Node.js. Join our diverse team working on innovative projects.",
    requirements: ["3+ years of experience", "React & Node.js", "English proficiency"],
    salary: "$3000-4500/month",
    contact: {
      whatsapp: "+20 123 456 7890",
      email: "tech@techco.com"
    }
  },
  {
    id: 2,
    title: "Photographer",
    type: "Freelance",
    company: "Creative Studios",
    location: "Cairo, Egypt",
    icon: Camera,
    description: "Seeking talented photographers for various commercial and artistic projects. Portfolio required.",
    requirements: ["Professional portfolio", "Own equipment", "Commercial photography experience"],
    salary: "Project-based",
    contact: {
      whatsapp: "+20 123 456 7891",
      email: "creative@studios.com"
    }
  },
  {
    id: 3,
    title: "Graphic Designer",
    type: "Remote",
    company: "Design Hub",
    location: "Remote (MENA)",
    icon: Palette,
    description: "Join our creative team as a graphic designer. Work on exciting branding and digital design projects.",
    requirements: ["Adobe Creative Suite", "UI/UX knowledge", "Portfolio required"],
    salary: "$2500-3500/month",
    contact: {
      whatsapp: "+20 123 456 7892",
      email: "jobs@designhub.com"
    }
  }
];