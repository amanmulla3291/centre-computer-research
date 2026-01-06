import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { Toaster } from '../components/ui/sonner';
import { toast } from 'sonner';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    degree: '',
    college: '',
    domain: '',
    whatsapp: '',
    requirement: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast.success('Inquiry Submitted Successfully!', {
        description: 'Our technical team will contact you within 24 hours to discuss your project requirements.',
      });
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        degree: '',
        college: '',
        domain: '',
        whatsapp: '',
        requirement: ''
      });
    }, 1000);
  };

  return (
    <main>
      <Toaster position="top-center" />
      
      {/* Header Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600">
              Ready to start your project? Discuss your requirements with our technical team and get expert guidance on domain selection and implementation approach.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="content-section">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="border-gray-200 text-center">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:contact@centrecomputerresearch.in" className="text-primary hover:underline">
                  contact@centrecomputerresearch.in
                </a>
                <p className="text-sm text-gray-600 mt-2">
                  Response within 24 hours
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 text-center">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary font-medium">
                  +91 XXXXXXXXXX
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Mon - Sat, 10 AM - 7 PM
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 text-center">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://wa.me/91XXXXXXXXXX" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-accent hover:bg-accent/90">
                    Chat Now
                  </Button>
                </a>
                <p className="text-sm text-gray-600 mt-2">
                  Instant response
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="content-section bg-gray-50">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <Card className="border-gray-200 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl">Send Detailed Inquiry</CardTitle>
                <CardDescription>
                  Fill out the form below and our technical team will reach out to you with project recommendations and next steps.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="degree">Degree Program *</Label>
                      <Select 
                        value={formData.degree} 
                        onValueChange={(value) => handleSelectChange('degree', value)}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your degree" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="msc-cs">MSc Computer Science</SelectItem>
                          <SelectItem value="msc-cyber">MSc Cyber Security</SelectItem>
                          <SelectItem value="msc-it">MSc Information Technology</SelectItem>
                          <SelectItem value="mca">MCA</SelectItem>
                          <SelectItem value="btech-cs">B.Tech Computer Science</SelectItem>
                          <SelectItem value="btech-it">B.Tech IT</SelectItem>
                          <SelectItem value="be-cs">B.E. Computer Science</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="whatsapp">WhatsApp Number *</Label>
                      <Input
                        id="whatsapp"
                        name="whatsapp"
                        placeholder="+91 XXXXXXXXXX"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="college">College/University Name *</Label>
                    <Input
                      id="college"
                      name="college"
                      placeholder="Enter your college or university name"
                      value={formData.college}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="domain">Project Domain *</Label>
                    <Select 
                      value={formData.domain} 
                      onValueChange={(value) => handleSelectChange('domain', value)}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select project domain" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="infrastructure">Infrastructure & Cloud Computing</SelectItem>
                        <SelectItem value="security">Cyber Security & SOC</SelectItem>
                        <SelectItem value="devops">DevOps & Automation</SelectItem>
                        <SelectItem value="research">Research-Based Project</SelectItem>
                        <SelectItem value="custom">Custom Requirement</SelectItem>
                        <SelectItem value="undecided">Not Sure / Need Guidance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="requirement">Project Requirement Details *</Label>
                    <Textarea
                      id="requirement"
                      name="requirement"
                      placeholder="Please describe your project requirements, any specific tools or technologies you want to use, university guidelines, or questions you have..."
                      rows={6}
                      value={formData.requirement}
                      onChange={handleChange}
                      required
                    />
                    <p className="text-sm text-gray-500">
                      Include any specific tools, technologies, or constraints mentioned by your university or guide.
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send className="h-4 w-4 mr-2" />
                        Submit Inquiry
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="content-section">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-center">What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center mr-4 flex-shrink-0 font-semibold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Initial Consultation</h4>
                      <p className="text-gray-600">Our technical team reviews your requirements and contacts you within 24 hours to discuss feasibility and approach.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center mr-4 flex-shrink-0 font-semibold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Project Planning</h4>
                      <p className="text-gray-600">We provide project recommendations, tool suggestions, timeline estimates, and answer all your technical questions.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center mr-4 flex-shrink-0 font-semibold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Implementation & Delivery</h4>
                      <p className="text-gray-600">Upon agreement, we begin implementation and keep you updated throughout the process until successful delivery.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
