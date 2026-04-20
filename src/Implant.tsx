import React from 'react';

const ImplantEducation: React.FC = () => {
    return (
        <section className="relative w-full py-20 bg-white scroll-mt-24" id="implanty">

            <style>{`
                .led-green-implant {
                    width: 8px;
                    height: 8px;
                    background-color: #34d399;
                    border-radius: 50%;
                    display: inline-block;
                    box-shadow: 0 0 4px #34d399;
                    animation: ledSoftBlink 2.5s infinite ease-in-out;
                }
                @keyframes slideUpFade {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-slide-up {
                    animation: slideUpFade 1s ease-out forwards;
                }
            `}</style>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="max-w-4xl mx-auto text-center flex flex-col items-center mb-16 lg:mb-24 animate-slide-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-6 shadow-sm">
                        <span className="led-green-implant"></span>
                        <span className="text-slate-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                            Kompleksowa Opieka
                        </span>
                    </div>

                    <h2 className="font-display font-bold text-4xl lg:text-5xl text-slate-900 leading-[1.15] mb-8">
                        Poznaj możliwości <br className="hidden sm:block" />
                        <span className="text-[#1A4E84]">nowoczesnej stomatologii.</span>
                    </h2>

                    <div className="text-base md:text-lg lg:text-xl text-slate-600 font-light leading-relaxed space-y-4 text-justify sm:text-center">
                        <p>
                            Utrata zębów, niezależnie od przyczyny, znacząco wpływa na komfort życia, pewność siebie oraz zdrowie jamy ustnej bez względu na wiek. Implantologia, jest jedną z najnowocześniejszych dziedzin stomatologii, oferuje trwałe i estetyczne rozwiązania dla osób, które chcą odzyskać uśmiech i komfort przy spożywaniu posiłków.
                        </p>
                        <p>
                            Dzięki dynamicznemu rozwojowi technologii implantologicznych i doświadczeniu lekarza D. Srokowskiego, który od ponad dwudziestu pięciu lat prowadzi prywatny gabinet w Kanadzie oraz w Polsce. Pacjenci Dental Implant Academy mają dostęp do innowacyjnych metod odbudowy zębów, które są funkcjonalne i wyglądają naturalnie.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                    <div className="lg:col-span-5 relative">

                        <div className="lg:sticky lg:top-32 relative flex justify-center w-full animate-slide-up" style={{ animationDelay: '0.2s' }}>

                            <div className="relative w-full max-w-md rounded-[2.5rem] shadow-2xl border-[6px] border-white overflow-hidden bg-slate-50">
                                <img
                                    src="/Implant.jpeg"
                                    alt="Schemat budowy implantu stomatologicznego"
                                    className="w-full h-auto object-cover object-center hover:scale-105 transition-transform duration-700 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none"></div>
                            </div>

                        </div>

                    </div>


                    <div className="lg:col-span-7 flex flex-col gap-12 animate-slide-up pb-10" style={{ animationDelay: '0.4s' }}>

                        <div className="space-y-4">
                            <h3 className="font-display text-3xl lg:text-4xl font-bold text-slate-800">Czym są implanty zębowe?</h3>
                            <div className="text-slate-600 font-light leading-relaxed text-base md:text-lg lg:text-xl space-y-4">
                                <p>
                                    Implant zębowy to sztuczny korzeń, wykonany najczęściej z tytanu lub cyrkonu, który jest wprowadzany do kości szczęki lub żuchwy. Stanowi stabilną bazę dla odbudowy protetycznej, takiej jak korona, most lub proteza. Implanty są trwałe i umożliwiają odzyskanie pełnej funkcji zęba, zarówno pod względem estetycznym, jak i funkcjonalnym.
                                </p>
                                <p>
                                    Pełnią one rolę sztucznego korzenia, który po wszczepieniu w kość szczęki lub żuchwy zrasta się z nią. Dla wielu pacjentów to szansa na odzyskanie pewności siebie, pięknego uśmiechu oraz pełnej funkcjonalności jamy ustnej.
                                </p>
                            </div>
                        </div>
                        {/* 
                        <div className="space-y-4 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-100">
                            <h4 className="font-display text-xl font-bold text-[#1A4E84]">Nowoczesne technologie w implantologii</h4>
                            <p className="text-slate-500 font-light leading-relaxed text-sm md:text-base">
                                <strong className="font-semibold text-slate-700">Implanty tytanowe i cyrkonowe.</strong> Tytan jest materiałem o wysokiej biokompatybilności, co oznacza, że organizm ludzki bardzo dobrze go toleruje. Implanty tytanowe są wyjątkowo wytrzymałe i mają długą żywotność. Z kolei implanty cyrkonowe, wykonane z tlenku cyrkonu, są alternatywą dla pacjentów z alergią na metale. Charakteryzują się doskonałą estetyką, dzięki naturalnemu, białemu kolorowi, co sprawia, że są szczególnie polecane w przypadku odbudowy przednich zębów.
                            </p>
                        </div> */}
                        <div className="space-y-6">
                            <h4 className="font-display text-2xl lg:text-3xl font-bold text-slate-800 border-b border-slate-100 pb-3">
                                Etapy wszczepienia implantów
                            </h4>
                            <ul className="space-y-4 mt-2">
                                <li className="flex gap-4 items-start group">
                                    <div className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-[#1A4E84] group-hover:scale-150 transition-transform duration-300 ring-4 ring-sky-50"></div>
                                    <p className="text-slate-600 font-light leading-relaxed text-base md:text-lg">
                                        <strong className="font-semibold text-slate-800">Konsultacja</strong> – Pierwsza konsultacja może odbyć się na podstawie nadesłanego przez pacjenta badania
                                        prześwietlania panoramicznego, jednak decyzje i zaplanowanie leczenia odbywa się podczas
                                        wizyty w gabinecie, podczas której lekarz przeprowadza szczegółową ocenę stanu jamy ustnej
                                        oraz ilości kości, co jest szczególnie ważne w przypadku osób które straciły zęby dużo wcześniej.
                                        W takiej sytuacji możliwy jest zabieg regeneracji kości lub podniesienie dna zatoki szczękowej.
                                    </p>
                                </li>
                                <li className="flex gap-4 items-start group">
                                    <div className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-[#1A4E84] group-hover:scale-150 transition-transform duration-300 ring-4 ring-sky-50"></div>
                                    <p className="text-slate-600 font-light leading-relaxed text-base md:text-lg">
                                        <strong className="font-semibold text-slate-800">Zaplanowanie leczenia</strong> – Na podstawie przeprowadzonego badania lekarz stomatolog przedstawi pacjentowi plan
                                        przeprowadzenia zabiegu implantologicznego, który będzie się składał z kilku etapów. Zabieg
                                        wszczepienia implantu wykonywany jest z miejscowym znieczuleniem, aby pacjent nie odczuwał
                                        bólu czy dyskomfortu. Po wprowadzeniu implantu rozpoczyna się proces gojenia tkanki kostnej,
                                        co może potrwać około 3-4 miesięcy. Na ten okres lekarz nakłada na implant (element
                                        wszczepiony w kość) mikroprotezę lub ząb tymczasowy w zależności ile implantów zostanie
                                        wszczepionych podczas zabiegu. <br></br><br></br>
                                        W trakcie gojenia pacjent przychodzi na kontrolę, aby na podstawie prześwietlenia RTG lekarz
                                        ocenił, czy implant goi się poprawnie.<br></br><br></br>
                                        Ostatnim etapem jest nasadzenie korony protetycznej imitującej naturalny ząb, która będzie
                                        dobrana kolorystycznie do reszty uzębienia.
                                    </p>
                                </li>
                                <li className="flex gap-4 items-start group">
                                    <div className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-[#1A4E84] group-hover:scale-150 transition-transform duration-300 ring-4 ring-sky-50"></div>
                                    <p className="text-slate-600 font-light leading-relaxed text-base md:text-lg">
                                        <strong className="font-semibold text-slate-800">Opieka po wszczepieniu implantu</strong> – Wskazane jest, aby pacjent po wszczepieniu implantu, przychodził na higienizację raz do roku w
                                        ramach profilaktyki.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="font-display text-2xl lg:text-3xl font-bold text-slate-800 border-b border-slate-100 pb-3">
                                Części implantu
                            </h4>
                            <div className="space-y-5 mt-2">
                                <div className="flex gap-4 group cursor-default">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-sky-50 text-[#1A4E84] flex items-center justify-center font-bold text-lg border border-sky-100 group-hover:bg-[#1A4E84] group-hover:text-white transition-all duration-300 shadow-sm">1</div>
                                    <div className="pt-1">
                                        <h5 className="text-lg md:text-xl font-bold mb-1 text-slate-800 group-hover:text-[#1A4E84] transition-colors duration-300">Implant</h5>
                                        <p className="text-slate-600 font-light leading-relaxed text-base md:text-lg">Niewielki element wszczepiany w kość, najczęściej wykonany z tytanu lub cyrkonu.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 group cursor-default">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-sky-50 text-[#1A4E84] flex items-center justify-center font-bold text-lg border border-sky-100 group-hover:bg-[#1A4E84] group-hover:text-white transition-all duration-300 shadow-sm">2</div>
                                    <div className="pt-1">
                                        <h5 className="text-lg md:text-xl font-bold mb-1 text-slate-800 group-hover:text-[#1A4E84] transition-colors duration-300">Łącznik</h5>
                                        <p className="text-slate-600 font-light leading-relaxed text-base md:text-lg">Element łączący implant z widoczną częścią zęba.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 group cursor-default">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-sky-50 text-[#1A4E84] flex items-center justify-center font-bold text-lg border border-sky-100 group-hover:bg-[#1A4E84] group-hover:text-white transition-all duration-300 shadow-sm">3</div>
                                    <div className="pt-1">
                                        <h5 className="text-lg md:text-xl font-bold mb-1 text-slate-800 group-hover:text-[#1A4E84] transition-colors duration-300">Korona protetyczna</h5>
                                        <p className="text-slate-600 font-light leading-relaxed text-base md:text-lg">Widoczna część imitująca naturalny ząb, odpowiednio dobrana kolorystycznie do reszty uzębienia.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h4 className="font-display text-2xl lg:text-3xl font-bold text-slate-800 border-b border-slate-100 pb-3">
                                Główne zalety
                            </h4>
                            <ul className="space-y-4 mt-2">
                                <li className="flex gap-4 items-start group">
                                    <div className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-[#1A4E84] group-hover:scale-150 transition-transform duration-300 ring-4 ring-sky-50"></div>
                                    <p className="text-slate-600 font-light leading-relaxed text-base md:text-lg">
                                        <strong className="font-semibold text-slate-800">Trwałość</strong> – przy odpowiedniej dbałości o higienę mogą służyć całe życie.
                                    </p>
                                </li>
                                <li className="flex gap-4 items-start group">
                                    <div className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-[#1A4E84] group-hover:scale-150 transition-transform duration-300 ring-4 ring-sky-50"></div>
                                    <p className="text-slate-600 font-light leading-relaxed text-base md:text-lg">
                                        <strong className="font-semibold text-slate-800">Komfort</strong> – zachowują się jak naturalne zęby, eliminując dyskomfort związany z ruchomymi protezami.
                                    </p>
                                </li>
                                <li className="flex gap-4 items-start group">
                                    <div className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-[#1A4E84] group-hover:scale-150 transition-transform duration-300 ring-4 ring-sky-50"></div>
                                    <p className="text-slate-600 font-light leading-relaxed text-base md:text-lg">
                                        <strong className="font-semibold text-slate-800">Zdrowe kości</strong> – zapobiegają zanikowi kości w miejscu po utraconym zębie, co jest kluczowe dla zachowania rysów twarzy.
                                    </p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImplantEducation;