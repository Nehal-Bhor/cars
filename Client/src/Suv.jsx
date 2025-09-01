import React from "react";
import { useNavigate } from "react-router-dom";
import "./Suv.css";

//import kele img src madun
import gwagonImg from "./gw2.jpg";
import fortunerImg from "./for2.png";
import defenderImg from "./def1.jpg";
import harrierImg from "./h1.webp";
import tharImg from "./t.jpg";
import xuvImg from "./xuv.webp";
import innovaImg from "./i1.png";
import velarImg from "./rr3.png";
import ertigaImg from "./e2.png";

//cars che cards
const suvData = [
  {
    name: "G-Wagon",
    price: "Rs.2000/hr",
    transmission: "Automatic",
    fuel: "Petrol",
    image: gwagonImg,
  },
  {
    name: "Fortuner",
    price: "Rs.1500/hr",
    transmission: "Manual",
    fuel: "Petrol",
    image: fortunerImg,
  },
  {
    name: "Defender",
    price: "Rs.2000/hr",
    transmission: "Automatic",
    fuel: "Petrol",
    image: defenderImg,
  },
  {
    name: "Tata Harrier",
    price: "Rs.1500/hr",
    transmission: "Automatic",
    fuel: "Electric",
    image: harrierImg,
  },
  {
    name: "Mahindra Thar",
    price: "Rs.800/hr",
    transmission: "Manual",
    fuel: "Petrol",
    image: tharImg,
  },
  {
    name: "XUV 700",
    price: "Rs.1000/hr",
    transmission: "Automatic",
    fuel: "Petrol",
    image: xuvImg,
  },
  {
    name: "Toyota Innova Crysta",
    price: "Rs.800/hr",
    transmission: "Manual",
    fuel: "Petrol",
    image: innovaImg,
  },
  {
    name: "Range Rover Velar",
    price: "Rs.2000/hr",
    transmission: "Automatic",
    fuel: "Petrol",
    image: velarImg,
  },
  {
    name: "Ertiga",
    price: "Rs.800/hr",
    transmission: "Manual",
    fuel: "Petrol",
    image: ertigaImg,
  },
];

const Suv = () => {
  const navigate = useNavigate();

  return (
    <div className="suv-container">
      <div className="suv-hero">
        <div className="suv-hero-content">
          <h1>SUV</h1>
          <p>
            Conquer every journey with <br />
            style and strength. <br />
            SUVs offer the perfect balance <br />
            of comfort, space, and power.
          </p>
        </div>
      </div>

      <br />
      <hr />

      <div className="card-grid">
        {suvData.map((car, index) => (
          <div className="suv-card" key={index}>
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

export default Suv;