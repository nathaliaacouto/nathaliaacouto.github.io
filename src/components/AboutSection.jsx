import React from "react";
import ArrowDownIcon from "./icons/ArrowDownIcon";
import DownloadIcon from "./icons/DownloadIcon";

function AboutSection({ t }) {
  const avatarImageSrc = "/avatar.png";

  const handleScrollToContact = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-20 py-8 sm:py-16">
      {/* Header with Title and Photo Space */}
      <div className="pb-8 border-b border-stone-300">
        <span className="block text-stone-400 font-mono text-xs sm:text-sm tracking-wide mb-2">
          {t.subLabel}
        </span>

        <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-mono tracking-tight text-stone-900">
            {t.aboutTitle}
          </h2>

          <div className="h-25 sm:h-28 shrink-0 flex items-center">
            <img
              src={avatarImageSrc}
              alt="Nathália Couto"
              className="h-full w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 pt-8">
        {/* Left Column - Bio */}
        <div className="space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed">
          <p>{t.aboutBio1}</p>
          <p>{t.aboutBio2}</p>

          <button
            onClick={handleScrollToContact}
            className="mt-5 sm:mt-10 flex items-center gap-1.5 text-stone-500 hover:text-stone-800 text-xs sm:text-sm font-mono transition-colors group"
          >
            <span>{t.scroll}</span>
            <ArrowDownIcon className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Right Column - Approach & Tags */}
        <div className="space-y-6">
          <h3 className="text-xl sm:text-2xl font-medium text-stone-900">
            {t.tickTitle}
          </h3>
          <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
            {t.tickDesc}
          </p>

          <div className="flex flex-wrap gap-2.5 pt-2">
            {t.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-600 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-md shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-mono text-sm font-medium rounded-lg shadow-sm transition-colors group"
            >
              <DownloadIcon className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              <span>{t.cvText}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
