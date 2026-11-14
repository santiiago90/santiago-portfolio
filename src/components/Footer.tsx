
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-700 px-6 py-8 md:px-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-slate-400">
          © {currentYear} Santiago. All rights reserved.
        </p>

        <p className="font-mono text-sm text-slate-400">
          <span className="text-blue-400">{"// "}</span>
          Made with{" "}
          <span className="text-blue-400">React</span>
          , coffee ☕ & ambition.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
