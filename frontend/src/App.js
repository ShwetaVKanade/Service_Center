import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Service';
import Navbar from './Components/Navbar';
import Contact from './Components/contact';
import Login from './Components/LoginForm';
import Register from './Components/Register';
import ForgotPassword from './Components/ForgotPassword';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  // Check if a username exists in localStorage when the app mounts
  useEffect(() => {
    const storedUser = localStorage.getItem('userName');
    if (storedUser) {
      setIsAuthenticated(true);
      setUserName(storedUser);
    }
  }, []);

  return (
    <>
      {/* Render Navbar only when the user is authenticated */}
      {isAuthenticated && <Navbar userName={userName} setIsAuthenticated={setIsAuthenticated} setUserName={setUserName} />}

      <Routes>
        {/* Login page is the default route */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/home" />
            ) : (
              <Login setIsAuthenticated={setIsAuthenticated} setUserName={setUserName} />
            )
          }
        />

        {/* Other routes require authentication */}
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
        <Route path="/about" element={isAuthenticated ? <About /> : <Navigate to="/" />} />
        <Route path="/services" element={isAuthenticated ? <Services /> : <Navigate to="/" />} />
        <Route path="/contact" element={isAuthenticated ? <Contact /> : <Navigate to="/" />} />
        <Route path="/register" element={isAuthenticated ? <Register /> : <Navigate to="/" />} />
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
      </Routes>
    </>
  );
};

export default App;
