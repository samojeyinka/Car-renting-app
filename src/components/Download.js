import React from 'react';
import '../styles/DownloadStyles.css';
import {dlbg,appstore,playstore} from '../assets/index';

const Download = () => {
  return (
    <div className='dl-section'>

        <div className='dl-container'>

            <div className='dl-left'>       

            <h2>Download our app to get most out of it</h2>
            <p>Thrown shy denote ten ladies though ask saw.
             Or by to he going think order event music. Incommode 
             so intention defective at convinced.
             Led income months itself and houses you.</p>

             <div className='dl-images'>
                <img src={playstore}/>
                <img src={appstore}/>

             </div>

            </div>

            <div className='dl-right'>
            <img src={dlbg}/>

            </div>

        </div>

    </div>
  )
}

export default Download;
