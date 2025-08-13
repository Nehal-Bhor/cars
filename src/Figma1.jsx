
import React from "react";
import "./Figma1.css";

const cars = [
  {
    name: "Alto",
    price: "₹500",
    timeUnit: "Per Hour",
    fuel: "Petrol",
    transmission: "Manual",
    image:
      "https://stimg.cardekho.com/images/car-images/930x620/Maruti/Alto-800/7075/1631178079297/223_Superior-White-New_e3e3e3.jpg?tr=w-898",
  },
  {
    name: "Swift",
    price: "₹600",
    timeUnit: "Per Hour",
    fuel: "Diesel",
    transmission: "Manual",
    image:
      "https://resource.digitaldealer.com.au/image/362530902626a103eda571451029586_0_0.png",
  },
  {
    name: "Baleno",
    price: "₹800",
    timeUnit: "Per Hour",
    fuel: "Petrol",
    transmission: "Manual",
    image:
      "https://4.imimg.com/data4/LL/LL/GLADMIN-/https-marutistoragenew-blob-core-windows-net-nexaexperience-img-front-1000x1000.png",
  },
  {
    name: "Dzire",
    price: "₹800",
    timeUnit: "Per Hour",
    fuel: "Diesel",
    transmission: "Automatic",
    image:
      "https://shivamautozone.com/wp-content/uploads/2023/12/Dzire-black.png",
  },
  {
    name: "Ignis",
    price: "₹500",
    timeUnit: "For A Day",
    fuel: "Petrol",
    transmission: "Manual",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.u-O44aOmLyddDn9JG-cSZQHaD3?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Wagonr",
    price: "₹500",
    timeUnit: "For A Day",
    fuel: "CNG",
    transmission: "Automatic",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.HBh9LFOjJZA5wwTrLq4XAQHaEh?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

const Figma1 = () => {
  return (
    <div className="container">
      <header>
        <button className="back-btn">←</button>
        <h1>Budget Rentals</h1>
      </header>

      <main className="cards">
        {cars.map((car, index) => (
          <div className="card" key={index}>
            <img src={car.image} alt={car.name} />
            <div className="info">
              <p>
                <strong>Name:</strong> {car.name}
              </p>
              <p>{car.timeUnit}: {car.price}</p>
              <p>
                Fuel Type: {car.fuel} / Transmission: {car.transmission}
              </p>
              <button>Book Now</button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Figma1;
