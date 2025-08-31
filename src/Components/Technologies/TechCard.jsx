// components/Technologies/TechCard.jsx
import React from 'react';
import TechTooltip from './TechToolTip';

const TechCard = ({ 
  tech, 
  techIndex, 
  categoryIndex, 
  isVisible, 
  hoveredTech, 
  onHover, 
  onLeave 
}) => {
  const IconComponent = tech.icon;

  return (
    <div
      className={`group relative bg-black-600/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50 hover:border-gray-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      }`}
      style={{
        transitionDelay: `${categoryIndex * 200 + techIndex * 100}ms`,
      }}
      onMouseEnter={() => onHover(tech)}
      onMouseLeave={onLeave}
    >
      {/* Icon */}
      <div className="flex flex-col items-center space-y-3">
        <div className="relative">
          <IconComponent
            size={40}
            className="group-hover:scale-110 transition-transform duration-300"
            style={{ color: tech.color }}
          />

          {/* Glow effect */}
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-lg"
            style={{ backgroundColor: tech.color }}
          />
        </div>

        {/* Tech Name */}
        <span className="text-white text-sm font-generalsans text-center group-hover:text-gray-100">
          {tech.name}
        </span>
      </div>

      {/* Hover Tooltip */}
      <TechTooltip 
        tech={tech} 
        isVisible={hoveredTech?.name === tech.name} 
      />
    </div>
  );
};

export default TechCard;