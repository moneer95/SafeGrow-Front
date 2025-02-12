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
  }
];