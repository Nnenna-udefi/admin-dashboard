import React from 'react'
import { HashLink as Link} from 'react-router-hash-link'
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

        
        </div>

       
  )
}

export default Navbar