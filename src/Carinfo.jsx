import  { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import carlogo from './carlogo.jpeg';
import './Carinfo.css';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";


import gwagonImg from './gw2.jpg';
import fortunerImg from './for2.png';
import defenderImg from './def1.jpg';
import harrierImg from './h1.webp';
import tharImg from './t.jpg';
import xuvImg from './xuv.webp';
import innovaImg from './i1.png';
import velarImg from './rr3.png';
import ertigaImg from './e2.png';

const carData = {
  'G-Wagon': gwagonImg,
  'Fortuner': fortunerImg,
  'Defender': defenderImg,
  'Tata Harrier': harrierImg,
  'Mahindra Thar': tharImg,
  'XUV 700': xuvImg,
  'Toyota Innova Crysta': innovaImg,
  'Range Rover Velar': velarImg,
  'Ertiga': ertigaImg,
};

function Carinfo() {
  const location = useLocation();
  const state = location.state;

  const [formData, setFormData] = useState({
    car: state?.car || 'Fortuner',
    imageUrl: state?.imageUrl || carData[state?.car || 'Fortuner'],
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    dropoffDate: '',
    pickupTime: '',
    dropoffTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'car') {
      setFormData((prev) => ({
        ...prev,
        car: value,
        imageUrl: carData[value],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You booked a ${formData.car}!`);
    console.log(formData);
    navigate('/pay', { state: formData });
  };

  return (
    <div className="container">

<nav className="navbar1">
      <div className="navbar-logo1">
        <img src="/ren.png" alt="RentXCarz Logo" />
     
      </div>

      <ul className="navbar-links1">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/category">Category</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>

      <div className="navbar-profile1">
        <Link to="/"><FaUserCircle className="user-icon"/></Link>
      </div>
    </nav>













      <div className="main-content">
        <div className="car-section">
          <img src={state?.imageUrl} alt={state?.car} className="car-image" />
          <h2 className="car-name">{formData.car}</h2>
        </div>

        <form className="form-section" onSubmit={handleSubmit}>
          <h2 className="form-title">FILL INFORMATION</h2>

          <label>SELECT CAR</label>
          <select name="car" value={formData.car} onChange={handleChange}>
            {Object.keys(carData).map((car) => (
              <option key={car} value={car}>
                {car}
              </option>
            ))}
          </select>

          <label>PICK-UP LOCATION</label>
          <input
            type="text"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            required
          />

          <label>DROP-OFF LOCATION</label>
          <input
            type="text"
            name="dropoffLocation"
            value={formData.dropoffLocation}
            onChange={handleChange}
            required
          />

          <div className="row">
            <div>
              <label>PICK-UP DATE</label>
              <input
                type="date"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>DROP-OFF DATE</label>
              <input
                type="date"
                name="dropoffDate"
                value={formData.dropoffDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row">
            <div>
              <label>PICK-UP TIME</label>
              <input
                type="time"
                name="pickupTime"
                value={formData.pickupTime}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>DROP-OFF TIME</label>
              <input
                type="time"
                name="dropoffTime"
                value={formData.dropoffTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit">BOOK THIS CAR</button>
        </form>
      </div>
    </div>
  );
}

export default Carinfo;




/*<header className="navbar">
        <div className="profile-icon">
          <img src={carlogo} alt="RenXCarz Logo" className="logo-circle" />
        </div>
     
        <div className="navline">
        <nav>
          <a href="/">Home</a>
          <a href="/">Category</a>
          <a href="/">Services</a>
          <a href="/">About Us</a>
            <button className="login-button" onClick={() => navigate('/login')}>
              Login
            </button>
        </nav> 

        
        </div>


        <div className="logo">RentXCarz</div>


      </header>
      */


