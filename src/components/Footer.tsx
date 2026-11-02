
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-700 px-6 py-8 md:px-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-gray-500">
          © {currentYear} Santiago. All rights reserved.
        </p>

        <p className="text-sm text-gray-500">
          Built with React, TypeScript & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;
