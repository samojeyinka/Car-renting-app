import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import CompIntro from '../components/CompIntro';
import AboutComp from '../components/AboutComp';
import Advert2 from '../components/Advert2';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage heading="About" hometext="Home" current="about" linkTo="/" linkToCur="/about"/>
      <AboutComp/>
      <CompIntro/>
      <Advert2/>
      <Footer/>
     
    </div>
  )
}

export default About