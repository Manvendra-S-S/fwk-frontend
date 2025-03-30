import React, { useState } from "react";
import SignUp from "../signUp/SignUp";

const LoginModal = () => {
  // State to store email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle login
  const handleLogin = async () => {
    const loginData = { email, password };

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Login successful!");  // You can redirect the user here
        console.log("User Data:", data);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Invalid credentials");
      }
    } catch (error) {
      setErrorMessage("Server error. Please try again later.");
    }
  };

  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex="-1"
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="loginModalLabel">Login</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Please enter your e-mail and password:</p>
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="form-control mb-2"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#" className="text-muted">Forgot your password?</a>
          </div>
          <div className="modal-footer">
            {/* Display error message */}
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
            <button type="button" className="btn btn-dark w-100" onClick={handleLogin}>
              LOGIN
            </button>
            <p className="mt-2 text-center">
              New customer? <a href="#" data-bs-toggle="modal" data-bs-target="#signUp">Register</a>
            </p>
          </div>
        </div>
      </div>
      <SignUp/>
    </div>
  );
};

export default LoginModal;
