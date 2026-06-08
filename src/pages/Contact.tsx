import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import healthavenFullLogo from "@/assets/healthaven full logo.png";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <a href="/">
              <img src={healthavenFullLogo} alt="HealtHaven" className="h-8 w-auto" />
            </a>
            <nav>
              <a
                href="/"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Back to Home
              </a>
            </nav>
          </div>
        </div>
      </header>
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
