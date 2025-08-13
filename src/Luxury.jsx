import React from "react";
import { useNavigate } from "react-router-dom";
import "./Styling.css";

import cClassImg from "./c-class.webp";
import eClassImg from "./e-class.jpeg";
import camryImg from "./camry.jpeg";
import BMWseries from "./7series.webp";
import Lexus from "./Lexus.webp";
import Maybach from "./Maybach.jpg";

const luxData = [
  {
    name: "C-Class",
    price: "Rs.2000/hr",
    transmission: "Automatic",
    fuel: "Petrol",
    image: cClassImg,
  },
  {
    name: "E-class",
    price: "Rs.1800/hr",
    transmission: "Manual",
    fuel: "Petrol",
    image: eClassImg,
  },
  {
    name: "Toyota Camry",
    price: "Rs.1500/hr",
    transmission: "Automatic",
    fuel: "Petrol",
    image: camryImg,
  },
  {
    name: "BMW 7-series",
    price: "Rs.1900/hr",
    transmission: "Automatic",
    fuel: "Electric",
    image: BMWseries,
  },
  {
    name: "Lexus LS",
    price: "Rs.1800/hr",
    transmission: "Manual",
    fuel: "Petrol",
    image: Lexus,
  },
  {
    name: "Maybach S600",
    price: "Rs.2400/hr",
    transmission: "Automatic",
    fuel: "Petrol",
    image: Maybach,
  },
];

const Lux = () => {
  const navigate = useNavigate();

  return (
    <div className="lux-container">
      <div className="lux-hero">
        <div className="lux-hero-content">
          <h1>Luxury</h1>
          <p>
            Conquer every journey with <br />
            style and strength. <br />
            High end luxuries offer the perfect blend <br />
            of comfort, space, and power.
          </p>
        </div>
      </div>

      <br />
      <hr />

      <div className="card-grid">
        {luxData.map((car, index) => (
          <div className="lux-card" key={index}>
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

export default Luxury;