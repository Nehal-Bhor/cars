import React, { useState } from "react";

import "./UPIPaymentPage.css";
import { FaUserCircle } from "react-icons/fa";
import { MdPhoneIphone, MdCreditCard, MdAccountBalance } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";



function PaymentPage() {
  const [upiId, setUpiId] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handlePlaceOrder = () => {
    if (!upiId.trim()) {
      alert("Please enter a valid UPI ID.");
      return;
    }
    navigate("/processing");
  };

  const handleOpenUPI = () => {
    if (!upiId.trim()) {
      alert("Enter UPI ID first");
      return;
    }
    alert("Now open your UPI app to complete the payment");
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


          

          {/* Navigate to Card Payment Page */}
          <div className={`method ${location.pathname === "/card-payment" ? "selected" : ""}`} onClick={() => navigate("/card-payment")}
    style={{ cursor: "pointer" }}>
            <MdCreditCard size={24} />
            <span>Card<br /><small>Credit/Debit Card</small></span>
          </div>

          {/* Stay here for Net Banking */}
          <div className={`method ${location.pathname === "/payment" ? "selected" : ""}`} onClick={() => navigate("/payment")}
    style={{ cursor: "pointer" }}>
            <MdAccountBalance size={24} />
            <span>Net Banking<br /><small>Bank Transfer</small></span>
          </div>
        </div>

                <label htmlFor="upi" className="label">UPI ID</label>
        <input
          type="text"
          id="upi"
          className="input"
          placeholder="yourname@upi"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
        />

       <button className="btn primary" onClick={handleOpenUPI}>Open UPI App</button>
        <button className="btn" onClick={handlePlaceOrder}>PLACE ORDER</button>

        <p className="note">You will be redirected to your bank’s secure website to complete the payment</p>
      </div>
    </div>
  );
}
export default PaymentPage;