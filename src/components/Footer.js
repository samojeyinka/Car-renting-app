import React from 'react';
import '../styles/FooterStyles.css';
import {FaPhoneAlt,FaEnvelope} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-section'>
        <div className='footer-con'>

            <div className='footer-box fb-1'>
                <h3>CAR<span> Rental</span></h3>
                <p>We offers a big range of vehicles for
                     all your driving needs.
                     We have the perfect car to meet your needs.
                </p>
                <span className='span-flex sf-1'>
                <FaPhoneAlt/>
                <p> 234 9131 710 995</p>
                </span>
                <span className='span-flex sf-2'>
                <FaEnvelope/>
                <p>samuelojeyinka@gmail.com</p>
                </span>

                <small>Developed by Sam Ojeyinka</small>


            </div>

            <div className='footer-box fb-2'>

            <h3>DEVELOPER</h3>
                <ul>
                    <li><a href='https://www.linkedin.com/in/ojeyinka-samuel-02406125a/' target='_blank'>LinkedIn</a></li>
                    <li><a href='https://github.com/samojeyinka' target='_blank'>Github</a></li>
                    <li><a href='https://twitter.com/sam_ojeyinka' target='_blank'>Twitter</a></li>
                    <li><a href='https://stackoverflow.com/users/21717433/sam-ojeyinka' target='_blank'>Stackoverflow</a></li>
                    <li><a href='https://wa.me/2348122624063' target='_blank'>Whatsapp</a></li>
                </ul>

            </div>
            <div className='footer-box fb-3'>
            <h3>WORKING HOURS</h3>

            <p>Mon - Fri: 9:00AM - 9:00PM</p>
            <p>Sat: 9:00AM - 19:00PM</p>
            <p>Sun: Still working</p>

            </div>
            <div className='footer-box fb-4'>
            <h3>SUBSCRIPTION</h3>
            <p>Subscribe your Email address for 
                latest news & updates.</p>

                <input type='email' placeholder='Enter Email Address'/>
                <button className='sub-btn'>Submit</button>
            </div>

        </div>

    </div>
  )
}

export default Footer