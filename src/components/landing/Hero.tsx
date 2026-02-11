import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, ShieldCheck, Microscope, Wind, FlaskConical, Search } from "lucide-react";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  image?: string;
}

const Hero = ({
  title = (
    <>
      Basement mold testing Ambler
      <span className="block text-blue-500 mt-2 text-2xl md:text-4xl">Ambler Basement Mold Lab: Scientific Diagnostics</span>
    </>
  ),
  subtitle = "Is your basement hiding toxic spores? Our independent certified inspectors use medical-grade air sampling and infrared mapping to reveal hidden mold colonies in your Ambler home with absolute scientific certainty.",
  image = "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&q=80"
}: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Unique Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={image} alt="Basement mold testing Ambler" className="w-full h-full object-cover brightness-50" />
        {/* UNIQUE OVERLAY IMAGE: Using a laboratory glass/grid texture overlay */}
        <div className="absolute inset-0 opacity-15 mix-blend-overlay overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80"
            alt="Scientific Texture Overlay"
            className="w-full h-full object-cover scale-125 animate-pulse transition-all duration-[8000ms]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-blue-950/40 to-slate-950/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-8 animate-fade-in shadow-lg shadow-blue-500/5">
            <Microscope className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wider">Ambler's Certified Mold Testing Lab</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 animate-fade-in leading-[1.1]">
            {title}
          </h1>

          <p className="text-xl text-slate-300 mb-10 animate-fade-in-delay-1 leading-relaxed max-w-2xl italic">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-2">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-none h-14 px-8 text-lg font-bold shadow-xl shadow-blue-900/40" asChild>
              <a href="tel:3802660944" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (380) 266-0944
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 transition-all h-14 px-8 text-lg" asChild>
              <a href="#services" className="flex items-center gap-2">
                Testing Protocols
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/10 animate-fade-in-delay-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-white font-medium">Independent Lab</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <Search className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-white font-medium">Infrared Tech</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-white font-medium">24h Lab Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
