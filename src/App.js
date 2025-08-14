// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './Login';
// import Signup from './Signup';
// import Suv from './Suv';
// import Carinfo from './Carinfo';
// import Payr from './Payr';
// import  { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [msg, setMsg] = useState('');

//   useEffect(() => {
//     axios.get('http://localhost:3000/')
//       .then(res => setMsg(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />

//         <Route path="/suv" element={<Suv />} />
//         <Route path="/carinfo" element={<Carinfo />} />
//         <Route path="/pay" element={<Payr />} />

//         {/* <h1>{msg}</h1>; */}

//         {/* <Route path="/" element={<Carinf />} /> */}

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;




import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import HomePage from './HomePage';
import Suv from './Suv';
import Payr from './Payr';
import Carinfo from './Carinfo';
import PaymentPage from "./PaymentPage";
import CardPaymentPage from "./CardPaymentPage";
import UPIPaymentPage from './UPIPaymentPage';
import Navbar from './Navbar';
import ThankYouPage from './ThankYouPage';
import PaymentProcessing from './PaymentProcessing';
import Categories from './Categories';
import Figma1 from './Figma1';
import Figma2ex from './Figma2ex';
import SedanRental from './SedanRental';
import Luxury from './Luxury';
import About from './About';
import Sports from './Sports';


function App() {
  return (
    <BrowserRouter>
    
      
       <Routes>
      <Route path="/suv" element={<Suv />} />
        <Route path="/carinfo" element={<Carinfo />} />
        <Route path="/pay" element={<Payr />} />

        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} /> 
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/card-payment" element={<CardPaymentPage />} />
        <Route path="/upi-payment" element={<UPIPaymentPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/processing" element={<PaymentProcessing />} /> 
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/figma1" element={<Figma1 />} />
        <Route path="/figma2ex" element={<Figma2ex />} />
        <Route path="/sedan" element={<SedanRental />} />
        <Route path="/about" element={<About />} />


               <Route path="/luxury" element={<Luxury />} />
        <Route path="/sports" element={<Sports />} />

    

      </Routes>
    </BrowserRouter>
  );
}

export default App;