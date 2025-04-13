
import { Heart } from "lucide-react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <SocialLinks className="mb-6" />
          
          <div className="text-center">
            <p className="text-muted-foreground flex items-center justify-center mb-2">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by John Doe
            </p>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} John Doe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
