import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How fast should I react to a basement sewer backup in Atherton?",
    answer: "Immediate reaction is critical. Category 3 sewage water contains harmful pathogens that begin penetrating porous surfaces and structural materials instantly. Our Atherton emergency team typically arrives within 45 minutes to begin extraction."
  },
  {
    question: "Is your cleaning process safe for luxury basement finishes?",
    answer: "Yes. Our basement sewer backup cleaning Atherton CA specialists use specific clinical-grade sanitizers designed for high-end materials like marble, bespoke cabinetry, and luxury masonry, ensuring decontamination without damage."
  },
  {
    question: "Do you provide documentation for insurance claims?",
    answer: "Absolutely. We provide comprehensive forensic documentation, including moisture maps, decontamination logs, and thermal imagery to support your insurance claim for your Atherton residence."
  },
  {
    question: "What is your decontamination standard?",
    answer: "We adhere to IICRC S500 and S520 standards for sewage and biohazard remediation, using EPA-registered broad-spectrum disinfectants to ensure a clinical level of hygiene in your living space."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Critical Intelligence</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6 uppercase tracking-tight">
            Atherton Sewer <span className="text-indigo-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Essential information for Atherton property owners facing a basement sewage emergency or failure.
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
