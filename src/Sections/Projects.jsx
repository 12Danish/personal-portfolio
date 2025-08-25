import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentProject((prev) => 
        prev === projectsData.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Sample projects data - replace with your actual projects
  const projectsData = [
    {
      id: 1,
      title: "AI-Powered Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Three.js, featuring dynamic animations and interactive 3D elements.",
      image: "/api/placeholder/600/400", // Replace with actual image path
      technologies: ["React", "Three.js", "Tailwind CSS", "JavaScript"],
      githubLink: "https://github.com/yourusername/portfolio",
      liveLink: "https://yourportfolio.com",
      category: "Web Development",
      featured: true,
      color: "blue"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics dashboard.",
      image: "/api/placeholder/600/400", // Replace with actual image path
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      githubLink: "https://github.com/yourusername/ecommerce",
      liveLink: "https://yourecommerce.com",
      category: "Full Stack",
      featured: true,
      color: "green"
    },
    {
      id: 3,
      title: "Machine Learning Classifier",
      description: "Advanced image classification system using CNN architecture for medical image analysis with 94% accuracy.",
      image: "/api/placeholder/600/400", // Replace with actual image path
      technologies: ["Python", "TensorFlow", "OpenCV", "Flask"],
      githubLink: "https://github.com/yourusername/ml-classifier",
      liveLink: null,
      category: "Machine Learning",
      featured: false,
      color: "purple"
    },
    {
      id: 4,
      title: "Real-time Chat Application",
      description: "Scalable chat application with rooms, file sharing, and end-to-end encryption using WebSocket technology.",
      image: "/api/placeholder/600/400", // Replace with actual image path
      technologies: ["React", "Socket.io", "Node.js", "Redis"],
      githubLink: "https://github.com/yourusername/chat-app",
      liveLink: "https://yourchatapp.com",
      category: "Web Development",
      featured: false,
      color: "orange"
    },
    {
      id: 5,
      title: "Blockchain Voting System",
      description: "Decentralized voting platform ensuring transparency and security using blockchain technology and smart contracts.",
      image: "/api/placeholder/600/400", // Replace with actual image path
      technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
      githubLink: "https://github.com/yourusername/blockchain-voting",
      liveLink: null,
      category: "Blockchain",
      featured: true,
      color: "cyan"
    }
  ];

  const getProjectColors = (color) => {
    const colors = {
      blue: {
        gradient: "from-blue-600/20 to-cyan-600/20",
        border: "border-blue-500/30",
        text: "text-blue-300",
        accent: "bg-blue-500",
        button: "from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
      },
      green: {
        gradient: "from-green-600/20 to-emerald-600/20",
        border: "border-green-500/30",
        text: "text-green-300",
        accent: "bg-green-500",
        button: "from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
      },
      purple: {
        gradient: "from-purple-600/20 to-pink-600/20",
        border: "border-purple-500/30",
        text: "text-purple-300",
        accent: "bg-purple-500",
        button: "from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
      },
      orange: {
        gradient: "from-orange-600/20 to-red-600/20",
        border: "border-orange-500/30",
        text: "text-orange-300",
        accent: "bg-orange-500",
        button: "from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800"
      },
      cyan: {
        gradient: "from-cyan-600/20 to-teal-600/20",
        border: "border-cyan-500/30",
        text: "text-cyan-300",
        accent: "bg-cyan-500",
        button: "from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800"
      }
    };
    return colors[color] || colors.blue;
  };

  const nextProject = () => {
    setCurrentProject(currentProject === projectsData.length - 1 ? 0 : currentProject + 1);
  };

  const prevProject = () => {
    setCurrentProject(currentProject === 0 ? projectsData.length - 1 : currentProject - 1);
  };

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  const currentProjectData = projectsData[currentProject];
  const colors = getProjectColors(currentProjectData.color);

  return (
    <section className="c-space min-h-screen flex items-center justify-center py-16">
      <div className="w-full max-w-7xl mx-auto">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold font-generalsans mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg font-generalsans">
              Showcasing innovation through code and creativity
            </p>
          </div>

          {/* Main Project Display */}
          <div className="relative">
            
            {/* Navigation Arrows */}
            <button
              onClick={prevProject}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black-600/80 backdrop-blur-sm rounded-full border border-gray-700/50 text-white hover:bg-gray-700/80 transition-all duration-300 group shadow-lg"
            >
              <span className="text-xl group-hover:scale-125 transition-transform duration-200">←</span>
            </button>
            
            <button
              onClick={nextProject}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black-600/80 backdrop-blur-sm rounded-full border border-gray-700/50 text-white hover:bg-gray-700/80 transition-all duration-300 group shadow-lg"
            >
              <span className="text-xl group-hover:scale-125 transition-transform duration-200">→</span>
            </button>

            {/* Project Card */}
            <div className={`bg-gradient-to-br ${colors.gradient} backdrop-blur-sm rounded-3xl border ${colors.border} shadow-2xl overflow-hidden`}>
              <div className="grid lg:grid-cols-2">
                
                {/* Project Image */}
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50">
                  <div className="aspect-video lg:aspect-square relative group">
                    <img
                      src={currentProjectData.image}
                      alt={currentProjectData.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${colors.button} rounded-full text-white text-sm font-generalsans shadow-lg`}>
                      {currentProjectData.category}
                    </div>
                    
                    {/* Featured Badge */}
                    {currentProjectData.featured && (
                      <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-sm">⭐</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 lg:p-12 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white font-generalsans mb-4">
                        {currentProjectData.title}
                      </h3>
                      <p className="text-gray-300 font-generalsans leading-relaxed text-base lg:text-lg">
                        {currentProjectData.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-white font-generalsans mb-3 flex items-center gap-2">
                        <span className="text-xl">🛠️</span>
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {currentProjectData.technologies.map((tech, index) => (
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
                  <div className="flex gap-4 mt-8">
                    <a
                      href={currentProjectData.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white rounded-xl font-generalsans transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      <span className="text-lg">📂</span>
                      GitHub
                    </a>
                    
                    {currentProjectData.liveLink && (
                      <a
                        href={currentProjectData.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${colors.button} text-white rounded-xl font-generalsans transition-all duration-300 hover:scale-105 shadow-lg`}
                      >
                        <span className="text-lg">🚀</span>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Navigation Dots */}
          <div className="flex justify-center mt-8 gap-3">
            {projectsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  currentProject === index
                    ? `${colors.accent} scale-125 shadow-lg`
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Project Counter */}
          <div className="text-center mt-6">
            <p className="text-gray-400 font-generalsans">
              Project {currentProject + 1} of {projectsData.length}
            </p>
          </div>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-full text-sm font-generalsans transition-all duration-300 ${
                isAutoPlaying 
                  ? 'bg-green-600/20 text-green-300 border border-green-600/30' 
                  : 'bg-gray-600/20 text-gray-300 border border-gray-600/30'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Auto-play'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;