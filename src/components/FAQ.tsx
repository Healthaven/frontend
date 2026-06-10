import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: "Who is this healthcare coverage for?",
    answer: "Healhaven is designed for Nigerians in the diaspora and international visitors traveling to Nigeria who want temporary and flexible healthcare coverage during their stay. Coverage can be purchased for short periods starting from one month.",
  },
  {
    question: "What does the one-month coverage include?",
    answer: (
      <div className="space-y-2">
        <p>Depending on the selected plan, coverage may include:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Hospital visits</li>
          <li>Emergency care</li>
          <li>Doctor consultations</li>
          <li>Prescription support</li>
          <li>Diagnostic tests</li>
          <li>Access to partner hospitals across Nigeria and more</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Can I buy coverage for my parents or family members in Nigeria?",
    answer: "Yes. You can purchase and manage healthcare coverage for loved ones in Nigeria directly from the app, even if you live abroad. This includes parents, children, and other dependents.",
  },
  {
    question: "How do I access care once I arrive in Nigeria?",
    answer: "After purchasing a plan, you'll receive digital access to your healthcare details through the app. You can then visit any approved partner hospital or provider within the network for covered services during your active stay.",
  },
  {
    question: "When does my coverage begin?",
    answer: "Coverage begins on the start date selected during signup. Activation is instant after payment confirmation, allowing you to access care immediately or on your scheduled travel date.",
  },
  {
    question: "Can I pay from abroad?",
    answer: "Yes. We accept international payment methods including major credit cards, debit cards, and digital payment platforms. All transactions are processed securely using industry-standard encryption.",
  },
  {
    question: "What happens if I need to extend my coverage?",
    answer: "You can easily extend your coverage through your online dashboard before your current plan expires. Simply select your desired extension period and process the payment. There's no gap in coverage when you extend early.",
  },
];

export const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="faq-section" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-block">
            <div className="bg-primary/10 border border-primary/30 rounded-full px-4 py-2 text-sm font-medium text-primary">
              FAQ
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about HealtHaven
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-card border border-border rounded-xl px-6 hover:shadow-card transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
