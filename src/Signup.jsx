import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [form, setForm] = useState({ name: '', surname: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const exists = users.some((user) => user.email === form.email);
    if (exists) {
      alert('User already exists');
      return;
    }

    users.push(form);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Signup successful! You can now log in.');
    navigate('/');
  };

  return (
    <div className="signup-container">
      <div className="left-panel">
        <div className="welcome-box">
          <h2>Welcome to <span>RentXCarz</span></h2>
          <p>Adventure begins here – just one sign-up away.</p>
          <p>Book your car. Live your journey.</p>
        </div>
      </div>

      <div className="right-panel">
        <div className="signup-box">
          <h2>Sign up</h2>
          <h4>Create Account</h4>

          <input type="text" name="name" placeholder="Name" onChange={handleChange} />
          <input type="text" name="surname" placeholder="Surname" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} />

          <button className="signup-btn" onClick={handleSignup}>Sign up</button>

          <p className="login-link">
            Already have an account? <Link to="/">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;