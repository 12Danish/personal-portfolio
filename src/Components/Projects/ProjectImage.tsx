const ProjectImage = ({ project, colors }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg">
      <div className="relative group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] object-cover group-hover:scale-110 transition-transform duration-700 rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

        {/* Category Badge */}
        <div
          className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${colors.button} rounded-full text-white text-sm font-generalsans shadow-lg`}
        >
          {project.category}
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-sm">⭐</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectImage;