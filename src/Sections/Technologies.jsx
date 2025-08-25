import React, { useState, useEffect } from "react";
import {
  FaPython,
  FaReact,
  FaJs,
  FaRust,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaBrain,
  FaRobot,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiRedis,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiFlask,
  SiDjango,
  SiExpress,
} from "react-icons/si";

const Technologies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const technologiesData = {
    frontend: {
      title: "Frontend Development",
      color: "blue",
      icon: "🎨",
      technologies: [
        { name: "React", icon: FaReact, color: "#61DAFB", proficiency: 95 },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E", proficiency: 90 },
        {
          name: "TypeScript",
          icon: SiTypescript,
          color: "#3178C6",
          proficiency: 85,
        },
        { name: "HTML5", icon: FaHtml5, color: "#E34F26", proficiency: 95 },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", proficiency: 90 },
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
          color: "#06B6D4",
          proficiency: 92,
        },
      ],
    },
    backend: {
      title: "Backend Development",
      color: "green",
      icon: "⚙️",
      technologies: [
        { name: "Python", icon: FaPython, color: "#3776AB", proficiency: 95 },
        { name: "Node.js", icon: FaNodeJs, color: "#339933", proficiency: 85 },
        { name: "Rust", icon: FaRust, color: "#000000", proficiency: 75 },
        { name: "Flask", icon: SiFlask, color: "#000000", proficiency: 90 },
        { name: "Django", icon: SiDjango, color: "#092E20", proficiency: 80 },
        {
          name: "Express.js",
          icon: SiExpress,
          color: "#000000",
          proficiency: 82,
        },
      ],
    },
    database: {
      title: "Databases & Storage",
      color: "purple",
      icon: "🗄️",
      technologies: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248", proficiency: 88 },
        {
          name: "PostgreSQL",
          icon: SiPostgresql,
          color: "#4169E1",
          proficiency: 85,
        },
        { name: "MySQL", icon: SiMysql, color: "#4479A1", proficiency: 80 },
        { name: "Redis", icon: SiRedis, color: "#DC382D", proficiency: 78 },
      ],
    },
    aiml: {
      title: "AI & Machine Learning",
      color: "orange",
      icon: "🤖",
      technologies: [
        {
          name: "Machine Learning",
          icon: FaBrain,
          color: "#FF6B6B",
          proficiency: 88,
        },
        {
          name: "AI Development",
          icon: FaRobot,
          color: "#4ECDC4",
          proficiency: 85,
        },
      ],
    },
    devops: {
      title: "DevOps & Tools",
      color: "cyan",
      icon: "🛠️",
      technologies: [
        { name: "Git", icon: FaGitAlt, color: "#F05032", proficiency: 90 },
      ],
    },
  };

  const getCategoryColors = (color) => {
    const colors = {
      blue: {
        gradient: "from-blue-600/20 to-cyan-600/20",
        border: "border-blue-500/30",
        text: "text-blue-300",
        accent: "bg-blue-500",
        button:
          "from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
      },
      green: {
        gradient: "from-green-600/20 to-emerald-600/20",
        border: "border-green-500/30",
        text: "text-green-300",
        accent: "bg-green-500",
        button:
          "from-green-600 to-green-700 hover:from-green-700 hover:to-green-800",
      },
      purple: {
        gradient: "from-purple-600/20 to-pink-600/20",
        border: "border-purple-500/30",
        text: "text-purple-300",
        accent: "bg-purple-500",
        button:
          "from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800",
      },
      orange: {
        gradient: "from-orange-600/20 to-red-600/20",
        border: "border-orange-500/30",
        text: "text-orange-300",
        accent: "bg-orange-500",
        button:
          "from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800",
      },
      cyan: {
        gradient: "from-cyan-600/20 to-teal-600/20",
        border: "border-cyan-500/30",
        text: "text-cyan-300",
        accent: "bg-cyan-500",
        button:
          "from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800",
      },
    };
    return colors[color] || colors.blue;
  };

  const filteredCategories =
    activeCategory === "all"
      ? Object.entries(technologiesData)
      : Object.entries(technologiesData).filter(
          ([key]) => key === activeCategory
        );

  const categories = [
    { key: "all", label: "All Technologies", icon: "🚀" },
    { key: "frontend", label: "Frontend", icon: "🎨" },
    { key: "backend", label: "Backend", icon: "⚙️" },
    { key: "database", label: "Database", icon: "🗄️" },
    { key: "aiml", label: "AI/ML", icon: "🤖" },
    { key: "devops", label: "DevOps", icon: "🛠️" },
  ];

  return (
    <section className="c-space min-h-screen py-16">
      <div className="w-full max-w-7xl mx-auto">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold font-generalsans mb-4">
              Technologies & Skills
            </h2>
            <p className="text-gray-400 text-lg font-generalsans">
              My technical arsenal for building modern applications
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-4 py-2 rounded-xl font-generalsans text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.key
                    ? "bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-white border border-blue-500/30 scale-105"
                    : "bg-black-600/60 text-gray-400 border border-gray-700/50 hover:text-white hover:bg-gray-700/50"
                }`}
              >
                <span>{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>

          {/* Technologies Grid */}
          <div className="space-y-8">
            {filteredCategories.map(
              ([categoryKey, categoryData], categoryIndex) => {
                const colors = getCategoryColors(categoryData.color);

                return (
                  <div
                    key={categoryKey}
                    className={`transform transition-all duration-700 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                    style={{ transitionDelay: `${categoryIndex * 200}ms` }}
                  >
                    <div
                      className={`bg-gradient-to-br ${colors.gradient} backdrop-blur-sm rounded-3xl p-6 lg:p-8 border ${colors.border} shadow-2xl`}
                    >
                      {/* Category Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className={`w-12 h-12 ${colors.accent} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}
                        >
                          {categoryData.icon}
                        </div>
                        <h3
                          className={`text-xl lg:text-2xl font-bold text-white font-generalsans`}
                        >
                          {categoryData.title}
                        </h3>
                      </div>

                      {/* Technologies Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
                        {categoryData.technologies.map((tech, techIndex) => {
                          const IconComponent = tech.icon;

                          return (
                            <div
                              key={tech.name}
                              className={`group relative bg-black-600/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50 hover:border-gray-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer transform ${
                                isVisible
                                  ? "translate-y-0 opacity-100"
                                  : "translate-y-5 opacity-0"
                              }`}
                              style={{
                                transitionDelay: `${
                                  categoryIndex * 200 + techIndex * 100
                                }ms`,
                              }}
                              onMouseEnter={() => setHoveredTech(tech)}
                              onMouseLeave={() => setHoveredTech(null)}
                            >
                              {/* Icon */}
                              <div className="flex flex-col items-center space-y-3">
                                <div className="relative">
                                  <IconComponent
                                    size={40}
                                    className="group-hover:scale-110 transition-transform duration-300"
                                    style={{ color: tech.color }}
                                  />

                                  {/* Glow effect */}
                                  <div
                                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-lg"
                                    style={{ backgroundColor: tech.color }}
                                  />
                                </div>

                                {/* Tech Name */}
                                <span className="text-white text-sm font-generalsans text-center group-hover:text-gray-100">
                                  {tech.name}
                                </span>
                              </div>

                              {/* Hover Tooltip */}
                              {hoveredTech?.name === tech.name && (
                                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap z-10 shadow-lg animate-fade-in">
                                  Expert Level
                                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
