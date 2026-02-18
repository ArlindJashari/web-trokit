import React from 'react';
import * as PhosphorIcons from '@phosphor-icons/react';

const ServiceCard = ({ title, description, Icon }) => {
    const IconComponent = PhosphorIcons[Icon] || PhosphorIcons.Star;

    return (
        <div className="group relative flex flex-col justify-between border-b border-r border-white/10 p-10 transition-colors hover:bg-white/5 h-full">
            <div className="flex flex-col gap-8">
                <div className="flex justify-between items-start">
                    <div className="text-brand">
                        <IconComponent size={32} weight="thin" />
                    </div>
                    <span className="text-[10px] tracking-[0.3em] font-sans text-gray-600 uppercase">Premium</span>
                </div>

                <div className="space-y-4">
                    <h3 className="text-2xl font-display font-medium tracking-tight uppercase leading-none">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-500 font-sans leading-relaxed line-clamp-3">
                        {description}
                    </p>
                </div>
            </div>

            <div className="mt-12 flex items-center justify-between">
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-white group-hover:text-brand transition-colors">View Details</span>
                <div className="h-[2px] w-8 bg-white/20 group-hover:bg-brand transition-all group-hover:w-12"></div>
            </div>
        </div>
    );
};

export default ServiceCard;

