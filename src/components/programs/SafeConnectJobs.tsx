"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code, Camera, Palette, ExternalLink } from "lucide-react";
import Link from "next/link";

const jobs = [
  {
    id: 1,
    title: "Web Developer",
    type: "Remote",
    company: "TechCo International",
    location: "Remote (Global)",
    icon: Code,
    description: "Looking for a skilled web developer with experience in React and Node.js. Join our diverse team working on innovative projects.",
    requirements: ["3+ years of experience", "React & Node.js", "English proficiency"],
    salary: "$3000-4500/month"
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
    salary: "Project-based"
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
    salary: "$2500-3500/month"
  }
];

export default function SafeConnectJobs() {
  return (
    <div className="bg-orange-50/50 rounded-3xl p-8 lg:p-12 mt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-[#F15A28]" />
            Current Opportunities
          </h3>
          
          <div className="grid gap-6">
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-orange-50">
                    <job.icon className="w-6 h-6 text-[#F15A28]" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">{job.title}</h4>
                        <p className="text-gray-600">{job.company}</p>
                      </div>
                      <Link
                        href="/apply"
                        className="flex items-center gap-1 px-4 py-2 bg-[#F15A28] text-white rounded-lg hover:bg-[#d94e22] transition-colors"
                      >
                        Apply Now
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                    
                    <div className="mt-4">
                      <p className="text-gray-700">{job.description}</p>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-orange-50 text-[#F15A28] rounded-full text-sm">
                          {job.type}
                        </span>
                        <span className="px-3 py-1 bg-orange-50 text-[#F15A28] rounded-full text-sm">
                          {job.location}
                        </span>
                        <span className="px-3 py-1 bg-orange-50 text-[#F15A28] rounded-full text-sm">
                          {job.salary}
                        </span>
                      </div>
                      
                      <div className="mt-4">
                        <h5 className="font-medium text-gray-900 mb-2">Requirements:</h5>
                        <ul className="list-disc list-inside space-y-1">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="text-gray-600">{req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don't see a position that matches your skills? 
              <Link href="/contact" className="text-[#F15A28] hover:text-[#d94e22] ml-1">
                Contact us
              </Link> to discuss other opportunities.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}