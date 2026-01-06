import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { GraduationCap, Users, Target, Award, CheckCircle2 } from 'lucide-react';

export const About = () => {
  const values = [
    {
      icon: GraduationCap,
      title: 'Academic Excellence',
      description: 'We maintain the highest standards of academic integrity, ensuring every project meets university evaluation criteria and research standards.'
    },
    {
      icon: Users,
      title: 'Student Success',
      description: 'Our primary goal is student achievement—both in academic evaluation and in building practical skills for professional careers.'
    },
    {
      icon: Target,
      title: 'Industry Alignment',
      description: 'Projects are designed to reflect current industry practices, using tools and technologies that employers actively seek.'
    },
    {
      icon: Award,
      title: 'Technical Depth',
      description: 'We prioritize deep technical understanding over superficial implementations, preparing students for challenging viva-voce examinations.'
    }
  ];

  const expertise = [
    'Infrastructure Architecture & Cloud Computing',
    'Cyber Security & SOC Implementation',
    'DevOps Practices & Automation',
    'Linux System Administration (RHEL/CentOS)',
    'AWS Cloud Services & Deployments',
    'Container Orchestration & Kubernetes',
    'Security Analysis & Threat Intelligence',
    'Configuration Management & IaC'
  ];

  return (
    <main>
      {/* Header Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About Centre for Computer Research
            </h1>
            <p className="text-lg text-gray-600">
              Bridging the gap between academic requirements and industry standards through comprehensive technical guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="content-section">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We exist to solve a fundamental problem in Indian technical education: the disconnect between theoretical syllabi and practical implementation. Students often struggle to find quality guidance for final-year projects that satisfy both academic evaluators and contribute to career readiness.
              </p>
            </div>

            <div className="bg-primary/5 p-8 rounded-lg border border-primary/20 mb-12">
              <p className="text-gray-700 text-center text-lg font-medium">
                "We don't just provide projects—we provide <span className="text-primary font-semibold">learning experiences</span> that prepare students for professional challenges while ensuring academic success."
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Approach</h3>
              <p className="mb-4">
                Centre for Computer Research was established by technical professionals with advanced academic qualifications (PhD and M.Tech backgrounds) who understand both the academic rigor required for university projects and the practical skills demanded by the IT industry.
              </p>
              <p className="mb-4">
                Every project we develop follows a structured methodology:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Problem Identification:</strong> Selection of relevant, current technology challenges</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Solution Design:</strong> Architecture planning using industry-standard tools</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Implementation:</strong> Hands-on configuration and deployment with best practices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Documentation:</strong> Comprehensive academic and technical documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Knowledge Transfer:</strong> Detailed explanations and viva preparation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="content-section bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-gray-200">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="content-section">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Technical Expertise
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              Our team specializes in the following domains, ensuring students receive guidance from subject matter experts:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <div key={index} className="flex items-center p-4 bg-white border border-gray-200 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="content-section bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Who We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-gray-200 text-center">
                <CardHeader>
                  <CardTitle className="text-xl">MSc Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Particularly MSc in Cyber Security, Computer Science, and related fields requiring advanced technical implementations and research orientation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200 text-center">
                <CardHeader>
                  <CardTitle className="text-xl">MCA Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Master of Computer Applications students seeking industry-relevant projects in cloud computing, DevOps, and infrastructure domains.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200 text-center">
                <CardHeader>
                  <CardTitle className="text-xl">B.E./B.Tech Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Final-year engineering students in Computer Science, IT, and Electronics branches requiring comprehensive project support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="content-section">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Commitment to Quality
            </h2>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                We understand that your academic project is more than just a requirement—it's a culmination of your degree and often the first technical showcase for future employers. That's why we commit to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mt-6">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Zero plagiarism with original implementations</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Complete technical and academic documentation</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Hands-on support until project completion</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Thorough viva-voce preparation materials</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
