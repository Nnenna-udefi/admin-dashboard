import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './components/pages/home';
import SignIn from './components/Auth/signIn';
import Navbar from './components/pages/Navbar';
import Product from './components/pages/product';
import Dashboard from './components/pages/dashboard';
import Members from './components/Dashboard/Members/member';
import Clients from './components/Dashboard/Clients/client';
import Protectedroute from './components/Protectedroute';






function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<SignIn />}/>
      <Route element ={<Protectedroute />}>
          <Route path ='/dash' element={<Dashboard /> }/> 
          <Route path = '/dashboard' element={<Home />}/>
          <Route path ='/Navbar' element={<Navbar />} />
          <Route path ='/product' element={<Product />} />
          <Route path = '/clients' element ={<Clients />} />
          <Route path = '/members' element ={<Members />} />
      </Route>
        </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
