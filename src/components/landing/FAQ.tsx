const faqs = [
  {
    question: "How do I know if I need a mold test as opposed to just cleaning?",
    answer: "If you have unexplainable health symptoms, a persistent musty odor with no visible mold, or if you are involved in a real estate transaction, a professional lab test is essential. It identifies hidden spores behind basement walls that a simple visual inspection will miss."
  },
  {
    question: "Do you perform the mold removal after testing?",
    answer: "No. We are strictly a 'conflict-free' testing firm. We do not perform remediation. This ensures our report is honest and unbiased—not a sales tactic. We provide the diagnosis and the protocol; you choose the repair company."
  },
  {
    question: "How long does it take to get the lab results back?",
    answer: "Our Ambler field team typically sends samples to the lab via overnight courier. You will receive a comprehensive PDF report with spore counts and species identification within 24-48 hours of our site visit."
  },
  {
    question: "Will air testing find mold behind my basement drywall?",
    answer: "Yes. Mold colonies release spores into the wall cavity which eventually leak into the indoor air. Our high-volume air pumps and wall cavity samples can detect levels far above normal indoor air, pinpointing the location of hidden growth."
  },
  {
    question: "Should I test for mold after a basement flood in Ambler?",
    answer: "Absolutely. Even if the basement 'looks' dry, moisture trapped in the insulation or sill plate can grow mold within 48-72 hours. A post-flood test ensures that your drying efforts were successful before you replace your drywall or flooring."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
              Mold Testing & Lab FAQ
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Scientific answers to your questions about air quality and basement mold diagnostics in Montgomery County.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 group"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors flex items-start gap-3">
                  <span className="text-blue-500">Q:</span> {faq.question}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium pl-8 border-l-2 border-blue-100">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
