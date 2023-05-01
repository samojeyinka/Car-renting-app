import React from 'react';
import {lg,ccd, wcbg,nhc,aip,} from '../assets/index';
import '../styles/WhyChooseUsStyles.css';
import {FaAngleRight} from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <div className='chooseUs-section'>
        <div className='wcu-container'>
        <div className='choose-us-image'>
            <img src={lg}/>
         </div>

            <div className='wcu-flex'>

                <div className='left'>
                    <h4>Why Choose Us</h4>
                    <h2>Best valued deals you will ever find</h2>
                    <p>Discover the best deals you'll ever find with
                         our unbeatable offers. We're dedicated to providing 
                         you with the best value for your money, so you can 
                         enjoy top-quality services and products without
                          breaking the bank. Our deals are designed to give
                           you the ultimate renting experience, so don't miss
                            out on your chance to save big.

                    </p>
                    <button className='wcu-btn'>Find Details <FaAngleRight/></button>

                </div>

                <div className='right'>

                    <div className='wcu-box'>
                        <img src={ccd}/>
                        <div className='wcu-txt'>
                            <h3>Cross Country Drive</h3>
                            <p>Take your driving experience to the next level with
                                 our top-notch vehicles for your cross-country adventures.
                            </p>

                        </div>
                    </div>

                        {/* ================================================ */}

                        <div className='wcu-box'>
                        <img src={aip}/>
                        <div className='wcu-txt'>
                            <h3>All Inclusive Pricing</h3>
                            <p>Get everything you need in one convenient, transparent price 
                                with our all-inclusive pricing policy.
                            </p>

                        </div>
                    </div>


                    {/* =================================================== */}

                    <div className='wcu-box'>
                        <img src={nhc}/>
                        <div className='wcu-txt'>
                            <h3>No Hidden Charges</h3>
                            <p>Enjoy peace of mind with our no hidden charges policy. 
                                We believe in transparent and honest pricing.
                            </p>

                        </div>
                    </div>


                </div>


            </div>

         </div>


    </div>
  )
}

export default WhyChooseUs