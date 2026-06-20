import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { apiUrl } from "@/lib/api";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  message: z.string().trim().min(1, "Please enter a message."),
});

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      contactSchema.parse(formData);

      const response = await fetch(apiUrl("/api/v1/frontend/contact"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 429) {
        toast.error("Too many messages. Please try again later.");
        return;
      }

      if (data.success) {
        toast.success(data.message);
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error("Network error. Please check your connection.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-block">
            <div className="bg-primary/10 border border-primary/30 rounded-full px-4 py-2 text-sm font-medium text-primary">
              Get in Touch
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">Let's talk</h3>
              <p className="text-muted-foreground">
                Reach out and we'll respond as soon as we can.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground text-sm">support@healthaven.co</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Live Chat</p>
                  <a
                    href="https://wa.me/2348066603349"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    Available 24/7 via WhatsApp: +234 806 660 3349
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground text-sm">Nigeria / United States / Remote</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-card border border-border rounded-2xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Your Name</label>
                <Input
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50 border-border"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Your Email</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/50 border-border"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Message</label>
              <textarea
                placeholder="Tell us what's on your mind..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="flex min-h-[140px] w-full rounded-md border border-input bg-background/50 px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none"
                required
              />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full group" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}
              <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
