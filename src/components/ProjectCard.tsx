type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  image?: string;
  status?:"in-progress";
};

function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  image,
  status,
}: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-gray-300  transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg">
      
      {image && (
        <img
          src={image}
          alt={`Preview of ${title}`}
          className="h-48 w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
      )}

      <div className="p-6">
        <div className="mb-3 flex items-center gap-3">
          <h3 className="text-2xl font-bold">
            {title}
          </h3>

          {status === "in-progress" && (
            <span className="shrink-0 rounded-full border border-amber-700/40 bg-amber-700/10 px-3 py-1 text-xs font-medium text-amber-500">
              In Progress
            </span>
           )}
        </div>
        <p className="mb-5 text-gray-400">
          {description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-blue-900/40 px-3 py-1 text-sm text-blue-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-400 transition hover:text-blue-300"
          >
            View on GitHub →
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
