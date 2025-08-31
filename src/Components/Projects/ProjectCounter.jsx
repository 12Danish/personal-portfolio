import { projectsData } from "../../constants";

const ProjectCounter = ({ currentProject }) => {
  return (
    <div className="text-center mt-6">
      <p className="text-gray-400 font-generalsans">
        Project {currentProject + 1} of {projectsData.length}
      </p>
    </div>
  );
};

export default ProjectCounter;