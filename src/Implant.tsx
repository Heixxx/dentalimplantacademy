import React from 'react';

const ImplantStructure: React.FC = () => {
    return (
        <section className="relative w-full py-20 bg-white overflow-hidden">

            <style>{`
        /* Dioda zdefiniowana wcześniej, ale dodana dla pewności, gdyby komponent był użyty osobno */
        .led-green-implant {
          width: 8px;
          height: 8px;
          background-color: #34d399;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 4px #34d399;
          animation: ledSoftBlink 2.5s infinite ease-in-out;
        }
        @keyframes expandOutImplant {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
          50% { transform: translate(-50%, -50%) scale(1.4); opacity: 0.6; }
        }
        .animate-expand-out-implant {
          animation: expandOutImplant 8s ease-in-out infinite both;
        }
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUpFade 1s ease-out forwards;
        }
      `}</style>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">


                    <div className="order-2 lg:order-1 relative flex justify-center w-full animate-slide-up">


                        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] bg-sky-100/60 rounded-full blur-3xl -z-10 animate-expand-out-implant"></div>


                        <div className="relative w-full max-w-lg rounded-[2.5rem] shadow-2xl border-[6px] border-white overflow-hidden bg-slate-50">
                            <img
                                src="/Implant.jpeg"
                                alt="Schemat budowy implantu stomatologicznego"
                                className="w-full h-auto object-cover object-center hover:scale-105 transition-transform duration-700 ease-in-out"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none"></div>
                        </div>
                    </div>


                    <div className="order-1 lg:order-2 flex flex-col gap-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>


                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 w-fit">
                                <span className="led-green-implant"></span>
                                <span className="text-slate-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider">Edukacja Pacjenta</span>
                            </div>

                            <h2 className="font-display font-bold text-4xl lg:text-5xl text-slate-900 leading-[1.15]">
                                Jak zbudowany jest <br className="hidden sm:block" />
                                <span className="text-[#1A4E84]">implant?</span>
                            </h2>

                            <p className="text-base md:text-lg text-slate-500 font-light leading-relaxed">
                                Nowoczesny implant to precyzyjny system składający się z trzech kluczowych komponentów, które wspólnie odtwarzają funkcję i estetykę naturalnego uzębienia.
                            </p>
                        </div>


                        <div className="space-y-8 mt-2">


                            <div className="flex gap-5 group cursor-default">
                                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-sky-50 text-[#1A4E84] flex items-center justify-center font-bold text-xl border border-sky-100 group-hover:bg-[#1A4E84] group-hover:text-white transition-all duration-300 shadow-sm">
                                    1
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-[#1A4E84] transition-colors duration-300">
                                        Korona
                                    </h3>
                                    <p className="text-slate-500 font-light leading-relaxed text-sm md:text-base">
                                        Widoczna część zęba wykonana z ceramiki lub cyrkonu. Jest indywidualnie projektowana, aby idealnie pasować do zgryzu i koloru sąsiednich zębów.
                                    </p>
                                </div>
                            </div>


                            <div className="flex gap-5 group cursor-default">
                                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-sky-50 text-[#1A4E84] flex items-center justify-center font-bold text-xl border border-sky-100 group-hover:bg-[#1A4E84] group-hover:text-white transition-all duration-300 shadow-sm">
                                    2
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-[#1A4E84] transition-colors duration-300">
                                        Łącznik (Abutment)
                                    </h3>
                                    <p className="text-slate-500 font-light leading-relaxed text-sm md:text-base">
                                        Element pośredniczący wykonany z tytanu lub cyrkonu. Stabilnie łączy koronę z implantem umieszczonym w kości, zapewniając szczelność i trwałość konstrukcji.
                                    </p>
                                </div>
                            </div>


                            <div className="flex gap-5 group cursor-default">
                                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-sky-50 text-[#1A4E84] flex items-center justify-center font-bold text-xl border border-sky-100 group-hover:bg-[#1A4E84] group-hover:text-white transition-all duration-300 shadow-sm">
                                    3
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-[#1A4E84] transition-colors duration-300">
                                        Śruba (Implant właściwy)
                                    </h3>
                                    <p className="text-slate-500 font-light leading-relaxed text-sm md:text-base">
                                        Tytanowy lub ceramiczny korzeń, który w procesie osteointegracji zrasta się z kością pacjenta, stanowiąc niezłomną podstawę dla całego uzupełnienia.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ImplantStructure;