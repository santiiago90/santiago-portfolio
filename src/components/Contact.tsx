
function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-20 md:px-12"
    >
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-2 font-mono text-sm tracking-wider text-blue-400">
           {"// 04. CONTACT ME"}
        </p>
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          Get In Touch
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-500">
          I'm always open to new opportunities,
          collaborations and interesting projects.
          Feel free to reach out!
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:santiagoadaofernandes@gmail.com"
            className="rounded-lg bg-blue-950 px-6 py-3 text-white transition hover:bg-blue-700"
          >
            Contact Me
          </a>

          <a
            href="https://github.com/santiiago90"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-600 px-6 py-3 transition hover:border-blue-500"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
