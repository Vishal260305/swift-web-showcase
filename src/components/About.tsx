
import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            contentRef.current?.classList.add("animate-fade-in-up");
            imageRef.current?.classList.add("animate-fade-in-up");
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
        <h2 className="section-title">About Me</h2>
        
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
            <h3 className="text-2xl font-bold">My Journey</h3>
            <p className="text-muted-foreground">
              Hello! I'm John, a passionate web developer with over 5 years of experience
              crafting digital experiences. My journey in web development started
              during college when I built my first website, and I've been hooked ever since.
            </p>
            <p className="text-muted-foreground">
              I specialize in building modern, responsive websites and applications
              with a focus on clean code, accessibility, and performance. My approach
              combines technical expertise with creative problem-solving to deliver
              solutions that exceed expectations.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you'll find me hiking in the mountains, experimenting
              with new recipes, or diving into a good science fiction novel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
