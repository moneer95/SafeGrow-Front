import { Code } from "lucide-react";

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

// This function fetches job postings from Frappe and returns a Promise that resolves to an array of Job objects.
export async function getJobs(): Promise<Job[]> {
  const baseUrl = process.env.FRAPPE_BASE_URL;
  const credentials = btoa(`${process.env.FRAPPE_API_TOKEN}:${process.env.FRAPPE_API_SECRET}`);
  const authHeader = `token ${credentials}`;

  // Replace with your actual Frappe instance URL.
  const endpoint = "https://dash.safe-grow.com/api/method/safegrow.api.get_all_employer_job_postings";

  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Authorization: authHeader,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch jobs from Frappe");
  }

  
  // Frappe's REST API returns a JSON object that usually contains a "data" property
  let result = await response.json();
  // result.data should be an array of job postings from Frappe
  result = result.message

  // Map the fetched data to match your Job interface.
  // You may need to adjust the field names based on your doctype's schema.
  const jobs: Job[] = result
  .filter((job: any) => job.status === "Posted")
  .map((job: any, index: number) => ({
    id: index + 1, // or job.id if your data provides an id
    title: job.job_title, // adjust to your actual field name
    type: job.job_type,   // adjust if needed
    company: job.company_name, // adjust to your doctype field
    location: job.location, // adjust if needed
    icon: Code, // you can decide how to assign an icon here
    description: job.job_description, // adjust to your doctype field
    requirements: job.skills_required ? job.skills_required.split(",") : [],
    salary: job.salary_compensation, // adjust to your field name
    contact: {
      whatsapp: job.phone_number, // adjust to your field name (or job.whatsapp if available)
      email: job.contact_email,   // adjust accordingly
    },
  }));

  return jobs;
}
