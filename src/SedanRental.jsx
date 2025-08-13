import React from "react";
import { useNavigate } from "react-router-dom";
import './SedanRental.css';
// import './HondaAmez.jpeg';
import hondaCivic from "./HondaCivic.jpeg";
import hondaAmez from "./HondaAmez.jpeg";
import tataTigor from "./TataTigor.jpeg";
import hyundaiVerna from "./HyundaiVerna.jpeg";
import marutiCiaz from "./MarutiCiaz.jpeg";
import hondaCity from "./HondaCity.jpeg";

//cars che cards
const sedanData = [
  {
    name: "Honda Civic",
    price: 1500,
    desc: "Better Fuel Economy",
    image: hondaCivic,
  },
  {
    name: "Honda Amez",
    price: 1000,
    desc: "Automatic transmission",
    image: hondaAmez,
  },
  {
    name: "Tata Tigor",
    price: 1000,
    desc: "Manual & Electric",
    image: tataTigor,
  },
  {
    name: "Hyundai Verna",
    price: 1000,
    desc: "Better Mileage",
    image: hyundaiVerna,
  },
  {
    name: "Maruti Ciaz",
    price: 1000,
    desc: "Available CNG Engines",
    image: marutiCiaz,
  },
  {
    name: "Honda City",
    price: 1300,
    desc: "Automatic Climate Control",
    image: hondaCity,
  },
];

const SedanRental = () => {
  const navigate = useNavigate();

  return (
    <div className="sedan-container">
      <div className="sedan-hero">
        <div className="sedan-hero-content">
          <h1>SEDAN</h1>
           <p className="subtitle">Smooth Drives with Style & Comfort.</p>
        </div>
      </div>

      <br />
      <hr />

      <div className="card-grid">
        {sedanData.map((car, index) => (
          <div className="sedan-card" key={index}>
            <img className="box" src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
             <p className="price">Rs.{car.price}/hr</p>
            <p className="desc">{car.desc}</p>
            <button className="book-btn">BOOK NOW</button>

           
          </div>
        ))}
      </div>
    </div>
  );
};

export default SedanRental;