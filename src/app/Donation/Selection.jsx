"use client";

import { useState } from 'react';
import CheckoutForm from "../../components/CheckoutForm";


export default function DonationSelection() {

  const [selectedAmount, setSelectedAmount] = useState('');
  const [isCheckout, setIsCheckout] = useState(false);
  
  const [coverFee, setCoverFee] = useState(false);

  const amounts = [
    100,
    150,
    250,
    500,
    1000
    ];


    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!selectedAmount || selectedAmount <= 0) {
        alert('Please enter a valid amount');
        return;
      }
  
      // Proceed to CheckoutForm
      setIsCheckout(true);
    };
  
    if (isCheckout) {
      return (
          <CheckoutForm amount={selectedAmount} />
      );
    }
  


  return (
    <section className="w-full py-10 bg-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-8">
          Select an Amount <span className="text-blue-900 font-bold">*</span>
        </h2>
        
        {/* Amount Options */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
          {amounts.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => setSelectedAmount(amount)}
              className={`
                w-20 h-20 sm:w-24 sm:h-24 
                flex items-center justify-center 
                rounded-full 
                text-white text-sm sm:text-base font-medium 
                transition-colors 
                ${selectedAmount === amount ? 'bg-[#0c4a42]' : 'bg-[#009885] hover:bg-[#0c4a42]'}
              `}
            >
              {amount}
            </button>
          ))}
        </div>

        {/* Custom Donation Input */}
        <div className="flex justify-center items-center w-full mx-auto my-7">
          <input
            type="number"
            value={selectedAmount}
            onChange={(e) => setSelectedAmount(e.target.value || 0)}
            placeholder="Enter custom amount"
            className="p-3 border rounded-lg focus:border-none focus:outline-none focus:ring-2 focus:ring-[#009885]"
          />
        </div>
        

        {/* Submit Button */}
        <div className='flex justify-center items-center'>
          <button
            type="submit"
            className="px-6 py-3 bg-[#009885] text-white font-bold rounded-lg hover:bg-[#0c4a42] transition-all"
            onClick={handleSubmit}
          >
            Proceed to Donate ${selectedAmount || 0}
          </button>
        </div>

        
        {/* Add 3% fee */}
        <div className="flex flex-row mt-5 sm:items-center justify-center gap-2 text-center sm:text-left">
          <span className="text-gray-700 font-bold text-sm sm:text-base">
            Add 3% to cover the transaction fee:
          </span>
          <button
            type="button"
            onClick={() => setCoverFee(!coverFee)}
            className="md:w-10 w-5 h-5  md:h-10  rounded-full border-2 bg-[#EFEFEF] border-[#009885] flex items-center justify-center"
          >
            {coverFee && (
              <div className="md:w-5 w-3 h-3  md:h-5  rounded-full bg-[#0c4a42]"></div>
            )}
          </button>
        </div>




      </div>
    </section>
  );
}
