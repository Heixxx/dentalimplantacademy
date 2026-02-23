import { useState, useEffect, useCallback } from 'react';

interface Room {
  id: number;
  imageSrc: string;
  title: string;
  subtitle: string;
}

const SHOWCASE_DATA: Room[] = [
  { id: 0, imageSrc: "/gabinet.jpeg", title: "Gabinet", subtitle: "Wygodny fotel i ogromne doświadczenie" },
  { id: 1, imageSrc: "/gabinet_praca.jpeg", title: "Blok Chirurgiczny", subtitle: "Precyzyjne narzędzia" },
  { id: 2, imageSrc: "/biuro.jpeg", title: "Poczekalnia", subtitle: "Strefa komfortu pacjenta" },
  { id: 3, imageSrc: "ludziee.jpeg", title: "Wspaniali ludzie", subtitle: "Na nich zawsze można liczyć" },
  { id: 4, imageSrc: "budynek.jpeg", title: "Budynek", subtitle: "Miejsce naszej pracy" }
];

const Showcase = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % SHOWCASE_DATA.length);
  }, [isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + SHOWCASE_DATA.length) % SHOWCASE_DATA.length);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 700);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const getCardStyle = (index: number) => {
    let diff = index - activeIndex;
    const total = SHOWCASE_DATA.length;
    if (diff > Math.floor(total / 2)) diff -= total;
    else if (diff < -Math.floor(total / 2)) diff += total;

    const base = "absolute top-0 left-0 w-full h-full bg-slate-200 rounded-3xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform ";

    if (diff === 0) return base + "z-30 translate-x-0 scale-100 opacity-100 border-white border-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] cursor-default";
    else if (diff === 1) return base + "z-20 translate-x-[110%] scale-[0.85] opacity-50 cursor-pointer hover:opacity-100 border-white border-2 shadow-lg";
    else if (diff === -1) return base + "z-20 -translate-x-[110%] scale-[0.85] opacity-50 cursor-pointer hover:opacity-100 border-white border-2 shadow-lg";
    else if (diff > 1) return base + "z-10 translate-x-[220%] scale-[0.7] opacity-0 pointer-events-none";
    else if (diff < -1) return base + "z-10 -translate-x-[220%] scale-[0.7] opacity-0 pointer-events-none";
    
    return base;
  };

  return (
    <section className="w-full py-16 md:py-24 bg-slate-50 overflow-hidden relative" id="showcase">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12 flex flex-col md:flex-col justify-center items-center md:items-end gap-6 text-center">
        <div className='text-center w-full'>
          <span className="text-teal font-bold tracking-widest uppercase text-xs md:text-sm block mb-1">Infrastruktura</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-1 md:mt-2">Nasza Klinika</h2>
        </div>
        
        <div className="flex flex-col md:items-end gap-4 md:gap-5 w-full justify-center text-center">
          <div className="flex gap-2 md:gap-3 w-full flex justify-center">
            <button 
              onClick={handlePrev} disabled={isAnimating}
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 z-40 relative ${isAnimating ? 'bg-white/50 text-slate-300 cursor-not-allowed shadow-none' : 'bg-white text-primary hover:bg-primary hover:text-white shadow-md hover:shadow-lg'}`}
            ><span className="material-symbols-outlined text-sm md:text-base font-bold">arrow_back</span></button>
            <button 
              onClick={handleNext} disabled={isAnimating}
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 z-40 relative ${isAnimating ? 'bg-white/50 text-slate-300 cursor-not-allowed shadow-none' : 'bg-white text-primary hover:bg-primary hover:text-white shadow-md hover:shadow-lg'}`}
            ><span className="material-symbols-outlined text-sm md:text-base font-bold">arrow_forward</span></button>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[250px] sm:h-[320px] md:h-[450px] flex items-center justify-center mt-4 md:mt-8">
        <div className="relative w-[70%] sm:w-[60%] md:w-[50%] lg:max-w-3xl h-full flex justify-center items-center">
          {SHOWCASE_DATA.map((room, index) => (
            <div 
              key={room.id}
              onClick={() => { if (!isAnimating && index !== activeIndex) { setActiveIndex(index); setIsAnimating(true); } }}
              className={getCardStyle(index)}
            >
              <img alt={room.title} className="w-full h-full object-cover" src={room.imageSrc} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-90 transition-opacity duration-300 flex items-end p-4 md:p-8">
                 <div>
                    <p className="text-accent text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1">{room.subtitle}</p>
                    <h3 className="text-white text-base sm:text-lg md:text-2xl font-display font-bold">{room.title}</h3>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;