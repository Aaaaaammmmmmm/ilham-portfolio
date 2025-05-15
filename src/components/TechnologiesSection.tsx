import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const technologies = [
  {
    name: 'Python',
    image: "python-logo.png",
    description: 'Data analysis, automation, and IoT integrations'
  },
  {
    name: 'ThingsBoard',
    image: 'thingsboard-logo.png',
    description: 'IoT data visualization and device management'
  },
  {
    name: 'Google Collab',
    image: 'grafana-logo.png',
    description: 'Real-time data monitoring and dashboards'
  },
  {
    name: 'MQTT',
    image: 'mqtt-ver.png',
    description: 'Lightweight messaging protocol for IoT'
  },
  {
    name: 'Raspberry Pi',
    image: 'raspberry-pi-logo.png',
    description: 'Edge computing and IoT device prototyping'
  },
  {
    name: 'SQL',
    image: 'sql-logo.png',
    description: 'Database management and data queries'
  },
  {
    name: 'TensorFlow',
    image: 'tensorflow-logo.png',
    description: 'Machine learning and predictive analytics'
  },
  {
    name: 'Arduino IDE',
    image: 'arduino-logo.png',
    description: 'Microcontroller programming for sensors'
  },
  {
    name: 'Power BI',
    image: 'powerbi-logo.png',
    description: 'Business intelligence and data reporting'
  }
];

const TechnologiesSection = () => {
  return (
    <section id="technologies" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies & Tools</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl">
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
              <Card className="h-full shadow hover:shadow-lg transition-all">
                <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                  <div className="mb-4">
                    <img
                      src={`/images/${tech.image}`}
                      alt={tech.name}
                      className="h-12 w-12 object-contain"
                      loading="lazy"
                    />
                  </div>
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
