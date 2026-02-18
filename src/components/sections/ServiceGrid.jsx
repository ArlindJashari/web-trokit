import React from 'react';
import { Sparkle, Car, Wrench, ShieldCheck, PaintBrush, Eyeglasses, Disc } from "@phosphor-icons/react";

const icons = {
    Sparkle, Car, Wrench, ShieldCheck, PaintBrush, Eyeglasses, Disc
};

const ServiceGrid = ({ services }) => {
    return (
        <section className="py-12 md:py-24 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                {services.map((service, index) => {
                    const Icon = icons[service.icon] || Sparkle;

                    return (
                        <div
                            key={service.id}
                            className="flex flex-col h-full bg-[#0A0A0A] border border-white/5 rounded-[32px] overflow-hidden hover:border-brand/30 transition-all duration-700 group"
                        >
                            {/* Image Section */}
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={service.image}
                                    className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000"
                                    alt={service.title}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />

                                {/* Header Info inside Image */}
                                <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                                    <div className="p-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 group-hover:bg-brand group-hover:border-brand transition-all duration-500">
                                        <Icon className="text-brand group-hover:text-black h-6 w-6" weight="light" />
                                    </div>
                                    <span className="text-[10px] tracking-[0.4em] font-black text-white/30 uppercase">
                                        Unit 0{index + 1}
                                    </span>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="p-8 md:p-10 flex flex-col flex-1">
                                <h3 className="text-2xl font-display font-medium uppercase tracking-tight mb-6 text-white group-hover:text-brand transition-colors">
                                    {service.title}
                                </h3>

                                <div className="space-y-4">
                                    <div className="text-white/60 text-sm md:text-base leading-relaxed font-sans whitespace-pre-line">
                                        {/* Show full content immediately */}
                                        {service.fullDescription || service.description}
                                    </div>
                                </div>

                                <div className="mt-auto pt-8 flex items-center gap-4">
                                    <div className="h-[1px] flex-1 bg-white/5 group-hover:bg-brand/30 transition-colors" />
                                    <span className="text-[9px] tracking-[0.5em] font-black text-white/10 uppercase group-hover:text-brand/50 transition-colors">Elite Detailing</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ServiceGrid;
