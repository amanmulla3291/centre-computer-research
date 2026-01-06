import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Shield, Award, BookOpen, Users, FileCheck, MessageCircle } from 'lucide-react';

export const Home = () => {
  const features = [
    {
      icon: FileCheck,
      title: 'Complete Documentation',
      description: 'Synopsis, SRS, Design Diagrams, UML, and installation guides prepared to university standards.'
    },
    {
      icon: BookOpen,
      title: 'Viva-Voce Preparation',
      description: 'Comprehensive question-answer kit with 20+ expected questions specific to your project domain.'
    },
    {
      icon: Shield,
      title: 'Plagiarism-Free Assurance',
      description: 'Original configurations and implementations. Every project is uniquely designed for your requirements.'
    },
    {
      icon: Award,
      title: 'Industry Standards',
      description: 'Projects built using RHEL, AWS, Ansible, Docker, and enterprise-grade tools that enhance your resume.'
    },
    {
      icon: Users,
      title: 'Technical Mentorship',
      description: 'Direct guidance from experienced professionals with PhD/M.Tech backgrounds for complete clarity.'
    },
    {
      icon: MessageCircle,
      title: 'Environment Setup Support',
      description: 'Hands-on assistance for installation, configuration, and deployment to ensure smooth project execution.'
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-b from-blue-50 to-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Don't Just Submit a Project.
              <span className="text-primary block mt-2">Deploy a Career.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Industry-ready academic projects for MSc, MCA, and B.E./B.Tech students. Bridge the gap between university syllabi and real-world IT standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects">
                <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                  Explore Projects
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10">
                  Request Free Synopsis Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="content-section bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Academic Excellence Meets Industry Standards
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We understand the dual challenge: passing with distinction while building skills that matter in the job market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="content-section bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Specialized Domains
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our expertly crafted project categories aligned with current industry demands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Infrastructure & Cloud
              </h3>
              <p className="text-gray-600 mb-4">
                Multi-tier VPC setups, High Availability configurations, AWS deployments using RHEL and enterprise Linux.
              </p>
              <Link to="/projects" className="text-primary font-medium hover:underline">
                View Projects →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Cyber Security & SOC
              </h3>
              <p className="text-gray-600 mb-4">
                Log Analysis with ELK Stack, Intrusion Detection Systems, Zero-Trust frameworks, and threat intelligence.
              </p>
              <Link to="/projects" className="text-primary font-medium hover:underline">
                View Projects →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                DevOps & Automation
              </h3>
              <p className="text-gray-600 mb-4">
                CI/CD pipelines, Infrastructure as Code with Terraform, containerization using Docker and Kubernetes.
              </p>
              <Link to="/projects" className="text-primary font-medium hover:underline">
                View Projects →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="content-section bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Centre for Computer Research?
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Faculty-Friendly Documentation
                </h3>
                <p className="text-gray-600">
                  Our documentation follows university guidelines and includes all necessary technical diagrams, flowcharts, and explanations that satisfy academic evaluation criteria.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Original Implementation Guarantee
                </h3>
                <p className="text-gray-600">
                  Every configuration is custom-built. We don't provide generic, copy-pasted solutions. Your project will pass plagiarism checks with confidence.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Bridge to Industry
                </h3>
                <p className="text-gray-600">
                  Projects designed to showcase on your resume. Learn real-world tools and methodologies that recruitment teams recognize and value.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Complete Viva-Voce Preparation
                </h3>
                <p className="text-gray-600">
                  Detailed Q&A document covering technical concepts, implementation decisions, and potential examiner questions. Face your viva with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="content-section bg-primary/5">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Build Your Future?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Discuss your project requirements with a technical mentor. Get expert guidance on domain selection, tool choices, and implementation approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-accent hover:bg-accent/90 w-full sm:w-auto">
                  WhatsApp Inquiry
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Send Detailed Inquiry
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
