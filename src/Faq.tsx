import { useState } from 'react';

interface FaqSubItem {
  subtitle: string;
  text: string;
}

interface FaqCard {
  id: number;
  icon: string;
  title: string;
  items: FaqSubItem[];
}

const FAQ_DATA: FaqCard[] = [
  {
    id: 0,
    icon: 'help_clinic',
    title: 'Najczęściej zadawane pytania',
    items: [
      {
        subtitle: 'Czy z implantów zębowych mogą skorzystać osoby w każdym wieku?',
        text: 'Tak. Nie ma tutaj praktycznie żadnych ograniczeń. Jedynym przeciwwskazaniem do wykonania zabiegu implantacji jest wiek poniżej 17. roku życia ze względu na fakt, że w tym wieku trwa wciąż proces rozwoju kości. Innymi przeciwwskazaniami mogą być ogólne problemy zdrowotne.',
      },
      {
        subtitle: 'Czy zabieg wszczepienia implantu boli?',
        text: 'Zabieg przeprowadza się w znieczuleniu miejscowym, dlatego jest on bezbolesny. Pacjent może odczuwać lekki dyskomfort po ustąpieniu znieczulenia lub opuchliznę, ale jest to naturalny proces gojenia.',
      },
      {
        subtitle: 'Jak długo trwa proces leczenia?',
        text: 'Sam zabieg wszczepienia jednego implantu trwa zazwyczaj od 20 do 60 minut. Pełna integracja implantu z kością (zrośnięcie) trwa zazwyczaj od 3 do 6 miesięcy, po czym nakładana jest korona protetyczna.',
      },
      {
        subtitle: 'Czy implanty zębowe trzeba wymieniać?',
        text: 'Implanty są traktowane jako rozwiązanie długoterminowe, a nawet dożywotnie, jeśli są prawidłowo pielęgnowane. Wymagana jest jednak wzorowa higiena jamy ustnej i regularne wizyty kontrolne (co 6-12 miesięcy).',
      },
      {
        subtitle: 'Czy organizm może odrzucić implant?',
        text: 'Ryzyko odrzucenia (nieprzyjęcia się) implantu jest niewielkie i wynosi zazwyczaj poniżej 2-5%. Najczęstsze przyczyny to palenie tytoniu, zła higiena, infekcje lub zbyt mała ilość kości.',
      },
      {
        subtitle: 'Jak dbać o implanty po zabiegu?',
        text: 'Przez pierwsze dni należy unikać gorących potraw, intensywnego wysiłku oraz palenia tytoniu. Niezbędne jest stosowanie zaleconych leków przeciwbólowych i zimnych okładów.',
      },
    ],
  },
  {
    id: 1,
    icon: 'payments',
    title: 'Bezpieczeństwo i koszty',
    items: [
      {
        subtitle: 'Czy implanty są bezpieczne?',
        text: 'Poprawnie wstawiony implant nie stanowi dla pacjenta zagrożenia. Implanty są wykonane z tytanu, który jest materiałem biokompatybilnym i dobrze tolerowanym przez organizm. Oczywiście, jak każda procedura medyczna, implantacja wiąże się z pewnym ryzykiem, takim jak infekcje czy problemy z gojeniem, jednak prawidłowo przeprowadzona procedura i staranna opieka pooperacyjna minimalizują zagrożenie, sprowadzając je niemal do zera.',
      },
      {
        subtitle: 'Ile kosztują implanty zębowe?',
        text: 'Koszt wszczepienia jednego implanta to 3.700 zł, a koszt pojedynczej korony na tym implancie to 3.300 zł.',
      },
    ],
  },
];

const Faq = () => {
  const [openCardId, setOpenCardId] = useState<number | null>(null);

  const toggle = (id: number) =>
    setOpenCardId((prev) => (prev === id ? null : id));

  return (
    <section
      className="w-full py-16 md:py-24 bg-slate-50 relative overflow-hidden"
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
            FAQ
          </span>
          <h2
            id="faq-heading"
            className="font-display font-bold text-slate-900 mb-4"
            style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)' }}
          >
            Najczęściej Zadawane&nbsp;<span className="text-primary">Pytania</span>
          </h2>
          <p
            className="text-slate-600 font-light leading-relaxed max-w-xl mx-auto"
            style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)' }}
          >
            Zebraliśmy odpowiedzi na pytania, które słyszymy najczęściej.
            Kliknij wybrany temat, aby dowiedzieć się więcej.
          </p>
        </div>

        
        <div className="flex flex-col gap-5">
          {FAQ_DATA.map((card) => {
            const isOpen = openCardId === card.id;

            return (
              <div
                key={card.id}
                className={`bg-white rounded-[1.75rem] border transition-all duration-500 overflow-hidden
                  ${isOpen
                    ? 'border-primary/20 shadow-xl shadow-primary/5'
                    : 'border-slate-100 shadow-sm hover:shadow-md'}`}
              >
                
                <button
                  onClick={() => toggle(card.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${card.id}`}
                  id={`faq-btn-${card.id}`}
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
                  id={`faq-panel-${card.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${card.id}`}
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
