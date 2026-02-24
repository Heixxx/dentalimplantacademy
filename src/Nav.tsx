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
          <div className="flex items-center gap-2 md:gap-3">
            <img src="/logo.png" alt="Dental Implant Academy Logo" className="w-16 h-16 md:w-20 md:h-20" />
            <div>
              <h1 className="font-display font-bold text-lg md:text-xl text-primary uppercase tracking-wider leading-none">Dental Implant</h1>
              <span className="text-[10px] md:text-xs text-slate-500 font-medium tracking-[0.2em] uppercase">Academy</span>
            </div>
          </div>

          <div className="hidden md:flex space-x-8 items-center bg-white/95 backdrop-blur-md">
            <a onClick={(e) => handleScroll(e, '#about')} className="text-slate-600 hover:text-primary font-medium transition cursor-pointer">O nas</a>
            <a onClick={(e) => handleScroll(e, '#services')} className="text-slate-600 hover:text-primary font-medium transition cursor-pointer">Usługi</a>
            <a onClick={(e) => handleScroll(e, '#showcase')} className="text-slate-600 hover:text-primary font-medium transition cursor-pointer">Klinika</a>
            <div className="flex items-center gap-2 text-primary font-semibold">
              <span className="material-symbols-outlined text-sm">call</span>
              <span>17 853 33 85</span>
            </div>
            <a onClick={(e) => handleScroll(e, '#contact')} className="bg-primary hover:bg-opacity-90 text-white px-6 py-2.5 rounded-full font-medium transition shadow-lg shadow-primary/20 cursor-pointer">
              Umów wizytę
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="bg-white text-primary border border-slate-200 shadow-sm focus:outline-none p-2 rounded-lg hover:bg-slate-50 transition flex items-center justify-center" aria-label="Toggle menu">
              {/* Dodana delikatna animacja obrotu ikony burger/close */}
              <span className={`material-symbols-outlined text-2xl transition-transform duration-300 ${isOpen ? 'rotate-90 scale-110' : 'rotate-0'}`}>
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobilne z naprawioną, dwustronną animacją */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-2xl flex flex-col items-center space-y-6 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] py-8 opacity-100 visible" : "max-h-0 py-0 opacity-0 invisible"
        }`}
      >
        <a onClick={(e) => handleScroll(e, '#about')} className="text-slate-800 hover:text-primary font-bold text-xl cursor-pointer">O nas</a>
        <a onClick={(e) => handleScroll(e, '#services')} className="text-slate-800 hover:text-primary font-bold text-xl cursor-pointer">Usługi</a>
        <a onClick={(e) => handleScroll(e, '#showcase')} className="text-slate-800 hover:text-primary font-bold text-xl cursor-pointer">Klinika</a>
        <div className="w-16 h-px bg-slate-200 my-2"></div>
        <div className="flex items-center gap-2 text-primary font-semibold text-lg">
          <span className="material-symbols-outlined">call</span>
          <span>17 853 33 85</span>
        </div>
        <a onClick={(e) => handleScroll(e, '#contact')} className="bg-primary hover:bg-blue-800 text-white px-10 py-3 rounded-full font-bold shadow-lg shadow-primary/20 cursor-pointer">
          Umów wizytę
        </a>
      </div>
    </nav>
  );
};

export default Nav;