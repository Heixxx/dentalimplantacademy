import { useState, useEffect } from "react";

const STORAGE_KEY = "dental_cookie_consent";

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem(STORAGE_KEY);
        if (!consent) {
            const renderTimer = setTimeout(() => {
                setIsVisible(true);
                setTimeout(() => setShowAnimation(true), 50);
            }, 1000);
            return () => clearTimeout(renderTimer);
        }
    }, []);

    const dismiss = (value: string) => {
        setShowAnimation(false);
        setTimeout(() => {
            localStorage.setItem(STORAGE_KEY, value);
            setIsVisible(false);
        }, 500);
    };

    if (!isVisible) return null;

    return (
        <div
            className="fixed bottom-0 left-0 w-full z-[9999] p-3 sm:p-4 lg:p-6 pointer-events-none flex justify-center overflow-hidden"
            role="dialog"
            aria-modal="false"
            aria-label="Informacja o plikach cookies"
        >
            <div
                className={`bg-white/95 backdrop-blur-md border border-teal/20 shadow-[0_-8px_40px_rgba(13,148,136,0.08)] rounded-2xl p-5 md:p-6 w-full max-w-5xl pointer-events-auto transform transition-all duration-500 ease-out ${
                    showAnimation
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0"
                }`}
            >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    {/* Ikona + tekst */}
                    <div className="flex items-start gap-4">
                        <div className="bg-teal-100 p-3 rounded-full hidden sm:flex items-center justify-center shrink-0">
                            <svg
                                className="w-6 h-6 text-teal"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                                <circle cx="8.5" cy="8.5" r="1" fill="currentColor" />
                                <circle cx="10.5" cy="15.5" r="1" fill="currentColor" />
                                <circle cx="15.5" cy="13.5" r="1" fill="currentColor" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-slate-900 font-bold font-display text-[1.5rem] min-[480px]:text-[1rem] md:text-[1.05rem] lg:text-[1.15rem] leading-tight mb-1">
                                Ta strona korzysta z plików cookies
                            </h3>
                            <p className="text-slate-600 text-[0.8rem] min-[480px]:text-[0.84rem] md:text-[0.88rem] lg:text-[0.92rem] leading-relaxed max-w-3xl">
                                Używamy niezbędnych plików cookies do prawidłowego działania
                                serwisu. Opcjonalne cookies (analityczne) pomagają nam ulepszać
                                stronę poprzez analizę ruchu. Klikając „Akceptuj wszystkie",
                                wyrażasz zgodę na przetwarzanie opcjonalnych cookies. Wybierając
                                „Tylko niezbędne", korzystamy wyłącznie z cookies technicznych.
                                Zgodę możesz wycofać w dowolnym momencie, czyszcząc dane
                                przeglądarki.
                            </p>
                        </div>
                    </div>

                    {/* Przyciski — równorzędne wizualnie (RODO) */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
                        <button
                            onClick={() => dismiss("necessary")}
                            className="w-full sm:w-auto px-6 py-2.5 rounded-xl border-2 border-teal bg-white text-slate-900 font-semibold text-[0.82rem] min-[480px]:text-[0.85rem] md:text-[0.88rem] hover:bg-slate-50 transition duration-300 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-teal/50 focus-visible:ring-offset-2"
                        >
                            Tylko niezbędne
                        </button>
                        <button
                            onClick={() => dismiss("all")}
                            className="w-full sm:w-auto px-6 py-2.5 rounded-xl border-2 border-teal bg-teal hover:bg-teal/90 text-white font-semibold text-[0.82rem] min-[480px]:text-[0.85rem] md:text-[0.88rem] transition duration-300 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-teal/50 focus-visible:ring-offset-2"
                        >
                            Akceptuj wszystkie
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;