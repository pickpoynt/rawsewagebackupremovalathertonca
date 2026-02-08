import { Phone, Mail, MapPin, Activity, Shield, Hammer } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                <Hammer className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Tacoma Hydro Jetting Experts
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Serving Tacoma and Pierce County with specialized, heavy-duty hydro jetting and sewer line cleaning. Restore your drain system's performance today.
            </p>
            <div className="flex items-center gap-4">
              <a href="tel:8777921410" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Phone className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Jetting Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Main Sewer Jetting</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Root Intrusion Removal</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Grease Trap Scouring</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Video Pipe Inspection</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Storm Drain Cleaning</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Pierce County Service</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> North End & Proctor</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> Hilltop & Downtown</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> University Place & Fircrest</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> Ruston & Point Defiance</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> Puyallup & Lakewood</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Tacoma Hot Line</h4>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
              <div className="text-blue-400 font-bold text-sm uppercase mb-2">WA Licensed Plumber</div>
              <a href="tel:8777921410" className="text-2xl font-heading font-bold text-white hover:text-blue-400 transition-colors">
                (877) 792-1410
              </a>
              <div className="flex items-center gap-2 mt-4 text-slate-400 text-sm">
                <Shield className="w-4 h-4 text-blue-600" />
                Licensed & Insured #TACJET99
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-800 text-center md:text-left flex flex-col md:row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">
            © {currentYear} Tacoma Hydro Jetting Experts. All rights reserved.
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </p>
          <div className="flex items-center gap-3">
            <div className="text-xs text-slate-600 italic">Hydro jetting services Tacoma WA</div>
            <div className="w-2 h-2 rounded-full bg-blue-600/30" />
            <div className="text-xs text-slate-600 italic">Professional sewer cleaning Tacoma</div>
          </div>
        </div>
      </div>

      {/* Structured Data for LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Plumber",
          "name": "Tacoma Hydro Jetting Experts",
          "telephone": "+1-877-792-1410",
          "url": "https://tacoma-hydro-jetting.com/",
          "logo": "https://tacoma-hydro-jetting.com/logo.png",
          "image": "https://images.unsplash.com/photo-1504333638930-c8787321eee0?auto=format&fit=crop&q=80",
          "description": "Professional hydro jetting and sewer line cleaning services in Tacoma, WA. We specialize in high-pressure pipe scouring and root removal.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Serving Tacoma and Pierce County",
            "addressLocality": "Tacoma",
            "addressRegion": "WA",
            "postalCode": "98402",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 47.2529,
            "longitude": -122.4443
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
        })}
      </script>
    </footer>
  );
};

export default Footer;

