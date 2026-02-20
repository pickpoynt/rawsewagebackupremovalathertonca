import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is drain cleaning safe for older Eugene homes?",
    answer: "Yes, our technical drain cleaning eugene processes are specifically adapted for the older plumbing found in Eugene's historic neighborhoods. We use mechanical tools that clear clogs without damaging aging pipe walls."
  },
  {
    question: "Why should I choose professional cleaning over chemicals?",
    answer: "Store-bought chemical cleaners are often corrosive and bad for the environment. Professional drain cleaning eugene provides a more thorough, mechanical removal of blockages that is safer for your pipes and Oregon's water systems."
  },
  {
    question: "Can you remove invasive tree roots from my pipes?",
    answer: "Yes. Eugene's lush tree canopy often leads to root intrusion. We use specialized mechanical clearing tools to effectively remove roots from your sewer lines without having to dig up your yard."
  },
  {
    question: "How long does a typical drain cleaning service take?",
    answer: "Most standard drain cleaning eugene services are completed within 1 to 2 hours, depending on the severity and location of the blockage within your Eugene property."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Common Questions</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6 uppercase tracking-tight">
            Eugene Drain <span className="text-indigo-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Answers to common questions about professional drain cleaning eugene and plumbing maintenance in Lane County.
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
