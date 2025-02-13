import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './admin/css/style.css';

import './admin/charts/ChartjsConfig';

// Import pages
import Dashboard from './admin/pages/Dashboard';
import Container from './Components/Container';
import Register from './Components/Register';
import Login from './Components/Login';
import Cart from './Components/Cart';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  let adminPanel=()=>{
    return <Dashboard/>
  }

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Container />} />
        <Route exact path="/admin" element={adminPanel()} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/cart" element={<Cart/>} />


      </Routes>
    </>
  );
}

export default App;
