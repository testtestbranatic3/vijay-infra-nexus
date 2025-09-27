import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Calendar, 
  Users, 
  CheckCircle,
  ArrowRight,
  Filter,
  Zap,
  Cable,
  Monitor,
  Building,
  Factory,
  Home
} from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "digital-meters", label: "Digital Meters" },
    { id: "cable-works", label: "Cable Works" },
    { id: "it-solutions", label: "IT Solutions" }
  ];

  const projects = [
    {
      id: 1,
      title: "Smart Meter Deployment - Bhopal Municipal Corporation",
      category: "digital-meters",
      location: "Bhopal, MP",
      year: "2024",
      status: "Completed",
      client: "Bhopal Municipal Corporation",
      description: "Large-scale installation of 15,000+ AMI-enabled smart meters across residential and commercial sectors in Bhopal.",
      highlights: [
        "15,000+ Smart Meters Installed",
        "AMI Communication Network",
        "Real-time Monitoring System", 
        "100% Government Compliance"
      ],
      technologies: ["AMI Meters", "RF Communication", "Data Analytics", "Mobile App"],
      icon: Zap,
      image: "project1"
    },
    {
      id: 2,
      title: "Fiber Optic Network - Industrial Area Bhind",
      category: "cable-works", 
      location: "Bhind, MP",
      year: "2024",
      status: "Ongoing",
      client: "Industrial Development Corporation",
      description: "High-speed fiber optic network installation covering 50km across industrial zones in Bhind district.",
      highlights: [
        "50km Fiber Network",
        "Underground Cable Laying",
        "Industrial Zone Coverage",
        "Redundant Path Design"
      ],
      technologies: ["Single Mode Fiber", "DWDM Technology", "OFC Splicing", "Network Testing"],
      icon: Cable,
      image: "project2"
    },
    {
      id: 3,
      title: "E-Governance Portal - Morena District",
      category: "it-solutions",
      location: "Morena, MP", 
      year: "2023",
      status: "Completed",
      client: "District Collector Office",
      description: "Comprehensive digital transformation with custom web portal for citizen services and administrative processes.",
      highlights: [
        "Multi-Service Portal",
        "Citizen Dashboard",
        "Mobile Application",
        "Integration with State Systems"
      ],
      technologies: ["React.js", "Node.js", "PostgreSQL", "Cloud Hosting"],
      icon: Monitor,
      image: "project3"
    },
    {
      id: 4,
      title: "Shopping Complex Electrical Infrastructure",
      category: "digital-meters",
      location: "Bhopal, MP",
      year: "2023",
      status: "Completed", 
      client: "MP Trade Center",
      description: "Complete electrical infrastructure setup with smart metering for a modern shopping complex.",
      highlights: [
        "200+ Smart Meters",
        "Load Management System",
        "Emergency Backup Integration",
        "Energy Analytics Dashboard"
      ],
      technologies: ["Three-Phase Meters", "Power Quality Monitoring", "BMS Integration"],
      icon: Building,
      image: "project4"
    },
    {
      id: 5,
      title: "Manufacturing Unit Network Setup",
      category: "cable-works",
      location: "Bhind, MP", 
      year: "2023",
      status: "Completed",
      client: "Rajesh Industries",
      description: "Structured cabling and network infrastructure for a large manufacturing facility.",
      highlights: [
        "Campus-wide Network",
        "Industrial Grade Cabling", 
        "Redundant Connectivity",
        "Future Expansion Ready"
      ],
      technologies: ["Cat6A Cabling", "Fiber Backbone", "Industrial Switches"],
      icon: Factory,
      image: "project5"
    },
    {
      id: 6,
      title: "Residential Complex Smart Grid",
      category: "digital-meters",
      location: "Morena, MP",
      year: "2022", 
      status: "Completed",
      client: "Green Valley Housing Society",
      description: "Smart grid implementation for a 500-unit residential complex with energy management system.",
      highlights: [
        "500 Residential Units",
        "Prepaid Billing System",
        "Load Balancing",
        "Mobile App for Residents"
      ],
      technologies: ["Prepaid Meters", "HES System", "Mobile Integration"],
      icon: Home,
      image: "project6"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const stats = [
    { label: "Projects Completed", value: "150+" },
    { label: "Smart Meters Installed", value: "25,000+" },
    { label: "Fiber Network (km)", value: "200+" },
    { label: "Happy Clients", value: "50+" }
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
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Explore our portfolio of successful infrastructure projects across Madhya Pradesh, showcasing innovation and excellence in every delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter.id)}
                className={activeFilter === filter.id ? "bg-gradient-primary" : ""}
              >
                <Filter className="h-4 w-4 mr-2" />
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                layout
              >
                <Card className="h-full shadow-large hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  {/* Project Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <project.icon className="h-20 w-20 text-primary/30" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge 
                        variant={project.status === "Completed" ? "default" : "secondary"}
                        className={project.status === "Completed" ? "bg-green-500" : ""}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-background/80">
                        {project.year}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          {project.location}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mb-3">
                          <Users className="h-4 w-4 mr-1" />
                          {project.client}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-4">
                      <h4 className="font-medium text-sm mb-2">Key Achievements:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {project.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center text-xs text-muted-foreground">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-1 flex-shrink-0" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="font-medium text-sm mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      View Details <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to See Detailed Case Studies?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get comprehensive insights into our project methodologies, challenges solved, and results achieved. Download our detailed case study reports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:bg-primary-hover">
                Download Case Studies
              </Button>
              <Button size="lg" variant="outline">
                Schedule Project Discussion
              </Button>
            </div>
          </motion.div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let us help you achieve your infrastructure goals with our proven expertise and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90"
              >
                Get Project Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Contact Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;