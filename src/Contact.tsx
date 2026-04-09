
const Contact = () => {
  return (
    <section className="w-full bg-white pt-12 pb-16 md:pb-24" id="contact">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-50 border border-slate-100 rounded-[2rem] overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-5">

          <div className="lg:col-span-2 p-6 md:p-8 text-slate-900 flex flex-col justify-center relative overflow-hidden bg-white/50">
            <div className="relative z-10 text-center sm:text-left">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 md:mb-6">Skontaktuj się z nami</h2>
              <p className="text-slate-600 text-sm md:text-base mb-8 md:mb-10 font-light">Jesteśmy otwarci na nowych pacjentów. Zadzwoń do nas, aby ustalić dogodny termin konsultacji.</p>

              <div className="space-y-6 md:space-y-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-slate-200 flex-shrink-0">
                    <span className="material-symbols-outlined text-primary" aria-hidden="true">call</span>
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Zadzwoń do nas</p>
                    <a className="text-xl md:text-2xl font-display font-medium text-primary hover:text-teal transition" href="tel:+48178533385">178 533 385</a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center border border-slate-200 flex-shrink-0">
                    <svg className="w-5 h-5 fill-green-600" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">WhatsApp</p>
                    <a className="text-xl md:text-2xl font-display font-medium text-green-600 hover:text-green-700 transition" href="https://wa.me/48787193163" target="_blank" rel="noreferrer">787 193 163</a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center border border-slate-200 flex-shrink-0">
                    <span className="material-symbols-outlined text-teal" aria-hidden="true">location_on</span>
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Odwiedź nas</p>
                    <p className="text-sm md:text-lg font-medium text-slate-800 leading-snug">ul. Księdza Jałowego 8/1,<br />35-010 Rzeszów</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center border border-slate-200 flex-shrink-0">
                    <span className="material-symbols-outlined text-indigo-500" aria-hidden="true">schedule</span>
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Godziny przyjęć</p>
                    <p className="text-sm md:text-lg font-medium text-slate-800 leading-snug">Poniedziałek - Piątek:<br />09:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 relative h-[300px] sm:h-[400px] lg:h-auto min-h-[300px]">
            <iframe
              title="Lokalizacja Kliniki Rzeszów"
              allowFullScreen={false}
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.628876113942!2d21.9961!3d50.0366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfaede104085b%3A0x7d06ea8053a483!2sKsi%C4%99dza%20J%C3%B3zefa%20Ja%C5%82owego%208%2C%2035-010%20Rzesz%C3%B3w!5e0!3m2!1spl!2spl!4v1710000000000!5m2!1spl!2spl"
              style={{ border: 0 }}
            ></iframe>

            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-white p-3 md:p-4 rounded-xl shadow-lg max-w-[200px] md:max-w-xs border border-slate-100 hidden sm:block">
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-primary text-sm md:text-base" aria-hidden="true">info</span>
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