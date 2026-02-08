import { Shield, Microscope, MapPin, Building2, ClipboardCheck, Zap, Award, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Tacoma's Jetting Experts",
    description: "We are the go-to specialists for high-pressure sewer cleaning in Tacoma, serving neighborhoods from the North End to South Tacoma with precision."
  },
  {
    icon: Microscope,
    title: "Diagnostic Video Entry",
    description: "Every jetting job includes a before-and-after video inspection to ensure your Tacoma sewer line is 100% clear of all grease and roots."
  },
  {
    icon: Building2,
    title: "Industrial Grade Tech",
    description: "We use top-tier 4000 PSI hydro jetting equipment that is far more effective than standard snaking or chemical cleaners used by generic plumbers."
  },
  {
    icon: ClipboardCheck,
    title: "Licensed & Insured",
    description: "Our Tacoma team is fully licensed and insured in Washington State, ensuring your property is protected and the job is done to local codes."
  },
  {
    icon: Shield,
    title: "Environmentally Safe",
    description: "Our process uses only high-pressure water. No harsh chemicals are introduced into your pipes or the Tacoma soil, keeping the Puget Sound safe."
  },
  {
    icon: MapPin,
    title: "Born & Raised in Tacoma",
    description: "We are proud Tacoma locals. Whether you're in Proctor or Hilltop, we know the specific plumbing challenges of our city's historic homes."
  }
];

const stats = [
  { number: "1500+", label: "Tacoma Jobs" },
  { number: "4000+", label: "PSI Pressure" },
  { number: "100%", label: "Chemical Free" },
  { number: "24/7", label: "Emergency Ser." }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Tacoma's Highest Rated Jetting Specialists
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the team that Tacoma homeowners trust. We specialize in turning a stubborn sewer backup into a permanent, high-flow solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <reason.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 rounded-3xl p-12 text-white shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-heading font-bold">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

