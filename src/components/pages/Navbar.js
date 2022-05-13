import React from 'react'
import {Link} from 'react-router-dom'
import '../css/navbar.css'
import { FaHome, FaUsers, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='sidebar'>
      <header>HAULK</header>
        
        <ul className='Nav-list'>
            <li className='nav-link'>
            <Link to='./home' className='links'><FaHome className='fa'/>Home</Link>
            </li>
            <li className='nav-link'>
            <Link to='./signIn' className='links'><FaUsers className='fa'/>Clients</Link>
            </li>
            <li className='nav-link'>
            <Link to='./signIn' className='links'><FaUsers className='fa'/>User</Link>
            </li>
            <li className='nav-link'>
            <Link to='./signIn' className='links'><FaShoppingCart className='fa'/>Products</Link>
            </li>
            <li className='nav-links'>
              <Link to='./signIn' className='links'><FaSignOutAlt className='fa'/>LogOut</Link>
            </li>
        </ul>
        </div>
  )
}

export default Navbar