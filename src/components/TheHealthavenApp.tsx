import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Smartphone, Zap } from "lucide-react";
import mobileOne from "@/assets/healthaven mobile one.jpg";
import mobileTwo from "@/assets/healthaven mobile two.jpg";
import mobileThree from "@/assets/healthaven mobile three.jpg";

const features = [
  {
    image: mobileOne,
    text: "Access Healthcare remotely and securely across borders",
    icon: Shield,
  },
  {
    image: mobileTwo,
    text: "Manage your plans any time, all in one place",
    icon: Smartphone,
  },
  {
    image: mobileThree,
    text: "Sign up and access our wide range of services within minutes",
    icon: Zap,
  },
];

export const TheHealthavenApp = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(285_100%_40%/0.06),transparent_60%)] pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-block">
            <div className="bg-primary/10 border border-primary/30 rounded-full px-4 py-2 text-sm font-medium text-primary">
              The Healthaven App
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">Healthcare in Your Pocket</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your health coverage, right from your phone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="relative mb-6 w-full max-w-[260px]">
                <motion.div
                  animate={{ y: [0, -24, 0], rotate: [0, -3, 0, 3, 0] }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: index * 0.5,
                    times: [0, 0.25, 0.5, 0.75, 1],
                  }}
                  className="relative rounded-[2rem] border-2 border-border bg-background p-2 shadow-2xl shadow-primary/10 transition-all duration-500 hover:border-primary/40"
                >
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-muted rounded-full z-10" />
                  <img
                    src={feature.image}
                    alt=""
                    className="w-full h-auto rounded-[1.6rem]"
                  />
                </motion.div>
              </div>
              <div className="flex items-start gap-3 max-w-[260px]">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <feature.icon className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
