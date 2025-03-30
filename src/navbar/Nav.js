import React from "react";
import { FaUser, FaShoppingBag } from "react-icons/fa";
import "./Nav.css"; // Create this file for custom styles
import LoginModal from "../loginModal/LoginModal";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          {/* <img src={logo} alt="Logo" className="logo" /> */}
        </a>

        {/* Navbar Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/collections">
                COLLECTION
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SHOP BY CATEGORY
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Kurtes
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Earrings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Goggle
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* Right Icons */}
          <div className="navbar-icons">
          <FaUser className="icon" data-bs-toggle="modal" data-bs-target="#loginModal" />
            <FaShoppingBag className="icon" />
            <span className="cart-count">(0)</span>
          </div>
        </div>
      </div>
      <LoginModal />
    </nav>
  );
};

export default Nav;
