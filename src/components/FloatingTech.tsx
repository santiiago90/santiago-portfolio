function FloatingTech() {
    return (
    <div className="relative h-80 w-full"> 
        {/* Órbita azul */}

        <div
        className="absolute left-1/2 top-1/2 h-48 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 rotate-[-15deg] rounded-[50%] border border-blue-500/40"
        aria-hidden="true"
        />

        {/* React */}
        <div className="absolute left-[18%] top-[12%] flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/40 bg-blue-950/50 shadow-lg animate-float">
        <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            alt="React"
            className="h-10 w-10"
        /> 
        </div>

        {/* TypeScript */}
        <div className="absolute bottom-[12%] right-[12%] flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/40 bg-blue-950/50 shadow-lg animate-float-delayed">
        <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            alt="TypeScript"
            className="h-10 w-10"
        />
        </div>

        {/* Node.js */}
        <div className="absolute bottom-[12%] left-[18%] flex h-16 w-16 items-center justify-center rounded-2xl border border-green-600/40 bg-blue-950/50 shadow-lg animate-float">
        <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
            className="h-10 w-10"
        />
        </div>

        {/* GitHub */}
    <div className="absolute right-[18%] top-[12%] flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/40 bg-blue-950/50 shadow-lg animate-float-delayed">
    <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
        alt="GitHub"
        className="h-10 w-10 brightness-0 invert"
    />
    </div>


       <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-blue-500 bg-blue-950/40 text-4xl font-bold text-blue-400 shadow-[0_0_35px_rgba(59,130,246,0.25)]">
         {"</>"}
        </div> 
    </div>
    );
}

export default FloatingTech;
