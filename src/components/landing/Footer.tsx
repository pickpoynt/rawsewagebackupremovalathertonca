import { Phone, MapPin, Locate } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <Locate className="w-7 h-7 text-blue-500" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl block leading-none tracking-tight text-white uppercase">Eugene Drain Cleaning</span>
                <span className="text-sm font-medium text-blue-500 uppercase tracking-widest text-[10px]">Pros</span>
              </div>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed font-medium italic">
              Eugene's specialized technical drain cleaning experts. We provide professional unclogging, root removal, and line descaling across Lane County.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-4">
              {["Drain Unclogging", "Sewer Scouring", "Root Removal", "Main Line Cleaning"].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-slate-400 hover:text-blue-500 transition-colors font-medium flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-blue-500/40 group-hover:w-2 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Our Process", "Service Areas", "Contact Us", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors font-medium flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-blue-500/40 group-hover:w-2 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact Information</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-500 shrink-0" />
                <address className="text-slate-400 not-italic font-medium leading-relaxed">
                  1010 Willamette St<br />
                  Eugene, OR 97401
                </address>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-blue-500 shrink-0" />
                <a href="tel:8777921410" className="text-xl font-bold text-white hover:text-blue-500 transition-colors">
                  (877) 792-1410
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm font-medium italic">
            © {new Date().getFullYear()} Eugene Drain Cleaning Pros. All rights reserved. Lane County Professional Technicians.
          </p>
        </div>
      </div>

      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Eugene Drain Cleaning Pros",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1010 Willamette St",
            "addressLocality": "Eugene",
            "addressRegion": "OR",
            "postalCode": "97401",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "44.0521",
            "longitude": "-123.0868"
          },
          "telephone": "+18777921410",
          "url": "https://eugene-draincleaning-pros.com/"
        })}
      </script>
    </footer>
  );
};

export default Footer;
