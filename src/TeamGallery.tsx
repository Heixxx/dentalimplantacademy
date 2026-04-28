import { useState, useEffect, useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    imageSrc: string;
}

const TEAM_DATA: TeamMember[] = [
    {
        id: 0,
        name: 'Lek. stomatolog Dariusz Srokowski',
        role: 'Lekarz stomatolog',
        imageSrc: '/Doctor.png',
    },
    {
        id: 1,
        name: 'Ewelina Lantenszleger',
        role: 'asystentka stomatologiczna',
        imageSrc: '/Ewelina.jpeg',
    },
    {
        id: 2,
        name: 'Kinga Szczepanik-Popek',
        role: 'lekarz dentysta',
        imageSrc: '/Kinga.jpeg',
    },
    {
        id: 3,
        name: 'Natalia Holouchanska',
        role: 'asystentka stomatologiczna',
        imageSrc: '/Natalia.jpeg',
    },
    {
        id: 4,
        name: 'Nasz Zespół',
        role: 'Razem Tworzymy Uśmiechy',
        imageSrc: '/All.jpeg',
    },
];

const AUTO_PLAY_MS = 5000;

const TeamGallery = () => {
    const { t } = useTranslation();
    const members = t('team.members', { returnObjects: true }) as { name: string; role: string }[];
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const total = TEAM_DATA.length;

    const goTo = useCallback(
        (index: number) => {
            if (isAnimating) return;
            setIsAnimating(true);
            setActiveIndex(((index % total) + total) % total);
        },
        [isAnimating, total],
    );

    const handleNext = useCallback(() => goTo(activeIndex + 1), [goTo, activeIndex]);
    const handlePrev = useCallback(() => goTo(activeIndex - 1), [goTo, activeIndex]);


    useEffect(() => {
        const timer = setTimeout(() => setIsAnimating(false), 700);
        return () => clearTimeout(timer);
    }, [activeIndex]);


    useEffect(() => {
        if (isPaused) {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
            return;
        }
        autoPlayRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % total);
        }, AUTO_PLAY_MS);
        return () => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        };
    }, [isPaused, total]);


    const pause = () => setIsPaused(true);
    const resume = () => setIsPaused(false);


    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            if (e.key === 'ArrowLeft') { e.preventDefault(); handlePrev(); }
            else if (e.key === 'ArrowRight') { e.preventDefault(); handleNext(); }
        },
        [handlePrev, handleNext],
    );


    const getCardStyle = (index: number): string => {
        let diff = index - activeIndex;
        if (diff > Math.floor(total / 2)) diff -= total;
        else if (diff < -Math.floor(total / 2)) diff += total;

        const base =
            'absolute top-0 left-1/2 bg-slate-200 rounded-3xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform ';

        if (diff === 0)
            return (
                base +
                'z-30 -translate-x-1/2 scale-100 opacity-100 border-white border-4 shadow-[0_20px_50px_rgba(0,0,0,0.18)] cursor-default'
            );
        if (diff === 1)
            return (
                base +
                'z-20 translate-x-[15%] scale-[0.82] opacity-40 cursor-pointer hover:opacity-60 border-white border-2 shadow-lg brightness-[0.6]'
            );
        if (diff === -1)
            return (
                base +
                'z-20 -translate-x-[115%] scale-[0.82] opacity-40 cursor-pointer hover:opacity-60 border-white border-2 shadow-lg brightness-[0.6]'
            );
        if (diff > 1)
            return base + 'z-10 translate-x-[115%] scale-[0.65] opacity-0 pointer-events-none';
        if (diff < -1)
            return base + 'z-10 -translate-x-[215%] scale-[0.65] opacity-0 pointer-events-none';

        return base;
    };

    return (
        <>

            <section
                className="w-full pt-16 pb-12 md:pt-24 md:pb-16 bg-white relative overflow-hidden scroll-mt-24"
                id="team"
                aria-labelledby="team-heading"
            >

                <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                    <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-teal/[0.03] rounded-full blur-3xl" />
                </div>


                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-10 md:mb-14">
                        <span className="text-teal font-bold tracking-widest uppercase text-xs md:text-sm block mb-2">
                            {t('team.tag')}
                        </span>
                        <h2
                            id="team-heading"
                            className="font-display font-bold text-slate-900 mb-4"
                            style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)' }}
                        >
                            {t('team.heading')}&nbsp;<span className="text-primary">{t('team.headingHighlight')}</span>
                        </h2>
                        <p
                            className="text-slate-600 font-light leading-relaxed max-w-2xl mx-auto"
                            style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)' }}
                        >
                            {t('team.sub')}
                        </p>
                    </div>


                    <div className="flex justify-center gap-3 mb-6">
                        <button
                            onClick={handlePrev}
                            disabled={isAnimating}
                            aria-label={t('team.prevLabel')}
                            className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300
                focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
                ${isAnimating ? 'bg-slate-100 text-slate-300 cursor-not-allowed'
                                    : 'bg-white text-primary hover:bg-primary hover:text-white shadow-md hover:shadow-lg border border-slate-200'}`}
                        >
                            <span className="material-symbols-outlined text-sm md:text-base font-bold" aria-hidden="true">arrow_back</span>
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={isAnimating}
                            aria-label={t('team.nextLabel')}
                            className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300
                focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
                ${isAnimating ? 'bg-slate-100 text-slate-300 cursor-not-allowed'
                                    : 'bg-white text-primary hover:bg-primary hover:text-white shadow-md hover:shadow-lg border border-slate-200'}`}
                        >
                            <span className="material-symbols-outlined text-sm md:text-base font-bold" aria-hidden="true">arrow_forward</span>
                        </button>
                    </div>
                </div>


                <div
                    className="relative w-full flex items-center justify-center mt-4 md:mt-8"
                    style={{ height: 'clamp(580px, 73vw, 700px)' }}
                    role="region"
                    aria-roledescription={t('team.carouselRole')}
                    aria-label={t('team.carouselLabel')}
                    tabIndex={0}
                    onKeyDown={handleKeyDown}
                    onMouseEnter={pause}
                    onMouseLeave={resume}
                >
                    <div
                        className="relative h-full"
                        style={{ width: 'min(85%, 450px)' }}
                    >
                        {TEAM_DATA.map((member, index) => {
                            const isCurrent = index === activeIndex;
                            return (
                                <div
                                    key={member.id}
                                    onClick={() => {
                                        if (!isAnimating && !isCurrent) { goTo(index); }
                                    }}
                                    className={getCardStyle(index)}
                                    style={{ width: '100%', aspectRatio: '3/4' }}
                                    aria-hidden={!isCurrent}
                                >

                                    <img
                                        src={member.imageSrc}
                                    alt={`${members[index]?.name ?? ''} – ${members[index]?.role ?? ''}`}
                                        loading="lazy"
                                        className={`w-full h-full object-cover transition-transform ease-linear
                      ${isCurrent ? 'scale-[1.12] duration-[6000ms]' : 'scale-100 duration-700'}`}
                                    />


                                    <div
                                        className={`absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent
                      flex flex-col justify-end p-4 sm:p-5 md:p-7 transition-opacity duration-700
                      ${isCurrent ? 'opacity-100' : 'opacity-0'}`}
                                    >
                                        <span
                                            className="text-teal-100 font-bold uppercase tracking-wider mb-1"
                                            style={{ fontSize: 'clamp(0.6rem, 1vw, 0.75rem)' }}
                                        >
                                            {members[index]?.role ?? ''}
                                        </span>
                                        <h3
                                            className="text-white font-display font-bold mb-1"
                                            style={{ fontSize: 'clamp(1rem, 2.2vw, 1.5rem)' }}
                                        >
                                            {members[index]?.name ?? ''}
                                        </h3>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>


                <div className="flex flex-col items-center gap-3 mt-6 md:mt-8 relative z-10">
                    <nav className="flex justify-center gap-2" aria-label={t('team.tag')}>
                        {TEAM_DATA.map((member, index) => (
                            <button
                                key={member.id}
                                onClick={() => goTo(index)}
                                aria-label={`${members[index]?.name ?? ''}`}
                                aria-current={activeIndex === index ? 'true' : undefined}
                                className={`rounded-full transition-all duration-300
                  focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
                  ${activeIndex === index ? 'w-8 h-2.5 bg-primary' : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'}`}
                            />
                        ))}
                    </nav>
                </div>
            </section>

        </>
    );
};

export default TeamGallery;
