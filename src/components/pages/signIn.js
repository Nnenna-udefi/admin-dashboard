import React from 'react'
import {Link} from 'react-router-dom'
import '../css/sign.css'

const signIn = () => {
  return (
    <div className='form'>
        <h1 className='sign-title'>Sign In</h1>
        <form className='form'>
            <input type='email' placeholder ='Email Address' name='email'/>
            <input type='password' placeholder ='Password' name='password'/>
            <button className='sign-button'>Sign In</button>
            <div className='para'>
              <p>Forgot Your password?</p>
            <p>Don't have an account?</p>
            </div>
            <button className='signin-button'>
            <Link to='./signUp' className='link'>Create new account</Link> </button>
        </form>
    </div>
  )
}

export default signIn