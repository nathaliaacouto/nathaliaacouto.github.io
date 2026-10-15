import React from "react";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";

function AboutPage({ t, setCurrentPage }) {
  return (
    <div className="flex-1 flex flex-col justify-between">
      <AboutSection t={t} />
      <ContactSection t={t} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default AboutPage;
