import githubIcon from "../assets/github.png";

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[80vh] flex-col justify-center px-6 md:px-12"
    >
      <p className="mb-4 text-lg text-blue-700">
        print ("Hello, I'm Santiago 👋") 
      </p>

      <h1 className="mb-6 text-4xl font-bold md:text-6xl">
        Frontend / Full Stack aspiring Developer 
      </h1>

      <p className="mb-8 max-w-2xl text-lg text-gray-500">
        Computer science student passionate about building modern web applications, 
        from intuitive user interfaces to scalable backend solutions.
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-lg bg-blue-950 px-6 py-3 text-white transition hover:bg-blue-700"
        >
          View Projects
        </a>

        
        <a
          href="https://github.com/santiiago90"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-lg border border-gray-400 px-6 py-3 transition hover:bg-gray-100 hover:text-gray-900"
        >
          <img
            src={githubIcon}
            alt=""
            className="h-6 w-6 object-contain"
          />
          GitHub
        </a>

      </div>
    </section>
  );
}

export default Hero;
