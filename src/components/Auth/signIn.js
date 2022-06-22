import React from 'react'
import { useEffect, useState } from "react";
import '../../css/sign.css'

const SignIn = () => {
  
    const [formValid, setFormValid] = useState(false)
    const [form, setForm] = useState({
       
        email: "miriamudefi@gmail.com",
        password: "12345"
    });
  
  
    useEffect(()=>{
        if (
           
            form.email !== "" &&
            form.password !== ""
         
        ){
            setFormValid(true)
        } else {
            setFormValid(false)
        }
    }, [ 
        form.email, 
        form.phoneNumber])
  
   
  
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
  
    const submitHandler = (e) => {
        e.preventDefault()
        localStorage.setItem('userDetails', JSON.stringify({...form}))
        
        window.location="/dashboard"
    }
  
    
  return (
    <div className='form-body'>
      <h1 className='sign-title'>Welcome to the Admin Portal</h1>
        <h1 className='sign-title'>Log In</h1>

        <div className='form-center'>
        <form className='form' onSubmit={submitHandler} >
            <input type='email' placeholder ='Email Address' name='email' required onChange={handleChange}/>
            <br />
            <input type='password' placeholder ='Password' name='password' required onChange={handleChange}/>
            <br />
            <div className='para'>
              <input type="checkbox" />
              <p>Remember Me</p>
              
            </div>
            <button className='sign-button'>Log In</button>
        </form>
        </div>
    </div>
  )
}

export default SignIn