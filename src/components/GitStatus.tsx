
function GitStatus() {
  return (
    <div className="w-full max-w-md rounded-xl border border-slate-700 bg-[#111C30] p-5 font-mono">
      <div className="mb-4 flex items-center gap-2">
        <span className="text-blue-400">➜</span>
        <span className="text-sm text-slate-400">
          ~/portfolio
        </span>
      </div>

      <p className="mb-3 text-sm text-slate-200">
        <span className="text-blue-400">$</span> git status
      </p>

      <div className="flex items-center gap-3">
        <span
          className="h-2.5 w-2.5 rounded-full bg-green-400"
          aria-hidden="true"
        />

        <span className="text-sm text-green-400">
          Available for opportunities
        </span>
      </div>

      <p className="mt-3 text-xs text-slate-400">
        Open to building something great.
      </p>
    </div>
  );
}

export default GitStatus;
