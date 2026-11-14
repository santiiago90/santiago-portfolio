import taskManagerImage from "../assets/projects/task-manager.png";
import cultivationImage from "../assets/projects/cultivation-management.png";
import numeralSystemImage from "../assets/projects/numeral-system.png";
import fintrackImage from "../assets/projects/fintrack.png";

export const projects = [
   {
    id: 1,
    title: "Cultivation Management",
    description:
      "A full-stack cultivation management system with authentication, role-based access and environmental monitoring.",
    technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "JWT"],
    githubUrl: "https://github.com/santiiago90/Aromatic-Herbs-Cultivation-Management",
    image: cultivationImage,
  },

  {
    id: 2,
    title: "Task Manager",
    description:
      "A task management application with CRUD operations, REST API and a web interface.",
    technologies: ["JavaScript", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/santiiago90/task-manager-api",
    image: taskManagerImage,
  },
  
  {
    id: 3,
    title: "Numeral System",
    description:
      "A web application focused on number systems, allowing users to explore and work with different numerical representations.",
    technologies: ["HTML", "CSS", "Python"],
    githubUrl: "https://github.com/santiiago90/Sistema-Numerico",
    image: numeralSystemImage,
  },
  {
    id: 4,
    title: "FinTrack",
    status: "in-progress" as const,
    description:
      "A web application for recording personal expenses, organizing spending by category, and tracking monthly totals.",
    technologies: ["HTML", "JavaScript"],
    githubUrl: "https://github.com/santiiago90/FinTrack",
    image: fintrackImage,
  },
];
