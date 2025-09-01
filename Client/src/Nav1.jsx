
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css'; 

const Navbar = ({ isBlack }) => {
  return (
    <nav className={`navbar ${isBlack ? 'black-navbar' : ''}`}>
      <div className="navbar-logo">
        <img src="/ren.png" alt="RentXCarz Logo" />
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Categories">Category</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/About">About Us</Link></li>
      </ul>

      <div className="navbar-auth">
        <Link to="/login">
          <button className="auth-btn">Login / Signup</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

