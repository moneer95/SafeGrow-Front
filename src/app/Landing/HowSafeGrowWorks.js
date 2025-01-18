"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HowSafeGrowWorks = () => {
  const programs = [
    {
      title: "SafeBuild",
      color: "#87CA2F",
      image: "/iloveimg-converted/10.jpg",
      description: "This program supports refugees who want to create small, local businesses or be matched with employment. SafeBuild provides financial resources, equipment, and mentorship to generate income quickly."
    },
    {
      title: "SafeConnect",
      color: "#ED5C2B",
      image: "/iloveimg-converted/12.jpg",
      description: "For refugees skilled in fields like graphic design, photography, or coding, SafeConnect provides a pathway to remote or freelance work. We offer essential tools like laptops and cameras, help build professional portfolios and resumes, and connect individuals with international mentors who guide them in marketing and online engagement - empowering them to promote their skills and grow their businesses independently."
    },
    {
      title: "SafeRevive",
      color: "#FBB13C",
      image: "/iloveimg-converted/15.jpg",
      description: "SafeRevive helps refugees rebuild businesses that were destroyed by displacement, providing resources and mentorship to restore livelihoods."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            How <span className="text-[#86CA2F] inline-block">SafeGrow</span> Works
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            SafeGrow connects Palestinian refugees in Cairo with meaningful work
            opportunities and sustainable livelihoods through our three
            specialized programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="flex flex-col h-full bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="relative h-64 w-full overflow-hidden">
                  <div 
                    className="absolute inset-0 z-10"
                    style={{
                      background: `linear-gradient(180deg, transparent 0%, ${program.color}40 100%)`
                    }}
                  />
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transform transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 
                    className="text-2xl font-bold mb-4"
                    style={{ color: program.color }}
                  >
                    {program.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-1">
                    {program.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Through these programs, SafeGrow bridges the gap between local
            businesses and refugees in need of work while offering international
            supporters a meaningful way to contribute to long-term solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowSafeGrowWorks;