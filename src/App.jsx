import { useState, useEffect } from "react";
import { translationDict } from "./locales/translation";
import Navbar from "./components/NavBar";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";

function App() {
  const [lang, setLang] = useState("en");
  const [currentPage, setCurrentPage] = useState("home");

  const t = translationDict[lang];
  const bgColor = "bg-[#F7F5F5]";

  // Scroll smoothly to top when switching pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div
      className={`min-h-screen ${bgColor} text-stone-800 font-sans transition-colors antialiased flex flex-col justify-between`}
    >
      {/* Header / Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        t={t}
      />

      {/* Home Page */}
      {currentPage === "home" && (
        <HomePage setCurrentPage={setCurrentPage} t={t} />
      )}

      {/* About Page */}
      {currentPage === "about" && (
        <AboutPage setCurrentPage={setCurrentPage} t={t} />
      )}
    </div>
  );
}

export default App;
