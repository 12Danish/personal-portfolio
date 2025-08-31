const ProjectDetails = ({ project, colors }) => {
  return (
    <div className="p-8 lg:p-12 flex flex-col justify-between">
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-white font-generalsans mb-4">
            {project.title}
          </h3>
          <p className="text-gray-300 font-generalsans leading-relaxed text-base lg:text-lg">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="text-lg font-semibold text-white font-generalsans mb-3 flex items-center gap-2">
            <span className="text-xl">🛠️</span>
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className={`px-3 py-2 bg-gradient-to-r ${colors.gradient} ${colors.text} rounded-lg text-sm font-generalsans border ${colors.border} hover:scale-105 transition-transform duration-200`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mt-8">
        {project.githubLink ? (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white rounded-xl font-generalsans transition-all duration-300 hover:scale-105 shadow-lg text-sm lg:text-base"
          >
            <span className="text-lg">📂</span>
            GitHub
          </a>
        ) : (
          <>
            <a
              href={project.backendLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white rounded-xl font-generalsans transition-all duration-300 hover:scale-105 shadow-lg text-sm lg:text-base"
            >
              <span className="text-lg">📂</span>
              Backend
            </a>
            <a
              href={project.frontendLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white rounded-xl font-generalsans transition-all duration-300 hover:scale-105 shadow-lg text-sm lg:text-base"
            >
              <span className="text-lg">📂</span>
              Frontend
            </a>
          </>
        )}

        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-3 bg-gradient-to-r ${colors.button} text-white rounded-xl font-generalsans transition-all duration-300 hover:scale-105 shadow-lg text-sm lg:text-base`}
          >
            <span className="text-lg">🚀</span>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;