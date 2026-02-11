import { Shield, Microscope, Droplets, Wind, Zap, Biohazard, FlaskConical, ClipboardCheck, Search, Activity } from "lucide-react";

const services = [
  {
    icon: Microscope,
    title: "Air Spore Sampling",
    description: "Vacuum-pumped air volumes are analyzed to identify active mold spore concentrations vs outdoor control sets.",
    link: "#basement-mold-info"
  },
  {
    icon: Search,
    title: "Infrared Mapping",
    description: "Thermal imaging identifies the moisture thermal signature behind basement drywall and stone foundations.",
    link: "#basement-mold-info"
  },
  {
    icon: FlaskConical,
    title: "Tape & Swab Testing",
    description: "Surface samples from visible growth are lab-tested to identify specific species and toxic strain potential.",
    link: "#basement-mold-info"
  },
  {
    icon: Activity,
    title: "Post-Cleanup Testing",
    description: "Independent verification to certify that a remediation project has successfully returned the home to a safe state.",
    link: "#basement-mold-info"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            Scientific Air Quality Diagnostics
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            Mold remediation is expensive—don't start without scientific proof. Our Ambler testing lab identifies the exact problem with zero conflict of interest.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <a href={service.link}>
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-wider">
                  Lab Protocol <ClipboardCheck className="w-4 h-4" />
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
