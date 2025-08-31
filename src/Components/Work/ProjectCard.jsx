import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, colors, isActive }) => {
  return (
    <div
      className={`transition-all duration-500 ${
        isActive
          ? "opacity-100 transform translate-x-0"
          : "opacity-0 absolute top-0 left-0 w-full transform translate-x-full"
      }`}
    >
      <div
        className={`bg-gradient-to-br ${colors.bg} backdrop-blur-sm rounded-3xl p-8 lg:p-12 border ${colors.border} shadow-2xl`}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Project Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div
                className={`w-16 h-16 ${colors.accent} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}
              >
                {project.icon}
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white font-generalsans mb-2 hover:text-blue-500 underline flex items-center gap-3">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                    {project.title}
                    <FaExternalLinkAlt className="text-lg opacity-70 hover:opacity-100 transition-opacity duration-200" />
                  </a>
                </h3>
                <p
                  className={`${colors.text} font-semibold font-generalsans mb-3`}
                >
                  {project.role}
                </p>
                <p className="text-gray-300 font-generalsans leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Highlight */}
            <div
              className={`${colors.bg} rounded-2xl p-4 border ${colors.border}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">⭐</span>
                <span
                  className={`${colors.text} font-semibold font-generalsans`}
                >
                  Key Achievement
                </span>
              </div>
              <p className="text-gray-200 font-generalsans">
                {project.highlight}
              </p>
            </div>
          </div>

          {/* Responsibilities & Tech */}
          <div className="space-y-6">
            {/* Responsibilities */}
            <div>
              <h4 className="text-lg font-semibold text-white font-generalsans mb-4 flex items-center gap-2">
                <span className="text-xl">📋</span>
                Key Responsibilities
              </h4>
              <ul className="space-y-2">
                {project.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className={`${colors.accent} w-2 h-2 rounded-full mt-2 flex-shrink-0`}
                    ></span>
                    <span className="text-gray-300 font-generalsans">
                      {resp}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-lg font-semibold text-white font-generalsans mb-4 flex items-center gap-2">
                <span className="text-xl">🛠️</span>
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-3 py-2 ${colors.bg} ${colors.text} rounded-lg text-sm font-generalsans border ${colors.border} hover:scale-105 transition-transform duration-200`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;