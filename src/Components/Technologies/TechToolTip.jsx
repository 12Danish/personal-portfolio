
// components/Technologies/TechTooltip.jsx
import React from 'react';

const TechTooltip = ({ tech, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap z-10 shadow-lg animate-fade-in">
      Expert Level
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
    </div>
  );
};

export default TechTooltip;