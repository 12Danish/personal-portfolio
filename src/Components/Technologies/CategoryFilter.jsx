import React from 'react';
import { categories } from "../../constants";

const CategoryFilter = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {categories.map((category) => (
        <button
          key={category.key}
          onClick={() => onCategoryChange(category.key)}
          className={`px-4 py-2 rounded-xl font-generalsans text-sm transition-all duration-300 flex items-center gap-2 ${
            activeCategory === category.key
              ? "bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-white border border-blue-500/30 scale-105"
              : "bg-black-600/60 text-gray-400 border border-gray-700/50 hover:text-white hover:bg-gray-700/50"
          }`}
        >
          <span>{category.icon}</span>
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;