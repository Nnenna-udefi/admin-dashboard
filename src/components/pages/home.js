import React from 'react'
// import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import { FaUsers } from "react-icons/fa";
import '../../css/home.css'
import About from '../pages/about'
// import Dashboard from '../pages/dashboard';
// import Linechart from '../Linechart';
// import Chart from 'charts.js/auto';





const home = () => {

//   const data ={
//     labels: [
//         'Jan', 'Feb', 'March', 'April', 'May' ],
//         datasets: [
//            { 
//              label: 'No of Signups (M)',
//             data: [3, 2, 2, 1, 5],
//             borderColor: ['rgba(255, 206, 86, 0.2)'],
//             backgroundColor: ['rgba(255, 206, 86, 0.2)'],
//             pointBackgroundColor: ['rgba(255, 206, 86, 0.2)']
//         }
//         ]
// };

  return (
  
    <div>

      {/* <Dashboard /> */}

     <div className='main'>
     <Navbar />
   
      <div className='home'>
      

        <div className='badge-section'>

          <div className='badge'>
            <FaUsers />
            <p>Total Users</p>
            <p>15</p>
          </div>

          <div className='badge'>
            <FaUsers />
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
          <h1>No. of Sign Ups Monthly</h1>
          {/* <Linechart />    */}
   </div>

      </div>
        
    </div>
    


   <About />
    </div>

    

  )
}

export default home