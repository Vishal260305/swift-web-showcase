
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 bg-[length:50px_50px] opacity-20 dark:opacity-10 bg-gradient-to-r from-primary/30 to-accent/30"></div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 rounded-full w-96 h-96 bg-primary/20 filter blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 rounded-full w-96 h-96 bg-accent/20 filter blur-3xl animate-float" />
      </div>

      <div className="section-container z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-6 text-lg font-medium text-primary">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text block">John Doe</span>
            <span className="mt-2 block">Web Developer</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            I craft responsive websites where technology meets creativity
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          <SocialLinks className="justify-center mb-12" iconSize={24} />
          
          <a
            href="#about"
            className="inline-flex items-center justify-center animate-float"
          >
            <ArrowDown className="h-8 w-8 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
