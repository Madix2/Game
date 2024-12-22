import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './components/auth/login';
import Register from './components/auth/register';

const App = () => {
  <BrowserRouter>
      <Link to="/login"><button>Login</button></Link>
      <h1>Hello world</h1>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>

};


export default App;
