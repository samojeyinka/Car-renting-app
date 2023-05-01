import React from 'react';
import '../styles/CompIntro.css'
import {sc,co,ld} from '../assets/index'
const CompIntro = () => {
  return (
    <div className='section max-w-[1920px]'>
       
        <h4>Plan your trip now</h4>
        <h1>Quick & easy car rental</h1>

        <div className='Intro-boxes'>

            <div className='Intro-box'>
                <img src={sc} className='intro-avatar'/>
                <h2>Select Car</h2>
                     <p>We offers a big range of vehicles for all
                     your driving needs. 
                    We have the perfect car to
                     meet your needs.
                    </p>

            </div>

            <div className='Intro-box'>
                <img src={co}/>
                <h2>Customer Service</h2>
                     <p>Our knowledgeable and friendly operators 
                        are always ready to help with any questions 
                        or concerns.
                    </p>

            </div>

            <div className='Intro-box'>
                <img src={ld}/>
                <h2>We Move</h2>
                     <p>Whether you're hitting the open road, 
                        we've got you covered with our wide
                         range of cars. No time!
                    </p>

            </div>

        </div>

    </div>
  )
}

export default CompIntro