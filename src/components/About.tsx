
function About() {
  return (
    <section
      id="about"
      className="px-6 py-20 md:px-12"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">
          About Me
        </h2>

        <div className="space-y-5 text-lg leading-relaxed text-gray-500">
          <p>
            I'm Santiago, a Web, Mobile and Cloud Computing
            student at the University of Beira Interior,
            Portugal.
          </p>

          <p>
            I enjoy building web applications, from
            responsive user interfaces to backend APIs
            and databases.
          </p>

          <p>
            I'm currently expanding my knowledge of React,
            TypeScript and modern frontend development,
            with the goal of becoming a professional
            software developer.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-gray-300 p-6">
            <h3 className="mb-2 text-xl font-semibold">
              Education
            </h3>
            <p className="text-gray-500">
              University of Beira Interior
            </p>
          </div>

          <div className="rounded-xl border border-gray-300 p-6">
            <h3 className="mb-2 text-xl font-semibold">
              Main Interests
            </h3>
            <p className="text-gray-500">
              Frontend & Full-Stack Development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
