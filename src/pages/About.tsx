import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Eye, 
  Users, 
  Award, 
  Calendar,
  MapPin,
  Lightbulb,
  Shield
} from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "2020",
      title: "Company Established",
      description: "VIJAYRACHNA INFRA SOLUTIONS was founded with a vision to modernize infrastructure across Madhya Pradesh."
    },
    {
      year: "2021",
      title: "First Major Contract",
      description: "Secured our first major digital meter installation project in Bhopal region."
    },
    {
      year: "2022",
      title: "Expansion to Bhind & Morena",
      description: "Extended operations to serve Bhind and Morena districts with comprehensive infrastructure solutions."
    },
    {
      year: "2023",
      title: "IT Services Launch",
      description: "Diversified into IT services and web solutions, becoming a complete technology partner."
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Recognized as a leading infrastructure solutions provider in Central India."
    }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Managing Director",
      experience: "15+ years",
      specialization: "Infrastructure Development"
    },
    {
      name: "Priya Sharma",
      role: "Technical Director",
      experience: "12+ years", 
      specialization: "Digital Systems & IT"
    },
    {
      name: "Vikash Gupta",
      role: "Operations Head",
      experience: "10+ years",
      specialization: "Project Management"
    },
    {
      name: "Anjali Patel",
      role: "Quality Assurance Lead",
      experience: "8+ years",
      specialization: "Standards & Compliance"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Quality Excellence",
      description: "We maintain the highest standards in all our projects, ensuring reliable and durable solutions."
    },
    {
      icon: Users,
      title: "Customer Focus", 
      description: "Our clients are at the center of everything we do. We build lasting relationships through trust."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace modern technology and innovative approaches to solve complex infrastructure challenges."
    },
    {
      icon: Award,
      title: "Professional Integrity",
      description: "We conduct business with complete transparency, honesty, and ethical practices."
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
              About VIJAYRACHNA INFRA SOLUTIONS
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Pioneering infrastructure excellence across Madhya Pradesh with cutting-edge technology and unwavering commitment to quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-medium">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 text-primary mr-3" />
                    <h2 className="text-2xl font-bold">Our Mission</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide world-class infrastructure solutions that empower communities and drive technological advancement. We are committed to delivering reliable, efficient, and sustainable services that contribute to the modernization of India's infrastructure landscape.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-medium">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Eye className="h-8 w-8 text-secondary mr-3" />
                    <h2 className="text-2xl font-bold">Our Vision</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the most trusted and innovative infrastructure solutions provider in Central India, setting new benchmarks for quality, reliability, and customer satisfaction. We envision a digitally connected and efficiently powered future for all communities we serve.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              From inception to industry leadership
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5"></div>
              
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-primary rounded-full md:transform md:-translate-x-1.5 z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'} md:w-1/2`}>
                    <Card className="shadow-soft">
                      <CardContent className="p-6">
                        <Badge variant="secondary" className="mb-2">
                          <Calendar className="h-3 w-3 mr-1" />
                          {item.year}
                        </Badge>
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas We Serve</h2>
            <p className="text-xl text-muted-foreground">
              Bringing modern infrastructure solutions across Madhya Pradesh
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { city: "Bhopal", description: "Corporate headquarters and primary service center", type: "Headquarters" },
              { city: "Bhind", description: "Comprehensive infrastructure and digital solutions", type: "Service Area" },
              { city: "Morena", description: "Cable works and IT services expansion", type: "Service Area" }
            ].map((area, index) => (
              <motion.div
                key={area.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center shadow-medium hover:shadow-large transition-all duration-300">
                  <CardContent className="p-6">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{area.city}</h3>
                    <Badge variant="outline" className="mb-3">{area.type}</Badge>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground">
              Experienced professionals driving innovation and excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center shadow-medium hover:shadow-large transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <Badge variant="outline" className="mb-3">{member.experience}</Badge>
                    <p className="text-sm text-muted-foreground">{member.specialization}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;