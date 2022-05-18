import React from 'react'
import {Link} from 'react-router-dom'
import { useEffect, useState } from "react";
import '../../css/sign.css'

const SignIn = () => {
  
    const [formValid, setFormValid] = useState(false)
    const [form, setForm] = useState({
       
        email: "",
        password: ""
    });
  
    const [name, setName] = useState("Prudence")
  
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
        sessionStorage.setItem('userDetails', JSON.stringify({...form}))
        
        window.location="/dashboard"
    }
  
    
  return (
    <div className='form'>
      <h1>Welcome to the admin  portal</h1>
        <h1 className='sign-title'>Sign In</h1>
        <form className='form' onSubmit={submitHandler} >
            <input type='email' placeholder ='Email Address' name='email' onChange={handleChange}/>
            <br />
            <input type='password' placeholder ='Password' name='password' onChange={handleChange}/>
            <br />
            <div className='para'>
              <input type="checkbox" />
              <p>Remember Me</p>
              
            </div>
            <button className='sign-button'>Sign In</button>
        </form>
    </div>
  )
}

export default SignIn