import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 py-12 md:py-16 border-t border-slate-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 text-center sm:text-left">
          
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <span className="material-symbols-outlined text-white text-2xl md:text-3xl">dentistry</span>
              <div>
                <h3 className="font-display font-bold text-base md:text-lg text-white uppercase tracking-wider leading-none">Dental Implant</h3>
                <span className="text-[8px] md:text-[10px] text-slate-500 font-medium tracking-[0.2em] uppercase block mt-1">Academy</span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed mb-6">
              Dedykowani perfekcji w dziedzinie implantologii i stomatologii rekonstrukcyjnej. Twój uśmiech to nasza wizytówka.
            </p>
            {/* Poprawione linki Social Media na podstawie oficjalnej strony */}
            <div className="flex gap-3">
              <a className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition border border-slate-700" href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition border border-slate-700" href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                 <svg className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 md:mb-6 uppercase text-[10px] md:text-sm tracking-widest border-b sm:border-b-0 sm:border-l-2 sm:border-primary sm:pl-3 pb-2 sm:pb-0">Nawigacja</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm inline-block sm:block text-left">
              <li><a className="hover:text-primary transition flex items-center gap-2" href="#about"><span className="w-1 h-1 bg-slate-500 rounded-full hidden sm:block"></span> O naszej Klinice</a></li>
              <li><a className="hover:text-primary transition flex items-center gap-2" href="#services"><span className="w-1 h-1 bg-slate-500 rounded-full hidden sm:block"></span> Nasze Usługi</a></li>
              <li><a className="hover:text-primary transition flex items-center gap-2" href="#showcase"><span className="w-1 h-1 bg-slate-500 rounded-full hidden sm:block"></span> Wyposażenie</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 md:mb-6 uppercase text-[10px] md:text-sm tracking-widest border-b sm:border-b-0 sm:border-l-2 sm:border-primary sm:pl-3 pb-2 sm:pb-0">Specjalizacje</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm inline-block sm:block text-left">
              <li><a className="hover:text-primary transition flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full hidden sm:block"></span> Zaawansowana Protetyka</a></li>
              <li><a className="hover:text-primary transition flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full hidden sm:block"></span> Nowoczesna Implantologia</a></li>
              <li><a className="hover:text-primary transition flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full hidden sm:block"></span> Rekonstrukcja Uzębienia</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 md:mb-6 uppercase text-[10px] md:text-sm tracking-widest border-b sm:border-b-0 sm:border-l-2 sm:border-teal sm:pl-3 pb-2 sm:pb-0">Szybki Kontakt</h4>
            <p className="text-xs md:text-sm text-slate-400 mb-1 md:mb-2">Masz pytania lub problem?</p>
            <a className="text-white font-display font-bold hover:text-primary transition text-xl md:text-2xl block mb-4 md:mb-6" href="tel:+48178533385">17 853 33 85</a>
            <div className="text-[10px] md:text-xs text-slate-500 border-t border-slate-800 pt-4">
              <p>© 2026 Dental Implant Academy.</p>
              <p>Wszelkie prawa zastrzeżone.</p>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;