// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add your custom styles here
import { FaUserCircle } from "react-icons/fa";




const Navbar = ({ isBlack }) => {
  return (
    <nav className={`navbar ${isBlack ? 'black-navbar' : ''}`}>
      <div className="navbar-logo">
        <img src="/ren.png" alt="RentXCarz Logo" />
      </div>

      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/Categories">Category</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>

      <div className="navbar-profile">
        <Link to="/"><FaUserCircle className="user-icon"/></Link>
      </div>
    </nav>
  );
};

export default Navbar;
