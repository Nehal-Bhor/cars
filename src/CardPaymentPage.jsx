import React from "react";
import "./CardPaymentPage.css";
import { FaUserCircle } from "react-icons/fa";
import { MdPhoneIphone, MdCreditCard, MdAccountBalance } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

 function CardPaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const handlePlaceOrder = () => {
    alert("Processing your card payment...");
  };

  return (
    <div className="payment-container">
      <Navbar />
      <div className="payment-box">
        
        <h2 className="payment-heading">PAYMENT DETAILS</h2>
        <p className="select-method">Select Payment Method</p>

        <div className="payment-methods">
          <div className={`method ${location.pathname === "/upi-payment" ? "selected" : ""}`} onClick={() => navigate("/upi-payment")}
    style={{ cursor: "pointer" }}>
            <MdPhoneIphone size={24} />
            <span>UPI<br /><small>Pay via any UPI app</small></span>
          </div>


          <div className={`method ${location.pathname === "/card-payment" ? "selected" : ""}`} onClick={() => navigate("/card-payment")}
    style={{ cursor: "pointer" }}>
            <MdCreditCard size={24} />
            <span>Card<br /><small>Credit/Debit Card</small></span>
          </div>


          <div className={`method ${location.pathname === "/payment" ? "selected" : ""}`} onClick={() => navigate("/payment")}
    style={{ cursor: "pointer" }}>
            <MdAccountBalance size={24} />
            <span>Net Banking<br /><small>Bank Transfer</small></span>
          </div>
        </div>



        <label className="label" htmlFor="card-number">Card Number</label>
        <input id="card-number" type="text" className="input bg-white" placeholder="---- ---- ---- ----" />

        <div className="row">
          <div className="col">
            <label className="label" htmlFor="expiry">Expiry Date</label>
            <input id="expiry" type="text" className="input bg-white" placeholder="MM/YY" />
          </div>
          <div className="col">
            <label className="label" htmlFor="cvv">CVV</label>
            <input id="cvv" type="password" className="input bg-white" placeholder="123" />
          </div>
        </div>

        <label className="label" htmlFor="card-name">Name on Card</label>
        <input id="card-name" type="text" className="input bg-white" placeholder="Enter name as on card" />

        <button className="btn" onClick={handlePlaceOrder}>PLACE ORDER</button>

        <p className="note">
          You will be redirected to your bank’s secure website to complete the payment.
        </p>
      </div>
    </div>
  );
}

export default CardPaymentPage;