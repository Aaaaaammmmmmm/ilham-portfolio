
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface SkillItemProps {
  name: string;
  level: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <Progress value={level} className="h-2" />
    </div>
  );
};

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: "IoT Prototyping", level: 90 },
    { name: "Sensor Integration", level: 85 },
    { name: "Data Analysis", level: 80 },
    { name: "Dashboard Visualization", level: 85 },
    { name: "Cloud IoT Services", level: 75 },
    { name: "Machine Learning", level: 70 }
  ];

  const softSkills = [
    { name: "Problem-solving", level: 85 },
    { name: "Communication", level: 85 },
    { name: "Team Collaboration", level: 90 },
    { name: "Project Management", level: 90 },
    { name: "Continuous Learning", level: 95 },
    { name: "Adaptability", level: 85 }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My expertise spans across IoT engineering and data analysis, combining hardware knowledge with analytical capabilities
            to deliver comprehensive solutions.
          </p>
        </div>

        <Tabs defaultValue="technical" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="technical">Technical Skills</TabsTrigger>
            <TabsTrigger value="soft">Soft Skills</TabsTrigger>
          </TabsList>
          
          <TabsContent value="technical" className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                {technicalSkills.map((skill, index) => (
                  <SkillItem key={index} name={skill.name} level={skill.level} />
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="soft" className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                {softSkills.map((skill, index) => (
                  <SkillItem key={index} name={skill.name} level={skill.level} />
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
