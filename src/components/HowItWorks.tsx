import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CreditCard, UserCheck, Heart } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Choose a Plan",
    description: "Select flexible coverage from 1–6 months that fits your visit schedule",
    icon: CreditCard,
  },
  {
    number: "02",
    title: "Sign Up Online",
    description: "Fast digital registration and secure payment from anywhere in the world",
    icon: UserCheck,
  },
  {
    number: "03",
    title: "Access Care",
    description: "Use your digital health card at any partner hospital across Nigeria",
    icon: Heart,
  },
];

export const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-block">
            <div className="bg-primary/10 border border-primary/30 rounded-full px-4 py-2 text-sm font-medium text-primary">
              Simple Process
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get covered in three simple steps. No paperwork, no hassle.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-20" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-card border border-border rounded-2xl p-8 h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                {/* Step number badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center font-bold text-lg shadow-glow">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-6 mt-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center py-4">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-accent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
