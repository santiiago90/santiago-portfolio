import GitStatus from "./GitStatus";
import { useEffect, useState } from "react";
import githubIcon from "../assets/github.png";
import FloatingTech  from "./FloatingTech";;

const terminalText = 'print("Hello, I\'m Santiago 👋")';

function Hero() {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const characters = Array.from(terminalText);
    let index = 0;

    const interval = window.setInterval(() => {
      index++;

      setDisplayedText(
        characters.slice(0, index).join("")
      );

      if (index >= characters.length) {
        window.clearInterval(interval);
      }
    }, 80);

    return () => window.clearInterval(interval);
  }, []);

  return (
    
    <section
      id="home"
      className="grid min-h-[80vh] grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-2"
      
    >

    <div className="min-w-0">
      
      {/* Texto animado */}
      <p className="mb-4 min-h-7 font-mono text-lg text-blue-400">
        {displayedText}
        <span
          className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-blue-400 align-middle"
          aria-hidden="true"
        />
      </p>

      <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
        Aspiring Frontend / Full Stack Developer
      </h1>

      <p className="mb-8 max-w-2xl text-lg text-gray-300">
        Computer science student passionate about building modern web
        applications, from intuitive user interfaces to scalable
        backend solutions.
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
            className="h-6 w-6 object-contain brightness-0 invert"
          />
          GitHub
        </a>
      </div>
            {/* Git Status */}
      <div className="mt-10">
        <GitStatus />
      </div>
    
    </div>

    <div className="hidden lg:block">
      <FloatingTech />
    </div>

    </section>
  );
}

export default Hero;
