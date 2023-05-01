import React from 'react';
import {FaWhatsapp,FaWhatsappSquare} from 'react-icons/fa';
import '../styles/Advert2Styles.css'

const Advert2 = () => {
  return (
    <div className='advert2-sec'>

        <div className='ads-box'>
            <div className='ads-det'>
            
            <h2>Get in touch on whatsapp</h2>
            <h2 className='wapp'>
                <FaWhatsapp size={50} style={{color:'var(--primary-color)'}}/>
                <span>(234) 812-262-4063</span>
            </h2>
            </div>
        </div>

    </div>
  )
}

export default Advert2