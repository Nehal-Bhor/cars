import React from "react";
import "./Services.css";
import { FaCarSide, FaCrown, FaRoute } from "react-icons/fa";
import sport from '../src/suvf.jpg';
import Navbar from "./Navbar";
import suv from '../src/suvf.jpg';

import Thar from '../src/t.jpg';

import TataTigor from '../src/TataTigor.jpeg';

import budget from '../src/suvf.jpg';

export default function Services() {
  const services = [
    {
      title: "Sedan Rentals",
      description: "Comfortable and fuel-efficient sedans perfect for city rides.",
      icon: <FaCarSide />,
      image: Thar
    },
    {
      title: "SUV Rentals",
      description: "Spacious SUVs for family trips and long-distance travel.",
      icon: <FaRoute />,
      image: suv
    },
    {
      title: "Luxury Car Rentals",
      description: "Premium cars for weddings, events, and special occasions.",
      icon: <FaCrown />,
      image: TataTigor
    },
    {
      title: " sports Car Rentals",
      description: "A sports car is high performance.",
      icon: <FaCrown />,
      image: sport
    },
    {
      title: "budget  Car Rentals",
      description: "Premium cars for weddings, events, and special occasions.",
      icon: <FaCrown />,
      image: budget
    },



    
  ];

  return (
          <div className="services-container">

    <Navbar/>
      <h1 className="services-title">Our Services</h1>
      <p className="services-subtitle">
        We provide top-class rental cars with unbeatable prices and exceptional service.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-icon">{service.icon}</div>
            <h2 className="service-heading">{service.title}</h2>
            <p className="service-description">{service.description}</p>
            <button className="service-btn">Book Now</button>
          </div>
        ))}
      </div>
 </div>
);
}