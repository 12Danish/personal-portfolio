import {
  FaPython,
  FaReact,
  FaJs,
  FaRust,
  FaHtml5,
  FaCss3Alt,
  FaBrain,
  FaRobot,
  FaNodeJs,
  FaGitAlt,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDownload,
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

export const MyDetails = [
  "I am a BSCS student at the National University of Sciences and Technology (NUST), School of Electrical Engineering and Computer Sciences, Islamabad.",
  "I am a passionate learner and skilled software developer, leveraging AI tools to build modern applications. With hands-on industry experience, I am always eager to embrace new opportunities and challenges!",
];

export const workExperience = {
  company: "Onescreen Research Lab",
  location: "NUST Islamabad, Associated with Onescreen San Diego, CA",
  duration: "June 2024 - Present",
  position: "Part-time Software Developer",
  projects: [
    {
      id: 1,
      title: "builder.lessn.ai",
      url: "https://builder.lessn.ai/",
      description:
        "AI-powered presentation maker specifically targeting US instructors",
      role: "Full Stack Developer",
      responsibilities: [
        "Complete frontend and backend development",
        "Deployment and maintenance",
        "Research about instructor needs",
        "End-to-end product development",
      ],
      technologies: [
        "Python (Flask)",
        "React",
        "MySQL",
        "Transformers",
        "AI/ML",
      ],
      highlight: "Complete product ownership from research to deployment",
      icon: "🎯",
      color: "blue",
    },
    {
      id: 2,
      title: "suprnotes.ai",
      url: "https://suprnotes.ai/",
      description: "AI-powered tool that generates notes from video lectures",
      role: "AI Research Developer",
      responsibilities: [
        "Solved slide segmentation for downstream processing",
        "Tested different CNNs (SAM, YOLO, etc.)",
        "Handled dataset curation for fine-tuning",
        "Trained and compared models graphically",
        "Deployed production-ready model",
      ],
      technologies: [
        "Computer Vision",
        "CNNs",
        "SAM",
        "YOLO",
        "Dataset Curation",
        "Model Training",
      ],
      highlight: "Fine-tuned model currently in production use",
      icon: "🧠",
      color: "purple",
    },
  ],
};

// Sample projects data - replace with your actual projects
export const projectsData = [
  
  {
    id: 2,
    title: "NextRep",
    description:
      "AI powered fitness app with scheduling, tracking, stats monitoring, nearby gyms feature and acustom Ai assistant for guidance. authentication",
    image: "images/nextRep.png", // Replace with actual image path
    technologies: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "Google Api",
      "TypeScript",
    ],
    backendLink: "https://github.com/12Danish/NextRepBackend",
    frontendLink: "https://github.com/12Danish/NextRepFrontend",
    liveLink: "https://nextrep.site/",
    category: "AI & Web Development",
    featured: true,
    color: "orange",
  },
  {
    id: 3,
    title: "Custom Git",
    description:
      "Solved the CodeCrafter's custom git challenge by implementing core Git functionality, including initializing a repository, handling objects, listing trees, writing trees, creating commits, and cloning repositories",
    image: "images/git.png", // Replace with actual image path
    technologies: ["Rust"],
    githubLink: "https://github.com/12Danish/custom_git",
    liveLink: null,
    category: "Low Level Software Development",
    featured: true,
    color: "red",
  },
  {
    id: 4,
    title: "Enigma",
    description:
      "A maze solver that uses BFS and, when a maze appears unsolvable, intelligently rotates the grid by selected angles and attempts multiple orientations to uncover a path. It then chooses the most optimal solution and visualizes the discovered route with smooth, graphical animations.",
    image: "images/Engima.png", // Replace with actual image path
    technologies: ["Java"],
    githubLink: "https://github.com/yourusername/chat-app",
    liveLink: null,
    category: "AI & Algorithms",
    featured: true,
    color: "purple",
  },
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React, featuring modern and user oriented design.",
    image: "images/portfolio.png", // Replace with actual image path
    technologies: ["React",  "Tailwind CSS", "JavaScript"],
    githubLink: "https://github.com/12Danish/personal-portfolio",
    liveLink: "https://danishabbas.site",
    category: "Web Development",
    featured: true,
    color: "blue",
  }
];

export const getWorkProjectColors = (color) => {
  const colors = {
    blue: {
      bg: "from-blue-600/20 to-cyan-600/20",
      border: "border-blue-500/30",
      text: "text-blue-300",
      accent: "bg-blue-500",
    },
    purple: {
      bg: "from-purple-600/20 to-pink-600/20",
      border: "border-purple-500/30",
      text: "text-purple-300",
      accent: "bg-purple-500",
    },
  };
  return colors[color];
};

export const getProjectColors = (color) => {
  const colors = {
    blue: {
      gradient: "from-blue-600/20 to-cyan-600/20",
      border: "border-blue-500/30",
      text: "text-blue-300",
      accent: "bg-blue-500",
      button: "from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
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
      button: "from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800",
    },
  };
  return colors[color] || colors.blue;
};

export const technologiesData = {
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

export const getCategoryColors = (color) => {
  const colors = {
    blue: {
      gradient: "from-blue-600/20 to-cyan-600/20",
      border: "border-blue-500/30",
      text: "text-blue-300",
      accent: "bg-blue-500",
      button: "from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
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
      button: "from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800",
    },
  };
  return colors[color] || colors.blue;
};

export const categories = [
  { key: "all", label: "All Technologies", icon: "🚀" },
  { key: "frontend", label: "Frontend", icon: "🎨" },
  { key: "backend", label: "Backend", icon: "⚙️" },
  { key: "database", label: "Database", icon: "🗄️" },
  { key: "aiml", label: "AI/ML", icon: "🤖" },
  { key: "devops", label: "DevOps", icon: "🛠️" },
];

export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#hero-section",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work Experience",
    href: "#work",
  },

  {
    id: 4,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 5,
    name: "Tech Stack",
    href: "#technologies",
  },
  {
    id: 6,
    name: "Contact",
    href: "#contact",
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
  };
};

export const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/syed-danish-abbas-ab236228b/", // Replace with your LinkedIn
    color: "#0A66C2",
    description: "Connect with me professionally",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/12Danish", // Replace with your GitHub
    color: "#181717",
    description: "Check out my code repositories",
  },
  {
    name: "Email",
    icon: FaEnvelope,

    color: "#EA4335",
    description: "danishabbas2004@gmail.com",
  },
  {
    name: "Download CV",
    icon: FaDownload,
    url: "/path-to-your-cv.pdf", // Replace with your CV path
    color: "#4CAF50",
    description: "Download my resume",
    isDownload: true,
  },
];

export const terminalPhrases = [
  "Passionate about building modern, scalable applications.",
  "Focused on crafting seamless user experiences.",
  "Exploring possibilities with AI & Machine Learning.",
  "Dedicated to engineering technology that makes an impact.",
];

export   const codeSnippets = [
    "const developer = 'Danish';",
    "function createAwesome() {",
    "return results;",
    "} // end code",
    "npm install creativity",
    "git commit -m 'prod-ready'",
  ];