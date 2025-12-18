import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { z } from "zod";
import { Mail } from "lucide-react";
import { apiUrl } from "@/lib/api";

const waitlistSchema = z.object({
  first_name: z.string().trim().optional(),
  location: z.string().trim().optional(),
  email: z.string().email({ message: "Please enter a valid email address" }),
});

export const Waitlist = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [firstName, setFirstName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate form data
      const formData = { first_name: firstName, location, email };
      waitlistSchema.parse(formData);

      // Make API call to backend
      const response = await fetch(apiUrl("/api/v1/waitlist"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to join waitlist");
      }

      toast.success("Thanks! We'll reach out when plans launch.", {
        description: "Check your inbox for a confirmation email.",
      });

      // Clear form
      setFirstName("");
      setLocation("");
      setEmail("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="waitlist"
      className="py-24 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-card border border-primary/30 rounded-3xl p-12 shadow-glow">
            <div className="text-center mb-8 space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-2xl mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold">Join the Waitlist</h2>
              <p className="text-xl text-muted-foreground">
                Be among the first to experience hassle-free healthcare coverage in Nigeria
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="First name (optional)"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="h-14 bg-background/50 border-border text-lg"
                />
                <Input
                  type="text"
                  placeholder="Location (City, State) - optional"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="h-14 bg-background/50 border-border text-lg"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-14 bg-background/50 border-border text-lg"
                  required
                />
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="h-14 px-8 text-lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Joining..." : "Join Waitlist"}
                </Button>
              </div>

              <p className="text-sm text-muted-foreground text-center">
                * Required field. We respect your privacy. Unsubscribe at any time.
              </p>
            </form>

            {/* Social proof */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-background" />
                    <div className="w-8 h-8 rounded-full bg-accent border-2 border-background" />
                    <div className="w-8 h-8 rounded-full bg-primary/50 border-2 border-background" />
                  </div>
                  <span>500+ people on the waitlist</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span>Launching soon</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
