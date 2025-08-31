import React, { useState, useEffect, useMemo } from "react";
import { projectsData, getProjectColors } from "../constants";
import ProjectHeader from "../Components/Projects/ProjectHeader";
import ProjectDetails from "../Components/Projects/ProjectDetails";
import ProjectCounter from "../Components/Projects/ProjectCounter";
import ProjectNavigation from "../Components/Projects/ProjectNavigation";
import ProjectImage from "../Components/Projects/ProjectImage";
import ProjectDots from "../Components/Projects/ProjectDots";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const nextProject = () => {
    setCurrentProject(
      currentProject === projectsData.length - 1 ? 0 : currentProject + 1
    );
  };

  const prevProject = () => {
    setCurrentProject(
      currentProject === 0 ? projectsData.length - 1 : currentProject - 1
    );
  };

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  // Memoize current project data and colors for better performance
  const currentProjectData = useMemo(
    () => projectsData[currentProject],
    [currentProject]
  );
  const colors = useMemo(
    () => getProjectColors(currentProjectData.color),
    [currentProjectData.color]
  );

  return (
    <section
      id="projects"
      className="c-space min-h-screen flex items-center justify-center "
    >
      <div className="w-full max-w-7xl mx-auto">
        <ProjectHeader isVisible={isVisible} />

        {/* Main Project Display */}
        <div
          className={`relative transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <ProjectNavigation
            onPrevProject={prevProject}
            onNextProject={nextProject}
          />

          {/* Project Card */}
          <div
            className={`bg-gradient-to-br ${colors.gradient} backdrop-blur-sm rounded-3xl border ${colors.border} shadow-2xl overflow-hidden`}
          >
            <div className="grid lg:grid-cols-2">
              <div className="flex items-center">
                <div className="w-full max-w-md mx-auto">
                  <ProjectImage project={currentProjectData} colors={colors} />
                </div>
              </div>
              <ProjectDetails project={currentProjectData} colors={colors} />
            </div>
          </div>
        </div>

        <ProjectDots
          currentProject={currentProject}
          onGoToProject={goToProject}
          colors={colors}
        />

        <ProjectCounter currentProject={currentProject} />
      </div>
    </section>
  );
};

export default Projects;
