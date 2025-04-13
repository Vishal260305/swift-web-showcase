
import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { LightningBolt, Brain, Coffee, Code, Heart } from "lucide-react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            contentRef.current?.classList.add("animate-fade-in-up");
            imageRef.current?.classList.add("animate-fade-in-up");
            titleRef.current?.classList.add("animate-fade-in-up");
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
    <section id="about" className="py-20 bg-secondary/50 dark:bg-secondary/20" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title" ref={titleRef}>About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            ref={imageRef} 
            className="opacity-0"
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
            className="opacity-0 space-y-6"
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
                <LightningBolt className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
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
    </section>
  );
};

export default About;
