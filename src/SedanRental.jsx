import React from "react";
import "./SedanRental.css";

const cars = [
  {
    name: "Honda Civic",
    price: 1500,
    desc: "Better Fuel Economy",
    image: "/HondaCivic.jpeg",
  },
  {
    name: "Honda Amez",
    price: 2000,
    desc: "Automatic transmission",
    image: "/HondaAmez.jpeg",
  },
  {
    name: "Tata Tigor",
    price: 2500,
    desc: "Manual & Electric",
    image: "/TataTigor.jpeg",
  },
  {
    name: "Hyundai Verna",
    price: 2800,
    desc: "Better Mileage",
    image: "/HyundaiVerna.jpeg",
  },
  {
    name: "Mariti Ciaz",
    price: 1800,
    desc: "Available CNG Engines",
    image: "/MarutiCiaz.jpeg",
  },
  {
    name: "Honda City",
    price: 2300,
    desc: "Automatic Climate Control",
    image: "/Honda City.jpeg",
  },
];

const SedanRental = () => {
  return (
    <div className="container">
      <h1 className="heading">Sedan Rentals</h1>
      <p className="subtitle">Smooth Drives with Style & Comfort.</p>

      <div className="car-grid">
        {cars.map((car, index) => (
          <div className="card" key={index}>
            <img src={car.image} alt={car.name} />
            <h2><b>{car.name}</b></h2>
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