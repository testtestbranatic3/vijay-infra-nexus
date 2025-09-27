import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Quote, 
  Star, 
  ChevronLeft, 
  ChevronRight,
  Building,
  User,
  MapPin
} from "lucide-react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar Sharma",
      position: "Municipal Commissioner",
      organization: "Bhopal Municipal Corporation",
      location: "Bhopal, MP",
      rating: 5,
      image: "testimonial1",
      testimonial: "VIJAYRACHNA INFRA SOLUTIONS delivered exceptional results in our city-wide smart meter deployment. Their technical expertise and commitment to timelines made this complex project seamless. The AMI-enabled meters have significantly improved our billing accuracy and reduced energy theft.",
      project: "15,000+ Smart Meters Installation",
      category: "Government"
    },
    {
      id: 2,
      name: "Dr. Priya Malhotra",
      position: "Industrial Development Officer",
      organization: "MPSIDC Bhind",
      location: "Bhind, MP", 
      rating: 5,
      image: "testimonial2",
      testimonial: "The fiber optic network installation by VIJAYRACHNA INFRA has revolutionized connectivity in our industrial zone. Their team's professionalism and technical competence ensured zero downtime during installation. Highly recommended for large-scale infrastructure projects.",
      project: "50km Fiber Network Installation",
      category: "Industrial"
    },
    {
      id: 3,
      name: "Vikash Gupta",
      position: "IT Manager",
      organization: "District Collector Office",
      location: "Morena, MP",
      rating: 5,
      image: "testimonial3", 
      testimonial: "Our e-governance portal developed by VIJAYRACHNA INFRA has streamlined citizen services remarkably. The system is user-friendly, robust, and has significantly improved our administrative efficiency. Their post-deployment support is outstanding.",
      project: "Complete Digital Transformation",
      category: "Government"
    },
    {
      id: 4,
      name: "Anjali Patel",
      position: "Facility Manager",
      organization: "MP Trade Center",
      location: "Bhopal, MP",
      rating: 5,
      image: "testimonial4",
      testimonial: "The smart electrical infrastructure implemented by VIJAYRACHNA INFRA for our shopping complex has exceeded expectations. Real-time monitoring, automated billing, and energy analytics have optimized our operations significantly.",
      project: "200+ Smart Meters & Energy Management",
      category: "Commercial"
    },
    {
      id: 5,
      name: "Ramesh Agarwal",
      position: "Managing Director",
      organization: "Rajesh Industries",
      location: "Bhind, MP",
      rating: 5,
      image: "testimonial5",
      testimonial: "VIJAYRACHNA INFRA's structured cabling solution has future-proofed our manufacturing facility. Their attention to detail and quality of work is commendable. The network infrastructure supports our Industry 4.0 initiatives perfectly.",
      project: "Campus-wide Network Infrastructure",
      category: "Manufacturing"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeIndex];

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
            What Our <span className="text-primary">Clients</span> Say
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Trusted by government organizations, industries, and businesses across Madhya Pradesh for delivering excellence in infrastructure solutions.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="max-w-5xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="shadow-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2">
                    {/* Content */}
                    <div className="p-8 lg:p-12">
                      {/* Quote Icon */}
                      <div className="bg-primary/10 p-3 rounded-full w-fit mb-6">
                        <Quote className="h-8 w-8 text-primary" />
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mb-4">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      {/* Testimonial */}
                      <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                        "{currentTestimonial.testimonial}"
                      </blockquote>

                      {/* Project Info */}
                      <div className="bg-secondary/10 rounded-lg p-4 mb-6">
                        <div className="flex items-center text-secondary font-medium text-sm">
                          <Building className="h-4 w-4 mr-2" />
                          Project: {currentTestimonial.project}
                        </div>
                      </div>

                      {/* Author Info */}
                      <div className="border-t pt-6">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                            <User className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-lg">
                              {currentTestimonial.name}
                            </div>
                            <div className="text-primary font-medium">
                              {currentTestimonial.position}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {currentTestimonial.organization}
                            </div>
                            <div className="flex items-center text-xs text-muted-foreground mt-1">
                              <MapPin className="h-3 w-3 mr-1" />
                              {currentTestimonial.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Visual/Category */}
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 lg:p-12 flex flex-col justify-center items-center relative">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        }} />
                      </div>
                      
                      <div className="relative z-10 text-center">
                        <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 mx-auto">
                          <Building className="h-16 w-16 text-primary" />
                        </div>
                        
                        <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
                          {currentTestimonial.category} Sector
                        </div>
                        
                        <div className="text-2xl font-bold text-primary mb-2">
                          Project Success
                        </div>
                        <div className="text-muted-foreground text-sm">
                          Delivered On Time & Budget
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="p-2"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === activeIndex ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="p-2"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-muted/30 border-none">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5.0</div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">Zero</div>
                  <div className="text-sm text-muted-foreground">Project Failures</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Join Our Growing List of Satisfied Clients
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the same level of excellence and professionalism that has made us the trusted infrastructure partner across Madhya Pradesh.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:bg-primary-hover"
          >
            Start Your Project Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;