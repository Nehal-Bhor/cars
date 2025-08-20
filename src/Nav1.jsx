// // src/components/Navbar.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Nav1.css'; // Add your custom styles here

// const Nav1 = ({ isBlack }) => {
//   return (
//     <nav className={`navbar ${isBlack ? 'black-navbar' : ''}`}>
//       <div className="navbar-logo">
//         <img src="/ren.png" alt="RentXCarz Logo" />
//       </div>

//       <ul className="navbar-links">
//         <li><Link to="/home">Home</Link></li>
//         <li><Link to="/Categories">Category</Link></li>
//         <li><Link to="/services">Services</Link></li>
//         <li><Link to="/about">About Us</Link></li>
//       </ul>

//       <div className="navbar-auth">
//         <Link to="/login">
//           <button className="auth-btn">Login</button>
//         </Link>
//         <Link to="/signup">
//           <button className="auth-btn signup-btn">Signup</button>
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Nav1;











// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

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

      <div className="navbar-auth">
        <Link to="/login">
          <button className="auth-btn">Login / Signup</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

