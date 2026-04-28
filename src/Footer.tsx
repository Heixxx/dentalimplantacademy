import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const handleScroll = (e: React.MouseEvent<HTMLElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    if (targetId === '#top') {
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
    <footer className="w-full bg-slate-50 text-slate-600 py-16 md:py-20 border-t border-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center sm:text-left">

          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-3 mb-6 cursor-pointer" onClick={(e) => handleScroll(e, '#top')}>
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
            {t('footer.tagline')}
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/people/Dental-Implant-Academy/61586910009789/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#1A4E84] hover:text-white transition-colors border border-slate-200 text-[#1A4E84] shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[#1A4E84] font-bold mb-6 uppercase text-xs tracking-widest border-b sm:border-b-0 sm:border-l-2 sm:border-[#1A4E84] sm:pl-3 pb-2 sm:pb-0">
              {t('footer.navTitle')}
            </h4>
            <ul className="space-y-3 text-sm inline-block sm:block text-left">
              <li>
                <a onClick={(e) => handleScroll(e, '#about')} className="text-slate-600 hover:text-[#1A4E84] hover:font-medium transition-all flex items-center gap-2 cursor-pointer">
                  <span className="w-1.5 h-1.5 bg-blue-200 rounded-full hidden sm:block"></span>
                  {t('footer.nav1')}
                </a>
              </li>
              <li>
                <a onClick={(e) => handleScroll(e, '#implanty')} className="text-slate-600 hover:text-[#1A4E84] hover:font-medium transition-all flex items-center gap-2 cursor-pointer">
                  <span className="w-1.5 h-1.5 bg-blue-200 rounded-full hidden sm:block"></span>
                  {t('footer.nav2')}
                </a>
              </li>
              <li>
                <a onClick={(e) => handleScroll(e, '#services')} className="text-slate-600 hover:text-[#1A4E84] hover:font-medium transition-all flex items-center gap-2 cursor-pointer">
                  <span className="w-1.5 h-1.5 bg-blue-200 rounded-full hidden sm:block"></span>
                  {t('footer.nav3')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#1A4E84] font-bold mb-6 uppercase text-xs tracking-widest border-b sm:border-b-0 sm:border-l-2 sm:border-[#1A4E84] sm:pl-3 pb-2 sm:pb-0">
              {t('footer.hoursTitle')}
            </h4>
            <ul className="space-y-3 text-sm text-slate-500 inline-block sm:block text-left w-full max-w-[200px]">
              <li className="flex justify-between border-b border-slate-200 pb-2">
                <span>{t('footer.monFri')}</span>
                <span className="font-medium text-slate-700">09:00 - 18:00</span>
              </li>
              <li className="flex justify-between border-b border-slate-200 pb-2">
                <span>{t('footer.sat')}</span>
                <span className="font-medium text-slate-400">{t('footer.closed')}</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>{t('footer.sun')}</span>
                <span className="font-medium text-slate-400">{t('footer.closed')}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#1A4E84] font-bold mb-6 uppercase text-xs tracking-widest border-b sm:border-b-0 sm:border-l-2 sm:border-[#1A4E84] sm:pl-3 pb-2 sm:pb-0">
              {t('footer.contactTitle')}
            </h4>
            <p className="text-sm text-slate-500 mb-2">
              {t('footer.contactSub')}
            </p>

            <a href="tel:+48178533385" className="inline-flex items-center gap-2 text-[#1A4E84] font-display font-bold hover:text-sky-600 transition-colors text-2xl mb-3 group">
              <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">phone_in_talk</span>
              17 853 33 85
            </a>

            <a
              href="https://wa.me/48787193163"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-green-600 font-display font-bold hover:text-green-700 transition-colors text-xl mb-8 group"
            >
              <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              787 193 163
            </a>

            <div className="text-xs text-slate-400 border-t border-slate-200 pt-6">
              <p>&copy; {new Date().getFullYear()} Dental Implant Academy.</p>
              <p>{t('footer.rights')}</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;