import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { FileText, TrendingUp, BookOpen, Lightbulb } from 'lucide-react';

export const ResearchProjects = () => {
  const researchProjects = [
    {
      title: 'AI-Driven Security Information and Event Management (SIEM)',
      domain: 'Cyber Security',
      ieee: 'IEEE Access 2024',
      description: 'Implementation of machine learning algorithms for anomaly detection in security logs, automated threat classification, and predictive incident response.',
      technologies: ['Python', 'TensorFlow', 'ELK Stack', 'Apache Kafka', 'Scikit-learn', 'Feature Engineering'],
      researchFocus: 'Reducing false positives in intrusion detection using ensemble ML models and behavioral analysis.',
      methodology: 'Supervised and unsupervised learning with real-world network traffic datasets (KDD Cup, NSL-KDD).'
    },
    {
      title: 'Serverless Computing Architecture for Scalable Microservices',
      domain: 'Cloud Computing',
      ieee: 'IEEE Cloud Computing 2024',
      description: 'Design and deployment of event-driven serverless applications using AWS Lambda, Azure Functions, and Google Cloud Functions with automatic scaling.',
      technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'SNS/SQS', 'CloudWatch', 'Serverless Framework'],
      researchFocus: 'Cost optimization and latency reduction in serverless architectures compared to traditional containerized deployments.',
      methodology: 'Performance benchmarking under varying load conditions with cost-benefit analysis.'
    },
    {
      title: 'Blockchain-Based Identity Management for IoT Devices',
      domain: 'Blockchain & IoT',
      ieee: 'IEEE IoT Journal 2023',
      description: 'Decentralized identity verification system for IoT ecosystems using blockchain smart contracts to prevent unauthorized access.',
      technologies: ['Ethereum', 'Solidity', 'Web3.js', 'IPFS', 'Raspberry Pi', 'MQTT Protocol'],
      researchFocus: 'Ensuring data integrity and device authentication in distributed IoT networks without centralized authorities.',
      methodology: 'Smart contract development with security audits and transaction throughput analysis.'
    },
    {
      title: 'Zero-Trust Network Access (ZTNA) Implementation Framework',
      domain: 'Network Security',
      ieee: 'IEEE Transactions on Network and Service Management 2024',
      description: 'Practical implementation of zero-trust principles with identity-based access controls, continuous authentication, and microsegmentation.',
      technologies: ['WireGuard', 'OpenID Connect', 'OAuth 2.0', 'Software-Defined Perimeter', 'Policy Engines'],
      researchFocus: 'Comparing security posture improvements and latency impact versus traditional VPN-based architectures.',
      methodology: 'Attack simulation testing and performance metrics collection in controlled environments.'
    },
    {
      title: 'Container Security Scanning and Runtime Protection System',
      domain: 'DevSecOps',
      ieee: 'IEEE Software 2024',
      description: 'Automated vulnerability scanning pipeline for container images with runtime behavior monitoring and policy enforcement.',
      technologies: ['Trivy', 'Falco', 'OPA', 'Kubernetes', 'Docker', 'Admission Controllers'],
      researchFocus: 'Detection of zero-day vulnerabilities and malicious runtime activities in containerized environments.',
      methodology: 'Integration of multiple scanning tools with custom rule development and false positive reduction.'
    },
    {
      title: 'Intelligent Log Analysis Using Natural Language Processing',
      domain: 'Data Analytics',
      ieee: 'IEEE Big Data 2023',
      description: 'Application of NLP techniques to extract insights from unstructured log data, automate root cause analysis, and predict system failures.',
      technologies: ['BERT', 'Transformer Models', 'Apache Spark', 'Elasticsearch', 'Logstash', 'Jupyter Notebooks'],
      researchFocus: 'Automated incident categorization and correlation across distributed systems using semantic understanding.',
      methodology: 'Training transformer models on labeled log datasets with performance evaluation metrics.'
    },
    {
      title: 'Hybrid Cloud Disaster Recovery with RPO/RTO Optimization',
      domain: 'Cloud Infrastructure',
      ieee: 'IEEE Transactions on Cloud Computing 2024',
      description: 'Cost-effective disaster recovery strategy combining on-premise and cloud resources with automated failover mechanisms.',
      technologies: ['AWS', 'Terraform', 'Ansible', 'PostgreSQL Replication', 'S3/Glacier', 'Lambda Functions'],
      researchFocus: 'Achieving sub-15-minute RTO while minimizing cloud storage costs through intelligent tiering.',
      methodology: 'Failure injection testing and recovery time measurements with cost analysis.'
    },
    {
      title: 'Federated Learning for Privacy-Preserving Threat Intelligence',
      domain: 'AI & Security',
      ieee: 'IEEE Intelligent Systems 2024',
      description: 'Distributed machine learning approach where organizations collaboratively train threat detection models without sharing raw data.',
      technologies: ['TensorFlow Federated', 'Differential Privacy', 'Homomorphic Encryption', 'Python', 'gRPC'],
      researchFocus: 'Maintaining model accuracy while guaranteeing data privacy through cryptographic techniques.',
      methodology: 'Simulating multi-party computation with privacy budget allocation and convergence analysis.'
    }
  ];

  return (
    <main>
      {/* Header Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Research-Driven Academic Projects
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              IEEE-standard research implementations designed for MSc dissertations, MCA theses, and advanced academic requirements. Each project is grounded in current research literature and addresses real-world problems.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <FileText className="h-4 w-4 text-primary" />
                <span className="text-gray-700">IEEE Referenced</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="text-gray-700">Future-Proof Topics</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <Lightbulb className="h-4 w-4 text-primary" />
                <span className="text-gray-700">Novel Implementation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Methodology Section */}
      <section className="content-section bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Research Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Literature Review</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    We identify cutting-edge research papers from IEEE, ACM, and other reputable journals, then extract implementable problem statements.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Practical Translation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Complex theoretical concepts are converted into student-friendly implementations using accessible tools and environments.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Academic Rigor</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Complete research documentation including hypothesis, methodology, results analysis, and conclusions following academic standards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Research Projects Catalog */}
      <section className="content-section bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Research Projects
          </h2>
          
          <div className="space-y-6">
            {researchProjects.map((project, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge className="bg-primary text-white">{project.domain}</Badge>
                        <Badge variant="outline" className="text-gray-600">
                          {project.ieee}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl mb-3">{project.title}</CardTitle>
                      <CardDescription className="text-base text-gray-700">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-semibold text-gray-700 block mb-2">Technologies Used:</span>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-gray-200">
                      <div className="mb-3">
                        <span className="text-sm font-semibold text-gray-700">Research Focus: </span>
                        <span className="text-sm text-gray-600">{project.researchFocus}</span>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-gray-700">Methodology: </span>
                        <span className="text-sm text-gray-600">{project.methodology}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Deliverables */}
      <section className="content-section bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Research Project Deliverables
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Literature Review Document
                </h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive review of 10-15 recent IEEE/ACM papers with critical analysis, identifying research gaps and proposed solutions.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Research Methodology Chapter
                </h3>
                <p className="text-gray-600 text-sm">
                  Detailed explanation of research design, data collection methods, experimental setup, and validation approaches.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Implementation Code & Documentation
                </h3>
                <p className="text-gray-600 text-sm">
                  Complete source code with inline comments, setup instructions, and technical documentation for reproducibility.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Results Analysis & Visualization
                </h3>
                <p className="text-gray-600 text-sm">
                  Experimental results with statistical analysis, comparison charts, performance metrics, and academic-standard graphs.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Conclusion & Future Scope
                </h3>
                <p className="text-gray-600 text-sm">
                  Summary of findings, contribution to existing research, limitations, and directions for future work.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Presentation & Defense Material
                </h3>
                <p className="text-gray-600 text-sm">
                  PowerPoint slides for thesis defense with speaker notes and Q&A preparation covering potential examiner questions.
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
              Have a Specific Research Topic in Mind?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We can develop custom research projects based on your area of interest, university requirements, or faculty suggestions. Our team will conduct literature review and design implementable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                  Request Research Consultation
                </Button>
              </Link>
              <Link to="/projects">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  View Standard Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResearchProjects;
