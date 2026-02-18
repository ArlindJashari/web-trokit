import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const hotspots = [
    {
        id: 1,
        x: 28,
        y: 45,
        title: "LASER HEADLIGHT ASSEMBLY",
        metric: "98.8% TRANSMISSION",
        specs: ["UV Filter Layer", "Anti-Scratch Shield", "Obsidian Internal Housing"],
        desc: "Surgical restoration of polycarbonate lenses with multi-stage UV protection.",
        code: "EXT-LT-102"
    },
    {
        id: 2,
        x: 52,
        y: 35,
        title: "CERAMIC MOLECULAR BOND",
        metric: "9H HARDNESS",
        specs: ["SiO2 Concentration: 85%", "Thermal Resistance: 600°C", "Contact Angle: 115°"],
        desc: "Permanent covalent bond creating a permanent hydrophobic chemical shield.",
        code: "CHM-CB-500"
    },
    {
        id: 3,
        x: 75,
        y: 72,
        title: "FORGED ALLOY DYNAMICS",
        metric: "Stage 3 CLEANING",
        specs: ["Iron Decontamination", "Caliper High-Temp Sealant", "Heat Dissipation Coating"],
        desc: "Precision detailing of unsprung components for sustained aesthetic and performance.",
        code: "MEC-WL-08"
    },
    {
        id: 4,
        x: 22,
        y: 68,
        title: "PAINT MOLECULAR LEVELING",
        metric: "120μm THICKNESS",
        specs: ["Swirl Elimination", "Gloss Rate: 99.2 GU", "Clearcoat Preservation"],
        desc: "Surgical removal of microscopic clearcoat defects to reveal original optical clarity.",
        code: "PNT-PX-99"
    },
];

