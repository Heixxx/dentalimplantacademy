import React from 'react';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const navHeight = 80; 
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-slate-50 text-slate-600 py-16 md:py-20 border-t border-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center sm:text-left">
          
          {/* === 1. LOGO I O NAS === */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-3 mb-6 cursor-pointer" onClick={(e) => handleScroll(e, 'body')}>
              <img src="/logo.png" alt="Dental Implant Academy Logo" className="w-16 h-16" />
              <div className="text-left">
                <h3 className="font-display font-bold text-lg text-[#1A4E84] uppercase tracking-wider leading-none">
                  Dental Implant
                </h3>
                <span className="text-[10px] text-slate-500 font-medium tracking-[0.2em] uppercase block mt-1">
                  Academy
                </span>
              </div>
            </div>
            
            <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-[250px]">
              Dedykowani perfekcji w dziedzinie implantologii i stomatologii rekonstrukcyjnej. Twój uśmiech to nasza wizytówka.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/people/Dental-Implant-Academy/61586910009789/" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#1A4E84] hover:text-white transition-colors border border-slate-200 text-[#1A4E84] shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>
          
          {/* === 2. NAWIGACJA === */}
          <div>
            <h4 className="text-[#1A4E84] font-bold mb-6 uppercase text-xs tracking-widest border-b sm:border-b-0 sm:border-l-2 sm:border-[#1A4E84] sm:pl-3 pb-2 sm:pb-0">
              Nawigacja
            </h4>
            <ul className="space-y-3 text-sm inline-block sm:block text-left">
              <li>
                <a onClick={(e) => handleScroll(e, '#about')} className="text-slate-600 hover:text-[#1A4E84] hover:font-medium transition-all flex items-center gap-2 cursor-pointer">
                  <span className="w-1.5 h-1.5 bg-blue-200 rounded-full hidden sm:block"></span> 
                  O naszej Klinice
                </a>
              </li>
              <li>
                <a onClick={(e) => handleScroll(e, '#implanty')} className="text-slate-600 hover:text-[#1A4E84] hover:font-medium transition-all flex items-center gap-2 cursor-pointer">
                  <span className="w-1.5 h-1.5 bg-blue-200 rounded-full hidden sm:block"></span> 
                  Wszystko o implantach
                </a>
              </li>
              <li>
                <a onClick={(e) => handleScroll(e, '#services')} className="text-slate-600 hover:text-[#1A4E84] hover:font-medium transition-all flex items-center gap-2 cursor-pointer">
                  <span className="w-1.5 h-1.5 bg-blue-200 rounded-full hidden sm:block"></span> 
                  Nasze Usługi
                </a>
              </li>
            </ul>
          </div>
          
          {/* === 3. GODZINY OTWARCIA === */}
          <div>
            <h4 className="text-[#1A4E84] font-bold mb-6 uppercase text-xs tracking-widest border-b sm:border-b-0 sm:border-l-2 sm:border-[#1A4E84] sm:pl-3 pb-2 sm:pb-0">
              Godziny otwarcia
            </h4>
            <ul className="space-y-3 text-sm text-slate-500 inline-block sm:block text-left w-full max-w-[200px]">
              <li className="flex justify-between border-b border-slate-200 pb-2">
                <span>Pon - Pt:</span>
                <span className="font-medium text-slate-700">08:00 - 20:00</span>
              </li>
              <li className="flex justify-between border-b border-slate-200 pb-2">
                <span>Sobota:</span>
                <span className="font-medium text-slate-700">09:00 - 14:00</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Niedziela:</span>
                <span className="font-medium text-slate-400">Zamknięte</span>
              </li>
            </ul>
          </div>
          
          {/* === 4. SZYBKI KONTAKT === */}
          <div>
            <h4 className="text-[#1A4E84] font-bold mb-6 uppercase text-xs tracking-widest border-b sm:border-b-0 sm:border-l-2 sm:border-[#1A4E84] sm:pl-3 pb-2 sm:pb-0">
              Szybki Kontakt
            </h4>
            <p className="text-sm text-slate-500 mb-2">
              Umów się na wizytę lub zadaj pytanie.
            </p>
            
            <a href="tel:+48178533385" className="inline-flex items-center gap-2 text-[#1A4E84] font-display font-bold hover:text-sky-600 transition-colors text-2xl mb-8 group">
              <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">phone_in_talk</span>
              17 853 33 85
            </a>

            <div className="text-xs text-slate-400 border-t border-slate-200 pt-6">
              <p>&copy; {new Date().getFullYear()} Dental Implant Academy.</p>
              <p>Wszelkie prawa zastrzeżone.</p>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;