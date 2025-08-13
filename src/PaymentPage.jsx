import React, { useState } from "react";
import "./PaymentPage.css";
import { FaUserCircle } from "react-icons/fa";
import { MdPhoneIphone, MdCreditCard, MdAccountBalance } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function UPIPaymentPage() {
  const [selectedBank, setSelectedBank] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

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
            <span>Net Banking<br /><small>Direct bank transfer</small></span>
          </div>
          
        </div>

        <label htmlFor="bank" className="label">Select Bank</label>
        <select id="bank" className="input" value={selectedBank} onChange={(e) => setSelectedBank(e.target.value)}>
          <option value="">--Select your bank--</option>
          <option value="hdfc">HDFC Bank</option>
          <option value="sbi">State Bank of India</option>
          <option value="icici">ICICI Bank</option>
          <option value="axis">Axis Bank</option>
        </select>

        <button className="btn primary">Proceed to Net Banking</button>
        <button className="btn">PLACE ORDER</button>

        <p className="note">
          You will be redirected to your bank’s secure website to complete the payment.
        </p>
      </div>
    </div>
  );
}

export default UPIPaymentPage;