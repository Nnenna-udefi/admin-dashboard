import React from 'react'
import '../../css/sign.css'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

const SignUp = () => {
  const [formValid, setFormValid] = useState(false)
  const [form, setForm] = useState({
      name: "",
      country: "",
      address: "",
      email: "",
      phoneNumber: ""
  });

  const [name, setName] = useState("Prudence")

  useEffect(()=>{
      if (
          form.name !== "" &&
          form.country !== "" &&
          form.address !== "" &&
          form.email !== "" &&
          form.phoneNumber !== ""
       
      ){
          setFormValid(true)
      } else {
          setFormValid(false)
      }
  }, [form.name, 
      form.country,
      form.address, 
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
        <h1> Sign Up</h1>
                <form onSubmit={submitHandler} >
                    
                    <input type="text" placeholder=" Name" name="name" onChange={handleChange} />
                    
                    <input type="text" placeholder=" Country" name="country" onChange={handleChange} />
                   
                    <input type="text" required placeholder="Address" name="address" onChange={handleChange} />
             
                    <input type="email" required placeholder="Contact Email" name="email" onChange={handleChange} />
                 
                    <input type="text" required placeholder="Phone Number" name="phoneNumber" onChange={handleChange}/>
                    
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

export default SignUp