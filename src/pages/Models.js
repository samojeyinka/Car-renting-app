import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import ModelsComp from '../components/ModelsComp';
import Advert2 from '../components/Advert2';

const Models = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage heading="Models" hometext="Home" current="models" linkTo="/" linkToCur="/models"/>
      <ModelsComp/>
      <Advert2/>
      <Footer/>
      
    </div>
  )
}

export default Models