const ProjectHeader = ({ isVisible }) => {
  return (
    <div
      className={`transform transition-all duration-1000 text-center mb-12 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold font-generalsans mb-4">
        Featured Projects
      </h2>
      <p className="text-gray-400 text-lg font-generalsans">
        Showcasing innovation through code and creativity
      </p>
    </div>
  );
};

export default ProjectHeader;