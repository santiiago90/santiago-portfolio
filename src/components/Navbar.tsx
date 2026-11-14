
import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top -
              b.boundingClientRect.top
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-90px 0px -55% 0px",
        threshold: 0,
      }
    );

    links.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const getLinkClass = (id: string) =>
    `transition-colors duration-200 ${
      activeSection === id
        ? "text-blue-400 font-semibold"
        : "text-slate-300 hover:text-blue-400"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-700 bg-[#111C30]/95 px-6 py-5 backdrop-blur-md md:px-12">
      <div className="flex items-center justify-between">
        <a
          href="#home"
          className="font-mono text-2xl font-bold transition-transform duration-200 hover:scale-105"
          aria-label="Santiago Fernandes - Home"
        >
          <span className="text-blue-400">{"<"}</span>
          <span className="text-white">SF</span>
          <span className="text-blue-400">{"/>"}</span> 
        </a>

        {/* Menu desktop */}
        <div className="hidden gap-8 md:flex">
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={getLinkClass(id)}
              aria-current={
                activeSection === id ? "location" : undefined
              }
            >
              {label}
            </a>
          ))}
        </div>

        {/* Botão mobile */}
        
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <span
              className={`h-0.5 w-6 rounded-full bg-white transition-transform duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`h-0.5 w-6 rounded-full bg-white transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`h-0.5 w-6 rounded-full bg-white transition-transform duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
      </div>

      {/* Menu mobile */}
        <div
            id="mobile-navigation"
            className={`grid transition-all duration-300 ease-in-out md:hidden ${
              isOpen
                ? "mt-6 grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
            aria-hidden={!isOpen}
            inert={!isOpen}
>
          <div className="flex min-h-0 flex-col gap-4 overflow-hidden">
            {links.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={getLinkClass(id)}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div> 
    </nav>
  );
}

export default Navbar;
