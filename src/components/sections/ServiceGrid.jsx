import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkle, Car, Wrench, ShieldCheck, X, PaintBrush, Eyeglasses, Disc, ArrowLeft, ArrowRight } from "@phosphor-icons/react";

const icons = {
    Sparkle, Car, Wrench, ShieldCheck, PaintBrush, Eyeglasses, Disc
};

const ServiceGrid = ({ services }) => {
    const [selectedService, setSelectedService] = useState(null);
    const [mounted, setMounted] = useState(false);
    const scrollRef = useRef(null);

    // Wait for client mount before using portals
    useEffect(() => { setMounted(true); }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left'
                ? scrollLeft - clientWidth / 2
                : scrollLeft + clientWidth / 2;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    // ─── Scroll Lock ─────────────────────────────────────────────────────────
    // Lock on <html> element — no layout shift, no viewport jump.
    // Also stop/start Lenis so it doesn't intercept modal scroll events.
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
                    {/* Backdrop */}
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

                    {/* Sheet — always anchored to viewport bottom, never affected by scroll position */}
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
                        {/* ── Header (never scrolls) ── */}
                        <div style={{ flexShrink: 0, padding: '16px 32px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            {/* Drag handle */}
                            <div
                                onClick={() => setSelectedService(null)}
                                style={{ width: 48, height: 5, background: 'rgba(255,255,255,0.12)', borderRadius: 99, margin: '0 auto 16px', cursor: 'pointer' }}
                            />
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                                <div>
                                    <span style={{ display: 'block', fontSize: 10, letterSpacing: '0.5em', color: '#D4A76A', fontWeight: 900, textTransform: 'uppercase', marginBottom: 4 }}>
                                        Vue Détaillée de l'Unité
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

                        {/* ── Scrollable body ── */}
                        {/* flex:1 + minHeight:0 = the only reliable cross-platform scroll pattern inside flex */}
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
                                {/* Image */}
                                <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', marginBottom: 32, aspectRatio: '16/9' }}>
                                    <img
                                        src={selectedService.image}
                                        alt={selectedService.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1)', transition: 'filter 0.6s' }}
                                        onMouseEnter={e => e.currentTarget.style.filter = 'grayscale(0)'}
                                        onMouseLeave={e => e.currentTarget.style.filter = 'grayscale(1)'}
                                    />
                                </div>

                                {/* Description */}
                                <p style={{ fontSize: 10, letterSpacing: '0.4em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', fontWeight: 900, marginBottom: 16 }}>
                                    Présentation du Service
                                </p>
                                <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, fontStyle: 'italic', fontWeight: 300, borderLeft: '2px solid rgba(212,167,106,0.35)', paddingLeft: 24, marginBottom: 40 }}>
                                    {selectedService.fullDescription || selectedService.description}
                                </p>

                                {/* CTA */}
                                <button
                                    onClick={() => {
                                        setSelectedService(null);
                                        setTimeout(() => {
                                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                        }, 350);
                                    }}
                                    style={{ padding: '16px 40px', background: '#D4A76A', color: '#000', fontSize: 10, letterSpacing: '0.5em', fontWeight: 900, textTransform: 'uppercase', border: 'none', cursor: 'pointer', transition: 'background 0.2s', boxShadow: '0 20px 40px rgba(212,167,106,0.2)' }}
                                    onMouseEnter={e => e.currentTarget.style.background = '#fff'}
                                    onMouseLeave={e => e.currentTarget.style.background = '#D4A76A'}
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
                    const durations = ['12s', '15s', '13s', '18s'];
                    const duration = durations[index % durations.length];
                    const delays = ['0s', '-4s', '-7s', '-2s'];
                    const delay = delays[index % delays.length];

                    return (
                        <div
                            key={service.id}
                            onClick={() => setSelectedService(service)}
                            className="group relative p-[2px] rounded-[32px] h-[450px] md:h-[500px] w-full md:w-[450px] hero-service-unit cursor-pointer transition-transform duration-700 hover:scale-[1.02] overflow-hidden flex-shrink-0 md:snap-center"
                        >
                            <div
                                className="absolute inset-[-150%] opacity-50 group-hover:opacity-100 transition-opacity duration-1000 blur-[2px]"
                                style={{
                                    background: `conic-gradient(from 0deg, transparent 0deg, transparent 150deg, rgba(255,255,255,0.8) 180deg, transparent 210deg, transparent 360deg)`,
                                    animation: `border-sweep ${duration} linear infinite`,
                                    animationDelay: delay
                                }}
                            />
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
                                <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-50 transition-opacity duration-700">
                                    <img
                                        src={service.image}
                                        className="w-full h-full object-cover grayscale brightness-50 contrast-125 transition-transform duration-[2s] group-hover:scale-110"
                                        alt={service.title}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-white/5 to-black/0 h-[200%] animate-scanline pointer-events-none"></div>
                                </div>

                                <div className="relative flex flex-col gap-8 z-10">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex flex-col gap-6">
                                            <span className="text-sm tracking-[0.6em] font-black text-brand uppercase opacity-80">Unit 0{index + 1}</span>
                                            <Icon className="text-brand h-16 w-16 opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" weight="light" />
                                        </div>
                                        <span className="text-sm tracking-[0.4em] font-sans text-white/50 group-hover:text-white uppercase vertical-text transition-colors duration-500">Premium Service Unit</span>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-display font-medium uppercase tracking-tight mb-4 group-hover:text-brand transition-colors leading-none">{service.title}</h3>
                                        <p className="text-sm text-gray-200 leading-relaxed max-w-[280px]">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-12 flex items-center gap-4">
                                    <span className="text-sm tracking-[0.4em] font-black uppercase text-white/60 group-hover:text-brand transition-colors">Full Spec</span>
                                    <div className="h-[1px] flex-1 bg-white/5 group-hover:bg-brand/30 transition-colors"></div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Portal modal rendered here */}
            {modal}

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
