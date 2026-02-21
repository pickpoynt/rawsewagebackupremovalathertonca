import { Button } from "@/components/ui/button";
import { Locate, Phone, ShieldCheck, MapPin, Mail, DollarSign } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 mb-6 font-bold uppercase tracking-wider text-sm shadow-sm">
            <Locate className="w-4 h-4" />
            ATHERTON SEWER CLEANING PROS
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight uppercase tracking-tight">
            Schedule <span className="text-indigo-600">basement sewer backup cleaning Atherton CA</span>
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium italic">
            Protect your Atherton estate's value and safety. Our elite team provides clinical-grade decontamination and forensic restoration across San Mateo County.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-5 group border-b border-slate-100 pb-8">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 border border-slate-100">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-1">ELITE EMERGENCY LINE</p>
                <a href="tel:8777921410" className="text-2xl font-bold text-slate-900 hover:text-indigo-600 transition-colors uppercase tracking-tight">
                  (877) 792-1410
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-indigo-600 border border-slate-100">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-1">STATE CERTIFIED</p>
                <p className="text-xl font-bold text-slate-900 uppercase tracking-tight">Biohazard Remediation Pros</p>
              </div>
            </div>

            {/* NEW FEATURE: Phone Number Replacement Offer */}
            <div className="mt-12 p-8 bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[2rem] text-white border border-indigo-500/30 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16 transition-transform group-hover:scale-110" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center border border-indigo-400/30">
                    <DollarSign className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h4 className="text-xl font-bold uppercase tracking-tight">Lease This Number</h4>
                </div>
                <p className="text-indigo-100 text-sm leading-relaxed mb-6 italic">
                  Want to replace this phone number with your own business line? We offer exclusive lead routing placement for only **$19 a month**.
                </p>
                <a
                  href="mailto:bankonmanish@gmail.com?subject=Phone Replacement Inquiry - Atherton"
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs transition-all hover:gap-3"
                >
                  <Mail className="w-4 h-4" />
                  Contact: bankonmanish@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-indigo-900/10 border border-slate-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 uppercase tracking-widest">Emergency Request</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Your Name</label>
                <input
                  type="text"
                  className="w-full bg-slate-50 border-slate-200 rounded-xl h-14 px-6 focus:ring-2 focus:ring-indigo-500 transition-all outline-none font-medium"
                  placeholder="Estate Name / Owner"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Contact Phone</label>
                <input
                  type="tel"
                  className="w-full bg-slate-50 border-slate-200 rounded-xl h-14 px-6 focus:ring-2 focus:ring-indigo-500 transition-all outline-none font-medium"
                  placeholder="(877) 792-1410"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Urgency Level</label>
              <select className="w-full bg-slate-50 border-slate-200 rounded-xl h-14 px-6 focus:ring-2 focus:ring-indigo-500 transition-all outline-none font-medium">
                <option>Active Sewer Backup (Emergency)</option>
                <option>Decontamination Service</option>
                <option>Structural Drying</option>
                <option>Odor Removal</option>
                <option>Biohazard Inspection</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Situation Details</label>
              <textarea
                rows={4}
                className="w-full bg-slate-50 border-slate-200 rounded-xl p-6 focus:ring-2 focus:ring-indigo-500 transition-all outline-none font-medium"
                placeholder="Describe the extent of the basement sewage failure..."
              ></textarea>
            </div>
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-16 rounded-xl text-lg font-bold shadow-lg shadow-indigo-900/20 uppercase tracking-widest transition-all">
              Launch Elite Response
            </Button>
            <p className="text-center text-slate-500 text-sm italic font-medium">
              *Sub-45 minute response time for Atherton and Menlo Park residents
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
