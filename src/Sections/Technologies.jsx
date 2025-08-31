// components/Technologies/Technologies.jsx (Main component)
import React, { useState, useEffect } from "react";
import { technologiesData } from "../constants";
import TechnologiesHeader from "../Components/Technologies/TechnologiesHeader ";
import CategoryFilter from "../Components/Technologies/CategoryFilter";
import TechCategory from "../Components/Technologies/TechCategory";

const Technologies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCategories =
    activeCategory === "all"
      ? Object.entries(technologiesData)
      : Object.entries(technologiesData).filter(
          ([key]) => key === activeCategory
        );

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleTechHover = (tech) => setHoveredTech(tech);
  const handleTechLeave = () => setHoveredTech(null);
  const handleCategoryChange = (category) => setActiveCategory(category);

  return (
    <section id="technologies" className="c-space min-h-screen ">
      <div className="w-full max-w-7xl mx-auto">
        <TechnologiesHeader isVisible={isVisible} />

        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        <div className="space-y-8">
          {filteredCategories.map(
            ([categoryKey, categoryData], categoryIndex) => (
              <TechCategory
                key={categoryKey}
                categoryKey={categoryKey}
                categoryData={categoryData}
                categoryIndex={categoryIndex}
                isVisible={isVisible}
                hoveredTech={hoveredTech}
                onTechHover={handleTechHover}
                onTechLeave={handleTechLeave}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
