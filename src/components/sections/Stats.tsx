import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Building, 
  Users, 
  Award, 
  Calendar,
  TrendingUp,
  Shield,
  MapPin
} from "lucide-react";

const Stats = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Counter = ({ target, duration = 2000, suffix = "" }: { target: number; duration?: number; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!inView) return;

      let startTime: number;
      const startCount = 0;

      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easeOut * (target - startCount) + startCount);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    }, [target, duration, inView]);

    return <span>{count.toLocaleString()}{suffix}</span>;
  };

  const mainStats = [
    {
      icon: Zap,
      number: 25000,
      suffix: "+",
      label: "Smart Meters Installed",
      description: "Advanced AMI-enabled meters across residential and commercial sectors",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Building,
      number: 150,
      suffix: "+", 
      label: "Projects Completed",
      description: "Successful infrastructure projects delivered on time",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Users,
      number: 50,
      suffix: "+",
      label: "Happy Clients",
      description: "Satisfied customers across government and private sectors",
      color: "text-green-600", 
      bgColor: "bg-green-50"
    },
    {
      icon: Award,
      number: 99,
      suffix: ".9%",
      label: "Success Rate",
      description: "Project completion rate with quality assurance",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  const additionalStats = [
    {
      icon: Calendar,
      value: "5+ Years",
      label: "Industry Experience"
    },
    {
      icon: TrendingUp,
      value: "200+ km",
      label: "Fiber Network Laid"
    },
    {
      icon: Shield,
      value: "100%",
      label: "Government Compliance"
    },
    {
      icon: MapPin,
      value: "3 Cities",
      label: "Service Areas"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30">
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
            Our <span className="text-primary">Impact</span> in Numbers
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Measurable results that demonstrate our commitment to excellence and customer satisfaction across Madhya Pradesh.
          </p>
        </motion.div>

        {/* Main Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mainStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-medium hover:shadow-large transition-all duration-300 group overflow-hidden">
                <CardContent className="p-6 text-center relative">
                  {/* Background decoration */}
                  <div className={`absolute top-0 right-0 w-20 h-20 ${stat.bgColor} rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500 opacity-50`} />
                  
                  <div className={`${stat.bgColor} ${stat.color} p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    <stat.icon className="h-8 w-8" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                      <Counter target={stat.number} suffix={stat.suffix} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{stat.label}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-large bg-gradient-hero text-white overflow-hidden">
            <CardContent className="p-8">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3Ccircle cx='27' cy='7' r='2'/%3E%3Ccircle cx='47' cy='7' r='2'/%3E%3Ccircle cx='7' cy='27' r='2'/%3E%3Ccircle cx='27' cy='27' r='2'/%3E%3Ccircle cx='47' cy='27' r='2'/%3E%3Ccircle cx='7' cy='47' r='2'/%3E%3Ccircle cx='27' cy='47' r='2'/%3E%3Ccircle cx='47' cy='47' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }} />
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    Trusted Across Madhya Pradesh
                  </h3>
                  <p className="opacity-90">
                    Leading the infrastructure revolution with consistent excellence
                  </p>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {additionalStats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center group"
                    >
                      <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl w-fit mx-auto mb-3 group-hover:bg-white/20 transition-colors duration-300">
                        <stat.icon className="h-6 w-6" />
                      </div>
                      <div className="text-xl md:text-2xl font-bold mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm opacity-80">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Achievement Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              Key Achievements & Milestones
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "First in Region",
                  description: "Among the first companies to introduce AMI-enabled smart meters in Madhya Pradesh"
                },
                {
                  title: "Government Recognition",
                  description: "Recognized for excellence in digital infrastructure development by state authorities"
                },
                {
                  title: "Zero Accidents",
                  description: "Maintained perfect safety record across all projects with comprehensive safety protocols"
                }
              ].map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-3 w-fit mx-auto">
                    {achievement.title}
                  </div>
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;