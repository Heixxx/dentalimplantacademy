import React from 'react';
import { useTranslation } from 'react-i18next';

const Services: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full py-16 md:py-24 bg-slate-50 relative overflow-hidden scroll-mt-24" id="services">
      <div className="absolute top-0 right-0 w-full lg:w-1/3 h-full bg-white -z-10 skew-x-12 transform origin-top-right hidden lg:block border-l border-slate-100"></div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        

        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-[#1A4E84] font-bold tracking-widest uppercase text-xs md:text-sm bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            {t('services.tag')}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-6 mb-4">
            {t('services.heading')}
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
            {t('services.sub')}
          </p>
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          
  
  
  
          <div className="bg-white border border-slate-100 p-8 md:p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden flex flex-col h-full text-left">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-50 rounded-full opacity-60 transition-transform duration-500 group-hover:scale-125"></div>
            
            <div className="w-16 h-16 bg-[#1A4E84] text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg relative z-10 group-hover:rotate-6 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl" aria-hidden="true">healing</span>
            </div>
            
            <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-4 relative z-10">
              {t('services.endoTitle')}
            </h3>
            
            <p className="text-base md:text-lg text-slate-600 mb-6 font-light leading-relaxed relative z-10">
              {t('services.endoDesc')}
            </p>

            <div className="mt-auto relative z-10">
                <strong className="text-slate-800 block mb-4 text-base md:text-lg">{t('services.endoWhen')}</strong>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-base md:text-lg text-slate-600 font-light">
                        <span className="w-2 h-2 mt-2.5 bg-[#1A4E84] rounded-full shrink-0"></span>
                        {t('services.endo1')}
                    </li>
                    <li className="flex items-start gap-3 text-base md:text-lg text-slate-600 font-light">
                        <span className="w-2 h-2 mt-2.5 bg-[#1A4E84] rounded-full shrink-0"></span>
                        {t('services.endo2')}
                    </li>
                    <li className="flex items-start gap-3 text-base md:text-lg text-slate-600 font-light">
                        <span className="w-2 h-2 mt-2.5 bg-[#1A4E84] rounded-full shrink-0"></span>
                        {t('services.endo3')}
                    </li>
                    <li className="flex items-start gap-3 text-base md:text-lg text-slate-600 font-light">
                        <span className="w-2 h-2 mt-2.5 bg-[#1A4E84] rounded-full shrink-0"></span>
                        {t('services.endo4')}
                    </li>
                    <li className="flex items-start gap-3 text-base md:text-lg text-slate-600 font-light">
                        <span className="w-2 h-2 mt-2.5 bg-[#1A4E84] rounded-full shrink-0"></span>
                        {t('services.endo5')}
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
              {t('services.conservTitle')}
            </h3>
            
            <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed relative z-10 space-y-4">
                <span>{t('services.conservDesc1')}</span>
                <br /><br />
                <span>{t('services.conservDesc2')}</span>
            </p>
          </div>

  
  
  
          <div className="bg-white border border-slate-100 p-8 md:p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden flex flex-col h-full text-left">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-sky-100 rounded-full opacity-60 transition-transform duration-500 group-hover:scale-125"></div>
            
            <div className="w-16 h-16 bg-slate-800 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg relative z-10 group-hover:rotate-6 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl" aria-hidden="true">medical_services</span>
            </div>
            
            <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-4 relative z-10">
              {t('services.surgTitle')}
            </h3>
            
            <p className="text-base md:text-lg text-slate-600 mb-6 font-light leading-relaxed relative z-10">
              {t('services.surgDesc')}
            </p>

          </div>

          <div className="bg-white border border-slate-100 p-8 md:p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden flex flex-col h-full text-left">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-indigo-100 rounded-full opacity-60 transition-transform duration-500 group-hover:scale-125"></div>
            
            <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg relative z-10 group-hover:rotate-6 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl" aria-hidden="true">clean_hands</span>
            </div>
            
            <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-4 relative z-10">
              {t('services.prevTitle')}
            </h3>
            
            <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed relative z-10 space-y-4">
              <span>{t('services.prevDesc1')}</span>
              <br /><br />
              <span>{t('services.prevDesc2')}</span>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;