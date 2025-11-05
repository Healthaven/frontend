import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import nigeriaConnectivity from "@/assets/nigeria-connectivity.png";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-card border border-border p-8">
              <img
                src={nigeriaConnectivity}
                alt="Map of Nigeria showing healthcare connectivity network across the country"
                className="w-full h-auto"
              />
            </div>
            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -top-6 -right-6 bg-gradient-card border border-border rounded-xl p-6 shadow-card"
            >
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Partner Hospitals</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-gradient-card border border-border rounded-xl p-6 shadow-card"
            >
              <div className="text-3xl font-bold text-accent">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <div className="bg-primary/10 border border-primary/30 rounded-full px-4 py-2 text-sm font-medium text-primary">
                About HealtHaven
              </div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Healthcare Without Borders
            </h2>

            <p className="text-xl text-accent font-semibold">
              HealtHaven connects diaspora visitors to trusted healthcare in Nigeria — securely, digitally, and instantly.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We understand the unique challenges faced by diaspora Nigerians when visiting home. 
              That's why we've built a modern, digital-first health insurance platform that makes 
              accessing quality healthcare simple, affordable, and stress-free. From telemedicine 
              to in-person care at our network of trusted hospitals, we've got you covered.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">1-6</div>
                <div className="text-sm text-muted-foreground">Months Flexible Coverage</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">$100</div>
                <div className="text-sm text-muted-foreground">Starting Price per Month</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
