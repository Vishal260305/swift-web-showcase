
import { Github, Linkedin, Twitter, Mail, Globe } from "lucide-react";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

const SocialLinks = ({ className = "", iconSize = 20 }: SocialLinksProps) => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/username",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/username",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/username",
      icon: Twitter,
    },
    {
      name: "Email",
      url: "mailto:email@example.com",
      icon: Mail,
    },
    {
      name: "Website",
      url: "https://website.com",
      icon: Globe,
    },
  ];

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <link.icon size={iconSize} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
