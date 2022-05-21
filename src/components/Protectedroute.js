import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

const userAuth = () =>{

  // const user = { loggedin: false };
  // return user && user.loggedin;

  let userDetails = JSON.parse(localStorage.getItem("userDetails"))
  return userDetails
};



// const logout = () => {
//   setAuth(false);
//   Navigate('/')
// }
const Protectedroute = () => {
  // call the function isAuth
  const isAuth = userAuth()
  // outlet gives a person access
  // :  tenary operator which means else direct the person to home
return isAuth ? <Outlet /> : <Navigate to="/" />
}

export default Protectedroute