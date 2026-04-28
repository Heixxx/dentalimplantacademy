import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface FaqSubItem {
  subtitle: string;
  text: string;
}

interface FaqCard {
  title: string;
  icon: string;
  items: FaqSubItem[];
}

const Faq = () => {
  const { t } = useTranslation();
  const [openCardId, setOpenCardId] = useState<number | null>(null);

  const cards = t('faq.cards', { returnObjects: true }) as FaqCard[];

  const toggle = (id: number) =>
    setOpenCardId((prev) => (prev === id ? null : id));

  return (
    <section
      className="w-full py-16 md:py-24 bg-slate-50 relative overflow-hidden scroll-mt-24"
      id="faq"
      aria-labelledby="faq-heading"
    >
      
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-primary/[0.03] rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-teal/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12 md:mb-16">
          <span className="text-teal font-bold tracking-widest uppercase text-xs md:text-sm block mb-2">
            {t('faq.tag')}
          </span>
          <h2
            id="faq-heading"
            className="font-display font-bold text-slate-900 mb-4"
            style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)' }}
          >
            {t('faq.heading')}&nbsp;<span className="text-primary">{t('faq.headingHighlight')}</span>
          </h2>
          <p
            className="text-slate-600 font-light leading-relaxed max-w-xl mx-auto"
            style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)' }}
          >
            {t('faq.sub')}
          </p>
        </div>

        
        <div className="flex flex-col gap-5">
          {cards.map((card, index) => {
            const isOpen = openCardId === index;

            return (
              <div
                key={index}
                className={`bg-white rounded-[1.75rem] border transition-all duration-500 overflow-hidden
                  ${isOpen
                    ? 'border-primary/20 shadow-xl shadow-primary/5'
                    : 'border-slate-100 shadow-sm hover:shadow-md'}`}
              >
                
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-btn-${index}`}
                  className="w-full flex items-center gap-4 p-6 md:p-8 text-left group
                    outline-none focus-visible:ring-0 rounded-[1.75rem]
                    transition-colors"
                >
                  
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shrink-0
                      transition-all duration-300 shadow-md
                      ${isOpen
                        ? 'bg-primary text-white rotate-0'
                        : 'bg-slate-100 text-primary group-hover:bg-primary/10 group-focus-visible:bg-primary/10 group-focus-visible:text-primary group-focus-visible:ring-2 group-focus-visible:ring-primary group-focus-visible:ring-offset-2'}`}
                  >
                    <span className="material-symbols-outlined text-2xl md:text-3xl" aria-hidden="true">
                      {card.icon}
                    </span>
                  </div>

                  
                  <h3
                    className="font-display font-bold text-slate-900 flex-grow"
                    style={{ fontSize: 'clamp(1.0625rem, 2vw, 1.375rem)' }}
                  >
                    {card.title}
                  </h3>

                  
                  <span
                    className={`material-symbols-outlined text-slate-400 transition-transform duration-500 shrink-0
                      ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    aria-hidden="true"
                  >
                    expand_more
                  </span>
                </button>

                
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-btn-${index}`}
                  className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 space-y-6">
                      
                      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                      {card.items.map((item, idx) => (
                        <div key={idx}>
                          <h4
                            className="font-display font-semibold text-slate-800 mb-2"
                            style={{ fontSize: 'clamp(0.9375rem, 1.6vw, 1.125rem)' }}
                          >
                            {item.subtitle}
                          </h4>
                          <p
                            className="text-slate-600 font-light leading-relaxed"
                            style={{ fontSize: 'clamp(0.8125rem, 1.3vw, 1rem)' }}
                          >
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
