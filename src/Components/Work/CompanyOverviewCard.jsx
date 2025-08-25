import React from 'react';

const CompanyOverviewCard = ({ workExperience, isVisible }) => {
  return (
    <div
      className={`bg-black-600/80 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-gray-700/50 shadow-2xl transform transition-all duration-700 delay-200 ${
        isVisible ? "scale-100" : "scale-95"
      }`}
    >
      <div className="text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-xl flex items-center justify-center border border-green-500/30">
            <span className="text-2xl">🚀</span>
          </div>
          <div>
            <h3 className="text-xl lg:text-2xl font-bold text-white font-generalsans">
              {workExperience.company}
            </h3>
            <p className="text-gray-300 font-generalsans">
              {workExperience.position}
            </p>
          </div>
        </div>
        <p className="text-gray-400 font-generalsans mb-2">
          📍 {workExperience.location}
        </p>
        <p className="text-green-400 font-semibold font-generalsans">
          ⏰ {workExperience.duration}
        </p>
      </div>
    </div>
  );
};

export default CompanyOverviewCard;