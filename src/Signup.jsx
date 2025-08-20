// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Signup.css';

// const Signup = () => {
//   const [form, setForm] = useState({ name: '', surname: '', email: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSignup = () => {
//     const users = JSON.parse(localStorage.getItem('users')) || [];
//     const exists = users.some((user) => user.email === form.email);
//     if (exists) {
//       alert('User already exists');
//       return;
//     }

//     users.push(form);
//     localStorage.setItem('users', JSON.stringify(users));
//     alert('Signup successful! You can now log in.');
//     navigate('/');
//   };

//   return (
//     <div className="signup-container">
//       <div className="left-panel">
//         <div className="welcome-box">
//           <h2>Welcome to <span>RentXCarz</span></h2>
//           <p>Adventure begins here – just one sign-up away.</p>
//           <p>Book your car. Live your journey.</p>
//         </div>
//       </div>

//       <div className="right-panel">
//         <div className="signup-box">
//           <h2>Sign up</h2>
//           <h4>Create Account</h4>

//           <input type="text" name="name" placeholder="Name" onChange={handleChange} />
//           <input type="text" name="surname" placeholder="Surname" onChange={handleChange} />
//           <input type="email" name="email" placeholder="Email" onChange={handleChange} />
//           <input type="password" name="password" placeholder="Password" onChange={handleChange} />

//           <button className="signup-btn" onClick={handleSignup}>Sign up</button>

//           <p className="login-link">
//             Already have an account? <Link to="/">Log in</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;







//ori




// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Signup.css';

// const Signup = () => {
//   const [form, setForm] = useState({ name: '', surname: '', email: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSignup = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/user/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(form)
//       });

//       const data = await res.json();

//       if (res.ok) {
//         alert(data.message || "Signup successful!");
//         navigate('/');
//       } else {
//         alert(data.message || "Signup failed");
//       }
//     } catch (error) {
//       console.error("Error signing up:", error);
//       alert("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="left-panel">
//         <div className="welcome-box">
//           <h2>Welcome to <span>RentXCarz</span></h2>
//           <p>Adventure begins here - just one sign-up away.</p>
//           <p>Book your car. Live your journey.</p>
//         </div>
//       </div>

//       <div className="right-panel">
//         <div className="signup-box">
//           <h2>Sign up</h2>
//           <h4>Create Account</h4>

//           <input type="text" name="name" placeholder="Name" onChange={handleChange} />
//           <input type="text" name="surname" placeholder="Surname" onChange={handleChange} />
//           <input type="email" name="email" placeholder="Email" onChange={handleChange} />
//           <input type="password" name="password" placeholder="Password" onChange={handleChange} />

//           <button className="signup-btn" onClick={handleSignup}>Sign up</button>

//           <p className="login-link">
//             Already have an account? <Link to="/">Log in</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;













// 


















import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle signup
  const handleSignup = async () => {
    if (!form.name || !form.surname || !form.email || !form.password) {
      return setError("All fields are required");
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      return setError("Invalid email format");
    }
    if (form.password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ Backend only returns { message }, no token or user
        alert(data.message || "Signup successful!");
        navigate("/"); // redirect to login or home
      } else {
        setError(data.message || "Signup failed");
      }
    } catch (err) {
      console.error("Error signing up:", err);
      // setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="left-panel">
        <div className="welcome-box">
          <h2>
            Welcome to <span>RentXCarz</span>
          </h2>
          <p>Adventure begins here - just one sign-up away.</p>
          <p>Book your car. Live your journey.</p>
        </div>
      </div>

      <div className="right-panel">
        <div className="signup-box">
          <h2>Sign up</h2>
          <h4>Create Account</h4>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={form.surname}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          {error && <p className="error-text">{error}</p>}

          <button
            className="signup-btn"
            onClick={handleSignup}
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign up"}
          </button>

          <p className="login-link">
            Already have an account? <Link to="/">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;























