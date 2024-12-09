import React from 'react'
import HeroSection from "./Hero"
import Navbar from './Navbar'
import DonationOptions from './Provide'
import Selection from './Selection'
import TopBar from '@/components/TopBar'
const Donation = () => {
  return (
   <>
   <HeroSection/>
   <DonationOptions/>
   <Selection/>
   </>
  )
}

export default Donation