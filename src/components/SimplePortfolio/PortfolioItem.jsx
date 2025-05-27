// components/PortfolioItem.jsx
import React from "react";

const PortfolioItem = ({ image, title, description, year, category }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && (
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        )}
        <div className="mt-2 text-sm text-gray-500 flex justify-between">
          <span>{year}</span>
          <span className="capitalize">{category}</span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
