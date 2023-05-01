import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import Advert2 from '../components/Advert2';
import ContactUs from '../components/ContactUs';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage heading="Contact" hometext="Home" current="contact" linkTo="/" linkToCur="/contact"/>
     <ContactUs/>
      <Advert2/>
      <Footer/>
     
    </div>
  )
}

export default Contact