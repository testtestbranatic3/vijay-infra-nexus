import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/ServicesOverview";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Partners from "@/components/sections/Partners";
import CTA from "@/components/sections/CTA";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Stats />
      <Partners />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;