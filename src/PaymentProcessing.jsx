import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentProcessing.css';
import Navbar from './Navbar';

const PaymentProcessing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/thankyou');
    }, 7000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
  <div className="processing-container">
    <Navbar />
    <h1 className="processing-text">Payment Processing</h1>
    <div className="spinner"></div>

    <p className="tagline">Thank you for your patience.</p>
    <p className="tagline">We're finalizing your transaction securely.</p>
    <p className="tagline">You’ll be redirected shortly.</p>
  </div>
);

};

export default PaymentProcessing;
