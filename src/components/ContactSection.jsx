import React from "react";
import LinkedinIcon from "./icons/LinkedinIcon";
import GithubIcon from "./icons/GithubIcon";
import ArrowUpRightIcon from "./icons/ArrowUpIcon";

function ContactSection({ t }) {
  return (
    <footer className="w-full bg-blue-600 text-white py-16 sm:py-20 px-6 sm:px-8 lg:px-12 mt-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono tracking-wide font-normal mb-10 sm:mb-14">
          {t.contactTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 text-base sm:text-lg">
          {/* Left Column */}
          <div className="space-y-4 font-sans">
            <div className="flex items-center gap-3">
              <span className="text-xl">🇵🇹</span>
              <a href="tel:+351918254077" className="hover:underline">
                +351 918 254 077
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xl">🇧🇷</span>
              <a href="tel:+5581998619300" className="hover:underline">
                +55 (81) 99861-9300
              </a>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="mailto:nathaliavcouto@gmail.com"
                className="hover:underline"
              >
                nathaliavcouto@gmail.com
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between space-y-8 font-sans">
            <div className="flex items-center gap-3">
              <LinkedinIcon className="w-5 h-5 text-blue-200 fill-current" />
              <a
                href="https://www.linkedin.com/in/nathalia-vcouto"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline break-all"
              >
                www.linkedin.com/in/nathalia-vcouto
              </a>
            </div>

            <div className="pt-4">
              <a
                href="https://github.com/nathaliaacouto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-2xl sm:text-3xl font-mono font-light hover:opacity-80 transition-opacity group"
              >
                <GithubIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-blue-200 group-hover:text-white transition-colors shrink-0" />
                <span>{t.talkText}</span>
                <ArrowUpRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default ContactSection;
