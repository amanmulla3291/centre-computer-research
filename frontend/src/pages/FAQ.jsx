import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

export const FAQ = () => {
  const faqs = [
    {
      question: 'Are your projects completely original and plagiarism-free?',
      answer: 'Yes, absolutely. Every project we deliver is custom-configured with original implementations. We do not provide generic, copy-pasted code. Each configuration is uniquely designed based on your requirements, ensuring your project will pass any plagiarism detection software. We understand the serious academic consequences of plagiarism and take this commitment very seriously.'
    },
    {
      question: 'What documentation do you provide with each project?',
      answer: 'Our complete package includes: (1) Project Synopsis with problem statement and objectives, (2) Software Requirements Specification (SRS) document, (3) System Design with architecture diagrams and data flow diagrams, (4) UML diagrams (use case, class, sequence, activity), (5) Step-by-step installation guide with screenshots, (6) Complete technical documentation, (7) User manual, and (8) Testing documentation. All documents follow university standards and are formatted for academic submission.'
    },
    {
      question: 'Do you provide support for project installation and setup?',
      answer: 'Yes, we provide comprehensive environment setup assistance. This includes guidance on installing required software, configuring virtual machines or cloud instances, troubleshooting installation errors, and ensuring your project runs correctly in your environment. We offer support through WhatsApp, email, and remote sessions if needed to ensure smooth implementation.'
    },
    {
      question: 'How do you prepare students for viva-voce examinations?',
      answer: 'We provide a detailed Viva-Voce Preparation Kit containing 20-25 expected questions with comprehensive answers specific to your project. This includes technical concepts explanation, justification for design decisions, alternative approaches discussion, and likely examiner questions. We also offer consultation sessions where we review the project with you and ensure you understand every aspect thoroughly.'
    },
    {
      question: 'Can you customize projects according to my university guidelines?',
      answer: 'Absolutely. We understand that different universities have specific requirements regarding tools, technologies, documentation format, or project scope. We adapt our projects to match your university\'s guidelines, preferred technology stack, and evaluation criteria. Share your requirements with us, and we will customize accordingly.'
    },
    {
      question: 'What tools and technologies do you use?',
      answer: 'We work with industry-standard tools including: Linux distributions (RHEL, CentOS, Ubuntu), Cloud platforms (AWS, Azure), Virtualization (VMware, VirtualBox, KVM), Configuration Management (Ansible, Terraform), Containers (Docker, Kubernetes), Security tools (ELK Stack, Snort, Wazuh, OpenVAS), CI/CD tools (Jenkins, GitLab), Databases (MySQL, PostgreSQL, MongoDB), and various specialized tools based on project requirements.'
    },
    {
      question: 'How long does it take to complete and deliver a project?',
      answer: 'Timeline depends on project complexity and customization requirements. Standard projects typically take 7-10 days from requirement confirmation to delivery. Research-oriented projects may require 12-15 days due to literature review and methodology development. Rush delivery is available for urgent requirements with additional coordination.'
    },
    {
      question: 'Do you provide projects for specific domains like Cyber Security or Cloud Computing?',
      answer: 'Yes, we specialize in three main domains: (1) Infrastructure & Cloud Computing - including AWS deployments, high availability setups, and Linux administration, (2) Cyber Security & SOC - including intrusion detection, log analysis, and security frameworks, (3) DevOps & Automation - including CI/CD pipelines, containerization, and IaC. Each domain has multiple project options at varying complexity levels.'
    },
    {
      question: 'What if I face issues during project demonstration?',
      answer: 'We provide ongoing support even after project delivery. If you encounter any issues during demonstration or viva, you can contact us immediately via WhatsApp or phone. We offer troubleshooting assistance, clarification of concepts, and can schedule emergency consultation sessions to resolve problems quickly.'
    },
    {
      question: 'Can you help with research paper writing for my project?',
      answer: 'For research-oriented projects, we provide comprehensive research documentation including literature review, research methodology, results analysis, and conclusions. We also guide you on structuring academic papers following IEEE or other publication standards. However, the actual paper submission and authorship remain your responsibility.'
    },
    {
      question: 'Are your projects suitable for IEEE paper publications?',
      answer: 'Our research projects are designed with publication potential in mind. They include novel implementations, proper experimental methodology, and results analysis. However, publication success depends on multiple factors including originality of approach, quality of results, and journal/conference standards. We provide the foundational work and guide you on the publication process.'
    },
    {
      question: 'What is the difference between standard projects and research projects?',
      answer: 'Standard projects focus on implementation of established technologies and techniques, suitable for typical academic requirements. Research projects are based on recent IEEE/ACM papers, include literature review, novel approaches, experimental methodology, and results analysis. Research projects are more suitable for MSc dissertations, thesis work, or students aiming for publications.'
    },
    {
      question: 'Do you provide training on the technologies used in the project?',
      answer: 'Yes, as part of our technical mentorship, we provide conceptual explanations of all technologies used. During project handover, we conduct walkthrough sessions explaining how each component works, why specific tools were chosen, and how to troubleshoot common issues. We ensure you gain practical understanding, not just project files.'
    },
    {
      question: 'How do your projects help with job placements?',
      answer: 'Our projects use current industry-standard tools and practices. This means you gain hands-on experience with technologies that companies actively seek (AWS, Docker, Kubernetes, ELK Stack, etc.). You can confidently discuss your project in interviews, and the practical implementation knowledge significantly strengthens your technical profile. Many recruiters specifically look for candidates with cloud, security, or DevOps project experience.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept payments through bank transfer, UPI, and other standard payment methods. Payment terms and project costs are discussed after understanding your specific requirements. We provide detailed quotations before starting any work. Please contact us via WhatsApp or the contact form to discuss your project and receive pricing information.'
    }
  ];

  return (
    <main>
      {/* Header Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our projects, support, and services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="content-section">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:text-primary py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="content-section bg-gray-50">
        <div className="section-container">
          <Card className="max-w-3xl mx-auto border-gray-200 bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Still Have Questions?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center mb-6">
                Can't find the answer you're looking for? Our technical team is here to help. Reach out to us directly for personalized assistance with your project requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-accent hover:bg-accent/90 w-full sm:w-auto">
                    WhatsApp Us
                  </Button>
                </a>
                <Link to="/contact">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Send Inquiry
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
