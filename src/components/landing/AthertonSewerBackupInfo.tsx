import { ShieldCheck, Droplets, Activity, ClipboardCheck, MapPin, Construction, Locate, Search, Clock, Zap, Target, Filter, Waves, AlertTriangle } from "lucide-react";

const AthertonSewerBackupInfo = () => {
    return (
        <section id="atherton-sewer-backup-info" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&q=80')] opacity-[0.03] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 mb-6 uppercase tracking-widest text-xs font-bold">
                            <Locate className="w-4 h-4" />
                            <span>Silicon Valley Emergency Response</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            White-Glove <span className="text-indigo-600">basement sewer backup cleaning Atherton CA</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            Premium decontamination and restoration for Atherton's most exclusive estates. When a sewer failure strikes your basement, we provide rapid, discreet, and clinical-grade cleaning across San Mateo County.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* Left Column - Service Excellence */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <AlertTriangle className="w-7 h-7 text-rose-500" />
                                    Atherton's Response Protocol
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Waves className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Category 3 Extraction</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Sewer water contains high-risk pathogens. Our IICRC-certified technicians use industrial-grade vacuums for immediate extraction, preventing long-term structural saturation in your Atherton basement.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <ShieldCheck className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Hospital-Grade Sanitization</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                We deploy thermal fogging and botanical-grade antimicrobial treatments that are safe for pets and children but lethal to sewage-borne bacteria and viruses.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Search className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Precision Moisture Monitoring</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Using infrared thermography and moisture meters, we ensure that deep structural components of your Atherton home are dry, preventing secondary mold outbreaks.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Local Expertise */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <MapPin className="w-7 h-7 text-indigo-600" />
                                    Serving Atherton & The Peninsula
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                                    Providing rapid response basement sewer backup cleaning Atherton CA for these distinguished neighborhoods:
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "Lindenwood",
                                        "Lloyden Park",
                                        "Atherton Avenue",
                                        "Selby Lane",
                                        "Walsh Road",
                                        "Stockbridge",
                                        "Greenoaks",
                                        "Alameda"
                                    ].map((area, index) => (
                                        <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                                            <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                            <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{area}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* UNIQUE LOCAL CONTENT */}
                            <div className="p-8 bg-indigo-600 rounded-3xl text-white shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">Preserving Atherton Estates</h4>
                                <p className="text-indigo-50 text-sm leading-relaxed italic">
                                    Atherton homes feature bespoke finishes and historical masonry. Our basement sewer backup cleaning Atherton CA specialists are trained in the careful handling of luxury materials, ensuring that emergency mitigation doesn't compromise your home's architectural value.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Technical Box */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden border border-indigo-500/20">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
                        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                            <div>
                                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight flex items-center gap-3">
                                    Critical Sewer Failure?
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6 italic font-medium">
                                    Time is the enemy of restoration. Contaminants seep deeper every hour. Our Atherton emergency team maintains local staging for sub-45 minute response times.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest font-heading">CA License #974011</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest font-heading">San Mateo Specialist</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest font-heading">IICRC Certified</div>
                                </div>
                            </div>
                            <div className="bg-indigo-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform border border-indigo-400/30 shadow-2xl">
                                <p className="text-indigo-100 text-sm font-bold uppercase tracking-widest mb-2 text-center">Atherton Elite Support</p>
                                <a href="tel:8777921410" className="text-4xl font-bold transition-colors block mb-4 hover:text-white text-center">
                                    (877) 792-1410
                                </a>
                                <p className="text-indigo-100 text-sm italic font-medium text-center">
                                    24/7 Premium Sewer Cleanup
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AthertonSewerBackupInfo;
