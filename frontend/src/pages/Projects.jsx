import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Server, Shield, Cog, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export const Projects = () => {
  const projectCategories = {
    infrastructure: [
      {
        title: 'Multi-Tier VPC Architecture with High Availability on AWS',
        techStack: ['AWS VPC', 'RHEL 8/9', 'Load Balancers', 'Auto Scaling', 'RDS', 'CloudWatch'],
        learningOutcome: 'Design and deploy a production-grade three-tier application infrastructure with automated failover, ensuring 99.9% uptime using AWS native services.',
        complexity: 'Advanced'
      },
      {
        title: 'Enterprise Linux Server Hardening and Security Audit',
        techStack: ['RHEL 9', 'SELinux', 'Firewalld', 'Auditd', 'OpenSCAP', 'CIS Benchmarks'],
        learningOutcome: 'Implement comprehensive server hardening techniques, conduct security audits, and achieve compliance with industry security standards.',
        complexity: 'Intermediate'
      },
      {
        title: 'Hybrid Cloud Deployment with AWS and On-Premise Integration',
        techStack: ['AWS Direct Connect', 'VPN Gateway', 'Route 53', 'RHEL', 'Active Directory'],
        learningOutcome: 'Establish secure connectivity between on-premise infrastructure and cloud environments with proper DNS resolution and identity management.',
        complexity: 'Advanced'
      },
      {
        title: 'High-Performance Web Server Cluster with Load Balancing',
        techStack: ['Apache/Nginx', 'HAProxy', 'Keepalived', 'RHEL', 'NFS', 'MariaDB Replication'],
        learningOutcome: 'Build scalable web infrastructure with automatic failover, session persistence, and database replication for high availability.',
        complexity: 'Intermediate'
      },
      {
        title: 'Automated Backup and Disaster Recovery Solution',
        techStack: ['Bacula', 'Rsync', 'AWS S3/Glacier', 'Shell Scripting', 'Cron', 'LVM Snapshots'],
        learningOutcome: 'Design automated backup strategies with multiple tiers, implement disaster recovery procedures, and validate restoration processes.',
        complexity: 'Intermediate'
      },
      {
        title: 'Centralized Log Management and Monitoring System',
        techStack: ['Rsyslog', 'Logrotate', 'Elasticsearch', 'Kibana', 'Prometheus', 'Grafana'],
        learningOutcome: 'Aggregate logs from distributed systems, create monitoring dashboards, and set up alerting mechanisms for proactive incident management.',
        complexity: 'Advanced'
      }
    ],
    security: [
      {
        title: 'Security Operations Center (SOC) with ELK Stack Implementation',
        techStack: ['Elasticsearch', 'Logstash', 'Kibana', 'Filebeat', 'Wazuh', 'SIEM Dashboards'],
        learningOutcome: 'Build a complete SOC infrastructure for real-time security monitoring, threat detection, and incident response with correlation rules.',
        complexity: 'Advanced'
      },
      {
        title: 'Network Intrusion Detection System with Snort and Suricata',
        techStack: ['Snort/Suricata', 'Barnyard2', 'PulledPork', 'ELK Stack', 'Security Onion'],
        learningOutcome: 'Deploy signature and anomaly-based intrusion detection with rule management, alert analysis, and integration with SIEM platforms.',
        complexity: 'Advanced'
      },
      {
        title: 'Zero-Trust Network Architecture Implementation',
        techStack: ['WireGuard VPN', 'Multi-Factor Authentication', 'Identity Management', 'Microsegmentation'],
        learningOutcome: 'Implement zero-trust principles with identity-based access controls, network segmentation, and continuous verification mechanisms.',
        complexity: 'Advanced'
      },
      {
        title: 'Web Application Firewall with ModSecurity and OWASP Rules',
        techStack: ['ModSecurity', 'OWASP CRS', 'Nginx/Apache', 'GeoIP Blocking', 'Rate Limiting'],
        learningOutcome: 'Configure WAF to protect against OWASP Top 10 vulnerabilities, implement custom rules, and analyze attack patterns.',
        complexity: 'Intermediate'
      },
      {
        title: 'Vulnerability Assessment and Penetration Testing Framework',
        techStack: ['OpenVAS', 'Nmap', 'Metasploit', 'Nessus', 'OWASP ZAP', 'Kali Linux'],
        learningOutcome: 'Conduct comprehensive security assessments, exploit vulnerabilities in controlled environments, and generate professional audit reports.',
        complexity: 'Advanced'
      },
      {
        title: 'Automated Threat Intelligence and Malware Analysis Platform',
        techStack: ['MISP', 'TheHive', 'Cortex', 'VirusTotal API', 'Yara Rules', 'Sandbox Analysis'],
        learningOutcome: 'Aggregate threat intelligence feeds, automate malware analysis workflows, and share indicators of compromise with security teams.',
        complexity: 'Advanced'
      }
    ],
    devops: [
      {
        title: 'Complete CI/CD Pipeline with Jenkins and GitLab Integration',
        techStack: ['Jenkins', 'GitLab CI', 'Maven/Gradle', 'SonarQube', 'Nexus Repository', 'Docker'],
        learningOutcome: 'Automate build, test, and deployment workflows with code quality checks, artifact management, and containerized deployments.',
        complexity: 'Advanced'
      },
      {
        title: 'Infrastructure as Code with Terraform and AWS',
        techStack: ['Terraform', 'AWS', 'State Management', 'Modules', 'Workspaces', 'Version Control'],
        learningOutcome: 'Manage cloud infrastructure declaratively, implement reusable modules, and maintain infrastructure versioning with proper state management.',
        complexity: 'Advanced'
      },
      {
        title: 'Kubernetes Cluster Deployment with Microservices Architecture',
        techStack: ['Kubernetes', 'Docker', 'Helm Charts', 'Ingress Controllers', 'Persistent Volumes', 'ConfigMaps'],
        learningOutcome: 'Orchestrate containerized applications with service discovery, auto-scaling, rolling updates, and centralized configuration management.',
        complexity: 'Advanced'
      },
      {
        title: 'Configuration Management with Ansible Automation',
        techStack: ['Ansible', 'Playbooks', 'Roles', 'Inventory Management', 'Ansible Tower', 'Jinja2 Templates'],
        learningOutcome: 'Automate server provisioning, application deployment, and configuration drift management across multiple environments.',
        complexity: 'Intermediate'
      },
      {
        title: 'Containerized Application Deployment with Docker Compose',
        techStack: ['Docker', 'Docker Compose', 'Multi-Stage Builds', 'Volumes', 'Networks', 'Docker Registry'],
        learningOutcome: 'Build optimized container images, orchestrate multi-container applications, and implement proper networking and data persistence.',
        complexity: 'Intermediate'
      },
      {
        title: 'GitOps Workflow Implementation with ArgoCD',
        techStack: ['ArgoCD', 'Kubernetes', 'Git', 'Kustomize', 'Helm', 'Automated Sync'],
        learningOutcome: 'Implement declarative continuous deployment with Git as single source of truth, automated synchronization, and rollback capabilities.',
        complexity: 'Advanced'
      }
    ]
  };

  const getComplexityColor = (complexity) => {
    switch(complexity) {
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-green-100 text-green-800';
    }
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'infrastructure':
        return <Server className="h-5 w-5" />;
      case 'security':
        return <Shield className="h-5 w-5" />;
      case 'devops':
        return <Cog className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <main>
      {/* Header Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Industry-Standard Academic Projects
            </h1>
            <p className="text-lg text-gray-600">
              Choose from our comprehensive catalog of implementation-ready projects. Each project includes complete documentation, technical support, and viva-voce preparation.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Catalog */}
      <section className="content-section">
        <div className="section-container">
          <Tabs defaultValue="infrastructure" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto mb-8">
              <TabsTrigger value="infrastructure" className="flex items-center gap-2 py-3">
                <Server className="h-4 w-4" />
                Infrastructure & Systems
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center gap-2 py-3">
                <Shield className="h-4 w-4" />
                Cyber Security
              </TabsTrigger>
              <TabsTrigger value="devops" className="flex items-center gap-2 py-3">
                <Cog className="h-4 w-4" />
                DevOps & Automation
              </TabsTrigger>
            </TabsList>

            {Object.entries(projectCategories).map(([category, projects]) => (
              <TabsContent key={category} value={category} className="space-y-6">
                {projects.map((project, index) => (
                  <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={getComplexityColor(project.complexity)}>
                              {project.complexity}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                          <CardDescription className="text-base">
                            <span className="font-semibold text-gray-700">Learning Outcome:</span> {project.learningOutcome}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <span className="text-sm font-semibold text-gray-700 block mb-2">Tech Stack:</span>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="content-section bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              The Complete Package - What You Receive
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-primary" />
                    Technical Implementation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Complete source code and configuration files</li>
                    <li>• Step-by-step installation guide with screenshots</li>
                    <li>• Environment setup scripts and dependencies</li>
                    <li>• Testing procedures and validation steps</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-primary" />
                    Academic Documentation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Project Synopsis with problem statement</li>
                    <li>• Software Requirements Specification (SRS)</li>
                    <li>• System design with architecture diagrams</li>
                    <li>• UML diagrams and flowcharts</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-primary" />
                    Viva-Voce Preparation Kit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 20+ expected questions with detailed answers</li>
                    <li>• Technical concepts explanation</li>
                    <li>• Implementation decision justifications</li>
                    <li>• Alternative approaches discussion</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-primary" />
                    Support & Guidance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Direct mentorship for technical queries</li>
                    <li>• Installation and configuration assistance</li>
                    <li>• Customization support for specific requirements</li>
                    <li>• Review and feedback on implementation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="content-section">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center bg-primary/5 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Project or Have Specific Requirements?
            </h2>
            <p className="text-gray-600 mb-6">
              We can adapt any project to match your university guidelines, preferred tools, or research focus. Discuss your requirements with our technical team.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Discuss Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
