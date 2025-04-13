
import { useRef, useEffect } from "react";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Resume = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            contentRef.current?.classList.add("animate-fade-in-up");
            contentRef.current?.classList.remove("opacity-0");
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
    <section id="resume" className="py-20" ref={sectionRef}>
      <div 
        className="section-container"
        ref={contentRef}
        style={{ animationFillMode: "forwards" }}
      >
        <div className="max-w-3xl mx-auto text-center opacity-0">
          <h2 className="section-title">My Resume</h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            Download my resume to learn more about my education, work experience, and skills.
          </p>
          
          <div className="bg-card border border-border rounded-lg p-8 flex flex-col items-center shadow-sm">
            <FileText className="h-24 w-24 text-primary mb-6" />
            
            <h3 className="text-2xl font-bold mb-2">John Doe - Resume</h3>
            <p className="text-muted-foreground mb-6">
              Last updated: April 2025
            </p>
            
            <Button size="lg" className="gap-2">
              <Download className="h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
