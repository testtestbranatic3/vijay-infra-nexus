import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building, 
  Award, 
  CheckCircle,
  Handshake,
  Shield,
  Globe,
  Users,
  Zap
} from "lucide-react";

const Partners = () => {
  const partners = [
    {
      name: "Bhopal Municipal Corporation",
      type: "Government Partner",
      description: "Smart city infrastructure development",
      icon: Building,
      category: "government"
    },
    {
      name: "MP State Industrial Development Corporation",
      type: "Development Partner", 
      description: "Industrial infrastructure solutions",
      icon: Globe,
      category: "industrial"
    },
    {
      name: "State Electricity Board MP",
      type: "Utility Partner",
      description: "Smart meter deployment programs",
      icon: Zap,
      category: "utility"
    },
    {
      name: "District Administration Offices",
      type: "Administrative Partner",
      description: "E-governance and digitization",
      icon: Shield,
      category: "government"
    },
    {
      name: "Private Industrial Clients",
      type: "Business Partner",
      description: "Manufacturing & commercial solutions",
      icon: Users,
      category: "private"
    },
    {
      name: "Technology Solutions Providers",
      type: "Technology Partner",
      description: "Advanced system integration",
      icon: Award,
      category: "technology"
    }
  ];

  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management System",
      icon: Award
    },
    {
      title: "Government Registered",
      description: "Authorized contractor for public projects",
      icon: Shield
    },
    {
      title: "Industry Certified",
      description: "Certified for electrical & IT infrastructure",
      icon: CheckCircle
    },
    {
      title: "Safety Compliance",
      description: "Zero accident track record",
      icon: Handshake
    }
  ];

  const achievements = [
    "Trusted by 15+ Government Organizations",
    "50+ Industrial Partners Nationwide",
    "100% Project Success Rate",
    "5+ Years of Consistent Excellence"
  ];

  return (
    <section className="py-20 bg-muted/30">
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
            Our <span className="text-primary">Partners</span> & <span className="text-secondary">Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Proud to collaborate with leading organizations across government, industry, and private sectors in building modern infrastructure for Madhya Pradesh.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-medium hover:shadow-large transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ${
                      partner.category === 'government' ? 'bg-blue-100 text-blue-600' :
                      partner.category === 'industrial' ? 'bg-orange-100 text-orange-600' :
                      partner.category === 'utility' ? 'bg-yellow-100 text-yellow-600' :
                      partner.category === 'private' ? 'bg-green-100 text-green-600' :
                      'bg-purple-100 text-purple-600'
                    }`}>
                      <partner.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {partner.name}
                      </h3>
                      <div className={`text-xs font-medium px-2 py-1 rounded-full w-fit mb-2 ${
                        partner.category === 'government' ? 'bg-blue-100 text-blue-700' :
                        partner.category === 'industrial' ? 'bg-orange-100 text-orange-700' :
                        partner.category === 'utility' ? 'bg-yellow-100 text-yellow-700' :
                        partner.category === 'private' ? 'bg-green-100 text-green-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {partner.type}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Achievements */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full shadow-large">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Award className="h-6 w-6 text-primary mr-3" />
                  Certifications & Compliance
                </h3>
                <div className="space-y-6">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4 group"
                    >
                      <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <cert.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{cert.title}</h4>
                        <p className="text-sm text-muted-foreground">{cert.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full shadow-large bg-gradient-hero text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Handshake className="h-6 w-6 mr-3" />
                  Partnership Achievements
                </h3>
                <div className="space-y-4 mb-8">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span className="text-sm">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Partnership Benefits:</h4>
                  <ul className="text-sm space-y-1 opacity-90">
                    <li>• Long-term maintenance agreements</li>
                    <li>• Priority technical support</li>
                    <li>• Customized solution development</li>
                    <li>• Training and knowledge transfer</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-background shadow-large">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-8">Why Organizations Trust Us</h3>
              
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { label: "Government Projects", value: "15+", color: "text-blue-600" },
                  { label: "Industry Partners", value: "50+", color: "text-orange-600" },
                  { label: "Success Rate", value: "100%", color: "text-green-600" },
                  { label: "Repeat Clients", value: "85%", color: "text-purple-600" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t">
                <p className="text-muted-foreground text-center max-w-2xl mx-auto">
                  "Building lasting partnerships through trust, transparency, and consistent delivery of excellence in infrastructure solutions."
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;