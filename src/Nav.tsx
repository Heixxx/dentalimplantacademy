import React, { useState, useRef, useEffect } from 'react';

interface LangOption {
  code: string;
  label: string;
  flag: string;
}

const LANGUAGES: LangOption[] = [
  { code: 'pl', label: 'Polski', flag: 'PL' },
  { code: 'en', label: 'English', flag: 'EN' },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<LangOption>(LANGUAGES[0]);
  const langRef = useRef<HTMLDivElement>(null);
  const closeMenu = () => setIsOpen(false);


  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const selectLang = (lang: LangOption) => {
    setCurrentLang(lang);
    setLangOpen(false);
  };

  const handleScroll = (e: React.MouseEvent<HTMLElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    closeMenu();
    if (targetId === 'body' || targetId === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(targetId);
    if (target) {
      const navHeight = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">


          <div className="flex items-center gap-2 md:gap-3 cursor-pointer" onClick={(e) => handleScroll(e, '#top')}>
            <img src="/logo.png" alt="Dental Implant Academy Logo" className="w-16 h-16 md:w-20 md:h-20" />
            <div>
              <h1 className="font-display font-bold text-lg md:text-xl text-[#1A4E84] uppercase tracking-wider leading-none">
                Dental Implant Academy
              </h1>
              <span className="text-[10px] md:text-xs text-slate-500 font-medium tracking-[0.2em] uppercase">
                 Rzeszów
              </span>
            </div>
          </div>



          <div className="hidden lg:flex space-x-4 items-center">

            <a onClick={(e) => handleScroll(e, '#about')} className="relative group text-slate-600 hover:text-[#1A4E84] font-medium transition-colors duration-300 cursor-pointer m-0">
              O nas
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#1A4E84] transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a onClick={(e) => handleScroll(e, '#implanty')} className="relative group text-slate-600 hover:text-[#1A4E84] font-medium transition-colors duration-300 cursor-pointer m-0">
              Implanty
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#1A4E84] transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a onClick={(e) => handleScroll(e, '#services')} className="relative group text-slate-600 hover:text-[#1A4E84] font-medium transition-colors duration-300 cursor-pointer m-0">
              Usługi
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#1A4E84] transition-all duration-300 group-hover:w-full"></span>
            </a>

            <div className="flex items-center gap-2 text-[#1A4E84] font-semibold border-l border-slate-200 pl-4">
              <span className="material-symbols-outlined text-lg">call</span>
              <span className="tracking-wide">17 853 33 85</span>
            </div>

            
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen((p) => !p)}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                aria-label={`Zmień język – aktualny: ${currentLang.label}`}
                className="flex items-center gap-1 px-3 py-2 rounded-full border border-slate-200 hover:border-[#1A4E84]/30 bg-white text-slate-700 text-sm font-medium transition-all duration-200 hover:shadow-sm focus-visible:ring-2 focus-visible:ring-[#1A4E84] focus-visible:ring-offset-2"
              >
                <span className="text-base leading-none" aria-hidden="true">{currentLang.flag}</span>
                <span className="uppercase text-xs font-bold tracking-wider">{currentLang.code}</span>
                <span className={`material-symbols-outlined text-sm text-slate-400 transition-transform duration-300 ${langOpen ? 'rotate-180' : ''}`} aria-hidden="true">expand_more</span>
              </button>

              {langOpen && (
                <ul
                  role="listbox"
                  aria-label="Wybierz język"
                  className="absolute right-0 mt-2 w-44 bg-white border border-slate-100 rounded-2xl shadow-xl py-2 z-50 animate-[fadeIn_150ms_ease-out]"
                >
                  {LANGUAGES.map((lang) => (
                    <li key={lang.code} role="option" aria-selected={currentLang.code === lang.code}>
                      <button
                        onClick={() => selectLang(lang)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors
                          ${currentLang.code === lang.code
                            ? 'bg-[#1A4E84]/5 text-[#1A4E84] font-semibold'
                            : 'text-slate-700 hover:bg-slate-50'}`}
                      >
                        <span className="text-lg leading-none" aria-hidden="true">{lang.flag}</span>
                        <span>{lang.label}</span>
                        {currentLang.code === lang.code && (
                          <span className="material-symbols-outlined text-[#1A4E84] text-sm ml-auto" aria-hidden="true">check</span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <a onClick={(e) => handleScroll(e, '#contact')} className="bg-[#1A4E84] hover:bg-[#123860] text-white px-5 py-2 rounded-full font-medium transition-all duration-300 shadow-lg shadow-[#1A4E84]/20 cursor-pointer hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#1A4E84]/30 hover:text-white">
              Umów wizytę
            </a>
          </div>


          <div className="lg:hidden flex items-center">

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-transparent text-[#1A4E84] border border-slate-200 shadow-sm focus:outline-none p-2.5 rounded-xl hover:bg-slate-100/50 transition-colors flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <span className={`material-symbols-outlined text-2xl transition-transform duration-300 ${isOpen ? 'rotate-90 scale-110' : 'rotate-0'}`}>
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>



      <div
        className={`lg:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xl flex flex-col items-center space-y-6 overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? "max-h-[500px] py-8 opacity-100 visible" : "max-h-0 py-0 opacity-0 invisible"
          }`}
      >
        <a onClick={(e) => handleScroll(e, '#about')} className="text-slate-800 hover:text-[#1A4E84] font-bold text-xl cursor-pointer transition-colors">O nas</a>
        <a onClick={(e) => handleScroll(e, '#implanty')} className="text-slate-800 hover:text-[#1A4E84] font-bold text-xl cursor-pointer transition-colors">Implanty</a>
        <a onClick={(e) => handleScroll(e, '#services')} className="text-slate-800 hover:text-[#1A4E84] font-bold text-xl cursor-pointer transition-colors">Usługi</a>

        <div className="w-16 h-px bg-slate-200 my-2"></div>

        
        <div className="flex items-center gap-2">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => selectLang(lang)}
              aria-label={`Zmień język na ${lang.label}`}
              className={`flex items-center gap-1 px-3 py-2 rounded-full border text-sm font-medium transition-all duration-200
                ${currentLang.code === lang.code
                  ? 'border-[#1A4E84] bg-[#1A4E84]/5 text-[#1A4E84]'
                  : 'border-slate-200 text-slate-600 hover:border-slate-300'}`}
            >
              <span className="text-base leading-none" aria-hidden="true">{lang.flag}</span>
              <span className="uppercase text-xs font-bold tracking-wider">{lang.code}</span>
            </button>
          ))}
        </div>

        <div className="w-16 h-px bg-slate-200 my-2"></div>

        <div className="flex flex-col items-center gap-4">

          <div className="flex items-center gap-2 text-[#1A4E84] font-semibold text-lg bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full border border-slate-200 shadow-sm">
            <span className="material-symbols-outlined">call</span>
            <span>17 853 33 85</span>
          </div>

          <a onClick={(e) => handleScroll(e, '#contact')} className="bg-[#1A4E84] hover:bg-[#123860] text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-[#1A4E84]/20 cursor-pointer transition-transform hover:-translate-y-1">
            Umów wizytę
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;