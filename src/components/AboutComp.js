import React from 'react';
import '../styles/AboutCompStyles.css';
import {car,carout,carshop,worker} from '../assets/index';

const AboutComp = () => {
  return (
    <div className='aboutcomp-sec'>

    <div className='aboutcomp-con'>
        <div className='ac-left'>

            <img src={worker}/>

        </div>

        <div className='ac-right'>

       <h4>About Company</h4> 
        <h2>You start the engine and your adventure begins</h2>
        <p>Certain but she but shyness why cottage.
             Guy the put instrument sir entreaties affronting. 
             Pretended exquisite see cordially the you. Weeks quiet
              do vexed or whose. Motionless if no to affronting
               imprudence no precaution. 
            My indulged as disposal strongly attended.</p>

            <div className='ac-boxes'>

                <div className='ac-box'>
                    <img src={car}/>
                    <h3>85<sup>Car Types</sup></h3>
                </div>

                <div className='ac-box'>
                    <img src={carout}/>
                    <h3>65<sup>Rental Outlets</sup></h3>
                </div>

                <div className='ac-box'>
                    <img src={carshop}/>
                    <h3>45<sup>Repair Shop</sup></h3>
                </div>

            </div>
        </div>

    </div>
    </div>      
  )
}

export default AboutComp