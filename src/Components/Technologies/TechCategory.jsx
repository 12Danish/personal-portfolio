import React from 'react';
import { getCategoryColors } from "../../constants";
import TechCard from './TechCard';

const TechCategory = ({ 
  categoryKey, 
  categoryData, 
  categoryIndex, 
  isVisible, 
  hoveredTech, 
  onTechHover, 
  onTechLeave 
}) => {
  const colors = getCategoryColors(categoryData.color);

  return (
    <div
      className={`transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${categoryIndex * 200}ms` }}
    >
      <div
        className={`bg-gradient-to-br ${colors.gradient} backdrop-blur-sm rounded-3xl p-6 lg:p-8 border ${colors.border} shadow-2xl`}
      >
        {/* Category Header */}
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`w-12 h-12 ${colors.accent} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}
          >
            {categoryData.icon}
          </div>
          <h3 className="text-xl lg:text-2xl font-bold text-white font-generalsans">
            {categoryData.title}
          </h3>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
          {categoryData.technologies.map((tech, techIndex) => (
            <TechCard
              key={tech.name}
              tech={tech}
              techIndex={techIndex}
              categoryIndex={categoryIndex}
              isVisible={isVisible}
              hoveredTech={hoveredTech}
              onHover={onTechHover}
              onLeave={onTechLeave}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechCategory;
