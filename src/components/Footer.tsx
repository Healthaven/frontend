import { Linkedin, Twitter, Instagram, MessageCircle } from "lucide-react";
import healthavenFullLogo from "@/assets/healthaven full logo.png";
import healthavenIcon from "@/assets/healthaven icon.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/company/healthaven", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/healthaven", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/healthaven", label: "Instagram" },
    { icon: MessageCircle, href: "https://wa.me/2348066603349", label: "WhatsApp" },
  ];

  const footerLinks = [
    { name: "About", href: "#about" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "FAQ", href: "#faq-section" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <img src={healthavenIcon} alt="HealtHaven" className="h-6 w-auto animate-spin-slow mt-0.5 shrink-0" />
              <p className="text-muted-foreground">
                Short-term health insurance<br />
                for diaspora visitors in Nigeria.<br />
                Healthcare without borders.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect With Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <a href="mailto:support@healthaven.co" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm block">
              support@healthaven.co
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} HealtHaven Limited. All rights reserved.</p>
            <img src={healthavenFullLogo} alt="HealtHaven" className="h-12 w-auto" />
            <div className="flex gap-6">
              <a href="/privacy-policy" className="hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
