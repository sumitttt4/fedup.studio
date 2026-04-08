'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ScatteredGallery() {
  const images = [
    { src: '/get fedup.png', title: 'Get Fedup' },
    { src: '/glyph fedup.png', title: 'Glyph Design' },
    { src: '/kinetik fedup.png', title: 'Kinetik Web App' },
    { src: '/mlv fedup.png', title: 'MLV Platform' },
    { src: '/Ramna fedup.png', title: 'Ramna' },
    { src: '/saashub fedup.png', title: 'SaaS Hub' }
  ];

  return (
    <section id="work" className="relative py-24 sm:py-32 bg-[#EAE8E3] overflow-hidden border-y border-[#E5E5E5] flex flex-col">
       
       {/* Background subtle noise */}
       <div 
         className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay" 
         style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 512 512\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'5\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }} 
       />

       {/* Top Title Module - Properly separated from the images to prevent overlap */}
       <div className="relative z-20 px-6 md:px-24 mb-16 max-w-[1200px] flex flex-col md:flex-row md:items-end justify-between gap-8">
         <div className="max-w-[500px]">
           <h2 className="font-serif text-[48px] sm:text-[64px] md:text-[80px] font-medium text-[#2D3F37] leading-[1] tracking-tight antialiased mb-6">
              Selected <span className="italic">Works.</span>
           </h2>
           <p className="font-sans text-[16px] text-[#2D3F37]/70 leading-[1.6]">
             A curated selection of our most recent brand identities and digital experiences.
           </p>
         </div>
       </div>

       {/* Infinite Marquee Scrolling Track Container */}
       <div className="relative z-10 w-full overflow-hidden py-10 flex">
          <motion.div 
            className="flex gap-12 w-max px-6"
            // Start at 0, move entirely left. Requires w-max to measure width properly.
            animate={{ x: ["0%", "-50%"] }} 
            transition={{
                ease: "linear",
                duration: 40,
                repeat: Infinity,
            }}
          >
            {/* Duplicated images inside the same track to ensure endless loop logic (50% translation) */}
            {[...images, ...images].map((img, i) => (
              <div 
                key={i} 
                className={`group relative flex flex-col overflow-hidden rounded-[1.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-white border border-[#E5E5E5] shrink-0 
                    w-[320px] md:w-[600px]
                    ${i % 2 === 0 ? 'mt-0' : 'mt-16 md:mt-24'}`
                }
              >


                {/* Screenshot Frame Wrapper */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                    <img 
                      src={img.src} 
                      alt={img.title} 
                      className="w-full h-full object-cover object-top transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]" 
                    />
                    
                    {/* Dark gradient and title appearing on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 pointer-events-none z-20">
                       <h3 className="text-white font-display text-[24px] font-bold md:text-[32px] translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                         {img.title}
                       </h3>
                    </div>
                </div>
              </div>
            ))}
          </motion.div>
       </div>


    </section>
  );
}
