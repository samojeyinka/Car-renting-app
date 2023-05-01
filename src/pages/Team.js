import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import Advert2 from '../components/Advert2';
import OurTeam from '../components/OurTeam';

const Team = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage heading="Our Team" hometext="Home" current="team" linkTo="/" linkToCur="/team"/>
      <OurTeam/>
      <Advert2/>
      <Footer/>
      
    </div>
  )
}

export default Team