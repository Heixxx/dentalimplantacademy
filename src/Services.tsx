import React from 'react';

const Services: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-slate-50 relative overflow-hidden" id="services">
      <div className="absolute top-0 right-0 w-full lg:w-1/3 h-full bg-white -z-10 skew-x-12 transform origin-top-right hidden lg:block border-l border-slate-100"></div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        

        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-[#1A4E84] font-bold tracking-widest uppercase text-xs md:text-sm bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            Pełen Zakres Usług
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-6 mb-4">
            Dbamy o zdrowie od podstaw
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
            Niezależnie od problemu, z którym się do nas zgłaszaszasz, dysponujemy wiedzą i sprzętem, aby przeprowadzić Cię przez każdy etap leczenia.
          </p>
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          
  
  
  
          <div className="bg-white border border-slate-100 p-8 md:p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden flex flex-col h-full text-left">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-50 rounded-full opacity-60 transition-transform duration-500 group-hover:scale-125"></div>
            
            <div className="w-16 h-16 bg-[#1A4E84] text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg relative z-10 group-hover:rotate-6 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl" aria-hidden="true">healing</span>
            </div>
            
            <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-4 relative z-10">
              Endodoncja
            </h3>
            
            <p className="text-base text-slate-600 mb-6 font-light leading-relaxed relative z-10">
              Endodoncja czyli leczenie kanałowe. Głównym celem tego zabiegu jest uratowanie zęba przed usunięciem.
            </p>

            <div className="mt-auto relative z-10">
                <strong className="text-slate-800 block mb-4 text-base">Kiedy jest potrzebna?</strong>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm md:text-base text-slate-600 font-light">
                        <span className="w-2 h-2 mt-2 bg-[#1A4E84] rounded-full shrink-0"></span>
                        Głęboka próchnica docierająca do miazgi.
                    </li>
                    <li className="flex items-start gap-3 text-sm md:text-base text-slate-600 font-light">
                        <span className="w-2 h-2 mt-2 bg-[#1A4E84] rounded-full shrink-0"></span>
                        Silny ból zęba (samoistny lub przy nagryzaniu).
                    </li>
                    <li className="flex items-start gap-3 text-sm md:text-base text-slate-600 font-light">
                        <span className="w-2 h-2 mt-2 bg-[#1A4E84] rounded-full shrink-0"></span>
                        Obumarła miazga (zęby „martwe”).
                    </li>
                    <li className="flex items-start gap-3 text-sm md:text-base text-slate-600 font-light">
                        <span className="w-2 h-2 mt-2 bg-[#1A4E84] rounded-full shrink-0"></span>
                        Urazy mechaniczne (np. złamanie zęba odsłaniające nerw).
                    </li>
                    <li className="flex items-start gap-3 text-sm md:text-base text-slate-600 font-light">
                        <span className="w-2 h-2 mt-2 bg-[#1A4E84] rounded-full shrink-0"></span>
                        Konieczność powtórnego leczenia, gdy poprzednie wypełnienie kanału było nieszczelne.
                    </li>
                </ul>
            </div>
          </div>

  
  
  
          <div className="bg-white border border-slate-100 p-8 md:p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden flex flex-col h-full text-left">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-teal-50 rounded-full opacity-60 transition-transform duration-500 group-hover:scale-125"></div>
            
            <div className="w-16 h-16 bg-[#0F766E] text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg relative z-10 group-hover:rotate-6 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl" aria-hidden="true">dentistry</span>
            </div>
            
            <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-4 relative z-10">
              Stomatologia zachowawcza
            </h3>
            
            <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed relative z-10 space-y-4">
                <span>Stomatologia zachowawcza zajmuje się rozpoznawaniem i leczeniem próchnicy oraz odbudową zniszczonych przez tę chorobę zębów. Niezwykle ważne jest to, aby zmiany próchnicowe usuwać w jak najwcześniejszym stadium, dzięki czemu leczenie jest proste, mało inwazyjne i tańsze. </span>
                <br /><br />
                <span>Dlatego kwestią olbrzymiej wagi są regularne kontrole stanu zębów (najlepiej co 6 miesięcy), które pozwolą na wczesną diagnozę i szybkie podjęcie leczenia.</span>
            </p>
          </div>

  
  
  
          <div className="bg-white border border-slate-100 p-8 md:p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden flex flex-col h-full text-left">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-sky-100 rounded-full opacity-60 transition-transform duration-500 group-hover:scale-125"></div>
            
            <div className="w-16 h-16 bg-slate-800 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg relative z-10 group-hover:rotate-6 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl" aria-hidden="true">medical_services</span>
            </div>
            
            <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-4 relative z-10">
              Chirurgia
            </h3>
            
            <p className="text-base text-slate-600 mb-6 font-light leading-relaxed relative z-10">
              Chirurgia stomatologiczna to dział stomatologii zajmujący się leczeniem operacyjnym w obrębie jamy ustnej. Nowoczesne metody zapewniają precyzję, bezpieczeństwo i komfort pacjenta podczas każdego zabiegu.
            </p>

            <div className="mt-auto relative z-10">
                <strong className="text-slate-800 block mb-4 text-base">Najczęstsze zabiegi:</strong>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm md:text-base text-slate-600 font-light">
                        <span className="w-2 h-2 mt-2 bg-slate-800 rounded-full shrink-0"></span>
                        Ekstrakcja zęba.
                    </li>
                    <li className="flex items-start gap-3 text-sm md:text-base text-slate-600 font-light">
                        <span className="w-2 h-2 mt-2 bg-slate-800 rounded-full shrink-0"></span>
                        Wszczepienie implantów.
                    </li>
                    <li className="flex items-start gap-3 text-sm md:text-base text-slate-600 font-light">
                        <span className="w-2 h-2 mt-2 bg-slate-800 rounded-full shrink-0"></span>
                        Resekcje wierzchołków korzeni.
                    </li>
                    <li className="flex items-start gap-3 text-sm md:text-base text-slate-600 font-light">
                        <span className="w-2 h-2 mt-2 bg-slate-800 rounded-full shrink-0"></span>
                        Sterowana regeneracja kości.
                    </li>
                    <li className="flex items-start gap-3 text-sm md:text-base text-slate-600 font-light">
                        <span className="w-2 h-2 mt-2 bg-slate-800 rounded-full shrink-0"></span>
                        Podniesienie dna zatoki szczękowej.
                    </li>
                </ul>
            </div>
          </div>

          <div className="bg-white border border-slate-100 p-8 md:p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden flex flex-col h-full text-left">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-indigo-100 rounded-full opacity-60 transition-transform duration-500 group-hover:scale-125"></div>
            
            <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg relative z-10 group-hover:rotate-6 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl" aria-hidden="true">clean_hands</span>
            </div>
            
            <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-4 relative z-10">
              Profilaktyka
            </h3>
            
            <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed relative z-10 space-y-4">
              <span>Profilaktyka stomatologiczna to działania zapobiegające chorobom jamy ustnej – klucz do zdrowego uśmiechu. Obejmuje regularne wizyty kontrolne, profesjonalne czyszczenie zębów, usuwanie kamienia nazębnego oraz edukację w zakresie higieny jamy ustnej. </span>
              <br /><br />
              <span>Dzięki niej można zapobiegać próchnicy i chorobom dziąseł, dbając o długotrwałe zdrowie zębów.</span>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;