import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "HealtHaven gave me peace of mind during my entire visit. The digital health card worked seamlessly at every hospital I visited.",
    author: "Amara O.",
    role: "Diaspora Visitor from UK",
  },
  {
    quote: "Finally, a health insurance solution that understands the needs of diaspora Nigerians. The signup process was incredibly smooth.",
    author: "Chidi M.",
    role: "Diaspora Visitor from USA",
  },
  {
    quote: "The telemedicine feature saved me so much time. I could consult with doctors without leaving my family gathering.",
    author: "Ngozi K.",
    role: "Diaspora Visitor from Canada",
  },
];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/20 to-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-block">
            <div className="bg-primary/10 border border-primary/30 rounded-full px-4 py-2 text-sm font-medium text-primary">
              Testimonials
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">What Our Users Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from diaspora visitors who trust HealtHaven for their healthcare needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="bg-gradient-card border border-border rounded-2xl p-8 h-full hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <Quote className="w-10 h-10 text-primary/30 mb-6" />
                <p className="text-foreground leading-relaxed mb-6 text-lg">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-6">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner logos placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground mb-8">Trusted by leading healthcare providers across Nigeria</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-50 grayscale">
            {/* Placeholder for partner logos */}
            <div className="h-12 w-32 bg-muted rounded flex items-center justify-center text-xs">Hospital Partner</div>
            <div className="h-12 w-32 bg-muted rounded flex items-center justify-center text-xs">Medical Center</div>
            <div className="h-12 w-32 bg-muted rounded flex items-center justify-center text-xs">Healthcare Group</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
