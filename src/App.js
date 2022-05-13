import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/pages/home';
import SignIn from './components/pages/signIn';
import SignUp from './components/pages/signUp';
import Navbar from './components/pages/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        
        <Route path = '/' element={<Home />}/>
        <Route path="/signIn" element={<SignIn />}/>
        <Route path="/signUp" element={<SignUp />}/>
        <Route path ='/Navbar' element={<Navbar />} />
        </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
