import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './components/pages/home';
import SignIn from './components/Auth/signIn'
import SignUp from './components/Auth/signUp';
import Navbar from './components/pages/Navbar';
import Product from './components/pages/product';
// import About from './components/pages/about';
import Dashboard from './components/pages/dashboard';
import Members from './components/Dashboard/Members/member';
import Clients from './components/Dashboard/Clients/client';






function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<SignIn />}/>
     {/* <Route path ='/dashboard' element={<Dashboard /> }/>  */}
      <Route path="*" element={<Navigate to ="/" />} />
        <Route path = '/dashboard' element={<Home />}/>
        
        <Route path="/signUp" element={<SignUp />}/>
        <Route path ='/Navbar' element={<Navbar />} />
        
        {/* <Route path ='/about' element={<About />} /> */}
        <Route path ='/product' element={<Product />} />
        <Route path = '/clients' element ={<Clients />} />
          <Route path = '/members' element ={<Members />} />
        </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
