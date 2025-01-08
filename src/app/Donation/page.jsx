'use client';

import { useState } from 'react';
import { Sprout, Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import CheckoutForm from '@/components/CheckoutForm';
import { useRouter } from 'next/router';

const kits = [
  {
    name: 'Starter Kit',
    price: 50,
    description: 'Help a refugee start their journey',
    features: [
      'Digital skills training access',
      'Basic business templates',
      'Community forum access',
      'Digital certificate of support'
    ],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=60'
  },
  {
    name: 'Growth Kit',
    price: 100,
    description: 'Support sustainable business development',
    features: [
      'All Starter Kit features',
      'Business mentorship session',
      'Marketing strategy guide',
      'Exclusive workshops access'
    ],
    popular: true,
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&auto=format&fit=crop&q=60'
  },
  {
    name: 'Impact Kit',
    price: 250,
    description: 'Make a significant difference',
    features: [
      'All Growth Kit features',
      'Equipment funding contribution',
      'Priority support access',
      'Impact report & updates'
    ],
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop&q=60'
  },
  {
    name: 'Empowerment Kit',
    price: 500,
    description: 'Provide advanced support and mentorship',
    features: [
      'All Impact Kit features',
      'Access to global mentors',
      'Advanced digital tools',
      'Extended project funding'
    ],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60'
  },
  {
    name: 'Freedom Kit',
    price: 1000,
    description: 'Empower an entire community',
    features: [
      'All Empowerment Kit features',
      'Community development funds',
      'Local event sponsorship',
      'Lifetime impact report access'
    ],
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&auto=format&fit=crop&q=60'
  },
  {
    name: 'Heritage Kit',
    price: 2000,
    description: 'Preserve and promote Palestinian heritage',
    features: [
      'Support for artisans',
      'Tools for cultural preservation',
      'Mentorship in arts & crafts',
      'Special recognition'
    ],
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&auto=format&fit=crop&q=60'
  }
];

export default function Donation() {
  

  const [selectedKit, setSelectedKit] = useState(null);

  const handleDonate = (kit) => {
    setSelectedKit(kit);
  };

  if(selectedKit){
    return (
       <CheckoutForm amount={selectedKit.price} />
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div className="relative py-24 sm:pt-2 ">
        <Navbar />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0" />
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&auto=format&fit=crop&q=80"
            alt="Support background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Support Our Mission
              </h1>
              <p className="mt-6 text-lg  leading-8 text-white/90 max-w-2xl mx-auto">
                Choose a business kit to support Palestinian refugees in building sustainable futures. Each kit provides essential resources and tools for success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Business Kits */}
      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 xl:grid-cols-3">
            {kits.map((kit) => (
              <div
                key={kit.name}
                className={`relative flex flex-col rounded-2xl border-4 ${
                  kit.popular
                    ? 'border-[#009688]'
                    : 'border-gray-200'
                } p-8 transition-all duration-300 hover:shadow-lg`}
              >
                {kit.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-[#009688] px-4 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#009688]/30">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="relative h-48 w-full mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={kit.image}
                    alt={kit.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{kit.name}</h3>
                <p className="mt-4 text-sm text-gray-600">{kit.description}</p>
                <div className="mt-6 text-3xl font-bold text-gray-900">
                  ${kit.price}
                  <span className="text-base font-medium text-gray-500">/one-time</span>
                </div>
                <ul role="list" className="mt-8 space-y-3">
                  {kit.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-6 w-6 text-[#87CA2F]" />
                      </div>
                      <p className="ml-3 text-sm text-gray-600">{feature}</p>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleDonate(kit)}
                  className={`mt-8 w-full rounded-lg px-4 py-4 text-center text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    kit.popular
                    ? 'bg-[#87CA2F] text-white hover:bg-[#87CA2F]/90'
                    : 'bg-[#009688] text-white hover:bg-[#009688]/90'
                  }`}
                >
                  Get {kit.name}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
