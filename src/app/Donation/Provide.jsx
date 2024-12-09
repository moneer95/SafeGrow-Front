export default function DonationOptions() {
    return (
      <section className="w-full bg-white py-12">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">
            Your Donation Will Provide...
          </h2>
  
          {/* Top Row of Cards: 3 columns on medium screens and above, single column on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* $50 Card */}
            <div className="bg-[#EBEBEB] px-6 lg:py-24 py-10 rounded-lg text-center flex flex-col justify-center">
              <h3 className="text-4xl font-bold text-[#EF5C2E] mb-2">$50</h3>
              <p className="text-gray-700 lg:w-[80%] mx-auto text-sm sm:text-base">
                Could purchase a winter coat for one scholar
              </p>
            </div>
  
            {/* $150 Card */}
            <div className="bg-[#EBEBEB] px-6 lg:py-24 py-10 rounded-lg text-center flex flex-col justify-center">
              <h3 className="text-4xl font-bold text-[#EF5C2E] mb-2">$150</h3>
              <p className="text-gray-700 lg:w-[80%] mx-auto text-sm sm:text-base">
                Could buy a set of school supplies for one scholar for an entire year
              </p>
            </div>
  
            {/* $250 Card */}
            <div className="bg-[#EBEBEB] px-6 lg:py-24 py-10 rounded-lg text-center flex flex-col justify-center">
              <h3 className="text-4xl font-bold text-[#EF5C2E] mb-2">$250</h3>
              <p className="text-gray-700  lg:w-[80%] mx-autotext-sm sm:text-base">
                Would support the cost of academic celebrations, field lessons, and awards
              </p>
            </div>
          </div>
  
          {/* Bottom Row of Cards: 2 columns on medium screens and above, single column on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* $500 Card */}
            <div className="bg-[#EBEBEB] px-6 lg:py-24 py-10 rounded-lg text-center flex flex-col justify-center">
              <h3 className="text-4xl font-bold text-[#EF5C2E] mb-2">$500</h3>
              <p className="text-gray-700 lg:w-[80%] mx-auto text-sm sm:text-base">
                Would make it possible to purchaselg: addi py-10tional ChromeBooks and iPads to enhance scholar learning
              </p>
            </div>
  
            {/* $1000 Card */}
            <div className="bg-[#EBEBEB] px-6 lg:py-24 py-10 rounded-lg text-center flex flex-col justify-center">
              <h3 className="text-4xl font-bold text-[#EF5C2E] mb-2">$1000</h3>
              <p className="text-gray-700 lg:w-[80%] mx-auto text-sm sm:text-base">
                Could cover the cost of an Extended Learning Opportunity (After School Enrichment, Morning Math Intervention) for one scholar for an entire year
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  