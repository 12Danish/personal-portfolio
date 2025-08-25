// Components/WorkHeader.jsx
import React from 'react';

const WorkHeader = ({ isVisible }) => {
  return (
    <div
      className={`transform transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold font-generalsans mb-4">
          Work Experience
        </h2>
      </div>
    </div>
  );
};

export default WorkHeader;