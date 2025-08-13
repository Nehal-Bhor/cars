import React, { useRef, useEffect, useState } from 'react';
import car from './car.avif';
import car1 from './car1.jpeg';
import car2 from './car2.jpeg';
import car3 from './car3.jpeg';
import car4 from './car4.avif';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';


function Categories() {
   const navigate = useNavigate();
  const heroRef = useRef();
  const luxuryRef = useRef();
  const sedanRef = useRef();
  const ecoRef = useRef();
  const sedan2Ref = useRef();
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    const sections = [heroRef, luxuryRef, sedanRef, ecoRef, sedan2Ref];
    sections.forEach(ref => ref.current && observer.observe(ref.current));

    return () => {
      sections.forEach(ref => ref.current && observer.unobserve(ref.current));
    };
  }, []);

  return (
   
    <div style={styles.page}>
      <Navbar isBlack={true} />

      <div id="hero" ref={heroRef} style={styles.heroContainer}>
        <img src={car} alt="Car" style={styles.carImage} />
        <div style={styles.overlay}>
          <h1 style={styles.heading}>BUILD BOLD<br />DRIVEN STRONG</h1>
        </div>
        {currentSection === 'hero' && (
          <button style={styles.buttonBottomRight} onClick={() => navigate('/suv')}>Get Started</button>
        )}
      </div>

      <div id="luxury" ref={luxuryRef} style={styles.luxurySection}>
        <img src={car1} alt="Luxury Car" style={styles.luxuryImage} />
        <div style={styles.luxuryOverlay}>
          <h1 style={styles.luxuryText}>MODERN LUXURY<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IS YOURS</h1>
        </div>
        {currentSection === 'luxury' && (
          <button style={styles.buttonBottomRight}>Get Started</button>
        )}
      </div>

      <div id="sedan" ref={sedanRef} style={styles.sportsSection}>
        <img src={car2} alt="Car" style={styles.sportsImage} />
        <div style={styles.sportsOverlay}>
          <h1 style={styles.sportsText}>WHERE POWER<br />MEETS PRECISION</h1>
        </div>
        {currentSection === 'sedan' && (
          <button style={styles.buttonBottomRight}>Get Started</button>
        )}
      </div>

      <div id="eco" ref={ecoRef} style={styles.ecoSection}>
        <img src={car3} alt="Car" style={styles.ecoImage} />
        <div style={styles.ecoOverlay}>
          <h1 style={styles.ecoText}>ECONOMY MEETS<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RELIABILITY</h1>
        </div>
        {currentSection === 'eco' && (
          <button style={styles.buttonBottomRight} onClick={() => navigate('/figma1')}>Get Started</button>

        )}
      </div>

      <div id="sedan2" ref={sedan2Ref} style={styles.sedanSection}>
        <img src={car4} alt="Car" style={styles.sedanImage} />
        <div style={styles.sedanOverlay}>
          <h1 style={styles.sedanText}>DRIVE REFINED<br/>&nbsp;&nbsp;DRIVE SEDAN</h1>
        </div>
        {currentSection === 'sedan2' && (
          <button style={styles.buttonBottomRight} onClick={() => navigate('/sedan')}>Get Started</button>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: 'Jacques Francois',
    backgroundColor: '#000',
    color: '#fff',
    minHeight: '100vh'
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: '#000',
    color: '#fff',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginLeft: '60px'
  },
  navLinks: {
    display: 'flex',
    gap: '25px'
  },
  link: {
    background: 'none',
    border: 'none',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer'
  },
  profile: {
    fontSize: '20px',
    cursor: 'pointer'
  },
  logo1: {
    position: 'absolute',
    top: '10px',
    height: '50px',
    width: '50px',
    borderRadius: '50%',
  },
  heroContainer: {
    position: 'relative',
    textAlign: 'left',
    color: '#fff'
  },
  carImage: {
    width: '100%',
    height: '100%',
    maxHeight: '90vh',
    objectFit: 'cover',
    filter: 'brightness(70%)'
  },
  overlay: {
    position: 'absolute',
    top: '15%',
    left: '2.5%',
    transform: 'translateY(-50%)',
  },
  heading: {
    fontSize: '3.5rem',
    fontWeight: '900',
    lineHeight: '1.3',
    color: '#fff',
    textShadow: '2px 2px 8px rgba(0,0,0,0.7)'
  },
  buttonBottomRight: {
    position: 'absolute',
    bottom: '40px',
    right: '50px',
    padding: '14px 28px',
    fontSize: '18px',
    fontWeight: 'bold',
    backgroundColor: '#000',
    color: '#fff',
    border: '2px solid #fff',
    borderRadius: '10px',
    cursor: 'pointer',
    boxShadow: '0 0 15px rgba(255,255,255,0.4)',
    transition: 'all 0.3s ease'
  },
  luxurySection: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
  },
  luxuryImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(80%)'
  },
  luxuryOverlay: {
    position: 'absolute',
    top: '135px',
    left: '5%',
    transform: 'translateY(-50%)',
  },
  luxuryText: {
    fontSize: '4rem',
    color: '#fff',
    fontWeight: 'bold',
    lineHeight: '1.2',
    textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
  },
  sportsSection: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
  },
  sportsImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(80%)'
  },
  sportsOverlay: {
    position: 'absolute',
    top: '140px',
    left: '40px',
    transform: 'translateY(-50%)'
  },
  sportsText: {
    fontSize: '4rem',
    color: '#fff',
    fontWeight: 'bold',
    lineHeight: '1.2',
    textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
  },
  ecoSection: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
  },
  ecoImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(80%)'
  },
  ecoOverlay: {
    position: 'absolute',
    top: '140px',
    left: '40px',
    transform: 'translateY(-50%)'
  },
  ecoText: {
    fontSize: '4rem',
    color: '#fff',
    fontWeight: 'bold',
    lineHeight: '1.2',
    textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
  },
  sedanSection: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
  },
  sedanImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(80%)'
  },
  sedanOverlay: {
    position: 'absolute',
    top: '140px',
    left: '40px',
    transform: 'translateY(-50%)'
  },
  sedanText: {
    fontSize: '4rem',
    color: '#fff',
    fontWeight: 'bold',
    lineHeight: '1.2',
    textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
  }
};

export default Categories;