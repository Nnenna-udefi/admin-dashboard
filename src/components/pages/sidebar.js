import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import '../../css/navbar.css';
import { FaHome, FaUsers, FaSignOutAlt,FaShoppingCart } from "react-icons/fa";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false)
  //create a custom function that will change sidebar state from false to true and true to false
  const showSidebar = () => {
    sidebar ? setSidebar(false) : setSidebar(true)
    // setSidebar(!sidebar)
  };
  
  return (
    <div className='sidebar'>
      <div>
      <div className={sidebar ? 'logo' : 'big-logo'}> 
      
      </div>

        <div className='menu-icon' onClick={showSidebar}>
          {sidebar ? (<button className="w3-button w3-teal w3-xlarge">☰</button>) : (<button className="w3-bar-item w3-large">&times;</button>)}

        </div>
      
      </div>
     
    <div >

      <h2 className='header'>HAULK</h2>
      <h3>Welcome back</h3>
      
      <ul className='dash-list'>
          <li className='dash-link'>
          <FaHome className='fa'/>
          <Link to='/dashboard' className='links'>Home</Link>
          </li>
          <li className='dash-link'>
          <FaUsers className='fa'/>
          <Link to='/dashboard/members' className='links'>Members</Link>
          </li>
          <li className='dash-link'>
          <FaUsers className='fa' />
          <Link to='/dashboard/clients' className='links'>Clients</Link>
          </li>
          <li className='dash-link'>
          <FaShoppingCart className='fa'/>
          <Link to='/dashboard/product' className='links'>Products</Link>
          </li>
          <li className='dash-links'>
          <FaSignOutAlt className='fa'/>
            <Link to='/' className='links'>LogOut</Link>
          </li>
      </ul>
      </div>
      </div>
  )
}

export default Sidebar