import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import Review from '../components/Review';
import Advert2 from '../components/Advert2';


const Testimonials = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage heading="Testimonials" hometext="Home" current="testimonials" linkTo="/" linkToCur="/testimonials"/>
      <Review/>
      <Advert2/>
      <Footer/>
    </div>
  )
}

export default Testimonials