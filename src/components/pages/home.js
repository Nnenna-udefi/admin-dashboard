import React from 'react'
// import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import { FaUsers } from "react-icons/fa";
import '../../css/home.css'
import About from '../pages/about'
import Dashboard from '../pages/dashboard'
import Linechart  from '../../components/linechart';




const home = () => {
  return (
  
    <div>

      <Dashboard />

      
      
     <div className='main'>
     <Navbar />
   
      <div className='home'>
        <div className='top-header'>
        <input type="text" placeholder='Welcome, Adrielle' name="name" />
        <FaUsers /><p>Adrielle John</p>
        </div>

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
    <div className='chart'>
     <Linechart />
   </div>


   <About />
    </div>

    

  )
}

export default home