import { Footer } from "@/components/Footer";
import healthavenFullLogo from "@/assets/healthaven full logo.png";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

const LegalLayout = ({ title, lastUpdated, children }: LegalLayoutProps) => {
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

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">{title}</h1>
            <p className="text-lg text-muted-foreground">Last updated: {lastUpdated}</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 space-y-8">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LegalLayout;
