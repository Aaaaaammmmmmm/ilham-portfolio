
import React, { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";

const Index = () => {
  useEffect(() => {
    document.title = "Muhammad Ilham | IoT Engineer & Data Analyst";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <TechnologiesSection />
        <Skills />
        <ProjectsSection />
        <Certifications />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
