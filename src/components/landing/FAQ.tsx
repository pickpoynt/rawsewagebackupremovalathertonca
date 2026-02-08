import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What exactly is hydro jetting?",
    answer: "Hydro jetting is a method of cleaning sewer and drain lines using high-pressure water (up to 4000 PSI). Unlike standard snaking, which only pokes a hole through a clog, jetting scours the entire internal surface of the pipe, removing grease, scale, and roots completely."
  },
  {
    question: "Is hydro jetting safe for my older Tacoma home's pipes?",
    answer: "Yes, but only when performed by professionals. We start every job with a video inspection to ensure your pipes (whether cast iron, clay, or PVC) are structurally sound enough for the pressure. It's often safer than using corrosive chemical cleaners."
  },
  {
    question: "How often should I have my Tacoma sewer lines jetted?",
    answer: "For residential properties with historic trees, we recommend every 18-24 months. For Tacoma restaurants and commercial kitchens, we recommend every 3-6 months to prevent grease-related backups and health code violations."
  },
  {
    question: "Can hydro jetting remove tree roots in my Tacoma yard?",
    answer: "Absolutely. Our specialized rotating jetter nozzles are designed to cut through intrusive tree roots that have penetrated your sewer line. It's an effective, non-invasive alternative to digging up your landscape."
  },
  {
    question: "How is hydro jetting better than a standard drain snake?",
    answer: "A snake is a temporary fix—it creates a small opening but leaves the rest of the buildup behind. Hydro jetting restores the pipe to nearly 100% of its original flow capacity by removing all sludge and debris."
  },
  {
    question: "Will the Tacoma rainy season affect my sewer lines?",
    answer: "Yes. Heavy rains can put extra pressure on aging sewer systems and wash silt into exterior lines. Regular hydro jetting ensures your drains can handle the increased volume and prevents basement flooding during PNW storms."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Tacoma Hydro Jetting FAQ
          </h2>
          <p className="text-lg text-slate-600">
            Expert answers for Tacoma homeowners and businesses regarding high-pressure drain cleaning.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-xl px-4 bg-white shadow-sm overflow-hidden">
              <AccordionTrigger className="text-left font-heading font-bold text-slate-900 hover:text-blue-600 py-6 transition-colors font-semibold leading-relaxed">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;

