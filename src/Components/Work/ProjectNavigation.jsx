import React from 'react';

const ProjectNavigation = ({ projects, activeProject, setActiveProject }) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="bg-black-600/60 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50">
        {projects.map((project, index) => (
          <button
            key={project.id}
            onClick={() => setActiveProject(index)}
            className={`px-6 py-3 rounded-xl font-generalsans transition-all duration-300 ${
              activeProject === index
                ? "bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-white border border-blue-500/30"
                : "text-gray-400 hover:text-white hover:bg-gray-800/50"
            }`}
          >
            {project.icon} {project.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectNavigation;
