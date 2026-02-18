import React from 'react';
import { motion } from 'framer-motion';
import { Sparkle, Car, Wrench, ShieldCheck, PaintBrush, Eyeglasses, Disc } from "@phosphor-icons/react";

const icons = {
    Sparkle, Car, Wrench, ShieldCheck, PaintBrush, Eyeglasses, Disc
};

const ServiceGrid = ({ services }) => {
    return (
        <section className="py-24 relative bg-black overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/5" />
                <div className="absolute top-0 left-2/4 w-[1px] h-full bg-white/5" />
                <div className="absolute top-0 left-3/4 w-[1px] h-full bg-white/5" />
                <div className="absolute top-1/4 left-0 w-full h-[1px] bg-white/5" />
                <div className="absolute top-2/4 left-0 w-full h-[1px] bg-white/5" />
                <div className="absolute top-3/4 left-0 w-full h-[1px] bg-white/5" />
            </div>

            <div className="max-w-[1440px] mx-auto px-6 relative z-10">
                <div className="flex flex-col gap-32">
                    {services.map((service, index) => {
                        const Icon = icons[service.icon] || Sparkle;
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-start`}
                            >
                                {/* Left Content Area: Visuals & Large Type */}
                                <div className="w-full lg:w-1/2 flex flex-col">
                                    <div className="relative group">
                                        {/* Background Floating Service Name */}
                                        <div className={`absolute -top-16 ${isEven ? '-left-12' : '-right-12'} hidden lg:block opacity-[0.03] select-none pointer-events-none`}>
                                            <span className="text-[180px] font-display font-black uppercase tracking-tighter whitespace-nowrap leading-none">
                                                {service.title}
                                            </span>
                                        </div>

                                        {/* Main Visual Frame */}
                                        <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] group-hover:border-brand/40 transition-colors duration-700">
                                            <img
                                                src={service.image}
                                                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                                alt={service.title}
                                            />
                                            {/* Technical Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
                                            <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />

                                            {/* Scanline Effect */}
                                            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-brand/0 via-brand/10 to-brand/0 animate-scan pointer-events-none opacity-0 group-hover:opacity-40" />

                                            {/* Blueprint Coordinates */}
                                            <div className="absolute top-6 left-6 flex items-center gap-3">
                                                <div className="w-12 h-12 rounded-xl bg-brand flex items-center justify-center text-black">
                                                    <Icon size={24} weight="bold" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white">Elite Dossier</span>
                                                    <span className="text-[10px] font-mono sky-text uppercase text-brand">Ref: TRK-0{index + 1}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Content Area: Technical Data */}
                                <div className="w-full lg:w-1/2 flex flex-col pt-4">
                                    <header className="mb-10 lg:mb-16">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="h-[1px] w-12 bg-brand" />
                                            <span className="text-brand text-xs font-black tracking-[0.5em] uppercase">Spécifications Techniques</span>
                                        </div>
                                        <h3 className="text-5xl md:text-6xl lg:text-8xl font-display font-black uppercase tracking-tighter leading-[0.85] text-white">
                                            {service.title}
                                        </h3>
                                    </header>

                                    <div className="grid grid-cols-1 gap-12">
                                        {/* Precise Formatting for the 100% Content */}
                                        <div className="prose prose-invert max-w-none">
                                            <p className="text-white/80 text-lg md:text-xl leading-relaxed font-sans whitespace-pre-line border-l-2 border-brand/20 pl-8 lg:pl-12 py-4">
                                                {service.fullDescription || service.description}
                                            </p>
                                        </div>

                                        {/* Technical Features Bar */}
                                        <div className="flex flex-wrap gap-8 pt-12 border-t border-white/10 uppercase">
                                            <div className="flex flex-col gap-2">
                                                <span className="text-[9px] text-white/40 tracking-widest font-black">Qualité</span>
                                                <span className="text-xs text-white tracking-widest">Excellence Elite</span>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <span className="text-[9px] text-white/40 tracking-widest font-black">Technologie</span>
                                                <span className="text-xs text-white tracking-widest">Sikkens Ultra</span>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <span className="text-[9px] text-white/40 tracking-widest font-black">Localité</span>
                                                <span className="text-xs text-white tracking-widest">Valais, Suisse</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes scan {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(200%); }
                }
                .animate-scan {
                    animation: scan 3s linear infinite;
                }
                `
            }} />
        </section>
    );
};

export default ServiceGrid;
