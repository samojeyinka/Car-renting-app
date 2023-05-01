import React, { useState } from 'react';
import '../styles/NavbarStyles.css';
import {Link} from 'react-router-dom';
import {Logo} from "../assets/index"
import {FaBars,FaTimes} from 'react-icons/fa'

const Navbar = () => {

    const [click,setClick] =  useState(false);
    const handleClick = () => setClick(!click);

    const openPage  = () => {
        setClick(!click);
    }
  return (
    <div className='header max-w-[1920px]'>

        <Link to="/">
            <img src={Logo} className='logo'/>
        </Link>

        <ul className={click ? 'Nav-menu active' : 'Nav-menu'}>
            <li>
            <Link to="/" onClick={openPage}>Home</Link>
            </li>

            <li>
            <Link to="/about" onClick={openPage}>About</Link>
            </li>

            <li>
            <Link to="/models" onClick={openPage}>Models</Link>
            </li>

            <li>
            <Link to="/testimonials" onClick={openPage}>Testimonials</Link>
            </li>

            <li>
            <Link to="/team" onClick={openPage}>Our Team</Link>
            </li>

            <li>
            <Link to="/contact" onClick={openPage}>Contact</Link>
            </li>

            <div className='nav-btns'>

            <button className='nav-btn sign-in'>Sign In</button>
            <button className='nav-btn register'>Register</button>

        </div>
            
        </ul>

        <div className='openNav' onClick={handleClick}>


            {
                 click ? (<FaTimes size={28} style={{ color:"#000" ,cursor:"pointer"}}/>) :
           ( <FaBars size={28} style={{ color:"#000" ,cursor:"pointer"}}/>)}
            

        </div>

        <div className='nav-btns'>

            <button className='nav-btn sign-in'>Sign In</button>
            <button className='nav-btn register'>Register</button>

        </div>

    </div>
  )
}

export default Navbar