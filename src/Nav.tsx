import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpenGroup, setMobileOpenGroup] = useState<string | null>('informacje');
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0];

  const NAV_GROUPS = [
    {
      id: 'informacje',
      label: t('nav.informacje'),
      items: [
        { label: t('nav.items.about'), target: '#about' },
        { label: t('nav.items.implanty'), target: '#implanty' },
        { label: t('nav.items.services'), target: '#services' },
        { label: t('nav.items.faq'), target: '#faq' },
      ],
    },
    {
      id: 'galerie',
      label: t('nav.galerie'),
      items: [
        { label: t('nav.items.team'), target: '#team' },
        { label: t('nav.items.showcase'), target: '#showcase' },
      ],
    },
  ];

  const closeMenu = () => {
    setIsOpen(false);
    setOpenGroup(null);
    setMobileOpenGroup(null);
  };


  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setOpenGroup(null);
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLangOpen(false);
        setOpenGroup(null);
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const selectLang = (lang: LangOption) => {
    i18n.changeLanguage(lang.code);
    setLangOpen(false);
  };

  const handleScroll = (e: React.MouseEvent<HTMLElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    closeMenu();
    setLangOpen(false);
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

  const toggleMobileGroup = (groupId: string) => {
    setMobileOpenGroup((prev) => (prev === groupId ? null : groupId));
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px] sm:h-20 gap-4">


          <div className="flex items-center gap-2 sm:gap-3 cursor-pointer shrink-0" onClick={(e) => handleScroll(e, '#top')}>
            <img src="/logo.png" alt="Dental Implant Academy Logo" className="w-12 h-12 sm:w-14 sm:h-14 xl:w-16 xl:h-16 object-contain" />
            <div>
              <h1 className="font-display font-bold text-sm sm:text-base xl:text-lg text-[#1A4E84] uppercase tracking-[0.18em] sm:tracking-[0.22em] leading-none whitespace-nowrap">
                Dental Implant
              </h1>
              <span className="text-[9px] sm:text-[10px] xl:text-xs text-slate-500 font-medium tracking-[0.28em] uppercase">
                 Academy Rzeszów
              </span>
            </div>
          </div>



          <div className="hidden lg:flex items-center gap-3 xl:gap-5 min-w-0">
            <div
              ref={dropdownRef}
              className="relative flex items-center gap-2 xl:gap-3"
              onMouseLeave={() => setOpenGroup(null)}
            >
              {NAV_GROUPS.map((group) => {
                const isActive = openGroup === group.id;

                return (
                  <div key={group.id} className="relative" onMouseEnter={() => setOpenGroup(group.id)}>
                    <button
                      type="button"
                      onClick={() => setOpenGroup((prev) => (prev === group.id ? null : group.id))}
                      onFocus={() => setOpenGroup(group.id)}
                      aria-haspopup="dialog"
                      aria-expanded={isActive}
                      aria-controls={`desktop-nav-panel-${group.id}`}
                      className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-2 text-sm xl:text-[15px] font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A4E84] focus-visible:ring-offset-2 focus-visible:bg-[#1A4E84]/5 ${isActive ? 'text-[#1A4E84] bg-[#1A4E84]/5' : 'text-slate-600 hover:text-[#1A4E84]'}`}
                    >
                      <span>{group.label}</span>
                      <span className={`material-symbols-outlined text-base transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} aria-hidden="true">expand_more</span>
                    </button>

                    {isActive && (
                      <div
                        id={`desktop-nav-panel-${group.id}`}
                        role="dialog"
                      aria-label={`${group.label} – ${t('nav.ariaNavPanel')}`}
                        className="absolute left-0 top-full pt-2"
                      >
                        <div className="w-[18rem] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
                            <ul className="flex flex-col p-2" aria-label={`${group.label} – ${t('nav.ariaNavPanel')}`}>
                              {group.items.map((item) => (
                                <li key={item.target}>
                                  <a
                                    onClick={(e) => handleScroll(e, item.target)}
                                    className="flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl px-4 py-3 text-left text-slate-700 transition-colors duration-200 hover:bg-slate-50 hover:text-[#1A4E84] active:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A4E84] focus-visible:ring-inset"
                                  >
                                    <span className="text-sm font-medium">{item.label}</span>
                                    <span className="material-symbols-outlined text-base text-slate-400" aria-hidden="true">chevron_right</span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <a
              onClick={(e) => handleScroll(e, '#contact')}
              className="relative group text-sm xl:text-[15px] text-slate-600 hover:text-[#1A4E84] font-medium transition-colors duration-300 cursor-pointer whitespace-nowrap rounded-full px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A4E84] focus-visible:ring-offset-2"
            >
              {t('nav.contact')}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#1A4E84] transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a href="tel:+48178533385" className="hidden xl:inline-flex items-center gap-2 text-[#1A4E84] font-semibold border-l border-slate-200 pl-4 whitespace-nowrap hover:text-[#123860] transition-colors">
              <span className="material-symbols-outlined text-lg">call</span>
              <span className="tracking-wide text-sm">17 853 33 85</span>
            </a>

            
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen((p) => !p)}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                aria-label={`${t('nav.ariaLangLabel')} ${currentLang.label}`}
                className="flex cursor-pointer items-center gap-1 px-3 py-2 rounded-full border border-slate-200 hover:border-[#1A4E84]/30 bg-white text-slate-700 text-sm font-medium transition-all duration-200 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A4E84] focus-visible:ring-offset-2 focus-visible:border-[#1A4E84]"
              >
                <span className="text-base leading-none" aria-hidden="true">{currentLang.flag}</span>
                <span className="uppercase text-xs font-bold tracking-wider">{currentLang.code}</span>
                <span className={`material-symbols-outlined text-sm text-slate-400 transition-transform duration-300 ${langOpen ? 'rotate-180' : ''}`} aria-hidden="true">expand_more</span>
              </button>

              {langOpen && (
                <ul
                  role="listbox"
                  aria-label={t('nav.ariaSelectLang')}
                  className="absolute right-0 mt-2 w-44 bg-white border border-slate-100 rounded-2xl shadow-xl py-2 z-50 animate-[fadeIn_150ms_ease-out]"
                >
                  {LANGUAGES.map((lang) => (
                    <li key={lang.code} role="option" aria-selected={currentLang.code === lang.code}>
                      <button
                        onClick={() => selectLang(lang)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors
                          ${currentLang.code === lang.code
                            ? 'bg-[#1A4E84]/5 text-[#1A4E84] font-semibold'
                            : 'text-slate-700 hover:bg-slate-50'} focus-visible:outline-none focus-visible:bg-slate-50 cursor-pointer`}
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

            <a onClick={(e) => handleScroll(e, '#contact')} className="bg-[#1A4E84] hover:bg-[#123860] text-white px-4 xl:px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-lg shadow-[#1A4E84]/20 cursor-pointer hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#1A4E84]/30 hover:text-white whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A4E84] focus-visible:ring-offset-2">
              {t('nav.bookAppointment')}
            </a>
          </div>


          <div className="lg:hidden flex items-center">

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-transparent text-[#1A4E84] border border-slate-200 shadow-sm p-2.5 rounded-xl hover:bg-slate-100/50 transition-colors flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A4E84] focus-visible:ring-offset-2"
              aria-label={t('nav.ariaToggleMenu')}
            >
              <span className={`material-symbols-outlined text-2xl transition-transform duration-300 ${isOpen ? 'rotate-90 scale-110' : 'rotate-0'}`}>
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>



      <div
        className={`lg:hidden absolute top-[72px] sm:top-20 left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xl overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? "max-h-[820px] py-6 sm:py-8 opacity-100 visible" : "max-h-0 py-0 opacity-0 invisible"
          }`}
      >
        <div className="px-4 sm:px-6">
          <div className="space-y-3">
            {NAV_GROUPS.map((group) => {
              const isActive = mobileOpenGroup === group.id;

              return (
                <div key={group.id} className="rounded-[1.5rem] border border-slate-200 bg-white overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleMobileGroup(group.id)}
                    aria-expanded={isActive}
                    aria-controls={`mobile-nav-panel-${group.id}`}
                    className="w-full flex cursor-pointer items-center justify-between gap-4 px-4 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A4E84] focus-visible:ring-inset bg-white hover:bg-slate-50 transition-colors"
                  >
                    <div>
                      <p className="text-base font-semibold text-slate-800">{group.label}</p>
                    </div>
                    <span className={`material-symbols-outlined text-slate-400 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} aria-hidden="true">expand_more</span>
                  </button>

                  <div
                    id={`mobile-nav-panel-${group.id}`}
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: isActive ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <ul className="px-4 pb-4 space-y-2" aria-label={`${group.label} – ${t('nav.ariaNavPanel')}`}>
                        {group.items.map((item) => (
                          <li key={item.target}>
                            <a
                              onClick={(e) => handleScroll(e, item.target)}
                              className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 hover:text-[#1A4E84] hover:border-[#1A4E84]/20 font-semibold text-sm cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A4E84] focus-visible:ring-offset-2 focus-visible:border-[#1A4E84]"
                            >
                              <span>{item.label}</span>
                              <span className="material-symbols-outlined text-base text-slate-400">arrow_forward</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}

            <a
              onClick={(e) => handleScroll(e, '#contact')}
              className="flex items-center justify-between gap-3 rounded-[1.5rem] border border-slate-200 bg-white px-4 py-4 text-slate-800 hover:text-[#1A4E84] hover:border-[#1A4E84]/20 font-semibold text-base cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A4E84] focus-visible:ring-offset-2 focus-visible:border-[#1A4E84]"
            >
              <span>{t('nav.contact')}</span>
              <span className="material-symbols-outlined text-base text-slate-400">arrow_forward</span>
            </a>
          </div>

          <div className="w-full h-px bg-slate-200 my-6"></div>

        
          <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => selectLang(lang)}
                aria-label={`${t('nav.ariaChangeLangTo')} ${lang.label}`}
                className={`flex items-center gap-1 px-3 py-2 rounded-full border text-sm font-medium transition-all duration-200
                  ${currentLang.code === lang.code
                    ? 'border-[#1A4E84] bg-[#1A4E84]/5 text-[#1A4E84]'
                    : 'border-slate-200 text-slate-600 hover:border-slate-300'} cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A4E84] focus-visible:ring-offset-2`}
              >
                <span className="text-base leading-none" aria-hidden="true">{lang.flag}</span>
                <span className="uppercase text-xs font-bold tracking-wider">{lang.code}</span>
              </button>
            ))}
          </div>

          <div className="w-full h-px bg-slate-200 my-6"></div>

          <div className="flex flex-col items-center sm:items-start gap-4">

            <a href="tel:+48178533385" className="flex items-center gap-2 text-[#1A4E84] font-semibold text-lg bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full border border-slate-200 shadow-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A4E84] focus-visible:ring-offset-2">
              <span className="material-symbols-outlined">call</span>
              <span>17 853 33 85</span>
            </a>

            <a onClick={(e) => handleScroll(e, '#contact')} className="bg-[#1A4E84] hover:bg-[#123860] text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-[#1A4E84]/20 cursor-pointer transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A4E84] focus-visible:ring-offset-2">
              {t('nav.bookAppointment')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;