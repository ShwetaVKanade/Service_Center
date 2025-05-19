import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ userName, setIsAuthenticated, setUserName }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userName');
    setIsAuthenticated(false);
    setUserName('');
    navigate('/');
  };

  // Function to close navbar collapse after clicking a link
  const closeNavbar = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarSupportedContent');

    if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar shadow">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center text-black" to="/home">
          <img src="./image.png" alt="Logo" height="70" className="d-inline-block align-top" />
          <span className=" fw-bold"> Shree Sai Refrigeration</span>
        </Link>

        {/* Navbar Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 fw-bold">
            <li className="nav-item">
              <Link className="nav-link text-black" to="/home" onClick={closeNavbar}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" to="/about" onClick={closeNavbar}>About</Link>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle fw-bold"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/services" onClick={closeNavbar}>Refrigeration Repair</Link></li>
                <li><Link className="dropdown-item" to="/services" onClick={closeNavbar}>AC Repair</Link></li>
                <li><Link className="dropdown-item" to="/services" onClick={closeNavbar}>Microwave Repair</Link></li>
                <li><Link className="dropdown-item" to="/services" onClick={closeNavbar}>Washing Machine Repair</Link></li>
                <li><Link className="dropdown-item" to="/services" onClick={closeNavbar}>Dishwasher Repair</Link></li>
                <li><Link className="dropdown-item" to="/services" onClick={closeNavbar}>Acqaguard Service</Link></li>
                <li><Link className="dropdown-item" to="/services" onClick={closeNavbar}>Geyser Service</Link></li>
                <li><Link className="dropdown-item" to="/services" onClick={closeNavbar}>Dishwasher Repair</Link></li>
                <li><Link className="dropdown-item" to="/services" onClick={closeNavbar}>Chimney Service</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" to="/contact" onClick={closeNavbar}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Styles */}
     <style>
  {`
    .custom-navbar {
      background-color: #f1ecea !important;
      padding: 10px 0;
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 1000;
    }

    .nav-link {
      font-size: 16px;
      transition: all 0.3s ease-in-out;
      margin: 0 10px;
      margin-left: 30px;
    }

    .nav-link:hover {
      color: rgb(140, 65, 4) !important;
    }

    .dropdown-menu {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      min-width: 220px;
    }

    .btn-danger {
      border-radius: 20px;
      font-size: 14px;
      transition: all 0.3s ease-in-out;
    }

    .btn-danger:hover {
      background-color: #dc3545;
      transform: scale(1.1);
    }

    @media (max-width: 991.98px) {
      .navbar-collapse {
        margin-left: 0;
        padding-left: 10px;
        background-color: #f1ecea;
        padding-bottom: 1rem;
      }

      .nav-item {
        padding-bottom: 10px;
      }

      .dropdown-menu {
        position: static;
        width: 100%;
        margin-left: 0;
        box-shadow: none;
      }

      .navbar-toggler {
        position: absolute;
        right: 10px;
        top: 30px;
        padding: 4px 4px;
      }
    }
  `}
</style>

    </nav>
  );
};

export default Navbar;
