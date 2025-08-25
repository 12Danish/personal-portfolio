// Components/TimelineIndicator.jsx
import React from 'react';

const TimelineIndicator = ({ projects, activeProject, setActiveProject }) => {
  return (
    <div className="flex justify-center mt-12">
      <div className="flex items-center gap-4">
        {projects.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              activeProject === index
                ? "bg-blue-500 scale-125"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
            onClick={() => setActiveProject(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TimelineIndicator;