import React from "react";
import StarIcon from "./icons/StarIcon";
import CursorIcon from "./icons/CursorIcon";

function HomePage({ setCurrentPage, t }) {
  const mainImgSrc = "/main-img.png";

  return (
    <div className="flex-1 flex flex-col justify-between min-h-[calc(100vh-80px)]">
      {/* Inline Keyframe Animation for Mouse Cursor */}
      <style>{`
        @keyframes moveAndClick {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          40% {
            transform: translate(clamp(400px, 70vw, 600px), clamp(10px, 2vw, 30px)) scale(1);
            opacity: 1;
          }
          50% {
            transform: translate(clamp(400px, 70vw, 600px), clamp(10px, 2vw, 30px)) scale(0.82);
            opacity: 1;
          }
          60% {
            transform: translate(clamp(400px, 70vw, 600px), clamp(10px, 2vw, 30px)) scale(1);
            opacity: 1;
          }
          85% {
            transform: translate(clamp(400px, 70vw, 600px), clamp(10px, 2vw, 30px)) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
        }

        .animate-cursor-click {
          animation: moveAndClick 10s cubic-bezier(0.4, 0, 0.2, 1) 3;
        }
      `}</style>

      {/* Main Section */}
      <main className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-20 py-2 sm:py-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative flex-1">
        {/* Left - Text */}
        <section className="flex flex-col items-start gap-4 sm:gap-6 max-w-xl relative">
          <div className="flex items-center gap-3">
            <StarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 fill-current shrink-0" />
            <span className="text-stone-800 text-sm sm:text-base lg:text-lg font-medium">
              {t.tagline}
            </span>
          </div>

          <div className="relative">
            <h1 className="tracking-tight leading-none font-normal">
              <span className="block text-stone-900 text-5xl sm:text-6xl md:text-7xl font-sans">
                {t.hello}
              </span>
              <span className="block text-blue-600 text-6xl sm:text-7xl md:text-8xl font-serif italic -mt-1 sm:-mt-2">
                {t.world}
              </span>
            </h1>

            {/* Animated Pixel Mouse Cursor */}
            <div className="hidden lg:block absolute top-6 left-48 z-20 pointer-events-none animate-cursor-click origin-top-left">
              <CursorIcon className="w-9 h-9 drop-shadow-md" />
            </div>
          </div>

          <div className="text-stone-700 text-base sm:text-lg font-normal leading-relaxed space-y-1">
            <p>{t.desc1}</p>
            <p>{t.desc2}</p>
          </div>
        </section>

        {/* Right - Photo */}
        <section className="flex justify-center w-full">
          <button
            onClick={() => setCurrentPage("about")}
            className="group relative inline-flex transition-transform duration-300 hover:scale-[1.02] text-left"
          >
            <img
              src={mainImgSrc}
              alt="Project preview"
              className="w-auto h-auto max-h-[50vh] sm:max-h-[58vh] lg:max-h-[62vh] max-w-full object-contain drop-shadow-xl rounded-2xl"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling.style.display = "flex";
              }}
            />

            <div className="hidden w-64 h-80 bg-stone-900 text-white rounded-3xl border-4 border-stone-800 shadow-2xl items-center justify-center p-6 text-center">
              <p className="text-xs font-mono text-stone-400">[img]</p>
            </div>
          </button>
        </section>
      </main>

      {/* Quote Banner */}
      <section className="w-full bg-blue-600 text-white py-4 sm:py-6 px-6 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-mono tracking-tight font-light max-w-5xl mx-auto italic">
          {t.quote}
        </h2>
      </section>
    </div>
  );
}

export default HomePage;
