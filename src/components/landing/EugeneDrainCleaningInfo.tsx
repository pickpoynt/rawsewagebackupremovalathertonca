import { ShieldCheck, Droplets, Activity, ClipboardCheck, MapPin, Construction, Locate, Search, Clock, Zap, Target, Filter, Waves } from "lucide-react";

const EugeneDrainCleaningInfo = () => {
    return (
        <section id="eugene-drain-cleaning-info" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590234053744-8d45129c5ac6?auto=format&fit=crop&q=80')] opacity-[0.03] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 mb-6 uppercase tracking-widest text-xs font-bold">
                            <Locate className="w-4 h-4" />
                            <span>Lane County Drain Specialists</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Expert <span className="text-indigo-600">drain cleaning eugene</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            Tackling the Pacific Northwest's toughest blockages. We provide specialized drain cleaning eugene for residential and commercial properties throughout Eugene and the Willamette Valley.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* Left Column - Service Excellence */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <Construction className="w-7 h-7 text-indigo-600" />
                                    Eugene's Precision Cleaning
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Waves className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">High-Pressure Descaling</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Our industrial-grade descaling equipment blasts through grease, sludge, and scale buildup, restoring your pipes to like-new condition without using harmful chemical cleaners.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Zap className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Root Management Systems</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Eugene's beautiful tree canopy often leads to root invasion. Our specialized mechanical clearing effectively removes roots, preventing major structural pipe damage.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Droplets className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Full-Diameter Restoration</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                We don't just clear a path through the clog; we restore the full diameter of your pipes for long-lasting flow reliability and peace of mind.
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
                                    Serving Eugene & Lane County
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                                    Providing rapid response drain cleaning eugene for Eugene and surrounding communities:
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "Springfield",
                                        "Santa Clara",
                                        "Bethel",
                                        "Cal Young",
                                        "South Eugene",
                                        "Friendly Street",
                                        "Coburg",
                                        "Veneta"
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
                                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">The Willamette Valley Stewardship</h4>
                                <p className="text-indigo-50 text-sm leading-relaxed italic">
                                    In Eugene, we values our proximity to the Willamette River and local waterways. Our drain cleaning eugene processes are designed to be environmentally conscious, avoiding toxic chemicals and focusing on technical mechanical removal to protect both your plumbing and the delicate Oregon ecosystem we call home.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Technical Box */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
                        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                            <div>
                                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight flex items-center gap-3">
                                    Slow Drains or Backups?
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6 italic">
                                    If your drains are sluggish or making gurgling noises, an obstruction is likely. Our Eugene drain cleaning specialists are ready to deploy 24/7 to restore your home's flow.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest font-heading">Oregon Licensed</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest font-heading">Lane County Local</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest font-heading">Drain Experts</div>
                                </div>
                            </div>
                            <div className="bg-indigo-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform border border-indigo-400/30 shadow-2xl">
                                <p className="text-indigo-100 text-sm font-bold uppercase tracking-widest mb-2">24/7 Service Available</p>
                                <a href="tel:8777921410" className="text-4xl font-bold transition-colors block mb-4 hover:text-white">
                                    (877) 792-1410
                                </a>
                                <p className="text-indigo-100 text-sm italic font-medium">
                                    Professional drain cleaning eugene
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EugeneDrainCleaningInfo;
