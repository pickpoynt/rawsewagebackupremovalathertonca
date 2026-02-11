import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ShieldCheck, Home, Waves, Microscope } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                <Microscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl block leading-none">Ambler</span>
                <span className="text-sm font-medium text-blue-500">Basement Mold Lab</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed font-medium">
              Montgomery County's premier independent mold diagnostic lab. We provide certified air sampling and laboratory analysis for Ambler homeowners, businesses, and real estate professionals.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors group">
                <Facebook className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors group">
                <Instagram className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors group">
                <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 font-heading text-white">Lab Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-slate-400 hover:text-blue-500 transition-colors flex items-center gap-2 font-medium"> Air Spore Sampling</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-blue-500 transition-colors flex items-center gap-2 font-medium"> Infrared Moisture Mapping</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-blue-500 transition-colors flex items-center gap-2 font-medium"> Swab & Tape Sampling</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-blue-500 transition-colors flex items-center gap-2 font-medium"> Toxic Strain Analysis</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-blue-500 transition-colors flex items-center gap-2 font-medium"> Post-Cleaning Verification</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 font-heading text-white">Company</h4>
            <ul className="space-y-4">
              <li><a href="#why-us" className="text-slate-400 hover:text-blue-500 transition-colors font-medium">Conflict-Free Policy</a></li>
              <li><a href="#basement-mold-info" className="text-slate-400 hover:text-blue-500 transition-colors font-medium">Testing Science</a></li>
              <li><a href="#faq" className="text-slate-400 hover:text-blue-500 transition-colors font-medium">Testing FAQ</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-blue-500 transition-colors font-medium">Schedule Visit</a></li>
              <li><p className="text-slate-400 font-medium">Privacy Policy</p></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-lg font-bold mb-8 font-heading text-white">Lab Hotline</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Testing Line</p>
                  <a href="tel:3802660944" className="text-lg font-bold text-white hover:text-blue-500 transition-colors">
                    (380) 266-0944
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Service Region</p>
                  <p className="text-white font-bold">
                    Ambler & Montgomery County, PA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} Ambler Basement Mold Lab. Independent Diagnostic Services.
          </p>
          <div className="flex items-center gap-2 text-slate-600 text-xs">
            <ShieldCheck className="w-4 h-4 text-blue-500" />
            <span>AIHA Laboratory Partner</span>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />
    </footer>
  );
};

export default Footer;
