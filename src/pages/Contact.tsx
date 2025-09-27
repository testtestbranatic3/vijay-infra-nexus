import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle,
  User,
  Building,
  Zap
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Corporate Office",
      details: [
        "Bhopal, Madhya Pradesh",
        "India - 462001"
      ],
      note: "Serving Bhind & Morena regions"
    },
    {
      icon: Phone,
      title: "Phone Numbers", 
      details: [
        "+91-98765-43210",
        "+91-87654-32109"
      ],
      note: "Mon-Sat: 9:00 AM - 7:00 PM"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "info@vijayrachnainfra.com",
        "projects@vijayrachnainfra.com"
      ],
      note: "Response within 24 hours"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 7:00 PM",
        "Saturday: 9:00 AM - 5:00 PM"
      ],
      note: "Sunday: Emergency services only"
    }
  ];

  const services = [
    "Digital Meter Installation",
    "Cable Works & Fiber Laying",
    "IT & Web Solutions", 
    "System Integration",
    "Maintenance & Support",
    "Consultation Services",
    "Other"
  ];

  const quickContacts = [
    {
      title: "Emergency Support",
      description: "24/7 technical support for critical issues",
      phone: "+91-98765-43210",
      action: "Call Now"
    },
    {
      title: "Sales Inquiry",
      description: "Get quotes and project information",
      phone: "+91-87654-32109", 
      action: "Contact Sales"
    },
    {
      title: "WhatsApp Support",
      description: "Quick support via WhatsApp",
      phone: "+91-98765-43210",
      action: "Chat Now"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Ready to transform your infrastructure? Get in touch with our experts for personalized solutions and comprehensive support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {quickContacts.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center shadow-medium hover:shadow-large transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{contact.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{contact.description}</p>
                    <Button 
                      className="w-full bg-gradient-secondary hover:bg-secondary-hover"
                      onClick={() => window.open(`tel:${contact.phone}`, '_blank')}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      {contact.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-large">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <MessageCircle className="h-6 w-6 text-primary mr-3" />
                      Send us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            placeholder="+91-XXXXX-XXXXX"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company/Organization</Label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            placeholder="Your company name"
                            value={formData.company}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interest</Label>
                        <select
                          id="service"
                          name="service"
                          className="w-full px-3 py-2 border border-input rounded-md bg-background"
                          value={formData.service}
                          onChange={handleInputChange}
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          placeholder="Tell us about your project requirements..."
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-primary hover:bg-primary-hover"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="shadow-medium">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-primary p-3 rounded-lg flex-shrink-0">
                          <info.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-muted-foreground">
                                {detail}
                              </p>
                            ))}
                          </div>
                          <p className="text-sm text-primary mt-2 font-medium">
                            {info.note}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us</h2>
            <p className="text-xl text-muted-foreground">
              Visit our office in Bhopal or contact us for site visits
            </p>
          </motion.div>

          <Card className="shadow-large overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-primary/10 to-secondary/10 relative flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                <p className="text-muted-foreground mb-4">
                  Google Maps integration will be available here
                </p>
                <Button className="bg-gradient-secondary hover:bg-secondary-hover">
                  Open in Google Maps
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have Questions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our team of infrastructure experts is ready to help you with any questions about our services, ongoing projects, or custom solutions.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-medium">
                <CardContent className="p-6 text-center">
                  <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Project Consultation</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Schedule a free consultation to discuss your infrastructure needs
                  </p>
                  <Button variant="outline" className="w-full">
                    Schedule Meeting
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="shadow-medium">
                <CardContent className="p-6 text-center">
                  <Zap className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Emergency Support</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    24/7 emergency support for critical infrastructure issues
                  </p>
                  <Button variant="outline" className="w-full">
                    Emergency Contact
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;