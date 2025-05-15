import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send('service_6az0fkn', 'template_iuf2pyi', formData, 'Jc6oSulgYZTINEDB1')
      .then(() => {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        toast({
          title: "Failed to send message.",
          description: "Please try again later.",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="section py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
          <p className="text-lg text-gray-700 text-center max-w-3xl">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-gray-700 mb-6">
                I'm currently available for full-time positions. Feel free to contact me!
              </p>
              <div className="space-y-4">
                <a href="mailto:muhdilham2002@email.com" className="flex items-center gap-3 text-gray-700 hover:text-primary-600">
                  <Mail className="h-5 w-5" />
                  <span>muhdilham2002@email.com</span>
                </a>
                <a href="https://www.linkedin.com/in/muhammad-ilham-rizalman-haris" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-primary-600">
                  <Linkedin className="h-5 w-5" />
                  <span>linkedin.com/muhammadilham</span>
                </a>
                <a href="https://github.com/Aaaaaammmmmmm" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-primary-600">
                  <Github className="h-5 w-5" />
                  <span>github.com/muhammadilham</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
