
import { skills } from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-20 md:px-12"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-10 text-3xl font-bold md:text-4xl">
          Technical Skills
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.id}
              className="rounded-xl border border-gray-700 p-6 transition-all duration-300 hover:border-blue-500"
            >
              <h3 className="mb-5 text-xl font-semibold">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.technologies.map((technology) => {
                  const isString = typeof technology === "string";

                  const name = isString
                    ? technology
                    : technology.name;

                  const icon = isString
                    ? null
                    : technology.icon;

                  return (
                    <div
                      key={name}
                      className="flex items-center gap-3 rounded-lg bg-blue-900/40 px-4 py-3 transition-all duration-300 hover:bg-blue-800/50"
                    >
                      {icon && (
                        <img
                          src={icon}
                          alt=""
                          className={`h-7 w-7 object-contain ${
                            ["Express", "Flask", "GitHub"].includes(name)
                                ? "brightness-0 invert"
                                : ""
                            }`}
                        />
                      )}

                      <span className="text-sm text-blue-200">
                        {name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
