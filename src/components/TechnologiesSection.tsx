
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const technologies = [
  {
    name: 'Python',
    icon: '🐍',
    description: 'Data analysis, automation, and IoT integrations'
  },
  {
    name: 'ThingsBoard',
    icon: '📊',
    description: 'IoT data visualization and device management'
  },
  {
    name: 'Grafana',
    icon: '📈',
    description: 'Real-time data monitoring and dashboards'
  },
  {
    name: 'MQTT',
    icon: '🔄',
    description: 'Lightweight messaging protocol for IoT'
  },
  {
    name: 'Raspberry Pi',
    icon: '🥧',
    description: 'Edge computing and IoT device prototyping'
  },
  {
    name: 'SQL',
    icon: '🗄️',
    description: 'Database management and data queries'
  },
  {
    name: 'TensorFlow',
    icon: '🧠',
    description: 'Machine learning and predictive analytics'
  },
  {
    name: 'Arduino',
    icon: '🔌',
    description: 'Microcontroller programming for sensors'
  },
  {
    name: 'Power BI',
    icon: '💹',
    description: 'Business intelligence and data reporting'
  }
];

const TechnologiesSection = () => {
  return (
    <section id="technologies" className="section py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Technologies & Tools</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
          <p className="text-lg text-gray-700 text-center max-w-3xl">
            Here are the technologies and tools I specialize in for IoT development and data analysis.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={tech.name} 
              className="animate-fade-in-up" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="tech-card h-full shadow-soft hover:shadow-md transition-all">
                <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                  <div className="text-4xl mb-4">{tech.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{tech.name}</h3>
                  <p className="text-gray-600 text-sm text-center">{tech.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
