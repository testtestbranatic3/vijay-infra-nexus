import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Cable, 
  Monitor, 
  CheckCircle, 
  ArrowRight,
  Shield,
  Clock,
  Users,
  Settings,
  Smartphone,
  Wifi,
  Server
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Zap,
      title: "Digital Electricity Meter Installation",
      description: "Modern smart meter solutions for accurate energy monitoring and billing compliance.",
      features: [
        "AMR/AMI Compatible Meters",
        "Government Compliance",
        "Real-time Monitoring",
        "Anti-tampering Technology",
        "Remote Reading Capability",
        "Data Analytics Integration"
      ],
      benefits: [
        "99.9% Accuracy",
        "Reduced Energy Theft", 
        "Automated Billing",
        "Better Load Management"
      ]
    },
    {
      icon: Cable,
      title: "Cable Works & Infrastructure",
      description: "Comprehensive cabling solutions for fiber optic, electrical, and structured networking.",
      features: [
        "Fiber Optic Cable Laying",
        "Structured Cabling Systems",
        "Underground Cable Installation", 
        "Aerial Cable Networks",
        "Cable Joint & Termination",
        "Network Infrastructure Setup"
      ],
      benefits: [
        "High-Speed Connectivity",
        "Reliable Data Transmission",
        "Future-Proof Infrastructure",
        "Minimal Maintenance"
      ]
    },
    {
      icon: Monitor,
      title: "IT & Web Solutions",
      description: "Complete digital transformation services from web development to system integration.",
      features: [
        "Custom Web Development",
        "Mobile App Development",
        "Database Management Systems",
        "Cloud Solutions",
        "IT Consulting Services",
        "Digital Marketing Support"
      ],
      benefits: [
        "Modern Web Presence",
        "Increased Efficiency",
        "Cost-Effective Solutions",
        "24/7 Technical Support"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Comprehensive testing and validation services"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock maintenance and support"
    },
    {
      icon: Users,
      title: "Training Programs",
      description: "Technical training for your staff and teams"
    },
    {
      icon: Settings,
      title: "System Integration",
      description: "Seamless integration with existing systems"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "Initial assessment and requirement analysis"
    },
    {
      step: "02", 
      title: "Planning",
      description: "Detailed project planning and timeline"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Professional installation and setup"
    },
    {
      step: "04",
      title: "Support",
      description: "Ongoing maintenance and support services"
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Comprehensive infrastructure solutions designed to power modern India with cutting-edge technology and reliable service delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Services</h2>
            <p className="text-xl text-muted-foreground">
              Specialized solutions for modern infrastructure needs
            </p>
          </motion.div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-large overflow-hidden">
                  <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                    {/* Content */}
                    <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center mb-6">
                        <div className="bg-gradient-primary p-3 rounded-xl mr-4">
                          <service.icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold">{service.title}</h3>
                      </div>
                      
                      <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-lg mb-3 flex items-center">
                            <Settings className="h-5 w-5 text-primary mr-2" />
                            Key Features
                          </h4>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center text-sm">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-lg mb-3 flex items-center">
                            <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                            Benefits
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.benefits.map((benefit, idx) => (
                              <Badge key={idx} variant="secondary">{benefit}</Badge>
                            ))}
                          </div>
                        </div>

                        <Button className="bg-gradient-secondary hover:bg-secondary-hover">
                          Learn More <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </div>

                    {/* Visual */}
                    <div className={`bg-gradient-to-br ${
                      index % 3 === 0 ? 'from-primary/10 to-primary/5' :
                      index % 3 === 1 ? 'from-secondary/10 to-secondary/5' :
                      'from-accent/20 to-accent/10'
                    } p-8 lg:p-12 flex items-center justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="relative">
                        <div className="w-48 h-48 bg-background/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-medium">
                          <service.icon className="h-24 w-24 text-primary" />
                        </div>
                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                          <CheckCircle className="h-8 w-8 text-secondary-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive support for all your infrastructure needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground">
              Simple, transparent, and efficient project delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="text-center shadow-medium hover:shadow-large transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-primary-foreground">{step.step}</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Arrow */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss your infrastructure needs and create a customized solution for your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90"
              >
                Get Free Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;