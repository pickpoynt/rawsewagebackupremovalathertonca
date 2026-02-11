import { Shield, Microscope, Droplets, Wind, Zap, Search, ClipboardCheck, FlaskConical } from "lucide-react";

const BasementMoldTestingInfo = () => {
    return (
        <section id="basement-mold-info" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 mb-6 font-bold uppercase tracking-wider text-sm">
                            <Microscope className="w-4 h-4" />
                            Scientific Air Quality Analysis
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                            Precision Basement Mold Testing Ambler
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium">
                            Don't guess about the air you breathe. Ambler's historic stone basements and high water tables create unique microbial challenges. We provide certified, independent laboratory testing to verify spore counts and identify toxic strains.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-slate-100 hover:-translate-y-2 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center mb-8 shadow-lg shadow-blue-200">
                                <Wind className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Air Spore Sampling</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                We capture air volumes from your basement to measure active spore concentrations against outdoor control samples, identifying hidden colonies behind walls.
                            </p>
                        </div>

                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-slate-100 hover:-translate-y-2 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center mb-8 shadow-lg shadow-blue-200">
                                <Search className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Infrared Leak Detection</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                Using thermal imaging, we find cold spots and moisture intrusion in Ambler stone foundations that are invisible to the naked eye.
                            </p>
                        </div>

                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-slate-100 hover:-translate-y-2 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center mb-8 shadow-lg shadow-blue-200">
                                <FlaskConical className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Toxic Strain ID</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                Not all mold is equal. Our lab analysis distinguishes between common allergens and toxic Stachybotrys or Chaetomium strains.
                            </p>
                        </div>
                    </div>

                    <div className="mt-20 bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
                        <div className="absolute inset-0 opacity-20">
                            <img
                                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
                                alt="Laboratory Testing"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="relative z-10 p-12 md:p-20 grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Conflict-Free Testing</h3>
                                <p className="text-blue-100 text-lg leading-relaxed mb-8 opacity-90 font-medium">
                                    We are strictly a testing and diagnostic firm. By not performing the remediation ourselves, we ensure our results are 100% unbiased. Our only goal is providing you with accurate data and a clear protocol for your Ambler home.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-white font-bold text-lg">
                                        <ClipboardCheck className="text-blue-400 w-6 h-6" />
                                        Certified Lab Results in 24-48 Hours
                                    </div>
                                    <div className="flex items-center gap-3 text-white font-bold text-lg">
                                        <ClipboardCheck className="text-blue-400 w-6 h-6" />
                                        Detailed Remediation Protocols
                                    </div>
                                    <div className="flex items-center gap-3 text-white font-bold text-lg">
                                        <ClipboardCheck className="text-blue-400 w-6 h-6" />
                                        Post-Cleanup Verification
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                                <h4 className="text-2xl font-bold text-white mb-4">Why Test Now?</h4>
                                <ul className="text-blue-50 space-y-4 font-medium opacity-80">
                                    <li>• Strange musty odors in the basement</li>
                                    <li>• Recent Montgomery County heavy rain events</li>
                                    <li>• Unexplained respiratory issues or allergies</li>
                                    <li>• Real estate transactions (Buy/Sell)</li>
                                    <li>• Visible white "efflorescence" on stone walls</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BasementMoldTestingInfo;
