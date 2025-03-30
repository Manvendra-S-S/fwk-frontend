import React from "react";
import "./CategorySection.css"; // Create this file for custom styles

const categories = [
  {
    name: "Dhaara",
    products: 18,
    image: "/images/dhaara.jpg", // Update with correct image path
  },
  {
    name: "Chaand",
    products: 27,
    image: "/images/chaand.jpg", // Update with correct image path
  },
  {
    name: "Padma",
    products: 23,
    image: "/images/padma.jpg", // Update with correct image path
  },
];

const CategorySection = () => {
  return (
    <section className="category-section">
      <div className="container">
        <div className="category-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <img src={category.image} alt={category.name} className="category-image" />
              <h3 className="category-title">{category.name}</h3>
              <p className="category-products">{category.products} products</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
