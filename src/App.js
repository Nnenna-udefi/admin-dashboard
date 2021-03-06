import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/pages/home';
import SignIn from './components/Auth/signIn';
import Navbar from './components/pages/Navbar';
import Product from './components/Dashboard/Products/product';
import Members from './components/Dashboard/Members/member';
import Clients from './components/Dashboard/Clients/client';
import Protectedroute from './components/Protectedroute';






function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />}/>
        </Routes>

      
      
      <Routes>
        <Route element ={<Protectedroute />}>
          <Route path = '/dashboard' element={<Home />} />
            <Route path ='Navbar' element={<Navbar />} />
            <Route path ='/dashboard/product' element={<Product />} />
            <Route path = '/dashboard/clients' element ={<Clients />} />
            <Route path = '/dashboard/members' element ={<Members />} />
         
          </Route>
        </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
