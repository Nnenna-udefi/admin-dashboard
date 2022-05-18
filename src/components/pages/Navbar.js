import React from 'react'
// import {Link} from 'react-router-dom'
import { HashLink as Link} from 'react-router-hash-link'
// import { BrowserRouter } from 'react-router-dom';
import '../../css/navbar.css'


const Navbar = () => {
  return (
    
    <div className='navbar'>
      <h2>HAULK</h2>
        
        <ul className='Nav-list'>
            
            <li className='nav-link'>
            <Link to='#about' smooth className='about-link'>About Us</Link>
            </li>
            
        </ul>

        <div>

        <button className='signin-btn'><Link to='./signIn' className='links'>Sign In</Link></button>
        
        </div>
        </div>

       
  )
}

export default Navbar