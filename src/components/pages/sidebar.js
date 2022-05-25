import React from 'react';
import {Link} from 'react-router-dom';
import '../../css/navbar.css';
import { FaHome, FaUsers, FaSignOutAlt,FaShoppingCart } from "react-icons/fa";

const sidebar = () => {

  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }

  

  // let userDetails = JSON.parse(sessionStorage.getItem("userDetails"))
  return (
    <div className='sidebar' id="sidebar">
<button onclick="w3_close()" class="w3-bar-item w3-large">&times;</button>
      <h2 className='header'>HAULK</h2>
      <h3>Welcome back</h3>
      
      <ul className='dash-list'>
          <li className='dash-link'>
          <Link to='/dashboard' className='links'><FaHome className='fa'/>Home</Link>
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

export default sidebar