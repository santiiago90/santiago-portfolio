

import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-6 py-5 md:px-12">
      <div className="flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold">
          Santiago.
        </a>

        {/* Menu para computador */}
        <div className="hidden gap-8 md:flex">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Botão para telemóvel */}
        <button
          type="button"
          className="text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Menu para telemóvel */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="mt-6 flex flex-col gap-4 md:hidden"
        >
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
