
import { useRef, useEffect, useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import SocialLinks from "./SocialLinks";
import { cn } from "@/lib/utils";

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            infoRef.current?.classList.add("animate-fade-in-up");
            infoRef.current?.classList.remove("opacity-0");
            
            setTimeout(() => {
              formRef.current?.classList.add("animate-fade-in-up");
              formRef.current?.classList.remove("opacity-0");
            }, 200);
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
    <section id="contact" className="py-20 bg-secondary/50 dark:bg-secondary/20" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div 
            ref={infoRef} 
            className="space-y-8 opacity-0 order-2 lg:order-1"
            style={{ animationFillMode: "forwards" }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start hover:translate-x-1 transition-transform">
                  <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <address className="not-italic text-muted-foreground">
                      San Francisco, California, USA
                    </address>
                  </div>
                </li>
                <li className="flex items-start hover:translate-x-1 transition-transform">
                  <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">
                      +1 (234) 567-890
                    </a>
                  </div>
                </li>
                <li className="flex items-start hover:translate-x-1 transition-transform">
                  <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:john@example.com" className="text-muted-foreground hover:text-primary">
                      john@example.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Me</h3>
              <SocialLinks iconSize={24} />
            </div>
          </div>
          
          <div 
            ref={formRef} 
            className="bg-card rounded-xl shadow-md p-8 opacity-0 order-1 lg:order-2"
            style={{ animationFillMode: "forwards" }}
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
