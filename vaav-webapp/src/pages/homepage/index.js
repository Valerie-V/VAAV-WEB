import React from 'react'
import HeroSection from '../../components/HeroSection';
import DemoSection from '../../components/DemoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../../components/DemoSection/Data';
import Services from '../../components/Services';
import Footer from '../../components/Footer'
import ContactSection from '../../components/ContactSection';
const Home = ({toHomePage}) => {
  // window.location.reload(toHomePage);
 
  return (
    <>
      <HeroSection />
      <Services />
      <DemoSection {...homeObjTwo}/>
      <DemoSection {...homeObjThree}/>
      <DemoSection {...homeObjOne}/>
      <ContactSection />
      <Footer />
      
    </>
  )
}

export default Home;