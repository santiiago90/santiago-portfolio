
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-20 md:px-12"
    >
      <div className="mx-auto max-w-5xl text-center">

        {/* Identificação da secção */}
        <p className="mb-3 font-mono text-sm tracking-wider text-blue-400">
          {"// 04. CONTACT ME"}
        </p>

        {/* Título */}
        <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
          Let's work together.
        </h2>

        {/* Descrição */}
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-400">
          I'm always open to new opportunities,
          collaborations and interesting projects.
          Feel free to reach out!
        </p>

        {/* Botão principal de contacto */}
        <div className="flex justify-center">
          <a
            href="mailto:santiagoadfernandes@gmail.com"
            className="inline-flex items-center gap-3 rounded-lg
                       border border-blue-500/50 bg-blue-900
                       px-7 py-3 text-white
                       transition-all duration-300
                       hover:-translate-y-1 hover:border-blue-400
                       hover:bg-blue-800"
          >
            <Mail size={20} />
            Get In Touch
            <ArrowUpRight size={18} />
          </a>
        </div>

        {/* Linha horizontal */}
        <div
          className="mx-auto my-10 w-full max-w-md
                     border-t border-gray-700"
        />

        {/* Redes profissionais */}
        <div className="flex flex-wrap items-center justify-center gap-10">

          {/* GitHub */}
          <a
            href="https://github.com/santiiago90"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="inline-flex items-center gap-3
                       text-gray-400 transition-colors
                       duration-300 hover:text-blue-400"
          >
            <FaGithub size={24} />
            <span>GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/santiago-fernandes-76456b3a4/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex items-center gap-3
                       text-gray-400 transition-colors
                       duration-300 hover:text-blue-400"
          >
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;
