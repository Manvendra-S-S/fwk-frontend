import React from "react";
import "./HeroSection.css"; // Create this file for custom styling

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-text">
            <p className="small-text">NEW COLLECTION</p>
            <h1 className="title">Dhaara</h1>
            <p className="subtitle">
              Let the flow of Shiv Shakti Harmony embrace you.
            </p>
            <button className="btn btn-dark">DISCOVER NOW</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
