import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import { FaUsers } from "react-icons/fa";
// import { Chart } from 'react-charts'
import '../css/home.css'

const home = () => {
  return (
    <div>
      <Navbar />
      <div className='main'>
        <div className='top-header'>
        <input type="text" placeholder='Welcome, Adrielle' name="name" />
        <FaUsers /><p>Adrielle John</p>
        </div>
      
        <button className='link-btn'><Link to='./signIn' className='links'>Sign In</Link></button>
        <button className='link-btn'><Link to='./signUp'className='links'>Sign Up</Link> </button>

        <div className='badge-section'>

        <div className='badge'>
          <FaUsers />
          <p>Total Users</p>
          <p>15</p>
        </div>

        <div className='badge'>
          <FaUsers />
          <p>Total Products</p>
          <p>15</p>
        </div>
        </div>




      </div>
        
    </div>
  )
}

export default home