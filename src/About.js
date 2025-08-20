import React from "react";
import { FaCar, FaHeadset, FaClock, FaUserShield } from "react-icons/fa";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      
      {/* Hero Section */}
      <section className="hero">
        <h1>About RENTXCARZ</h1>
        <p>Your trusted partner for hassle-free car rentals...</p>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="card">
          <h2>Our Mission</h2>
          <p>To provide the best quality vehicles...</p>
        </div>
        <div className="card">
          <h2>Our Vision</h2>
          <p>To be the most preferred and trusted car rental brand...</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose Us</h2>
        <div className="features">
          <div className="feature-card">
            <FaCar className="icon" />
            <h3>Premium Vehicles</h3>
            <p>Well-maintained and stylish cars for every need.</p>
          </div>
          <div className="feature-card">
            <FaHeadset className="icon" />
            <h3>24/7 Support</h3>
            <p>Always available to assist you.</p>
          </div>
          <div className="feature-card">
            <FaClock className="icon" />
            <h3>On-Time Delivery</h3>
            <p>Your car will be ready when you need it.</p>
          </div>
          <div className="feature-card">
            <FaUserShield className="icon" />
            <h3>Safe & Secure</h3>
            <p>Your safety is our top priority.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact">
        <h2>Get in Touch</h2>
        <p>📞 +91-9876543210 | 📧 info@rentxcarz.com</p>
        <a href="tel:+919876543210" className="contact-btn">Call Now</a>
      </section>
    </div>
  );
}

export default About;