import { ShieldCheck, Zap, Users, Award, Biohazard, Wind, Microscope, Lock, Search } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Zero Conflict Policy",
    description: "We only test, we never remediate. This ensures our report is 100% unbiased and not designed to sell you repair services."
  },
  {
    icon: Wind,
    title: "Hidden Mold Analysis",
    description: "Our air volume samples detect spores from colonies hidden in crawlspaces, subfloors, and behind finished basement walls."
  },
  {
    icon: Microscope,
    title: "AIHA Accredited Lab",
    description: "Your samples are analyzed by a top-tier independent laboratory with detailed species identification and count data."
  },
  {
    icon: ShieldCheck,
    title: "Certified Protocol",
    description: "If mold is found, you receive a detailed remediation protocol to give to any repair company, ensuring the job is done right."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Why Ambler Chooses Our Independent Testing Lab
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed font-medium">
            Mold testing requires specialized diagnostic equipment and scientific impartiality. We provide the data you need to make informed decisions about your home's air quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-[2rem] bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-[3rem] bg-gradient-to-br from-blue-600 to-blue-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-blue-900/40">
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold text-white mb-4">Toxic Odor or Allergy?</h3>
            <p className="text-blue-50 text-lg font-medium opacity-90">
              Our Ambler field team can be on-site within 24 hours for air sampling and moisture mapping. Get lab-certified results fast.
            </p>
          </div>
          <a
            href="tel:3802660944"
            className="px-10 py-5 bg-white text-blue-600 rounded-2xl text-xl font-bold hover:bg-slate-50 transition-colors shadow-lg shadow-black/10 flex items-center gap-3 whitespace-nowrap"
          >
            <ShieldCheck className="w-6 h-6" />
            (380) 266-0944
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
