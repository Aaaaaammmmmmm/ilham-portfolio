
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "IIoT Dashboard for Sensor Monitoring",
    description: "An industrial IoT dashboard for real-time monitoring of temperature, humidity, and pressure sensors in manufacturing environments.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    tags: ["Python", "MQTT", "ThingsBoard", "React"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "CampWise IoT Booking App",
    description: "Smart campsite booking platform with real-time environmental monitoring and automated alerts for weather conditions.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
    tags: ["Raspberry Pi", "Python", "MQTT", "React Native"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Energy Consumption Data Analysis",
    description: "Data analysis project focused on optimizing energy consumption in smart buildings using historical sensor data.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    tags: ["Python", "Pandas", "TensorFlow", "Power BI"],
    demoLink: "#",
    githubLink: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Projects</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
          <p className="text-lg text-gray-700 text-center max-w-3xl">
            Explore my portfolio of IoT and data analysis projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="project-card overflow-hidden shadow-soft hover:shadow-md transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <CardHeader>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="blue" className="bg-blue-100 text-blue-800">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between border-t pt-4">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <ExternalLink size={16} />
                    Live Demo
                  </Button>
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Github size={16} />
                    Source Code
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
