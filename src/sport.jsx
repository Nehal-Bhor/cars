import React from "react";
import { useNavigate } from "react-router-dom";
import "./Styling.css";

import GT63Img from "./GT63Eperf.jpg";
import M2Img from "./M2.jpg";
import M3Img from "./M3.jpg";
import M5Img from "./M5.jpg";
import GTrImg from "./GTR.jpg";

const sportData = [
  {
    name: "GT63 E-performance",
    price: "Rs.2000/hr",
    transmission: "Automatic",
    fuel: "Petrol",
    image: GT63Img,
  },
  {
    name: "BMW M2",
    price: "Rs.1800/hr",
    transmission: "Manual",
    fuel: "Petrol",
    image: M2Img,
  },
  {
    name: "BMW M3",
    price: "Rs.1900/hr",
    transmission: "Automatic",
    fuel: "Petrol",
    image: M3Img,
  },
  {
    name: "BMW M5",
    price: "Rs.2000/hr",
    transmission: "Automatic",
    fuel: "Electric",
    image: M5Img,
  },
  {
    name: "GT-R",
    price: "Rs.800/hr",
    transmission: "Manual",
    fuel: "Petrol",
    image: GTrImg,
  },
];

const sport = () => {
  const navigate = useNavigate();

  return (
    <div className="sport-container">
      <div className="sport-hero">
        <div className="sport-hero-content">
          <h1>SUV</h1>
          <p>
            Conquer every journey with <br />
            style and strength. <br />
            Sport cars offer the perfect balance <br />
            of comfort, space, and power.
          </p>
        </div>
      </div>

      <br />
      <hr />

      <div className="card-grid">
        {sportData.map((car, index) => (
          <div className="sport-card" key={index}>
            <img className="box" src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
            <p className="price">{car.price}</p>
            <p className="details">
              {car.transmission}, {car.fuel}
            </p>

            <button
              className="book-btn"
              onClick={() =>
                navigate("/carinfo", {
                  state: {
                    car: car.name,
                    imageUrl: car.image,
                  },
                })
              }
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default sport;