// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // added useNavigate
// import './Login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate(); // initialized navigate

//   const handleLogin = () => {
//     const users = JSON.parse(localStorage.getItem('users')) || [];
//     const user = users.find((u) => u.email === email && u.password === password);

//     if (user) {
//       setMessage('Login successful!');

//       setTimeout(() => {
//         navigate('/home'); // Navigates to Home
//       }, 1000);
//     } else {
//       setMessage('User not exist or invalid credentials.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="left-panel">
//         <div className="welcome-box">
//           <h2>Welcome to <span>RentXCarz</span></h2>
//           <p>Unlock your ride with comfort, style, and confidence.</p>
//           <p>Drive the difference – wherever the road takes you.</p>
//         </div>
//       </div>

//       <div className="right-panel">
//         <div className="form-box">
//           <h2>Login your Account</h2>
//           <p className='text'>Since this is your first trip, you’ll need to provide us with some information before you can check out.</p>

//           <input type="email" placeholder="Email Id" value={email} onChange={(e) => setEmail(e.target.value)} />
//           <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

//           <button className="login-btn" onClick={handleLogin}>Login</button>

//           <div className="options">
//             <span>Login with Phone instead</span>
//             <span>Forgot password?</span>
//           </div>

//           <p className="signup-text">
//             <strong>New member? <Link to="/signup" className="signup-link">Sign up</Link></strong>
//           </p>

//           {message && <p className="message">{message}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;














import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/log/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Login successful!');
        setTimeout(() => {
          navigate('/home');  // Redirect after login
        }, 1000);
      } else {
        setMessage(data.message || 'Invalid credentials.');
      }
    } catch (error) {
      setMessage('Error connecting to server.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="left-panel">
        <div className="welcome-box">
          <h2>Welcome to <span>RentXCarz</span></h2>
          <p>Unlock your ride with comfort, style, and confidence.</p>
          <p>Drive the difference - wherever the road takes you.</p>
        </div>
      </div>

      <div className="right-panel">
        <div className="form-box">
          <h2>Login to your Account</h2>
          <p className="text">
            Since this is your first trip, you’ll need to provide us with some information before you can check out.
          </p>

          <input
            type="email"
            placeholder="Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>

          <div className="options">
            <span>Login with Phone instead</span>
            <span>Forgot password?</span>
          </div>

          <p className="signup-text">
            <strong>
              New member? <Link to="/signup" className="signup-link">Sign up</Link>
            </strong>
          </p>

          {message && <p className="message">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
