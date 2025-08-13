import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ThankYouPage.css';
import Navbar from './Navbar';

const ThankYouPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirect = setTimeout(() => {
      navigate('/home');
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [navigate]);

  return (
    <div className="thankyou-container">
      <Navbar />

      <div className="thankyou-content">
        <h1 className="thank-left">Thank You</h1>
        <h1 className="thank-right">for booking</h1>

        <p className="tagline">Your ride is confirmed and ready to go!</p>
        <p className="tagline">We hope you have an amazing journey with RentXCarz.</p>
        <p className="tagline">Safe travels, and see you again soon!</p>

        <p className="tagline" style={{ marginTop: '30px', fontWeight: 'bold' }}> Redirecting to Home Page in </p>
        <p className="tagline" style={{ marginTop: '30px', fontWeight: 'bold' }}> {countdown} sec... </p>
        
      </div>
    </div>
  );
};

export default ThankYouPage;
