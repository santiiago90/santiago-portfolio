
import {
  GraduationCap,
  BriefcaseBusiness,
  MapPin,
  ArrowDown,
  FileText,
  ArrowUpRight,
} from "lucide-react";

import ubiLogo from "../assets/logos/ubi_branco.png";
import infowebLogo from "../assets/logos/infoweb_branco.png";
import montanhaLogo from "../assets/logos/montanha_branco.png";

function About() {
  return (
    <section
      id="about"
      className="px-6 py-20 md:px-12"
    >
      <div className="mx-auto max-w-5xl">

        {/* Identificação da secção */}
        <p className="mb-8 font-mono text-sm tracking-wider text-blue-400">
          {"// 01. ABOUT ME"}
        </p>

        {/* Layout principal */}
        <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">

          {/* COLUNA ESQUERDA */}
          <div>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              A little about me.
            </h2>

            <div className="mb-6 h-1 w-12 rounded-full bg-blue-500" />

            <p className="mb-10 max-w-sm text-lg leading-relaxed text-gray-400">
              Curious by nature, ambitious by choice
            </p>

            <div className="max-w-sm space-y-8">

              {/* EDUCATION */}
              <div className="border-t border-gray-800 pt-5">
                <div className="mb-5 flex items-center gap-2">
                  <GraduationCap
                    size={20}
                    className="text-blue-400"
                  />
                  <h3 className="font-mono text-xs tracking-wider text-blue-400">
                    EDUCATION
                  </h3>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    src={ubiLogo}
                    alt="University of Beira Interior logo"
                    className="h-16 w-16 shrink-0 object-contain"
                  />

                  <div>
                    <p className="font-semibold text-white">
                      University of Beira Interior
                    </p>

                    <p className="mt-1 text-sm text-gray-400">
                      Web, Mobile & Cloud Computing
                    </p>
                  </div>
                </div>
              </div>

              {/* EXPERIENCE */}
              <div className="border-t border-gray-800 pt-5">
                <div className="mb-5 flex items-center gap-2">
                  <BriefcaseBusiness
                    size={20}
                    className="text-blue-400"
                  />
                  <h3 className="font-mono text-xs tracking-wider text-blue-400">
                    EXPERIENCE
                  </h3>
                </div>

                <div className="space-y-8">

                  {/* Infoweb */}
                  <div className="flex items-center gap-4">
                    <img
                      src={infowebLogo}
                      alt="Infoweb logo"
                      className="h-16 w-16 shrink-0 object-contain"
                    />

                    <div>
                      <p className="font-semibold text-white">
                        President of Infoweb
                      </p>

                      <p className="mt-1 text-sm text-gray-400">
                        June 2026 – Present
                      </p>
                    </div>
                  </div>

                  {/* Restaurante Montanha */}
                  <div className="flex items-center gap-4">
                    <img
                      src={montanhaLogo}
                      alt="Restaurante Montanha logo"
                      className="h-12 w-20 shrink-0 object-contain"
                    />

                    <div>
                      <p className="font-semibold text-white">
                        Restaurante Montanha
                      </p>

                      <p className="mt-1 text-sm text-gray-400">
                        Part-time & Seasonal
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        June 2024 – Present
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* AMBITION */}
              <div className="border-t border-gray-800 pt-5">
                <div className="mb-4 flex items-center gap-2">
                  <MapPin
                    size={20}
                    className="text-blue-400"
                  />
                  <h3 className="font-mono text-xs tracking-wider text-blue-400">
                    AMBITION
                  </h3>
                </div>

                <p className="font-semibold text-white">
                  London, United Kingdom
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  International tech career
                </p>
              </div>

            </div>
          </div>

          {/* COLUNA DIREITA */}
          <div className="space-y-6 text-base leading-relaxed text-gray-300 md:text-lg">

            {/* Apresentação */}
            <p className="text-xl font-semibold text-white">
              Hi, I'm Santiago. 👋
            </p>

            <p>
              I'm a 20-year-old web developer in the making,
              studying{" "}
              <span className="font-medium text-blue-400">
                Web, Mobile and Cloud Computing
              </span>{" "}
              at the University of Beira Interior (UBI),
              and I'm also the{" "}
              <span className="font-medium text-white">
                President of the Infoweb Student Association.
              </span>
            </p>

            <p>
              I love frontend and fullstack development.
              There's nothing quite like turning an idea
              into something people can see, click and use.
              Right now, I'm building my foundations at
              university and using every project to grow
              a little more.
            </p>

            <p>
              Before tech took centre stage, my summers
              were spent working in restaurants. It was
              a great school for teamwork, communication
              and staying calm under pressure, and I still
              carry those lessons into everything I do,
              from debugging code to leading a team.
            </p>

            <p>
              I'm{" "}
              <span className="font-medium text-blue-400">
                hardworking, proactive and always up
                for a challenge.
              </span>{" "}
              I set big goals and go after them, and one
              of the biggest is to build my career and
              live in London.
            </p>

            {/* BOTÕES DE CONTACTO E CV */}
            <div className="pt-2">
              <p className="mb-6 text-gray-300">
                If you like what you see, I'd love to hear from you.
              </p>

              <div className="flex flex-wrap items-center gap-4">

                {/* Let's Talk */}
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center
                             gap-3 rounded-lg border border-blue-500/50
                             px-6 py-3 font-medium text-white
                             transition-all duration-300
                             hover:border-blue-400 hover:bg-blue-900/30"
                >
                  Let's Talk

                  <ArrowDown
                    size={18}
                    className="transition-transform duration-300
                               group-hover:translate-y-1"
                  />
                </a>

                {/* View CV */}
                <a
                  href="/Santiago_Adao_Fernandes_CV_2027.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center
                             gap-3 rounded-lg border border-blue-500/50
                             px-6 py-3 font-medium text-white
                             transition-all duration-300
                             hover:border-blue-500 hover:bg-blue-900/30"
                >
                  <FileText size={19} />

                  View CV

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300
                               group-hover:translate-x-0.5
                               group-hover:-translate-y-0.5"
                  />
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
