import { projectsData } from "../../constants";

const ProjectDots = ({ currentProject, onGoToProject, colors }) => {
  return (
    <div className="flex justify-center mt-8 gap-3">
      {projectsData.map((_, index) => (
        <button
          key={index}
          onClick={() => onGoToProject(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
            currentProject === index
              ? `${colors.accent} scale-125 shadow-lg`
              : "bg-gray-600 hover:bg-gray-500"
          }`}
        />
      ))}
    </div>
  );
};

export default ProjectDots;