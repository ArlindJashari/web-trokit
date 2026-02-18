import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkle, Car, Wrench, ShieldCheck, X, CheckCircle, PaintBrush, Eyeglasses, Disc, ArrowLeft, ArrowRight } from "@phosphor-icons/react";

const icons = {
    Sparkle: Sparkle,
    Car: Car,
    Wrench: Wrench,
    ShieldCheck: ShieldCheck,
    PaintBrush: PaintBrush,
    Eyeglasses: Eyeglasses,
    Disc: Disc
};

const serviceDetails = {
    "tolerie": {
        features: ["Structural Alignment", "Precision Dent Removal", "Corrosion Protection", "OEM Standards"],
        process: "Restoring the skeletal and exterior integrity of your vehicle using advanced welding and reshaping techniques."
    },
    "reparations": {
        features: ["Component Overhaul", "Specialized Surfaces", "Industrial Coating", "Rapid Prototyping"],
        process: "Bespoke repair solutions for unique automotive and aerospace components, ensuring structural and aesthetic longevity."
    },
    "peinture": {
        features: ["Spectrophotometry Match", "Dust-Free Booth", "multi-Stage Clearcoat", "Factory Finish"],
        process: "Application of premium finishes in controlled environments, utilizing computerized color matching for invisible repairs."
    },
    "pare-brise": {
        features: ["Resin Injection", "Safety Glass Standards", "Sensor Calibration", "Quick Drying"],
        process: "High-integrity glass restoration and replacement, ensuring maximum visibility and structural safety."
    },
    "polissage": {
        features: ["Swirl Removal", "Depth Recovery", "Nano-Polish Finish", "Hologram Free"],
        process: "Meticulous surface refinement that removes oxidation and defects to restore the maximum refractive potential of the paint."
    },
    "jantes": {
        features: ["Alloy Resurfacing", "Face Machining", "Brake Dust Barrier", "Custom Color"],
        process: "Complete wheel refurbishment, from deep chemical decontamination to high-precision resurfacing and protective coating."
    }
};

