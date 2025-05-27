// components/Portfolio.jsx
import React from "react";
import PortfolioItem from "./PortfolioItem";

const portfolioData = [
  {
    image: "/images/art1.jpg",
    title: "Cosmic Bloom",
    description: "A surreal floral universe",
    year: 2023,
    category: "digital art",
  },
  {
    image: "/images/sketch1.jpg",
    title: "Pencil Study",
    year: 2022,
    category: "drawing",
  },
  {
    image: "/images/website1.jpg",
    title: "Portfolio Website",
    description: "React + Tailwind + Framer Motion",
    year: 2024,
    category: "website",
  },
  // Add more items as needed
];

const Portfolio = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">My Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.map((item, idx) => (
          <PortfolioItem key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
