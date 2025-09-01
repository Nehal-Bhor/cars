import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Payr.css';
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



const carPrices = {
  'G-Wagon': 2000,
  'Fortuner': 1500,
  'Defender': 2000,
  'Tata Harrier': 1500,
  'Mahindra Thar': 800,
  'XUV 700': 1000,
  'Toyota Innova Crysta': 800,
  'Range Rover Velar': 2000,
  'Ertiga': 800,
};



const Payr = () => {
  const { state } = useLocation();
  const navigate = useNavigate();


  if (!state) {
    return <h2>No booking data found!</h2>;
  }

  const {
    car,
    pickupLocation,
    dropoffLocation,
    pickupDate,
    dropoffDate,
    pickupTime,
    dropoffTime,
  } = state;

  const rate = carPrices[car] || 1000;

  // Calculate duration in hours (for simplicity, without timezone handling)
  const start = new Date(`${pickupDate}T${pickupTime}`);
  const end = new Date(`${dropoffDate}T${dropoffTime}`);
  const durationInHours = Math.max((end - start) / 36e5, 1); // avoid 0 or negative

  const amount = rate * durationInHours;

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
      <main className="receipt-main">
        <table className="receipt-table">
          <thead>
            <tr>
              <th>Car Selected</th>
              <th>Details</th>
              <th>Price</th>
              <th>Duration</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="car-selected">
                <img
                  src={carData[car]}
                  alt={car}
                />


                <div className="car-name">{car}</div>
              </td>
              <td className="details">
                <div><strong>PICK-UP LOCATION:</strong> {pickupLocation}</div>
                <br />
                <div><strong>DROP-OFF LOCATION:</strong> {dropoffLocation}</div>
                <br />
                <div><strong>PICK-UP:</strong> {pickupDate} {pickupTime}</div>
                <br />
                <div><strong>DROP-OFF:</strong> {dropoffDate} {dropoffTime}</div>
                <br />
              </td>
              <td className="price">Rs.{rate}/hr</td>
              <td className="quantity">{durationInHours.toFixed(1)} hr</td>
              <td className="amount">Rs.{amount.toFixed(0)}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" className="discount-label">Discount:</td>
              <td>Rs.0</td>
            </tr>
            <tr className="total-row">
              <td colSpan="4">TOTAL AMOUNT:</td>
              <td><strong>Rs.{amount.toFixed(0)}</strong></td>
            </tr>
          </tfoot>
        </table>

        <div className="make-payment-btn">
          <button onClick={() => navigate('/payment')}>Make Payment</button>
        </div>
      </main>
    </div>
  );
};

export default Payr;



