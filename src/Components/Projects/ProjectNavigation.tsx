const ProjectNavigation = ({ onPrevProject, onNextProject }) => {
  return (
    <>
      {/* Previous Button */}
      <button
        onClick={onPrevProject}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black-600/80 backdrop-blur-sm rounded-full border border-gray-700/50 text-white hover:bg-gray-700/80 transition-all duration-300 group shadow-lg"
      >
        <span className="text-xl group-hover:scale-125 transition-transform duration-200">
          ←
        </span>
      </button>

      {/* Next Button */}
      <button
        onClick={onNextProject}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black-600/80 backdrop-blur-sm rounded-full border border-gray-700/50 text-white hover:bg-gray-700/80 transition-all duration-300 group shadow-lg"
      >
        <span className="text-xl group-hover:scale-125 transition-transform duration-200">
          →
        </span>
      </button>
    </>
  );
};

export default ProjectNavigation;