import React from 'react';
import '../styles/ReviewStyles.css';
import {FaQuoteRight} from 'react-icons/fa';
import {customer1,customer2,customer3} from '../assets/index';
import {useEffect,useRef,useState} from 'react';
import {motion} from 'framer-motion'

const Review = () => {

    const revsDetails = [
            {
                'id':1,
                revP:"Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.",
                revImg:customer1,
                revName:'Larry Potter',
                revLoc:'Mexico',

            },

            {
                'id':2,
                revP:'"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable."',
                revImg:customer2,
                revName:'Ojeyinka feoluwa',
                revLoc:'NIgeria',

            },
            {
                'id':3,
                revP:'"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"',
                revImg:customer3,
                revName:'Larry Potter',
                revLoc:'Mexico',

            },
    ];

    const [width,setWidth] = useState(0);
        const revParent =useRef();

        useEffect(()=> {
                setWidth(revParent.current.scrollWidth - revParent.current.offsetWidth);
        },[]);


  return (
    <div className='review-section'>
        <div className='rev-container'>
            <div className='rev-intro'>
            <h4>Reviewed by People</h4>
             <h1>Client's Testimonials</h1>
             <p>
            Discover the positive impact we've made on
            the our clients by reading through their testimonials. 
            Our clients have experienced our service and results, 
            and they're eager to share their positive experiences with you.
            </p>

            </div>


            <motion.div className='rev-parent' ref={revParent}>
       
         <motion.div className='rev-boxes' drag="x" dragConstraints={{right:0,left: -width}}>

           


            {revsDetails.map((revDetails) =>
            
            <motion.div className='rev-box rev-box-1 drop-shadow-xl'>
                <div className='top'>
                    <p>{revDetails.revP}</p>

                </div>

                <div className='bottom'>
                    <div className='rev-pro'>
                        <div className='left-pro'>
                        <img src={revDetails.revImg}/>
                        <span>
                        <h3 className='pro-name'>{revDetails.revName}</h3>
                            <h3>{revDetails.revLoc}</h3>
                        </span>

                        </div>
                        
                    </div>

                    <FaQuoteRight size={50} style={{color:'var(--primary-color)'}}/>

                </div>

            </motion.div>
            
            )}


         </motion.div>
         </motion.div>


    </div>
    </div>
  )
}

export default Review