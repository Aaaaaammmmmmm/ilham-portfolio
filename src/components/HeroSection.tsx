
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="home" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="gradient-blob w-[600px] h-[600px] right-0 top-0 opacity-20"></div>
      <div className="gradient-blob w-[400px] h-[400px] left-0 bottom-0 opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6 animate-fade-in-up">
            <Badge className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-1 text-xs md:text-sm font-medium text-blue-800">
              IoT Engineer & Data Analyst
            </Badge>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-primary-600">Muhammad Ilham</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-xl animate-fade-in-up animate-delay-100">
              Passionate about creating data-driven IoT solutions and analytics that transform raw data into meaningful insights.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2 animate-fade-in-up animate-delay-200">
              <a href="#projects">
                <Button size="lg" className="rounded-full">
                  View My Projects
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg" className="rounded-full">
                  Contact Me
                </Button>
              </a>
            </div>
            
            <div className="flex items-center gap-4 pt-4 animate-fade-in-up animate-delay-300">
              <a 
                href="https://www.linkedin.com/in/muhammad-ilham-rizalman-haris" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/Aaaaaammmmmmm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="mailto:muhdilham2002@email.com" 
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in-up animate-delay-200">
            <div className="relative">
              {/* Hero image with gradient background */}
              <div className="absolute -z-10 w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80" 
                alt="IoT Engineer" 
                className="rounded-2xl w-full max-w-[300px] md:max-w-[350px] object-cover shadow-soft"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
