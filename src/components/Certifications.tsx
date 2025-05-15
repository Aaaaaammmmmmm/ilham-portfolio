
import React from 'react';
import { Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  credential?: string;
  logo?: string;
}

const Certification: React.FC<CertificationProps> = ({ title, issuer, date, credential, logo }) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center gap-4">
        {logo ? (
          <img src={logo} alt={issuer} className="w-12 h-12 object-contain" />
        ) : (
          <Award size={28} className="text-primary" />
        )}
        <div>
          <CardTitle className="text-lg">{title}</CardTitle>
          <p className="text-sm text-muted-foreground">{issuer}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-2">Issued: {date}</p>
        {credential && (
          <a 
            href={credential} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            View Credential
          </a>
        )}
      </CardContent>
    </Card>
  );
};

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "IoT Fundamentals: Connecting Things",
      issuer: "Cisco Networking Academy",
      date: "June 2023",
      credential: "#",
    },
    {
      title: "Data Analysis with Python",
      issuer: "IBM",
      date: "April 2023",
      credential: "#",
    },
    {
      title: "Machine Learning Fundamentals",
      issuer: "Stanford Online",
      date: "January 2023",
      credential: "#",
    },
    {
      title: "AWS IoT: Developing and Deploying an Internet of Things",
      issuer: "Amazon Web Services",
      date: "November 2022",
      credential: "#",
    },
    {
      title: "Data Visualization with Power BI",
      issuer: "Microsoft",
      date: "September 2022",
      credential: "#",
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "July 2022",
      credential: "#",
    }
  ];

  return (
    <section id="certifications" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center justify-center gap-2">
            <Award size={24} className="text-primary" />
            Certifications & Achievements
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and courses that have enhanced my skills in IoT engineering and data analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Certification key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
