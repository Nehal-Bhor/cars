import React from 'react';
import './HomePage.css';
import Nav1 from './Nav1.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate('/categories');
  };

  return (
    <div className="homepage">
      
      <Nav1 />

     
      
    <section className="homepage-section">
      {/* Hero Section */}
      <div className="hero">
          <video
        className="hero-video"
        src="/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="video-fade-bottom"></div>
      </div>

      {/* Process */}
      <div className="process">
        <div className="process-content">
          <h2 className="section-title">Let's get you moving!</h2>
          <p>Renting a car has now become simple. Want to know how? We got you!</p>
          <div className="arrow">
          <img src="/arrow.png" alt="Arrow" className="imgarrow"/>
          </div>
          <div className="steps">
            <div className="step-card">
              <h3>Step 1</h3>
              <ul>
                <li>Pick a category of your choice.</li><br/>
                <li>Select a car from that category.</li>
              </ul>
              
            </div>
            <img src="/a2.png" alt="Arrow" className="img1"/>
            <div className="step-card">
              <h3>Step 2</h3>
              <ul>
                <li>Enter details shown on screen.</li><br/>
                <li>Pick a date and select time slots.</li>
              </ul>
            </div>
            <img src="/a2.png" alt="Arrow" className="img2"/>
            <div className="step-card">
              <h3>Step 3</h3>
              <ul>
                <li className='li1'>Choose a payment method</li><br/>
                <li>Enter details and make a payment.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <hr></hr>
      {/* Why Choose Us */}
      <div className="why-choose">
        <h2>Why choose us?</h2>
        <div className="why-content">
          <h3>Drive Your Journey with RentXCarz</h3>
          <p>
            Discover hassle‑free car rentals at unbeatable prices. Whether it’s
            a weekend getaway or a business trip, RentXCarz has the perfect ride for you.
          </p>
          <p>
            Easy booking, reliable service, and a wide range of vehicles — all just a click away.
          </p>
          <p className="cta-tagline">Book Now. Ride Easy.</p>
        </div>
      </div>

    </section>

    <div className="cta">
      <img src="/back-car.jpg" alt="Photo" className='background' />
        <div className="cta-box">
          <h2>Choose a category</h2>
          <p>Skip the hassle.</p>
          <p> Start your journey with ease.</p><br/>
          <button className="cta-button" onClick={handleCategoryClick}>Pick a category</button>
        </div>
      </div>

    {/* Footer */}
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src="/ren.png" alt="RentXCarz logo" className="footer-logo" />
          <p>Fast. Reliable. Affordable car rentals across your city.</p>
          <div className="social-icons">
            <a href="#" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h4>Account</h4>
            <a href="#">Profile</a>
            <a href="#">Setting</a>
            <a href="#">Billing</a>
            <a href="#">Notifications</a>
          </div>
          <div>
            <h4>About</h4>
            <a href="#">Services</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#">Community</a>
            <a href="#">Help Center</a>
            <a href="#">Support</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 RentXCarz All rights reserve By RentXCarz &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Terms & Conditions · Privacy Policy · Cookies</p>
      </div>
    </footer>
    </div>

  );
};

export default HomePage;

