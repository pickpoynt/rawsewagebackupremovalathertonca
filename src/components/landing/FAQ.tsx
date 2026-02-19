import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is hydro jetting safe for older Lakewood pipes?",
    answer: "Yes, when performed by experts. Our Lakewood technicians calibrate the pressure (PSI) based on your pipe material and age, ensuring a deep clean without risking structural damage."
  },
  {
    question: "How does hydro jetting differ from snaking?",
    answer: "While snaking only creates a hole through a blockage, hydro jetting scours the entire inner wall of the pipe. This removes grease and scale buildup, preventing fast recurring clogs."
  },
  {
    question: "Can hydro jetting remove tree roots?",
    answer: "Absolutely. Our high-pressure jetting nozzles are engineered to sever and flush out invasive roots—a common issue for Lakewood properties with mature landscaping."
  },
  {
    question: "How often should I have my main line jetted?",
    answer: "For residential properties in Pierce County, we recommend maintenance jetting every 24-36 months to prevent sludge buildup and identify potential sewer line failures early."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Common Questions</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6 uppercase tracking-tight">
            Lakewood Jetting <span className="text-indigo-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Answers to common questions about high-pressure water jetting and drain cleaning in Lakewood, Washington.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-slate-200 rounded-2xl px-6"
              >
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:text-indigo-600 py-6 text-lg uppercase tracking-tight" id={`faq-trigger-${index}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-6 leading-relaxed font-medium italic">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
