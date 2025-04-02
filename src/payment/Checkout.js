import React from "react";

const Checkout = ({ orderId, amount }) => {
  const loadRazorpay = () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID",  // Replace with your Razorpay key
      amount: amount * 100, // Amount in paise
      currency: "INR",
      name: "Your Business Name",
      description: "Test Transaction",
      order_id: orderId, // Order ID from backend
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
  };

  return (
    <button onClick={loadRazorpay}>
      Pay Now
    </button>
  );
};

export default Checkout;
