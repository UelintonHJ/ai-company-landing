import { FaArrowRight } from "react-icons/fa";

export default function BackToTopButton({ show }) {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const baseClasses =
        "fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/40 bg-zinc-900/90 text-blue-300 shadow-lg shadow-blue-500/20 backdrop-blur transition-[opacity, transform] duration-300";

    const visibleClasses = show
        ? "translate-y-0 opacity-100"
        : "pointer-events-none translate-y-4 opacity-0";

    return (
        <button
            type="button"
            aria-label="Voltar ao topo"
            onClick={handleScrollToTop}
            className={`${baseClasses} ${visibleClasses}
                cursor-pointer
                hover:-translate-y-1
                hover:border-blue-300/60
                hover:bg-zinc-800
                hover:text-white
                active:scale-95
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-400
                focus-visible:ring-offset-2
                focus-visible:ring-offset-zinc-950
            `}
        >
            <FaArrowRight
                className="-rotate-90 transition-transform duration-300"
                aria-hidden="true"
            />
        </button>
    );
}