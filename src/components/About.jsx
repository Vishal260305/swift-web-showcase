
import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Zap, Brain, Coffee, Code, Heart, Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialLinks from "./SocialLinks";

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const heroContentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            contentRef.current?.classList.add("animate-fade-in-up");
            imageRef.current?.classList.add("animate-fade-in-up");
            titleRef.current?.classList.add("animate-fade-in-up");
            heroContentRef.current?.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="home" className="min-h-screen pt-20 bg-secondary/50 dark:bg-secondary/20" ref={sectionRef}>
      <div className="section-container">
        {/* Hero Section Content */}
        <div 
          ref={heroContentRef} 
          className="max-w-3xl mx-auto text-center opacity-0 mb-16"
          style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
        >
          <p className="mb-6 text-lg font-medium text-primary">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text block">John Doe</span>
            <span className="mt-2 block">Web Developer</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            I craft responsive websites where technology meets creativity
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="gap-2" asChild>
              <a href="#resume">
                <Download className="h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          <SocialLinks className="justify-center mb-12" iconSize={24} />
          
          <a
            href="#about-me"
            className="inline-flex items-center justify-center animate-float"
          >
            <ArrowDown className="h-8 w-8 text-primary" />
          </a>
        </div>
        
        {/* About Section Content */}
        <div id="about-me" className="pt-16">
          <h2 className="section-title" ref={titleRef}>About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div 
              ref={imageRef} 
              className="opacity-0 order-2 md:order-1"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              <div className="relative">
                <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-primary to-accent opacity-30 blur-md"></div>
                <div className="relative aspect-square rounded-xl bg-card/50 overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div 
              ref={contentRef} 
              className="opacity-0 space-y-6 order-1 md:order-2"
              style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 blur-sm"></div>
                <h3 className="text-3xl font-bold relative bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent p-2">
                  Not Just Another Developer
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Zap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    I transform complex problems into elegant, efficient solutions with code that's as clean as it is functional.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Brain className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    With over 5 years in web development, I've mastered the art of building experiences that users love and businesses value.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Code className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    My approach combines technical precision with creative problem-solving for solutions that exceed expectations.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Coffee className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    When I'm not coding, you'll find me hiking in the mountains, experimenting with new recipes, or diving into sci-fi novels.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    I'm passionate about creating accessible, performant websites that make a genuine difference in people's digital experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
