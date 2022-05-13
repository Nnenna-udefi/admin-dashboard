import React from 'react'
import '../css/sign.css'

const signUp = () => {
  return (
    <div className='form'>
        <h1> Sign Up</h1>
                <form>
                    
                    <input type="text" placeholder=" Name" name="name" />
                    
                    <input type="text" placeholder=" Country" name="country" />
                   
                    <input type="text" required placeholder="Address" name="address" />
             
                    <input type="email" required placeholder="Contact Email" name="email" />
                 
                    <input type="text" required placeholder="Phone Number" name="phoneNumber" />
                    
                    <div className='checkbox'>
                        <input type="checkbox" />
                        <p >I have read, understood and i agree to the terms and conditions</p>
                    </div>
                    <button className='sign-button'>
                        Sign Up
                    </button>

                </form>
    </div>
  )
}

export default signUp