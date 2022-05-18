import React from 'react'
//navigate anybody who tries to bypass the dashboard
import {Navigate, Outlet} from 'react-router-dom'
//if the person signs up you add userDetails
const userAuth = () =>{
    let userDetails = JSON.parse(sessionStorage.getItem("userDetails"))
return userDetails
}
const Protectedroute = () => {
  //call the function isAuth
  const isAuth = userAuth()
  //outlet gives a person access
  //:  tenary operator which means else direct the person to home
return isAuth ? <Outlet /> : <Navigate to= '/home' />
}

export default Protectedroute