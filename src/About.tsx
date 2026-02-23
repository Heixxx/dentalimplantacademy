import React from 'react';

// === ZDJĘCIE DOKTORA DO PODMIANY ===
const IMG_DOCTOR = "";

const About = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-slate-50 relative" id="about">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="relative group mx-auto w-full max-w-md lg:max-w-none pt-4">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            
            {/* Zdjęcie doktora */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform lg:rotate-2 group-hover:rotate-0 transition duration-500">
              <img alt="Lekarz stomatolog Derek Srokowski" className="object-cover object-top h-[450px] md:h-[600px] w-full" src={IMG_DOCTOR} />
            </div>

            {/* Kafelki z efektem pływającego Dymka */}
            <div className="absolute top-8 -left-6 md:-left-10 bg-white/90 backdrop-blur-md border border-slate-100 p-4 rounded-2xl shadow-xl z-20 max-w-[180px] animate-float">
              <span className="material-symbols-outlined text-primary text-3xl mb-1">public</span>
              <p className="font-bold text-sm text-slate-800">Kliniki</p>
              <p className="text-xs text-slate-500">Kanada & Rzeszów</p>
            </div>

            <div className="absolute bottom-20 -right-6 md:-right-8 bg-white/90 backdrop-blur-md border border-slate-100 p-4 rounded-2xl shadow-xl z-20 max-w-[180px] animate-float-delayed">
              <span className="material-symbols-outlined text-teal text-3xl mb-1">workspace_premium</span>
              <p className="font-bold text-sm text-slate-800">Certyfikaty</p>
              <p className="text-xs text-slate-500">Członek RCDSO & OIL</p>
            </div>
            
            <div className="absolute -bottom-6 left-10 bg-white/90 backdrop-blur-md border border-slate-100 p-4 rounded-2xl shadow-xl z-20 max-w-[220px] animate-float">
               <span className="material-symbols-outlined text-primary text-3xl mb-1">implants</span>
              <p className="font-bold text-sm text-slate-800">Specjalizacja</p>
              <p className="text-xs text-slate-500">Implantologia i rekonstrukcja</p>
            </div>
          </div>
          
          <div className="text-center lg:text-left mt-16 lg:mt-0">
            <span className="text-teal font-bold tracking-widest uppercase text-xs mb-2 block">Kim jesteśmy</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6">
              Poznaj Doktora <br className="hidden sm:block" />
              <span className="text-primary">Dereka Srokowskiego</span>
            </h2>
            
            {/* Opis skopiowany i zredagowany z oficjalnej strony */}
            <p className="text-slate-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-base font-light">
              Lekarz stomatolog Darek Srokowski to absolwent wydziału stomatologii University of Western Ontario w Kanadzie, który ukończył w 1987 roku. Posiada wieloletnie doświadczenie w prowadzeniu klinik w Polsce, Kanadzie i Europie zachodniej. W latach 1993-1996 pracował jako asystent profesora na wydziale protetyki uniwersytetu Western Ontario. Od wielu lat kieruje prywatną kliniką specjalizującą się w zaawansowanej rekonstrukcji uzębienia i implantologii.
            </p>
            
            <ul className="space-y-4 mb-8 text-left inline-block lg:block">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-teal text-xl">check_circle</span>
                <span className="text-slate-700 font-medium md:text-lg">Bezpłatna konsultacja</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-teal text-xl">check_circle</span>
                <span className="text-slate-700 font-medium md:text-lg">Diagnostyka na miejscu</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-teal text-xl">check_circle</span>
                <span className="text-slate-700 font-medium md:text-lg">Plan leczenia i finansowania</span>
              </li>
            </ul>

            <div className="text-center lg:text-left">
               <a className="inline-flex items-center gap-2 text-primary font-bold hover:underline" href="#services">
                 Zobacz nasze usługi <span className="material-symbols-outlined text-sm">arrow_forward</span>
               </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;