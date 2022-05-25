import React from 'react'
import Navbar from './Navbar'
import { FaUsers, FaShoppingCart } from "react-icons/fa";
import '../../css/home.css'
import About from '../pages/about'
import Linechart from '../chart';
import Chart from '../linechart'






const home = () => {



  return (
  
    <div>


     <div className='main'>
     <Navbar />
   
      <div className='home'>
      

        <div className='badge-section'>

          <div className='badge' >
            <FaUsers />
            <p>Total Users</p>
            <p>15</p>
          </div>

          <div className='badge'>
            <FaShoppingCart />
            <p>Total Products</p>
            <p>50</p>
          </div>

          <div className='badge'>
            <FaUsers />
            <p>No of Team Members</p>
            <p>5</p>
          </div>

        </div>


        <div className='chart'>
          <div>
          <h1>No. of Sign Ups Monthly</h1>
          <Linechart /> 
          </div>

          <div>
          <h1>Product Sales</h1>
          <Chart />
          </div>
            
   </div>

      </div>
        
    </div>
    


   <About />
    </div>

    

  )
}

export default home