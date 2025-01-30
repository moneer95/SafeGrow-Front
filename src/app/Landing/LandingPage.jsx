import React from 'react'
import Hero from "./Hero";
import About from "./About";
import GetInvolved from "./GetInvolved";
import Caresoul from "./Caresoul";
import Commitment from "./Commitment";
import ContactUs from "./ContactUs";
import NewsletterSignup from "./Footer";
const LandingPage = () => {
  return (
   <>
   <Hero/>
   <About/>
   {/* <HowSafeGrowWorks/> */}
   <Caresoul/>
   <GetInvolved/>
   <ContactUs/>
   </>
  )
}

export default LandingPage