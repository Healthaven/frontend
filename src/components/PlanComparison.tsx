import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const plans = [
  {
    name: "Basic",
    price: "$100",
    duration: "1–3 months",
    description: "Essential coverage for short visits",
    features: [
      "Telemedicine consultations",
      "GP consultations",
      "Emergency support",
      "Digital health card",
      "24/7 helpline",
    ],
    popular: false,
  },
  {
    name: "Plus",
    price: "$200",
    duration: "1–6 months",
    description: "Comprehensive care for extended stays",
    features: [
      "Everything in Basic",
      "Specialist care",
      "Diagnostic tests",
      "Dental coverage",
      "Prescription medications",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "$350",
    duration: "1–6 months",
    description: "Complete protection and peace of mind",
    features: [
      "Everything in Plus",
      "Full preventive care",
      "Annual health checkup",
      "Mental health support",
      "Unlimited specialist visits",
      "Family member add-on",
      "Concierge service",
    ],
    popular: false,
  },
];

export const PlanComparison = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const scrollTo = useSmoothScroll();

  const handleNotifyMe = () => {
    scrollTo("waitlist");
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
              Pricing Plans
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">Choose Your Coverage</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible plans designed for diaspora visitors. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-primary px-4 py-1 rounded-full text-sm font-semibold shadow-glow">
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`bg-gradient-card border rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? "border-primary shadow-glow scale-105 md:scale-110"
                    : "border-border hover:shadow-card"
                }`}
              >
                {/* Plan header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{plan.duration}</p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  size="lg"
                  className="w-full"
                  onClick={handleNotifyMe}
                  aria-label="Scroll to Waitlist section"
                >
                  Notify Me When Available
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 text-sm text-muted-foreground"
        >
          All plans include digital health card and access to our partner hospital network
        </motion.div>
      </div>
    </section>
  );
};
