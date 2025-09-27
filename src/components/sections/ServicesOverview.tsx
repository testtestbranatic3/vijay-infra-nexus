import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Cable, 
  Monitor, 
  ArrowRight,
  CheckCircle,
  Gauge,
  Wifi,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const services = [
    {
      icon: Zap,
      title: "Digital Electricity Meters",
      description: "Advanced smart meter solutions with AMR/AMI technology for accurate monitoring and government compliance.",
      features: [
        "Real-time energy monitoring",
        "Anti-tampering technology", 
        "Automated billing systems",
        "Government compliant"
      ],
      highlight: "99.9% Accuracy Guaranteed",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: Cable,
      title: "Cable Works & Infrastructure",
      description: "Comprehensive fiber optic and electrical cabling solutions for modern connectivity needs.",
      features: [
        "Fiber optic installations",
        "Structured cabling systems",
        "Underground cable laying",
        "Network infrastructure"
      ],
      highlight: "Future-Proof Solutions",
      color: "from-orange-500 to-orange-700"
    },
    {
      icon: Monitor,
      title: "IT & Web Solutions",
      description: "Complete digital transformation services from web development to system integration.",
      features: [
        "Custom web development",
        "Mobile applications",
        "Cloud solutions",
        "Digital consulting"
      ],
      highlight: "24/7 Technical Support",
      color: "from-green-600 to-green-800"
    }
  ];

  const additionalFeatures = [
    {
      icon: Gauge,
      title: "Performance Monitoring",
      description: "Real-time system monitoring and analytics"
    },
    {
      icon: Wifi,
      title: "Smart Connectivity",
      description: "IoT and wireless communication solutions"
    },
    {
      icon: Shield,
      title: "Secure Infrastructure",
      description: "Enterprise-grade security and reliability"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-primary">Core</span> Services
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive infrastructure solutions designed to power modern India with 
            cutting-edge technology and reliable service delivery across Bhopal, Bhind, and Morena.
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="space-y-16 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden shadow-large hover:shadow-xl transition-all duration-300 group">
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                  {/* Content */}
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-primary p-4 rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold mb-2">{service.title}</h3>
                        <div className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                          {service.highlight}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.2) + (idx * 0.1) }}
                          viewport={{ once: true }}
                          className="flex items-center"
                        >
                          <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <Button 
                      asChild
                      className="bg-gradient-secondary hover:bg-secondary-hover group-hover:scale-105 transition-transform duration-300"
                    >
                      <Link to="/services">
                        Learn More <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>

                  {/* Visual */}
                  <div className={`bg-gradient-to-br ${service.color} p-8 lg:p-12 flex items-center justify-center relative overflow-hidden ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                      }} />
                    </div>
                    
                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="w-48 h-48 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl"
                      >
                        <service.icon className="h-24 w-24 text-white" />
                      </motion.div>
                      
                      {/* Floating indicators */}
                      <motion.div
                        animate={{ 
                          y: [0, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: index * 0.5
                        }}
                        className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-large"
                      >
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </motion.div>
                      
                      <motion.div
                        animate={{ 
                          y: [0, 8, 0],
                          rotate: [0, 10, 0]
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: index * 0.7
                        }}
                        className="absolute -bottom-4 -left-4 bg-secondary rounded-xl p-2 shadow-large"
                      >
                        <ArrowRight className="h-5 w-5 text-white" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Why Choose <span className="text-primary">VIJAYRACHNA INFRA</span>?
          </h3>
          <p className="text-lg text-muted-foreground">
            Advanced features that set us apart in the infrastructure industry
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full shadow-medium hover:shadow-large transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="bg-gradient-primary p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-lg mb-3">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Infrastructure?
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Get a comprehensive assessment of your needs and a customized solution proposal from our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link to="/projects">
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;