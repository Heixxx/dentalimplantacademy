import React, { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    closeMenu();
    const target = document.querySelector(targetId);
    if (target) {
      const navHeight = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">


          <div className="flex items-center gap-2 md:gap-3 cursor-pointer" onClick={(e) => handleScroll(e as unknown as React.MouseEvent<HTMLAnchorElement, MouseEvent>, 'body')}>
            <img src="/logo.png" alt="Dental Implant Academy Logo" className="w-16 h-16 md:w-20 md:h-20" />
            <div>
              <h1 className="font-display font-bold text-lg md:text-xl text-[#1A4E84] uppercase tracking-wider leading-none">
                Dental Implant
              </h1>
              <span className="text-[10px] md:text-xs text-slate-500 font-medium tracking-[0.2em] uppercase">
                Academy - Rzeszów
              </span>
            </div>
          </div>



          <div className="hidden lg:flex space-x-8 items-center">

            <a onClick={(e) => handleScroll(e, '#about')} className="relative group text-slate-600 hover:text-[#1A4E84] font-medium transition-colors duration-300 cursor-pointer">
              O nas
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#1A4E84] transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a onClick={(e) => handleScroll(e, '#implanty')} className="relative group text-slate-600 hover:text-[#1A4E84] font-medium transition-colors duration-300 cursor-pointer">
              Implanty
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#1A4E84] transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a onClick={(e) => handleScroll(e, '#services')} className="relative group text-slate-600 hover:text-[#1A4E84] font-medium transition-colors duration-300 cursor-pointer">
              Usługi
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#1A4E84] transition-all duration-300 group-hover:w-full"></span>
            </a>

            <div className="flex items-center gap-2 text-[#1A4E84] font-semibold border-l border-slate-200 pl-8">
              <span className="material-symbols-outlined text-lg">call</span>
              <span className="tracking-wide">17 853 33 85</span>
            </div>

            <a onClick={(e) => handleScroll(e, '#contact')} className="bg-[#1A4E84] hover:bg-[#123860] text-white px-7 py-2.5 rounded-full font-medium transition-all duration-300 shadow-lg shadow-[#1A4E84]/20 cursor-pointer hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#1A4E84]/30 hover:text-white">
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

        <div className="flex flex-col items-center gap-4">

          <div className="flex items-center gap-2 text-[#1A4E84] font-semibold text-lg bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full border border-slate-200 shadow-sm">
            <span className="material-symbols-outlined">call</span>
            <span>17 853 33 85</span>
          </div>

          <a onClick={(e) => handleScroll(e, '#contact')} className="bg-[#1A4E84] hover:bg-[#123860] text-white px-10 py-3.5 rounded-full font-bold shadow-lg shadow-[#1A4E84]/20 cursor-pointer transition-transform hover:-translate-y-1">
            Umów wizytę
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;