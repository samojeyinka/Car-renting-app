import React, { useState } from 'react';
import '../styles/AdvertStyles.css';
import {adimg,plane1,plane2} from '../assets/index';
import {FaTimes} from 'react-icons/fa';



const Advert = () => {

  const [click,setClickState] = useState(false);

  const adClick = () => {
    setClickState(!click)
  }

  return (

    <div className='advert-section'>
        
        <div className={click ? 'advert-banner none' : 'advert-banner'}>
            <div>
            <h1>Save big with our affordable flight!</h1>
            <p>Tommorow brings us together.<span>24/7</span> Support.</p>
            </div>
            
            <img src={plane1} className='adImage'/>

            <div className='delAd'>
            <FaTimes size={25} style={{color:"#ffa500", cursor:"pointer"}} onClick={adClick}/>
            </div>
           
            
        </div>
 
  </div>
  )
}

export default Advert