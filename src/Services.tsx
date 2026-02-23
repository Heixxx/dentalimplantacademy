
const SERVICES_DATA = [
  { title: "Implanty Zębowe", desc: "Trwałe rozwiązanie dla brakujących zębów. Tytanowe i cyrkonowe implanty idealnie łączące się z kością.", icon: "dentistry", colorClass: "bg-primary shadow-primary/30", bgClass: "bg-blue-100", textColor: "text-primary" },
  { title: "Chirurgia i Odbudowa", desc: "Skomplikowane ekstrakcje, sterowana regeneracja kości i zabiegi chirurgiczne w komfortowych warunkach.", icon: "medical_services", colorClass: "bg-teal shadow-teal/30", bgClass: "bg-teal-100/80", textColor: "text-teal" },
  // ZMIANA: bg-slate-200 -> bg-sky-100, aby kółko było widoczne
  { title: "Protetyka", desc: "Wysokiej jakości korony, mosty i pełne protezy przywracające idealną funkcję żucia oraz naturalny wygląd.", icon: "masks", colorClass: "bg-slate-800 shadow-slate-800/30", bgClass: "bg-sky-100", textColor: "text-slate-800" },
  { title: "Digital Smile Design", desc: "Pełne, cyfrowe projektowanie Twojego nowego uśmiechu z wykorzystaniem najnowszych skanerów 3D.", icon: "health_and_safety", colorClass: "bg-indigo-600 shadow-indigo-600/30", bgClass: "bg-indigo-100", textColor: "text-indigo-600" }
];

const Services = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white relative clip-angle-top" id="services">
      <div className="absolute top-0 right-0 w-full lg:w-1/3 h-full bg-slate-50 -z-10 skew-x-12 transform origin-top-right hidden lg:block"></div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 md:mt-12">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm">Nasze Usługi</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-2 md:mt-3 mb-3 md:mb-4">Kompleksowe Leczenie</h2>
          <p className="text-slate-600 text-sm md:text-lg font-light">Spersonalizowane plany leczenia zaprojektowane z myślą o precyzji, komforcie i trwałych rezultatach.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {SERVICES_DATA.map((service, index) => (
            <div key={index} className="bg-white/70 backdrop-blur-md border border-slate-100 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden text-center lg:text-left flex flex-col items-center lg:items-start">
              
              {/* Tutaj wymuszam okrągłe tło (rounded-full) */}
              <div className={`absolute -top-6 -right-6 w-32 h-32 ${service.bgClass} rounded-full opacity-50 transition-transform group-hover:scale-110`}></div>
              
              <div className={`w-12 h-12 text-white rounded-xl flex items-center justify-center mb-4 md:mb-6 shadow-lg relative z-10 ${service.colorClass}`}>
                <span className="material-symbols-outlined text-2xl">{service.icon}</span>
              </div>
              <h3 className="font-display text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3 relative z-10">{service.title}</h3>
              <p className="text-xs md:text-sm text-slate-600 mb-4 md:mb-6 leading-relaxed relative z-10">
                {service.desc}
              </p>
              <a className={`inline-flex items-center ${service.textColor} text-xs md:text-sm font-bold hover:underline relative z-10 mt-auto`} href="#contact">
                Dowiedz się więcej <span className="material-symbols-outlined text-xs md:text-sm ml-1">arrow_forward_ios</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;