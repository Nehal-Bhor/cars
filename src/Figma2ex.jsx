import React from "react";
import "./Figma2ex.css";

const bookingCars = [
  {
    name: "Swift",
    price: "₹600",
    timeUnit: "Per Hour",
    fuel: "Diesel",
    transmission: "Manual",
    color: "Black",
    engine: "72IE 1.2L, 3-cylinder",
    image:
      "https://resource.digitaldealer.com.au/image/362530902626a103eda571451029586_0_0.png",
  },
  {
    name: "Baleno",
    price: "₹800",
    timeUnit: "Per Hour",
    fuel: "Petrol",
    transmission: "Manual",
    color: "Blue",
    engine: "1.2 L K-Series Petrol (Dual Jet, Dual VVT)",
    image:
      "https://4.imimg.com/data4/LL/LL/GLADMIN-/https-marutistoragenew-blob-core-windows-net-nexaexperience-img-front-1000x1000.png",
  },
];

const Figma2ex = () => {
  return (
    <div className="container">
      <header>
        <h1>BOOKING PROFILE</h1>
      </header>

      <main className="cards">
        {bookingCars.map((car, index) => (
          <div className="card" key={index}>
            <img src={car.image} alt={car.name} />
            <div className="info">
              <p><strong>Name:</strong> {car.name}</p>
              <p>{car.timeUnit}: {car.price}</p>
              <p>Fuel Type: {car.fuel} / Transmission: {car.transmission}</p>
              <p>Colour: {car.color}</p>
              <p>Engine Type: {car.engine}</p>
              <button className="cancel-btn">Cancel Booking</button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Figma2ex;
