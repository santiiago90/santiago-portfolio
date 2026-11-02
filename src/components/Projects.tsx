import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-20 md:px-12"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-10 text-3xl font-bold md:text-4xl">
          My Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
