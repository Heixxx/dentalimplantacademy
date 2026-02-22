import React, { useState, useEffect } from 'react';

// === ZDJĘCIA ===
const IMG_THINKING = "/thinking.png"; 
const IMG_SMILING = "/smile.png"; 

const Hero = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showFirstBubble, setShowFirstBubble] = useState(false);
  const [showSecondBubble, setShowSecondBubble] = useState(false);
  
  // Stany dla słów losowanych JEDNORAZOWO przy odświeżeniu
  const [currentService, setCurrentService] = useState("");
  const [currentAdj, setCurrentAdj] = useState("");

  const services = ["licówki", "implanty", "wybielanie", "korony", "rekonstrukcję"];
  const adjectives = ["Precyzyjne", "Promienne", "Perfekcyjne", "Naturalne"];

  useEffect(() => {
    // 1. Losowanie tekstu JEDNORAZOWO przy montowaniu komponentu
    setCurrentService(services[Math.floor(Math.random() * services.length)]);
    setCurrentAdj(adjectives[Math.floor(Math.random() * adjectives.length)]);

    // 2. Sekwencja animacji
    const t1 = setTimeout(() => {
      setShowFirstBubble(true); // Najpierw pojawia się górny (lewy) dymek
    }, 800);

    const t2 = setTimeout(() => {
      setIsFlipped(true); // Potem obraca się karta
    }, 2800);

    const t3 = setTimeout(() => {
      setShowSecondBubble(true); // Na końcu pojawia się dolny (prawy) dymek
    }, 3600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    // overflow-x-clip: blokuje boczny pasek przewijania, ale NIE UCINA efektów w pionie
    <section className="relative w-full min-h-[90vh] flex items-center bg-white pt-20 pb-20 overflow-x-clip">
      
      {/* TWARDE REGUŁY CSS DLA ANIMACJI */}
      <style>{`
        .led-green {
          width: 8px;
          height: 8px;
          background-color: #34d399; /* teal/green */
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 4px #34d399;
          animation: ledSoftBlink 2.5s infinite ease-in-out;
        }
        @keyframes ledSoftBlink {
          0%, 100% { opacity: 1; box-shadow: 0 0 6px #34d399; }
          50% { opacity: 0.4; box-shadow: 0 0 2px #34d399; }
        }

        @keyframes expandOut {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.4; }
          50% { transform: translate(-50%, -50%) scale(1.3); opacity: 0.8; }
        }
        /* KLUCZOWY FIX: słowo 'both' sprawia, że tło nie skacze po upływie animationDelay */
        .animate-expand-out {
          animation: expandOut 8s ease-in-out infinite both;
        }

        @keyframes floatBubble {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-bubble {
          animation: floatBubble 4s ease-in-out infinite;
        }

        /* Łagodne pojawianie się odświeżanego tekstu i lewej sekcji */
        @keyframes slowFadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slow-fade {
          animation: slowFadeIn 1.5s ease-out forwards;
        }
      `}</style>

      {/* TWOJE ORYGINALNE GŁÓWNE TŁO */}
      <div className="absolute inset-0 w-full pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full mix-blend-multiply blur-3xl"></div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* === LEWA KOLUMNA: TEKSTY === */}
        <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start animate-slow-fade">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-6">
            <span className="led-green"></span>
            <span className="text-slate-600 text-[10px] md:text-xs font-bold uppercase tracking-widest">Nowi pacjenci mile widziani</span>
          </div>
          
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-slate-900 leading-[1.2] mb-6">
            Tworzymy <br className="hidden sm:block" />
            <span className="text-primary">{currentAdj}</span> <br className="hidden sm:block" />
            Uśmiechy
          </h1>
          
          <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed max-w-lg font-light">
            Doświadcz przyszłości stomatologii rekonstrukcyjnej. Łączymy elitarną wiedzę chirurgiczną, nowoczesną technologię i empatię, aby przywrócić Twoją pewność siebie.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a className="bg-primary text-white px-8 py-4 rounded-xl text-center font-medium hover:bg-blue-800 transition duration-300 shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group" href="#contact">
              Umów Konsultację
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
            <a className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl text-center font-medium hover:bg-slate-50 transition duration-300 flex items-center justify-center gap-2 shadow-sm" href="tel:+48178533385">
              <span className="material-symbols-outlined text-teal">phone_in_talk</span>
              <span className="text-base">
                <span className="text-slate-800 font-semibold">17 853 33 85</span>
              </span>
            </a>
          </div>
        </div>
        
        {/* === PRAWA KOLUMNA: DYMKI I ZDJĘCIE 3D === */}
        <div className="order-1 lg:order-2 relative h-[400px] sm:h-[500px] lg:h-[650px] flex items-center justify-center w-full animate-slow-fade z-10">
          <div className="relative w-full max-w-md lg:max-w-none h-full flex items-center justify-center">
            
            {/* TWOJE ORYGINALNE PULSUJĄCE ROZSZERZAJĄCE SIĘ TŁO ZA ZDJĘCIEM */}
            <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] bg-teal/20 rounded-full blur-3xl -z-10 animate-expand-out" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] bg-primary/20 rounded-full blur-3xl -z-10 animate-expand-out" style={{ animationDelay: '4s' }}></div>
            
            {/* ========================================================= */}
            {/* DYMEK 1: LEWA GÓRA -> OGONEK W PRAWY DÓŁ (W ZDJĘCIE)      */}
            {/* ========================================================= */}
            <div className={`absolute top-4 lg:top-14 -left-2 lg:-left-12 z-30 transition-all duration-700 ease-out max-w-[200px] md:max-w-[240px] animate-float-bubble drop-shadow-xl ${showFirstBubble ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-10'}`}>
              <div className="bg-white px-5 py-3 md:px-6 md:py-4 rounded-3xl relative">
                {/* OGONEK wycelowany w prawy dół */}
                <div className="absolute -bottom-2 right-6 w-5 h-5 bg-white transform rotate-45 rounded-sm"></div>
                <p className="text-slate-700 font-medium text-sm md:text-base leading-snug relative z-10">
                  Chcę pójść na <br/> <span className="text-primary font-bold text-base md:text-lg">{currentService}...</span>
                </p>
              </div>
            </div>

            {/* ========================================================= */}
            {/* DYMEK 2: PRAWA DÓŁ -> OGONEK W LEWĄ GÓRĘ (W ZDJĘCIE)      */}
            {/* ========================================================= */}
            <div className={`absolute bottom-10 lg:bottom-24 -right-2 lg:-right-12 z-30 transition-all duration-700 ease-out max-w-[220px] md:max-w-[260px] animate-float-bubble drop-shadow-xl ${showSecondBubble ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-10'}`} style={{ animationDelay: '1s' }}>
              <div className="bg-primary px-5 py-3 md:px-6 md:py-4 rounded-3xl relative">
                {/* OGONEK wycelowany w lewą górę */}
                <div className="absolute -top-2 left-6 w-5 h-5 bg-primary transform rotate-45 rounded-sm"></div>
                <p className="text-white font-medium text-sm md:text-base leading-snug relative z-10">
                  Więc pójdę do <br/><span className="font-bold text-accent">Dental Implant Academy!</span> ✨
                </p>
              </div>
            </div>

            {/* ========================================================= */}
            {/* KARTA Z EFEKTEM FLIP 180 STOPNI                           */}
            {/* ========================================================= */}
            <div 
              className="relative w-[75%] lg:w-[80%] h-[75%] lg:h-[80%] z-20 cursor-pointer" 
              style={{ perspective: '1200px' }}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div 
                className="w-full h-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{ 
                  transformStyle: 'preserve-3d', 
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' 
                }}
              >
                {/* PRZÓD (Kobieta Myśląca) */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-[2rem] shadow-2xl border-4 border-white overflow-hidden bg-slate-100" 
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <img alt="Pacjentka zastanawiająca się" className="w-full h-full object-cover object-center" src={IMG_THINKING} />
                </div>

                {/* TYŁ (Kobieta Uśmiechnięta - zrotowana z góry o 180deg) */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-[2rem] shadow-2xl border-4 border-white overflow-hidden bg-slate-100" 
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <img alt="Pacjentka uśmiechnięta" className="w-full h-full object-cover object-top" src={IMG_SMILING} />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      
      {/* TWOJA ORYGINALNA Fala SVG na dole */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg className="relative block w-full h-[30px] md:h-[50px] text-slate-50" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;