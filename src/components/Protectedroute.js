import React from 'react'
//navigate anybody who tries to bypass the dashboard
import {Navigate, Outlet} from 'react-router-dom'
// import SignIn from './Auth/signIn';
//if the person signs up you add userDetails
const userAuth = () =>{

  const user = { loggedin: false };
  return user && user.loggedin;
};
//   setAuth(true);
//   Navigate ('/dashboard');

//     let userDetails = JSON.parse(sessionStorage.getItem("userDetails"))
// return userDetails
// }

// const logout = () => {
//   setAuth(false);
//   Navigate('/')
// }
const Protectedroute = () => {
  // call the function isAuth
  const isAuth = userAuth()
  // outlet gives a person access
  // :  tenary operator which means else direct the person to home
return isAuth ? <Outlet /> : <Navigate to="/dashboard" />
}

export default Protectedroute