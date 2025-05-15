
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AboutSection = () => {
  const { toast } = useToast();
  
  const handleDownloadCV = () => {
    // In a real implementation, you would link to an actual file
    toast({
      title: "CV Download Started",
      description: "Your download will begin shortly.",
    });
    
    // Simulate download process
    setTimeout(() => {
      toast({
        title: "CV Downloaded Successfully",
        description: "Thank you for your interest!",
      });
    }, 2000);
  };

  return (
    <section id="about" className="section bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              As a recent graduate with a degree in Data Analytics, I specialize in creating IoT ecosystems 
              and data analysis solutions that bridge the gap between physical devices and actionable insights.
            </p>
            
            <p className="text-lg text-gray-700">
              My academic journey at Universiti Teknologi PETRONAS (UTP) has equipped me with a strong foundation 
              in sensor integration, data processing, and visualization techniques. I'm particularly proud of my 
              capstone project, <span className="font-semibold">"CampWise"</span> - an IoT-based campsite booking 
              platform with real-time environmental alerts.
            </p>
            
            <p className="text-lg text-gray-700">
              Beyond technical skills, I value problem-solving, collaborative teamwork, and continuous learning. 
              I'm passionate about creating solutions that not only work technically but deliver meaningful value 
              to users and organizations.
            </p>
            
            <div className="pt-4">
              <Button onClick={handleDownloadCV} className="flex items-center gap-2">
                <Download size={18} />
                Download CV
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -z-10 w-[90%] h-[90%] rounded-full bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
                alt="Muhammad Ilham - Profile"
                className="rounded-lg shadow-soft w-full max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
