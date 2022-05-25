import React from 'react'
import { HashLink as Link} from 'react-router-hash-link'
import { FaBell } from 'react-icons/fa'
import Profile from '../../images/profile-img.jpg'
import '../../css/navbar.css'
import '../../css/home.css'
import Sidebar from './sidebar'
import {useState} from 'react'
// import { faBars } from 'react-icons/fa'


const Navbar = () => {

  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <div>
    <div className='navbar'>
      

    <button class="w3-button w3-teal w3-xlarge" onclick="w3_open()">☰</button>
      <h2>HAULK</h2>
        
        <ul className='Nav-list'>
            
            <li className='nav-link'>
            <Link to='#about' smooth className='about-link'>About Us</Link>
            </li>
            
        </ul>

        </div>

        <div className='top-header'>
        <input type="text" placeholder='Welcome, Adrielle' name="name" className='home-input' />
        <FaBell  className="bell"/>
        <img src={Profile} alt="" className='profile-img'/>
       
        </div>
        </div>

       
  )
}

export default Navbar