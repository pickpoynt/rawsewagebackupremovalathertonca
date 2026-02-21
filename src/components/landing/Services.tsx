import { ArrowRight, ShieldAlert, Droplets, FlaskConical, Wind, Search } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Advanced <span className="text-indigo-600">basement sewer backup cleaning Atherton CA</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Atherton estate owners trust us for clinical-grade decontamination and forensic restoration. We resolve the most complex sewage catastrophes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Droplets,
              title: "Sewage Extraction",
              description: "Immediate industrial-grade removal of Category 3 wastewater from your Atherton basement to prevent structural saturation.",
              link: "#contact"
            },
            {
              icon: FlaskConical,
              title: "Bioremediation",
              description: "Clinical-grade sanitization using hospital-strength antimicrobials that safely eliminate pathogens, viruses, and bacteria.",
              link: "#contact"
            },
            {
              icon: Wind,
              title: "Precision Drying",
              description: "High-volume air movement and dehumidification targeted at deep structural components to ensure a 0% moisture profile.",
              link: "#contact"
            },
            {
              icon: Search,
              title: "Odor Neutralization",
              description: "Advanced thermal fogging and HEPA-grade air scrubbing to permanently eliminate sewage odors from your residence.",
              link: "#contact"
            }
          ].map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <a href={service.link}>
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                  <service.icon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700 uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-6">{service.description}</p>
                <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                  Elite Care <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
