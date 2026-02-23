import React, { useState, useEffect, useCallback } from 'react';

interface Room {
  id: number;
  imageSrc: string;
  title: string;
  subtitle: string;
}

const SHOWCASE_DATA: Room[] = [
  { id: 0, imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxgWDpZltQcHFRV4GZl3eOUDASxGQHwgOS7PGZzaN3T6C1uwI9LoeHZabghSqOQinDxKGukuQkrROhnyt90mIGj1HYni9InsOh62di00KYdChzdc7ZIfJTSsBqcUwxdx0ndD5N25xJAlZuit7E1Jfgq79cWLc8pOrCqTIf0fLXa5ezvGm6JR4ZsfArt1WRU2YOFwYMo9-C2pKCOR0EF_x_-M_V2d7zGXoVpgw-OoZIuurbYLvp5WdIoiVla6gmLFugTgEnLY-vxGJv", title: "Gabinet Zabiegowy A", subtitle: "Wygodny fotel i technologia" },
  { id: 1, imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIVVjVtp4kNKYBNDAUg95FFcD2ZsVVZlgZ6txkfbe8ykukZx_LCx2sHnRQMdPHwoshSlJqXLMsUxLQVF3KYG7Vui6qRwzlRn_IpWK0JR2LQJeXarrTTQVE4KEuAZH5UVnMn7XRflEy0tTd5JakYoZccqykEr_0uMb0y-hTN6SFFLwctJ5yNlgpim7LRB5Az1JJLxkSLzsKGM0n-ykP6vZE540ftfSqDDCz_ZYM8TjEiVci9ennzfa_xdsG1DqFQpyItXKY-leRwhKe", title: "Blok Chirurgiczny", subtitle: "Precyzyjne narzędzia" },
  { id: 2, imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuA06V4XWyJHY4hhPjEXRiM6_bhY_VGnkrKwixUNUP9f0RGXqGXaALpmDsKNfTd35jug12TT3ei_TE49NGbkxAhRgukSDTzHi7DRJRSASNxQScdlyYhb2ptZw8uSG1laMCmMzS2nK_eSDpv-foM0wG74fnoEyrCtJdnneQb--loAyGLoFBIFQkWWxCsRzedFa7SmPbPCLKl4uxqvNAUWJpfkrvCG-B7Rnb7ymz4cxmoU_z-xDMXOjbt3bXrZ8gb458UXGjKRJVDN0KsF", title: "Poczekalnia", subtitle: "Strefa komfortu pacjenta" },
  { id: 3, imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyHFZd6F1i8BPWQjV80FPzxjPFAiSj_8Mx4ofZp0kgNgJbgfSeJHfxWhZLnqHS2PVrdFCrUbW9xXO8tYsvv1J2yPxRabDoxv6qdcWFjJemWJfAVJRrp9f-3F7wQbtZOYTOPS-XUNt6e0d8YmvTuXkoxEZVs1TfuSRssIj_DiKZzR83xdlsahWNyxZ7md03dbo5PE0FhZg0UwrznNPO7_EDEHCvE9kVPXEBQDYnVC38ZZAJyRF4L1npWMXqEqOsOyxNCjAR0lTnp-ub", title: "Centrum Sterylizacji", subtitle: "Najwyższe standardy higieny" },
  { id: 4, imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjEj26KJAjNWMuKMuIXGU9HSCvNtaQ1HyOo3688-9EG_kjSghJ4tJEGLcnXhAv2kdna02oz4TjsyYMQK7S65x8CF-isiSImBMw_fL9lwfGEP9KVDqS_n5mdqxDjOpHbvP9vKmN8eCdMhwnxDz0vHbq5dq2BSD3ygQYR_Mn2f29zwFbpMH-RKTFF9Ci_QVmycDiH7aSsWEk5KCMN25T8SRE0OZ3PeupKxYpCaQgE3BZ-c6J4moTywcu1xkP0lOP37v9SGBuLoVkSD5A", title: "Pokój Konsultacji", subtitle: "Prywatne rozmowy i plany" }
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

    let base = "absolute top-0 left-0 w-full h-full bg-slate-200 rounded-3xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform ";

    if (diff === 0) return base + "z-30 translate-x-0 scale-100 opacity-100 border-white border-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] cursor-default";
    else if (diff === 1) return base + "z-20 translate-x-[110%] scale-[0.85] opacity-50 cursor-pointer hover:opacity-100 border-white border-2 shadow-lg";
    else if (diff === -1) return base + "z-20 -translate-x-[110%] scale-[0.85] opacity-50 cursor-pointer hover:opacity-100 border-white border-2 shadow-lg";
    else if (diff > 1) return base + "z-10 translate-x-[220%] scale-[0.7] opacity-0 pointer-events-none";
    else if (diff < -1) return base + "z-10 -translate-x-[220%] scale-[0.7] opacity-0 pointer-events-none";
    
    return base;
  };

  return (
    <section className="w-full py-16 md:py-24 bg-slate-50 overflow-hidden relative" id="showcase">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 text-center md:text-left">
        <div>
          <span className="text-teal font-bold tracking-widest uppercase text-xs md:text-sm block mb-1">Infrastruktura</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-1 md:mt-2">Nasza Klinika</h2>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-4 md:gap-5">
          <p className="text-slate-600 max-w-md text-xs sm:text-sm md:text-base hidden md:block">
             Zaprojektowana z myślą o sterylności, technologii i Twoim komforcie.
          </p>
          <div className="flex gap-2 md:gap-3">
            {/* Poprawione przyciski z wyraźnym białym tłem i cieniem */}
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
                    <p className="text-teal text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1">{room.subtitle}</p>
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