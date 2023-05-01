import React, { useState } from 'react';
import '../styles/HeroStyles.css'
import {Link} from 'react-router-dom';
import {Logo} from "../assets/index";
import {FaArrowCircleRight,FaCalculator,FaCheckCircle,FaAngleRight} from 'react-icons/fa';
import { bgImg,heroCar } from '../assets/index';
import ScrollReveal from 'scrollreveal';


const Hero = () => {
  ScrollReveal().reveal('.headline');
  ScrollReveal().reveal('.hero-text', { delay: 500 });
  ScrollReveal().reveal('.punchline', { delay: 2000 });
  return (
    <>


    <section className='home-section max-w-[1920px]'>

     <div className='hero'>
        <img src={bgImg} className='hero-bg' alt='background image'/>

        <div className='hero-content'>
            <div className='hero-text'>
                <h4>Plan your trip now</h4>
                    <h1>Save <span>big</span> with our car rental</h1>

                          <p>
                          Experience your dream car rental with 
                          unbeatable prices, unlimited mileage, flexible pick-up choices, and additional benefits.
                        </p>

                        <div className='hero-btns'>
                            <button className='hero-btn book-btn'>Book Ride <FaCheckCircle/></button>
                            <button className='hero-btn learn-btn'>Learn More <FaAngleRight/></button>

                        </div>

            </div>

            <img src={heroCar} className='hero-img'/>

        </div>
     </div>

    </section>
    
    
    </>
  )
}

export default Hero