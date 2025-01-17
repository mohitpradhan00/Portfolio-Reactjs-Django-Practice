import React from 'react'
import Navbar from './Navbar'
import HeroSection from "./HeroSection";
import About from "./About";
import EducationAndExperience from "./EducationAndExperience";
import Projects from "./Projects";
import Contact from "./Contact";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <EducationAndExperience />
      <Projects />
      <Contact />
    </>
  );
}

export default Portfolio
