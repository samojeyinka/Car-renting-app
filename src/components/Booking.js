import React from 'react';
import '../styles/BookingStyles.css';
import BookingImg from "../assets/Book-images/book-bg.png";
import {FaCar,FaCalendarAlt,FaSearchLocation} from 'react-icons/fa'

const Booking = () => {
  return (
    <section className='booking-section drop-shadow-xl max-w-[1920px]'>
    
        <div className='booking-card'>
          <div className='booking-phase'>
          <h2>Book a car</h2>
        
        <form className='form'>
          <div className='form-phase'>

            <div className='input'>
              <label> <FaCar size={20} style={{color:'var(--primary-color)'}}/> Select Your Car Type <span>*</span></label>
              <select className='select'>
              <option value='Select your car type'>Select your car type</option>
              <option value='Audi Q8 e-tron'>Audi Q8 e-tron</option>
              <option value='BMW 5 Series'>BMW 5 Series</option>
              <option value='Mercedes-Benz CLA'>Mercedes-Benz CLA</option>
              <option value='Toyota GR Supra'>Toyota GR Supra</option>
              <option value='Ford Mustang'>Ford Mustang</option>
              <option value='Lexus 2018'>Lexus 2018</option>

              </select>
            </div>

            <div className='input'>

            <label><FaCalendarAlt size={20} style={{color:'var(--primary-color)'}}/>Pick-up Date<span>*</span></label>
            <input type='date' className='select'/>

            </div>
          
          </div>

          <div className='form-phase'>

            <div className='input'>
              <label> <FaSearchLocation size={20} style={{color:'var(--primary-color)'}}/> Pick-up <span>*</span></label>
              <select className='select'>
              <option value='Select your car type'>Select pick up location</option>
              <option value='Audi Q8 e-tron'>Ikeja-Lagos</option>
              <option value='BMW 5 Series'>Osogbo-Osogbo</option>
              <option value='Mercedes-Benz CLA'>Oyo-Ibadan</option>
              <option value='Toyota GR Supra'>Ondo-Akure</option>
              <option value='Ford Mustang'>Ogun-Ijebu</option>

              </select>
            </div>

            <div className='input'>

            <label><FaCalendarAlt size={20} style={{color:'var(--primary-color)'}}/>Drop-off Date <span>*</span></label>
            <input type='date' className='select'/>

            </div>
          
          </div>
          <div className='form-phase'>

            <div className='input'>
              <label> <FaSearchLocation size={20} style={{color:'var(--primary-color)'}}/> Drop-off <span>*</span></label>
              <select className='select'>
              <option value='Select your car type'>Select drop off location</option>
              <option value='Audi Q8 e-tron'>Ede - Osun state</option>
              <option value='BMW 5 Series'>Oye - Ekiti state</option>
              <option value='Mercedes-Benz CLA'>Oyo-Ogbomoso</option>
              <option value='Toyota GR Supra'>Delta</option>
              <option value='Ford Mustang'>Festac</option>

              </select>
            </div>

            <div className='input'>

            
            <input type='button' className='select booking-btn' value='Search'/>

            </div>
          
          </div>

        </form>


          </div>


        </div>
    </section>
  )
}

export default Booking