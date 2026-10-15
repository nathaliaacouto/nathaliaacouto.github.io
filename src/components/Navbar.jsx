import React from "react";
import StarIcon from "./icons/StarIcon";
import ArrowUpRightIcon from "./icons/ArrowUpIcon";

function Navbar({ lang, setLang, currentPage, setCurrentPage, t }) {
  return (
    <header className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-20 py-5 sm:py-6 flex items-center justify-between">
      {/* Brand/Logo (returns home) */}
      <button
        onClick={() => setCurrentPage("home")}
        className="flex items-start gap-1 text-2xl sm:text-3xl font-bold tracking-tight hover:opacity-80 transition-opacity text-left"
      >
        <span>nvc</span>
        <StarIcon className="w-3.5 h-3.5 text-stone-700 mt-1.5 fill-current" />
      </button>

      <nav className="flex items-center gap-6 sm:gap-8 text-sm sm:text-base font-medium">
        {/* Select language */}
        <div className="flex items-center gap-1 text-xs font-semibold uppercase font-mono">
          {["en", "pt", "es"].map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-1.5 py-0.5 rounded transition-colors ${
                lang === l
                  ? "bg-stone-800 text-white"
                  : "text-stone-500 hover:text-stone-900"
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        {/* About */}
        <button
          onClick={() => setCurrentPage("about")}
          className={`transition-opacity hover:opacity-60 ${
            currentPage === "about" ? "underline underline-offset-4" : ""
          }`}
        >
          {t.about}
        </button>

        {/* Contact */}
        <a
          href="mailto:nathaliavcouto@gmail.com"
          className="flex items-center gap-1.5 hover:opacity-60 transition-opacity"
        >
          {t.contact}
          <ArrowUpRightIcon className="w-4 h-4" />
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
