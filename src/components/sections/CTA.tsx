import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  MessageCircle,
  Calendar,
  FileText,
  Users,
  Zap,
  Download
} from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  const ctaOptions = [
    {
      icon: Phone,
      title: "Emergency Support",
      description: "24/7 technical support for critical issues",
      action: "Call Now",
      link: "tel:+919876543210",
      color: "bg-red-500 hover:bg-red-600",
      urgent: true
    },
    {
      icon: Calendar,
      title: "Free Consultation",
      description: "Schedule a meeting with our experts",
      action: "Book Meeting",
      link: "/contact",
      color: "bg-gradient-primary hover:bg-primary-hover"
    },
    {
      icon: MessageCircle,
      title: "Get Quote",
      description: "Instant project estimation and pricing",
      action: "Get Quote",
      link: "/contact",
      color: "bg-gradient-secondary hover:bg-secondary-hover"
    },
    {
      icon: FileText,
      title: "Download Brochure", 
      description: "Detailed service information and case studies",
      action: "Download PDF",
      link: "#download",
      color: "bg-green-600 hover:bg-green-700"
    }
  ];

  const quickServices = [
    "Smart Meter Installation",
    "Fiber Network Setup", 
    "IT System Integration",
    "Emergency Repairs"
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+91-98765-43210",
      available: "Available 24/7"
    },
    {
      icon: Mail,
      title: "Email Us", 
      value: "info@vijayrachnainfra.com",
      available: "Response in 24 hours"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Quick Support",
      available: "Instant messaging"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <Card className="shadow-2xl overflow-hidden bg-gradient-hero text-white">
            <CardContent className="p-12 md:p-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-secondary/20 backdrop-blur-sm p-2 rounded-full w-fit mx-auto mb-6">
                  <Zap className="h-8 w-8" />
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Ready to Transform Your 
                  <span className="block text-secondary">Infrastructure?</span>
                </h2>
                
                <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed max-w-3xl mx-auto">
                  Join 50+ satisfied clients across Madhya Pradesh who trust VIJAYRACHNA INFRA for their critical infrastructure needs. Let's discuss your project today.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button 
                    size="lg" 
                    className="bg-secondary hover:bg-secondary-hover text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <Link to="/contact">
                      Start Your Project
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-primary shadow-xl"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Expert Now
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">150+</div>
                    <div className="text-sm opacity-80">Projects Done</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">100%</div>
                    <div className="text-sm opacity-80">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">24/7</div>
                    <div className="text-sm opacity-80">Support</div>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Options Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ctaOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full shadow-medium hover:shadow-xl transition-all duration-300 group ${
                option.urgent ? 'ring-2 ring-red-200' : ''
              }`}>
                <CardContent className="p-6 text-center">
                  <div className={`${option.color} p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <option.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2">
                    {option.title}
                    {option.urgent && (
                      <span className="ml-2 bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                        URGENT
                      </span>
                    )}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {option.description}
                  </p>
                  
                  <Button
                    className={`w-full ${option.color}`}
                    asChild={option.link.startsWith('/')}
                  >
                    {option.link.startsWith('/') ? (
                      <Link to={option.link}>
                        {option.action}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    ) : (
                      <a href={option.link}>
                        {option.action}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </a>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Service Highlights & Contact Methods */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Quick Services */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full shadow-large">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Users className="h-6 w-6 text-primary mr-3" />
                  Popular Services
                </h3>
                
                <div className="space-y-4 mb-6">
                  {quickServices.map((service, index) => (
                    <motion.div
                      key={service}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
                    >
                      <span className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {service}
                      </span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.div>
                  ))}
                </div>
                
                <Button className="w-full bg-gradient-secondary hover:bg-secondary-hover" asChild>
                  <Link to="/services">
                    View All Services
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full shadow-large">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <MessageCircle className="h-6 w-6 text-primary mr-3" />
                  Get in Touch
                </h3>
                
                <div className="space-y-6 mb-6">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={method.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/30 transition-colors group cursor-pointer"
                    >
                      <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <method.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{method.title}</h4>
                        <p className="text-foreground font-medium mb-1">{method.value}</p>
                        <p className="text-sm text-muted-foreground">{method.available}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <Button className="w-full bg-gradient-primary hover:bg-primary-hover" asChild>
                  <Link to="/contact">
                    Contact Us Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Final CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-muted/50 border-2 border-dashed border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Don't Wait - Your Infrastructure Needs Immediate Attention
              </h3>
              
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Every day of delay costs you efficiency and potential revenue. Start your transformation today with Madhya Pradesh's most trusted infrastructure partner.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg"
                  className="bg-gradient-hero text-white hover:scale-105 transition-transform duration-300 shadow-xl"
                  asChild
                >
                  <Link to="/contact">
                    <Calendar className="h-5 w-5 mr-2" />
                    Schedule Free Assessment
                  </Link>
                </Button>
                
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">Or call directly:</span>
                  <a 
                    href="tel:+919876543210" 
                    className="ml-2 text-primary font-bold hover:underline"
                  >
                    +91-98765-43210
                  </a>
                </div>
              </div>
              
              <div className="flex items-center justify-center mt-6 space-x-4 text-sm text-muted-foreground">
                <span className="flex items-center">
                  <Download className="h-4 w-4 mr-1" />
                  Free consultation
                </span>
                <span>•</span>
                <span className="flex items-center">
                  <Phone className="h-4 w-4 mr-1" />
                  24/7 support
                </span>
                <span>•</span>
                <span className="flex items-center">
                  <Zap className="h-4 w-4 mr-1" />
                  Rapid response
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;