const HotspotCar = () => {
    const [activeId, setActiveId] = useState(null);
    const activeSpot = hotspots.find(h => h.id === activeId);

    return (
        <div className="bg-[#050505] py-24 lg:py-40 border-y border-white/5 overflow-hidden relative selection:bg-brand/30" id="interactive">

            {/* Background HUD Layer */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-0 left-0 w-full h-full blueprint-grid"></div>
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-brand/40 shadow-[0_0_20px_rgba(212,167,106,1)]"></div>
                <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/10"></div>


            </div>

            <div className="max-w-[1440px] mx-auto px-6 relative z-10">

                {/* Big technical header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-5xl md:text-7xl lg:text-[100px] font-display uppercase tracking-tighter leading-[0.9]">
                            Interactive <br /> <span className="text-brand">Blueprint</span>
                        </h2>
                    </div>

                    <div className="max-w-xs text-right hidden lg:block">
                        <p className="text-xs text-gray-500 uppercase tracking-[0.2em] leading-relaxed mb-6 font-mono">
                            Sub-atomic analysis of surface integrity and component preservation. High-fidelity rendering of protective layers.
                        </p>

                    </div>
                </div>

                {/* Main Interactive Stage */}
                <div className="relative group">

                    {/* Visual Frame */}
                    <div className="absolute -inset-4 border border-white/5 pointer-events-none rounded-sm"></div>
                    <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-brand/50 pointer-events-none"></div>
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-brand/50 pointer-events-none"></div>

                    {/* The Centerpiece */}
                    <div className="relative bg-black/40 rounded-sm overflow-hidden aspect-[16/8] lg:aspect-[21/9] flex items-center justify-center border border-white/10">



                        {/* Base Image with Dynamic Filters */}
                        <motion.img
                            src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2574&auto=format&fit=crop"
                            alt="Precision Detailing Blueprint"
                            className="w-full h-full object-cover scale-[1.05]"
                        />

                        {/* Technical Overlay Grid */}
                        <div className="absolute inset-0 blueprint-fine-grid opacity-30 pointer-events-none"></div>

                        {/* Interactive Hotspots */}
                        {hotspots.map((spot) => (
                            <div
                                key={spot.id}
                                className="absolute z-30"
                                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                                onMouseEnter={() => setActiveId(spot.id)}
                                onMouseLeave={() => setActiveId(null)}
                            >
                                <div className="relative group/spot cursor-pointer flex items-center justify-center w-12 h-12 -ml-6 -mt-6">
                                    {/* Nuclear HUD Pulse - Continuous expanding ring */}
                                    <div className="absolute inset-[-50%] rounded-full border border-brand/30 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-40"></div>

                                    {/* The Lens Backdrop - Deeper contrast for high-key images */}
                                    <div className={`absolute inset-0 rounded-full border-2 border-brand bg-black/80 backdrop-blur-md transition-all duration-500 scale-100 group-hover/spot:scale-[1.6] ${activeId === spot.id ? 'scale-[1.8] border-white bg-brand/40 shadow-[0_0_40px_rgba(212,167,106,0.8)]' : 'shadow-[0_0_20px_rgba(0,0,0,0.6)]'}`}></div>

                                    {/* Tech Crosshairs - Centering icons */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1.5px] h-2 bg-brand/80"></div>
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1.5px] h-2 bg-brand/80"></div>
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[1.5px] w-2 bg-brand/80"></div>
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[1.5px] w-2 bg-brand/80"></div>

                                    {/* The Energy Core - Multi-layered for maximum "POP" */}
                                    <div className="relative flex items-center justify-center">
                                        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${activeId === spot.id ? 'bg-white scale-125 shadow-[0_0_25px_white]' : 'bg-brand shadow-[0_0_15px_rgba(212,167,106,1)]'}`}></div>
                                        {/* Inner high-key shine */}
                                        <div className="absolute w-1.5 h-1.5 bg-white rounded-full"></div>
                                    </div>

                                    {/* Orbital Data Rings */}
                                    <div className="absolute inset-2 border border-white/30 rounded-full animate-[spin_10s_linear_infinite] group-hover/spot:border-brand/60"></div>
                                    <div className="absolute -inset-1 border-t-2 border-white/60 rounded-full animate-[spin_4s_linear_infinite]"></div>

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* HUD Data Readout (Desktop Only) */}
                    <AnimatePresence>
                        {activeId && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="absolute top-10 right-10 w-[320px] z-50 pointer-events-none hidden lg:block"
                            >
                                <div className="bg-[#0A0A0A]/90 backdrop-blur-2xl border border-brand/30 p-8 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
                                    {/* Scanner Glitch Lines */}
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-brand/50 blur-[1px]"></div>
                                    <div className="absolute bottom-0 right-0 w-[50px] h-[3px] bg-brand animate-pulse"></div>

                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <span className="text-[10px] tracking-[0.4em] text-brand font-black block mb-2 uppercase italic">{activeSpot.code}</span>
                                            <h3 className="text-xl font-display uppercase tracking-tight text-white leading-none">{activeSpot.title}</h3>
                                        </div>
                                    </div>

                                    <div className="space-y-6 mb-8">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Live Metric</span>
                                            <span className="text-3xl font-display text-brand italic">{activeSpot.metric}</span>
                                        </div>

                                        <p className="text-[11px] text-gray-400 uppercase tracking-widest leading-relaxed">
                                            {activeSpot.desc}
                                        </p>

                                        <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                                            <span className="text-[10px] text-brand/60 uppercase tracking-widest font-bold font-mono">Technical_Manifest:</span>
                                            {activeSpot.specs.map((spec, i) => (
                                                <div key={i} className="flex items-center gap-2">
                                                    <div className="w-1 h-1 rounded-full bg-brand/40"></div>
                                                    <span className="text-[9px] text-gray-500 uppercase tracking-widest">{spec}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between font-mono text-[8px] text-white/10">
                                        <span>ENCRYPTED_STREAM_882</span>
                                        <span>CHECKSUM_OK</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Bottom Action Bar */}
                    <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-12 pt-12 border-t border-white/5">
                        <div className="flex items-center gap-12">
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] tracking-[0.4em] text-gray-600 uppercase">Surface Unit Price</span>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-display font-medium text-white">499</span>
                                    <span className="text-lg text-brand font-black">CHF</span>
                                </div>
                            </div>
                            <div className="h-10 w-[1px] bg-white/10 hidden md:block"></div>
                            <div className="flex flex-col gap-1 hidden lg:block">
                                <span className="text-[10px] tracking-[0.4em] text-gray-600 uppercase">Restore ETA</span>
                                <span className="text-xl font-display text-white uppercase italic">36H - 72H</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-8 w-full md:w-auto">
                            <button className="flex-1 md:flex-none px-12 py-6 bg-brand text-black text-[12px] tracking-[0.5em] font-black uppercase hover:bg-white transition-all shadow-[0_20px_40px_rgba(212,167,106,0.15)] group relative overflow-hidden">
                                <span className="relative z-10 font-bold">Initiate Full Analysis</span>
                                <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .blueprint-grid {
                    background-image: 
                    linear-gradient(to right, rgba(212,167,106,0.08) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(212,167,106,0.08) 1px, transparent 1px);
                    background-size: 80px 80px;
                }
                .blueprint-fine-grid {
                    background-image: 
                    linear-gradient(to right, rgba(212,167,106,0.03) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(212,167,106,0.03) 1px, transparent 1px);
                    background-size: 20px 20px;
                }
                ` }} />
        </div>
    );
};

export default HotspotCar;
