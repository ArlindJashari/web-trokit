import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkle, Car, Wrench, ShieldCheck, X, PaintBrush, Eyeglasses, Disc } from "@phosphor-icons/react";

const icons = {
    Sparkle, Car, Wrench, ShieldCheck, PaintBrush, Eyeglasses, Disc
};

const ServiceGrid = ({ services }) => {
    const [selectedService, setSelectedService] = useState(null);
    const [mounted, setMounted] = useState(false);

    // Wait for client mount before using portals
    useEffect(() => { setMounted(true); }, []);

    // ─── Scroll Lock ─────────────────────────────────────────────────────────
    useEffect(() => {
        const lenis = window.lenis;
        const html = document.documentElement;

        if (selectedService) {
            lenis?.stop();
            html.style.overflow = 'hidden';
        } else {
            lenis?.start();
            html.style.overflow = '';
        }

        return () => {
            lenis?.start();
            html.style.overflow = '';
        };
    }, [selectedService]);

    // ─── Escape key ──────────────────────────────────────────────────────────
    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') setSelectedService(null); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    // ─── Modal via Portal ────────────────────────────────────────────────────
    const modal = selectedService && mounted && createPortal(
        <AnimatePresence>
            {selectedService && (
                <>
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={() => setSelectedService(null)}
                        style={{ position: 'fixed', inset: 0, zIndex: 9998, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(16px)' }}
                        aria-hidden="true"
                    />

                    <motion.div
                        key="sheet"
                        role="dialog"
                        aria-modal="true"
                        aria-label={selectedService.title}
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ type: 'spring', damping: 32, stiffness: 220 }}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            position: 'fixed',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            zIndex: 9999,
                            maxHeight: '92dvh',
                            display: 'flex',
                            flexDirection: 'column',
                            background: '#0A0A0A',
                            borderTop: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '32px 32px 0 0',
                            boxShadow: '0 -24px 60px rgba(0,0,0,0.6)',
                        }}
                    >
                        <div style={{ flexShrink: 0, padding: '16px 32px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <div
                                onClick={() => setSelectedService(null)}
                                style={{ width: 48, height: 5, background: 'rgba(255,255,255,0.12)', borderRadius: 99, margin: '0 auto 16px', cursor: 'pointer' }}
                            />
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                                <div>
                                    <span style={{ display: 'block', fontSize: 10, letterSpacing: '0.5em', color: '#D4A76A', fontWeight: 900, textTransform: 'uppercase', marginBottom: 4 }}>
                                        Détails du Service
                                    </span>
                                    <h2 style={{ margin: 0, fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1, color: '#fff' }}>
                                        {selectedService.title}
                                    </h2>
                                </div>
                                <button
                                    onClick={() => setSelectedService(null)}
                                    aria-label="Fermer"
                                    style={{ flexShrink: 0, width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
                                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
                                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
                                >
                                    <X size={20} color="#fff" />
                                </button>
                            </div>
                        </div>

                        <div
                            data-lenis-prevent
                            style={{
                                flex: 1,
                                minHeight: 0,
                                overflowY: 'auto',
                                WebkitOverflowScrolling: 'touch',
                                overscrollBehavior: 'contain',
                                touchAction: 'pan-y',
                                padding: '32px 32px 64px',
                            }}
                        >
                            <div style={{ maxWidth: 720, margin: '0 auto' }}>
                                <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', marginBottom: 32, aspectRatio: '16/9' }}>
                                    <img
                                        src={selectedService.image}
                                        alt={selectedService.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>

                                <p style={{ fontSize: 10, letterSpacing: '0.4em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', fontWeight: 900, marginBottom: 16 }}>
                                    Prestation Complète
                                </p>
                                <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                                    {selectedService.fullDescription || selectedService.description}
                                </div>

                                <button
                                    onClick={() => {
                                        setSelectedService(null);
                                        setTimeout(() => {
                                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                        }, 350);
                                    }}
                                    style={{ marginTop: 40, padding: '16px 40px', background: '#D4A76A', color: '#000', fontSize: 10, letterSpacing: '0.5em', fontWeight: 900, textTransform: 'uppercase', border: 'none', cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 20px 40px rgba(212,167,106,0.1)' }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = '#fff';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = '#D4A76A';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    Contactez-nous
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Modular Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
                {services.map((service, index) => {
                    const Icon = icons[service.icon] || Sparkle;

                    // Different layout spans for bento effect
                    const spans = [
                        "md:col-span-8 md:row-span-2 lg:col-span-6", // 0: Big
                        "md:col-span-4 md:row-span-2 lg:col-span-3", // 1: Vertical
                        "md:col-span-4 lg:col-span-3",              // 2: Square
                        "md:col-span-4 lg:col-span-3",              // 3: Square
                        "md:col-span-8 lg:col-span-6",              // 4: Horizontal
                        "md:col-span-4 lg:col-span-3",              // 5: Square
                        "md:col-span-12 lg:col-span-3 lg:row-span-1", // 6: Bottom Bar
                    ];

                    const spanClass = spans[index] || "md:col-span-4";
                    const isBig = index === 0 || index === 4;

                    return (
                        <div
                            key={service.id}
                            onClick={() => setSelectedService(service)}
                            className={`${spanClass} group relative rounded-[32px] overflow-hidden cursor-pointer bg-[#0A0A0A] border border-white/5 hover:border-brand/30 transition-all duration-700`}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={service.image}
                                    className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000"
                                    alt={service.title}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-brand group-hover:border-brand transition-all duration-500`}>
                                        <Icon className="text-brand group-hover:text-black h-6 w-6 lg:h-8 lg:w-8" weight="light" />
                                    </div>
                                    <span className="text-[10px] tracking-[0.4em] font-black text-white/20 uppercase vertical-text">
                                        Elite Service 0{index + 1}
                                    </span>
                                </div>

                                <div>
                                    <h3 className={`font-display font-medium uppercase tracking-tight mb-4 group-hover:text-brand transition-colors leading-none ${isBig ? 'text-3xl lg:text-4xl' : 'text-xl md:text-2xl'}`}>
                                        {service.title}
                                    </h3>
                                    <p className={`text-white/40 group-hover:text-white/70 transition-colors line-clamp-3 text-sm md:text-base leading-relaxed ${isBig ? 'md:max-w-md' : ''}`}>
                                        {service.description.split('\n')[0]}
                                    </p>

                                    <div className="flex items-center gap-4 mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                        <span className="text-[10px] tracking-[0.4em] font-black uppercase text-brand">Voir Plus</span>
                                        <div className="h-[1px] flex-1 bg-brand/30"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {modal}

            <style dangerouslySetInnerHTML={{
                __html: `
                .vertical-text {
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                }
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                `
            }} />
        </section>
    );
};

export default ServiceGrid;
