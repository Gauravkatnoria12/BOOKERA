import React from 'react';

const Marquee = () => {
  // Reusable Kite SVG Separator Component
  const KiteIcon = () => (
    <svg 
      className="w-5 h-5 mx-8 text-white animate-pulse" 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M12 2L4 12L12 22L20 12L12 2Z" />
    </svg>
  );

  // Elite, conceptual copywriting for a premium book destination
  const marqueeItems = [
    "STORIES THAT SHAPE REALITY",
    "THE ARCHITECTURE OF WORDS",
    "RARE EDITIONS & UNTOLD TALES",
    "CULTIVATING DIGITAL IMAGINATION",
    "A SANCTUARY FOR CURIOUS MINDS",
  ];

  return (
    <div 
      className="w-full h-28 bg-neutral-900 border-y border-neutral-800 flex items-center overflow-hidden relative select-none"
    >
      <style>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-100%, 0, 0);
          }
        }
        .animate-marquee-slow {
          animation: marquee 145s linear infinite;
        }
      `}</style>

      {/* Decorative High-Tech Grid Overlays (Awwwards Style) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px)] bg-size-[14px_24px] pointer-events-none" />
      
      {/* Double track container for the infinite loop effect */}
      <div className="flex whitespace-nowrap">
        {[...Array(2)].map((_, trackIdx) => (
          <div 
            key={trackIdx} 
            className="marquee-track flex items-center shrink-0 pr-4 animate-marquee-slow"
          >
            {marqueeItems.map((text, index) => (
              <div key={index} className="flex items-center">
                <span className="font-['Inter'] font-black text-2xl md:text-3xl tracking-widest text-neutral-100 uppercase transition-colors duration-300 cursor-default">
                  {text}
                </span>
                <KiteIcon />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;