const ServiceGrid = ({ services }) => {
    const [selectedService, setSelectedService] = useState(null);
    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (selectedService) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedService]);

    return (
        <>
            <div className="hidden md:flex justify-end gap-4 mb-4">
                <button
                    onClick={() => scroll('left')}
                    className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors group"
                >
                    <ArrowLeft size={20} className="text-gray-400 group-hover:text-brand" />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors group"
                >
                    <ArrowRight size={20} className="text-gray-400 group-hover:text-brand" />
                </button>
            </div>
            <div ref={scrollRef} className="flex flex-col md:flex-row overflow-x-visible md:overflow-x-auto gap-8 pb-12 hide-scrollbar md:snap-x md:snap-mandatory">
                {services.map((service, index) => {
                    const Icon = icons[service.icon] || Sparkle;
                    // Even slower and smoother durations
                    const durations = ['12s', '15s', '13s', '18s'];
                    const duration = durations[index % durations.length];
                    const delays = ['0s', '-4s', '-7s', '-2s'];
                    const delay = delays[index % delays.length];

                    return (
                        <div
                            key={service.id}
                            onClick={() => setSelectedService(service)}
                            className="group relative p-[2px] rounded-[32px] h-[450px] md:h-[500px] w-full md:min-w-[450px] hero-service-unit cursor-pointer transition-transform duration-700 hover:scale-[1.02] overflow-hidden flex-shrink-0 md:snap-center"
                        >
                            {/* Permanent but subtle Lightning Border Beam */}
                            {/* Extra blur for smoothness */}
                            <div
                                className="absolute inset-[-150%] opacity-50 group-hover:opacity-100 transition-opacity duration-1000 blur-[2px]"
                                style={{
                                    background: `conic-gradient(from 0deg, transparent 0deg, transparent 150deg, rgba(255,255,255,0.8) 180deg, transparent 210deg, transparent 360deg)`,
                                    animation: `border-sweep ${duration} linear infinite`,
                                    animationDelay: delay
                                }}
                            />

                            {/* Second beam overlay for extra depth on hover */}
                            <div
                                className="absolute inset-[-150%] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                style={{
                                    background: `conic-gradient(from 0deg, transparent 0deg, transparent 170deg, white 180deg, transparent 190deg, transparent 360deg)`,
                                    animation: `border-sweep ${duration} linear infinite`,
                                    animationDelay: delay,
                                    animationDirection: 'reverse'
                                }}
                            />

                            <div className="relative bg-[#050505] rounded-[30px] p-10 h-full flex flex-col justify-between transition-all duration-700 z-10 overflow-hidden">
                                {/* Service Image Background */}
                                <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-50 transition-opacity duration-700">
                                    <img
                                        src={service.image}
                                        className="w-full h-full object-cover grayscale brightness-50 contrast-125 transition-transform duration-[2s] group-hover:scale-110"
                                        alt={service.title}
                                    />
                                    {/* Scanline Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-white/5 to-black/0 h-[200%] animate-scanline pointer-events-none"></div>
                                </div>

                                <div className="relative flex flex-col gap-8 z-10">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex flex-col gap-6">
                                            <span className="text-[10px] tracking-[0.6em] font-black text-brand uppercase opacity-40">Unit 0{index + 1}</span>
                                            <Icon className="text-brand h-16 w-16 opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" weight="light" />
                                        </div>
                                        <span className="text-[8px] tracking-[0.4em] font-sans text-gray-500 group-hover:text-white uppercase vertical-text transition-colors duration-500">Premium Service Unit</span>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-display font-medium uppercase tracking-tight mb-4 group-hover:text-brand transition-colors leading-none">{service.title}</h3>
                                        <p className="text-sm text-gray-300 leading-relaxed max-w-[280px]">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-12 flex items-center gap-4">
                                    <span className="text-[10px] tracking-[0.4em] font-black uppercase text-white/20 group-hover:text-brand transition-colors">Full Spec</span>
                                    <div className="h-[1px] flex-1 bg-white/5 group-hover:bg-brand/30 transition-colors"></div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <AnimatePresence>
                {selectedService && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[100]"
                        />

                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 200 }}
                            data-lenis-prevent
                            className="fixed bottom-0 left-0 right-0 z-[101] bg-[#0A0A0A] border-t border-white/10 rounded-t-[40px] max-h-[92vh] overflow-y-auto px-8 pb-16 pt-6 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
                        >
                            <div className="w-16 h-1.5 bg-white/10 rounded-full mx-auto mb-10 cursor-pointer hover:bg-white/20 transition-colors" onClick={() => setSelectedService(null)}></div>

                            <div className="max-w-3xl mx-auto">
                                <div className="flex justify-between items-start mb-16">
                                    <div>
                                        <span className="text-[10px] tracking-[0.5em] text-brand font-black uppercase mb-4 block">Vue Détaillée de l'Unité</span>
                                        <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tight leading-none text-white">{selectedService.title}</h2>
                                    </div>
                                    <button
                                        onClick={() => setSelectedService(null)}
                                        className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-all hover:rotate-90"
                                    >
                                        <X size={28} className="text-white" />
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 gap-16 mb-20">
                                    <div className="space-y-12">
                                        <div className="aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-white/10">
                                            <img
                                                src={selectedService.image}
                                                alt={selectedService.title}
                                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                                            />
                                        </div>

                                        <div className="max-w-4xl">
                                            <h4 className="text-[10px] tracking-[0.4em] text-gray-500 uppercase font-black mb-6">Présentation du Service</h4>
                                            <p className="text-gray-300 leading-relaxed text-xl font-light italic whitespace-pre-line border-l-2 border-brand/30 pl-8 mb-12">
                                                {selectedService.fullDescription || selectedService.description}
                                            </p>

                                            <button
                                                onClick={() => {
                                                    setSelectedService(null);
                                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                                }}
                                                className="px-12 py-5 bg-brand text-black text-[10px] tracking-[0.5em] font-black uppercase hover:bg-white transition-all shadow-[0_20px_40px_rgba(223,166,101,0.2)]"
                                            >
                                                Contactez-nous
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <style dangerouslySetInnerHTML={{
                __html: `
          @keyframes scanline {
            from { transform: translateY(-50%); }
            to { transform: translateY(0%); }
          }
          .animate-scanline {
            animation: scanline 8s linear infinite;
          }
          @keyframes border-sweep {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .vertical-text {
            writing-mode: vertical-rl;
            text-orientation: mixed;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `
            }} />
        </>
    );
};

export default ServiceGrid;
