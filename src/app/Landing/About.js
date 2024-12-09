"use client";

import React from "react";

const About = () => {
  return (
    <section className="bg-[#86CA2F] py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
        {/* Title */}
        <div className="max-w-[1024px] mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              About the SafeGrow <br />
              <span className="text-white">Who are we</span>
            </h2>
            <div className="flex justify-center">
              {/* You can add any additional elements here if needed */}
            </div>
          </div>

          {/* Content */}
          <p className="text-lg lg:text-xl text-white text-start leading-relaxed mb-8">
            SafeGrow is a unique initiative designed to empower Palestinian refugees by connecting them with work
            opportunities and providing essential resources for rebuilding their livelihoods. Operating as both a business
            entity and a recruitment intermediary, SafeGrow matches refugees with local businesses in Cairo that need
            hired help. We ensure that refugees are fairly compensated by handling their payments directly, while the
            businesses pay SafeGrow for the services provided.
          </p>
          <p className="text-lg lg:text-xl text-white text-start leading-relaxed mb-8">
            In addition to our local operations, we offer international supporters the chance to contribute through
            curated donation packages. These packages, available in our &quot;I Want to Help&quot; section, allow donors to directly
            support SafeGrow initiatives while also gaining access to unique creations from local artisans and freelancers,
            like digital photography prints. This approach ensures transparency and provides a meaningful way to support
            refugees in rebuilding their lives through work and self-sustainability.
          </p>
          <p className="text-lg lg:text-xl text-white text-start leading-relaxed">
            Through our three specialized programs -
            <span className="font-bold text-2xl text-green-900"> SafeBuild</span>,
            <span className="font-bold text-2xl text-[#F15A28]"> SafeConnect</span>, and
            <span className="font-bold text-2xl text-[#F9B043]"> SafeRevive</span> - we provide the tools, mentorship, and
            financial resources needed to start small businesses, find freelance work, or rebuild enterprises destroyed by
            displacement and violence. SafeGrow stands for self-sufficiency, dignity, and community solidarity, working
            together for a brighter, more sustainable future for all.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
