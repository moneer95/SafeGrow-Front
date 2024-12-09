import React from 'react'
import Hero from "./Hero";
import About from "./About";
import HowSafeGrowWorks from "./HowSafeGrowWorks";
import GetInvolved from "./GetInvolved";
import Caresoul from "./Caresoul";
import Commitment from "./Commitment";
import TogetherSection from "./TogetherSection";
import ContactUs from "./ContactUs";
import NewsletterSignup from "./Footer";
import TopBar from '@/components/TopBar';
const LandingPage = () => {
  return (
   <>
   <Hero/>
   <About/>
   <HowSafeGrowWorks/>
   <GetInvolved/>
   <Caresoul/>
   <Commitment/>
   <TogetherSection/>
   <ContactUs/>
   <NewsletterSignup/>
   </>
  )
}

export default LandingPage