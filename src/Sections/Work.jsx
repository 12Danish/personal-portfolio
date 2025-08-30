import React, { useState, useEffect } from "react";
import { workExperience, getProjectColors } from "../constants";
import WorkHeader from "../Components/Work/WorkHeader";
import ProjectCard from "../Components/Work/ProjectCard";
import ProjectNavigation from "../Components/Work/ProjectNavigation";
import TimelineIndicator from "../Components/Work/TimeLineIndicator";
import CompanyOverviewCard from "../Components/Work/CompanyOverviewCard";
const Work = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="work" className="c-space min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-7xl mx-auto">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <WorkHeader isVisible={isVisible} />

          <CompanyOverviewCard
            workExperience={workExperience}
            isVisible={isVisible}
          />

          <ProjectNavigation
            projects={workExperience.projects}
            activeProject={activeProject}
            setActiveProject={setActiveProject}
          />

          {/* Active Project Display */}
          <div className="relative">
            {workExperience.projects.map((project, index) => {
              const colors = getProjectColors(project.color);
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  colors={colors}
                  isActive={activeProject === index}
                />
              );
            })}
          </div>

          <TimelineIndicator
            projects={workExperience.projects}
            activeProject={activeProject}
            setActiveProject={setActiveProject}
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
