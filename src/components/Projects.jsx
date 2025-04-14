
import { useRef, useEffect } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const Projects = () => {
  const sectionRef = useRef(null);

  const projectsData = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with product catalog, shopping cart, user authentication, and payment processing.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      github: "https://github.com/username/project1",
      demo: "https://project1.com",
    },
    {
      title: "Task Management App",
      description: "A productivity app featuring task organization, prioritization, reminders, and collaborative workspaces.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      tech: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      github: "https://github.com/username/project2",
      demo: "https://project2.com",
    },
    {
      title: "Real Estate Listing Portal",
      description: "A property listing platform with advanced search filters, interactive maps, and virtual tours.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      tech: ["Next.js", "MongoDB", "Google Maps API", "Cloudinary"],
      github: "https://github.com/username/project3",
      demo: "https://project3.com",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectItems = document.querySelectorAll(".project-item");
            projectItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("animate-fade-in-up");
                item.classList.remove("opacity-0");
              }, index * 200);
            });
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
    <section id="projects" className="py-20 bg-secondary/50 dark:bg-secondary/20" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.title}
              className={cn(
                "project-item group flex flex-col overflow-hidden rounded-xl bg-card shadow-md hover:shadow-xl transition-all opacity-0",
                "border border-border hover:border-primary/50 dark:hover:border-primary/30"
              )}
              style={{ animationFillMode: "forwards" }}
            >
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-auto pt-2">
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button asChild size="sm" className="w-full">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
