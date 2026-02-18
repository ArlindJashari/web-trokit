import React, { useState, useRef, useEffect } from 'react';
import { ArrowsLeftRight } from '@phosphor-icons/react';

const BeforeAfter = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef(null);
    const isDragging = useRef(false);

    const handleMove = (event) => {
        if (!containerRef.current) return;

        const { left, width } = containerRef.current.getBoundingClientRect();
        const pageX = event.touches ? event.touches[0].pageX : event.pageX;
        const position = ((pageX - left) / width) * 100;

        setSliderPosition(Math.min(100, Math.max(0, position)));
    };

    const handleMouseDown = () => {
        isDragging.current = true;
    };

    useEffect(() => {
        const handleGlobalMouseMove = (event) => {
            if (isDragging.current) {
                handleMove(event);
            }
        };

        const handleGlobalMouseUp = () => {
            isDragging.current = false;
        };

        window.addEventListener('mousemove', handleGlobalMouseMove);
        window.addEventListener('mouseup', handleGlobalMouseUp);
        window.addEventListener('touchmove', handleGlobalMouseMove);
        window.addEventListener('touchend', handleGlobalMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleGlobalMouseMove);
            window.removeEventListener('mouseup', handleGlobalMouseUp);
            window.removeEventListener('touchmove', handleGlobalMouseMove);
            window.removeEventListener('touchend', handleGlobalMouseUp);
        };
    }, []);

    return (
        <section className="bg-black py-24 border-t border-white/5">
            <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
                <h2 className="mb-12 text-3xl font-bold font-display uppercase tracking-widest text-white">Transformation Gallery</h2>

                <div
                    ref={containerRef}
                    className="relative mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 select-none cursor-ew-resize touch-none"
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}
                    onClick={handleMove}
                >
                    {/* After Image (Background) */}
                    <div className="absolute inset-0 h-full w-full">
                        <img
                            src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2670&auto=format&fit=crop"
                            alt="After Detailing"
                            className="h-full w-full object-cover"
                            draggable="false"
                        />
                        <div className="absolute top-4 right-4 rounded bg-black/50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand backdrop-blur-md">After</div>
                    </div>

                    {/* Before Image (Foreground - Clipped) */}
                    <div
                        className="absolute inset-0 h-full w-full border-r border-brand"
                        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=2670&auto=format&fit=crop"
                            alt="Before Detailing"
                            className="h-full w-full object-cover grayscale brightness-75"
                            draggable="false"
                        />
                        <div className="absolute top-4 left-4 rounded bg-black/50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md">Before</div>
                    </div>

                    {/* Slider Handle */}
                    <div
                        className="absolute inset-y-0 w-1 bg-brand cursor-ew-resize z-20 flex items-center justify-center shadow-[0_0_10px_rgba(212,167,106,0.8)]"
                        style={{ left: `${sliderPosition}%` }}
                    >
                        <div className="flex h-10 w-10 -ml-[20px] items-center justify-center rounded-full border-2 border-brand bg-black shadow-lg shadow-brand/20">
                            <ArrowsLeftRight className="text-brand" size={20} weight="bold" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfter;
