import React from 'react';

const Contact = () => {
  return (
    <section className="w-full bg-white pt-12 pb-16 md:pb-24" id="contact">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-primary rounded-[2rem] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-5">
          
          <div className="lg:col-span-2 p-8 md:p-12 bg-slate-900 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10 text-center sm:text-left">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 md:mb-6">Skontaktuj się z nami</h2>
              <p className="text-slate-400 text-sm md:text-base mb-8 md:mb-10">Jesteśmy otwarci na nowych pacjentów. Zadzwoń do nas, aby ustalić dogodny termin bezpłatnej konsultacji.</p>
              
              <div className="space-y-6 md:space-y-8">
                {/* Numer Telefonu */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 flex-shrink-0">
                    <span className="material-symbols-outlined text-teal">call</span>
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Zadzwoń do nas</p>
                    <a className="text-xl md:text-2xl font-display font-medium hover:text-teal transition" href="tel:+48178533385">17 853 33 85</a>
                  </div>
                </div>
                
                {/* Adres Kliniki */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 flex-shrink-0">
                    <span className="material-symbols-outlined text-teal">location_on</span>
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Odwiedź nas</p>
                    <p className="text-sm md:text-lg font-medium leading-snug">ul. Księdza Jałowego 8/1,<br />35-010 Rzeszów</p>
                  </div>
                </div>

                {/* Godziny Otwarcia zamiast Emaila */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 flex-shrink-0">
                    <span className="material-symbols-outlined text-teal">schedule</span>
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Godziny przyjęć</p>
                    <p className="text-sm md:text-lg font-medium leading-snug">Poniedziałek - Piątek:<br />09:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 relative h-[300px] sm:h-[400px] lg:h-auto min-h-[300px]">
            {/* Mapa Rzeszowa */}
            <iframe 
              title="Lokalizacja Kliniki Rzeszów"
              allowFullScreen={false} 
              className="absolute inset-0 opacity-80 hover:opacity-100 transition-opacity duration-500" 
              height="100%" 
              loading="lazy" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.628876113942!2d21.9961!3d50.0366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfaede104085b%3A0x7d06ea8053a483!2sKsi%C4%99dza%20J%C3%B3zefa%20Ja%C5%82owego%208%2C%2035-010%20Rzesz%C3%B3w!5e0!3m2!1spl!2spl!4v1710000000000!5m2!1spl!2spl" 
              style={{ border: 0, filter: "grayscale(100%) invert(0%)" }} 
              width="100%"
            ></iframe>
            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-white p-3 md:p-4 rounded-xl shadow-lg max-w-[200px] md:max-w-xs border border-slate-100">
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-primary text-sm md:text-base">info</span>
                <p className="font-bold text-slate-800 text-xs md:text-sm">Zapisy telefoniczne</p>
              </div>
              <p className="text-[10px] md:text-xs text-slate-500">Prosimy o kontakt w celu umówienia wizyty przed przybyciem do kliniki.</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;