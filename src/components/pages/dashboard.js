import React from 'react';
import {Link} from 'react-router-dom';
import '../../css/navbar.css';
import { FaHome, FaUsers, FaSignOutAlt,FaShoppingCart } from "react-icons/fa";

const dashboard = () => {

  

  // let userDetails = JSON.parse(sessionStorage.getItem("userDetails"))
  return (
    <div className='sidebar'>
      <h2 className='header'>HAULK</h2>
      <h3>Welcome back</h3>
      
      <ul className='dash-list'>
          <li className='dash-link'>
          <Link to='/home' className='links'><FaHome className='fa'/>Home</Link>
          </li>
          <li className='dash-link'>
          <Link to='/dashboard/members' className='links'><FaUsers className='fa'/>Members</Link>
          </li>
          <li className='dash-link'>
          <Link to='/dashboard/clients' className='links'><FaUsers className='fa' />Clients</Link>
          </li>
          <li className='dash-link'>
          <Link to='/dashboard/product' className='links'><FaShoppingCart className='fa'/>Products</Link>
          </li>
          <li className='dash-links'>
            <Link to='/' className='links'><FaSignOutAlt className='fa'/>LogOut</Link>
          </li>
      </ul>

      </div>
  )
}

export default dashboard