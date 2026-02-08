import { Search, Droplets, Shield, Hammer, AlertTriangle, Waves, Activity, Zap, ClipboardList } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Main Sewer Line Jetting",
    description: "Our 4000 PSI hydro jetters blast through the most stubborn Pierce County sewer blockages, restoring full flow to your Tacoma property.",
    link: "#hydro-jetting-info"
  },
  {
    icon: Hammer,
    title: "Root Intrusion Removal",
    description: "Specialized rotating nozzles cut through intrusive tree roots in older Tacoma neighborhoods without damaging your original pipes.",
    link: "#hydro-jetting-info"
  },
  {
    icon: Droplets,
    title: "Commercial Grease Scouring",
    description: "Keep your Tacoma restaurant or commercial kitchen in compliance with high-pressure grease trap and drain line scouring.",
    link: "#hydro-jetting-info"
  },
  {
    icon: AlertTriangle,
    title: "Emergency Clog Response",
    description: "24/7 rapid response for total sewer backups in Tacoma. We stabilize the situation and clear the line fast to prevent water damage.",
    link: "#hydro-jetting-info"
  },
  {
    icon: Search,
    title: "Video Sewer Inspection",
    description: "We use high-definition cameras to inspect your Tacoma sewer lines before and after jetting to ensure a 100% clear result.",
    link: "#hydro-jetting-info"
  },
  {
    icon: Waves,
    title: "Storm Drain Cleaning",
    description: "Prevent flooding during Tacoma's heavy rainy season by ensuring your exterior storm drains are clear of silt and debris.",
    link: "#hydro-jetting-info"
  },
  {
    icon: Shield,
    title: "Pipe Descaling",
    description: "Removing years of scale and iron buildup from historic Tacoma cast iron pipes, extending their life and improving water pressure.",
    link: "#hydro-jetting-info"
  },
  {
    icon: ClipboardList,
    title: "Maintenance Plans",
    description: "Scheduled hydro jetting for Tacoma businesses and homeowners to prevent emergency backups and maintain healthy plumbing.",
    link: "#hydro-jetting-info"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Tacoma's Specialized Hydro Jetting Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don't trust generic plumbers with a stubborn blockage. Our Tacoma team specializes specifically in industrial-strength high-pressure water jetting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <a href={service.link}>
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

