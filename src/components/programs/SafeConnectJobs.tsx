"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ExternalLink, X, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { getJobs, Job } from "../../../lib/data/jobs";


export default function SafeConnectJobs() {
    const [selectedJob, setSelectedJob] = useState(null);
    
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);

    
    const closeDialog = () => setSelectedJob(null);
    
    useEffect(() => {
        async function fetchJobs() {
          try {
            const data = await getJobs();
            console.log(data.length)
            setJobs(data);
          } catch (error) {
            console.error("Error fetching jobs:", error);
          } finally {
            setLoading(false);
          }
        }
    
        fetchJobs();
      }, []);
    
      if (loading) return <p>Loading jobs...</p>;
    
  


    return (
        <>
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
                            {jobs.length && jobs.map((job) => (
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
                                                <button
                                                    onClick={() => setSelectedJob(job.id)}
                                                    className="flex items-center gap-1 px-4 py-2 bg-[#F15A28] text-white rounded-lg hover:bg-[#d94e22] transition-colors"
                                                >
                                                    Apply Now
                                                    <ExternalLink className="w-4 h-4" />
                                                </button>
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

            {/* Portal container for the dialog */}
            <div className="relative z-[100]">
                {/* Apply Dialog */}
                <AnimatePresence>
                    {selectedJob !== null && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={closeDialog}
                                className="fixed inset-0 bg-black/60"
                            />

                            {/* Dialog */}
                            <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-[100]" onClick={closeDialog}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                    className="w-[90%] max-w-md bg-white rounded-2xl p-6 shadow-xl"
                                    onClick={(e) => e.stopPropagation()} // Prevent backdrop click from closing it
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900">
                                                Apply for {jobs.find(j => j.id === selectedJob)?.title}
                                            </h3>
                                            <p className="text-gray-600">
                                                {jobs.find(j => j.id === selectedJob)?.company}
                                            </p>
                                        </div>
                                        <button
                                            onClick={closeDialog}
                                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                        >
                                            <X className="w-5 h-5 text-gray-500" />
                                        </button>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="p-4 bg-orange-50 rounded-xl">
                                            <div className="flex items-center gap-3 mb-3">
                                                <Phone className="w-5 h-5 text-[#F15A28]" />
                                                <h4 className="font-medium text-gray-900">WhatsApp</h4>
                                            </div>
                                            <a
                                                href={`https://wa.me/${jobs.find(j => j.id === selectedJob)?.contact.whatsapp.replace(/\s+/g, '')}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#F15A28] hover:text-[#d94e22] transition-colors"
                                            >
                                                {jobs.find(j => j.id === selectedJob)?.contact.whatsapp}
                                            </a>
                                        </div>

                                        <div className="p-4 bg-orange-50 rounded-xl">
                                            <div className="flex items-center gap-3 mb-3">
                                                <Mail className="w-5 h-5 text-[#F15A28]" />
                                                <h4 className="font-medium text-gray-900">Email</h4>
                                            </div>
                                            <a
                                                href={`mailto:${jobs.find(j => j.id === selectedJob)?.contact.email}`}
                                                className="text-[#F15A28] hover:text-[#d94e22] transition-colors"
                                            >
                                                {jobs.find(j => j.id === selectedJob)?.contact.email}
                                            </a>
                                        </div>
                                    </div>

                                    <p className="mt-6 text-sm text-gray-600 text-center">
                                        Please reach out through either WhatsApp or email to apply for this position.
                                    </p>
                                </motion.div>
                            </div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}