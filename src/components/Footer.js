import React from "react";
import "../styles/Footer.css"; // Import CSS file

const Footer = () => {
  // Function to Create Order & Trigger Razorpay
  const handlePayment = async () => {
    try {
      // Fetch Order ID from Backend
      const response = await fetch("http://localhost:8080/api/payment/create-order?amount=500", {
        method: "POST",
      });
      const data = await response.json();

      // Razorpay Payment Options
      const options = {
        key: "rzp_test_0cVKUDilsEBrwh",  // Replace with actual Razorpay key
        amount: 500 * 100, // Amount in paise
        currency: "INR",
        name: "Dumroo Shop",
        description: "Purchase from Dumroo",
        order_id: data.orderId, // Order ID from backend
        handler: function (response) {
          alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
        },
        prefill: {
          name: "Manvendra Singh",
          email: "manvendra@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error creating Razorpay order:", error);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Section */}
        <div className="footer-section">
          <h3 className="footer-title">COMPANY</h3>
          <p>T: +91 7838546176</p>
          <p>E: shopdumroo@gmail.com</p>
        </div>

        {/* Policies Section */}
        <div className="footer-section">
          <h3 className="footer-title">POLICIES</h3>
          <ul>
            <li><a href="#">Contact Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3 className="footer-title">FOLLOW US</h3>
          <div className="social-icons">
            <a href="#" className="icon facebook">F</a>
            <a href="#" className="icon instagram">I</a>
          </div>
        </div>
      </div>

      {/* Payment Button */}
      <div className="payment-section">
        <button className="pay-now-btn" onClick={handlePayment}>Pay Now</button>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>Copyright ©2024 <span className="brand">Dumroo</span>. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
