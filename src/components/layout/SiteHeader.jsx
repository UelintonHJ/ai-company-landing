import { useEffect, useRef, useState } from "react";
import { FaBars, FaEnvelope, FaXmark } from "react-icons/fa6";
import { GiBrain } from "react-icons/gi";

const navigation = [
    { label: "Recursos", href: "#services" },
    { label: "Preços", href: "#pricing" },
    { label: "Sobre", href: "#about" },
    { label: "FAQ", href: "#faq" },
];

const FOCUSABLE_SELECTOR = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
].join(",");

export default function SiteHeader({ isScrolled }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuButtonRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const firstMenuLinkRef = useRef(null);

    useEffect(() => {
        if (!menuOpen) {
            return;
        }

        const frame = requestAnimationFrame(() => {
            firstMenuLinkRef.current?.focus();
        })

        return () => {
            cancelAnimationFrame(frame);
        };
    }, [menuOpen]);

    const handleToggleMenu = () => {
        setMenuOpen((previousState) => !previousState);
    };

    const handleCloseMenu = () => {
        setMenuOpen(false);

        requestAnimationFrame(() => {
            menuButtonRef.current?.focus();
        });
    };

    const handleMenuKeyDown = (event) => {
        if (event.key === "Escape") {
            event.preventDefault();
            handleCloseMenu();
            return;
        }

        if (event.key !== "Tab") {
            return;
        }

        const menu = mobileMenuRef.current;

        if (!menu) {
            return;
        }

        const focusableElements = Array.from(
            menu.querySelectorAll(FOCUSABLE_SELECTOR)
        );

        if (focusableElements.length === 0) {
            return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (
            !event.shiftKey &&
            document.activeElement === lastElement
        ) {
            event.preventDefault();
            firstElement.focus();
            return;
        }

        if (
            event.shiftKey && 
            document.activeElement === firstElement
        ) {
            event.preventDefault();
            lastElement.focus();
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && menuOpen) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [menuOpen]);

    const navLinkClasses =
        "relative rounded-sm transition-colors duration-200 hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900  ";

    const desktopButtonClasses =
        "hidden cursor-pointer items-center gap-2 rounded-lg border border-zinc-700 px-5 py-2 text-sm font-medium transition-all duration-200 hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 md:inline-flex";

    const mobileButtonClasses =
        "mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-4 p-2.5 font-semibold text-white transition-colors duration-200 hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950";

    return (
        <>
            <header
                className={`fixed left-1/2 top-0 z-50 mt-3 flex w-[min(95%,72rem)] -translate-x-1/2 items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur-xl transition-all duration-300 ${isScrolled
                    ? "border-blue-400/30 bg-black/85 shadow-xl shadow-blue-500/10"
                    : "border-zinc-800/80 bg-zinc-900/70 hover:border-zinc-700"
                    }`}
            >
                <a
                    href="#top"
                    className="flex items-center gap-3 rounded-sm transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                    aria-label="Página inicial"
                >
                    <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-linear-to-br from-blue-500 to-blue-700 shadow-lg shadow-blue-500/20">
                        <GiBrain
                            className="text-2xl text-white"
                            aria-hidden="true"
                        />
                    </div>

                    <span className="text-lg font-semibold tracking-wide">
                        Synapse IA
                    </span>
                </a>

                <nav
                    aria-label="Navegação principal"
                    className="hidden items-center gap-6 text-sm text-zinc-300 md:flex"
                >
                    {navigation.map(({ label, href }) => (
                        <a
                            key={href}
                            href={href}
                            className={navLinkClasses}
                        >
                            {label}
                        </a>
                    ))}
                </nav>

                <button
                    ref={menuButtonRef}
                    type="button"
                    onClick={handleToggleMenu}
                    aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    className="mr-2 inline-flex cursor-pointer items-center gap-2 rounded-lg border border-zinc-700 px-3 py-2 text-sm transition-all duration-200 hover:border-blue-400 hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 md:hidden"
                >
                    {menuOpen ? (
                        <FaXmark aria-hidden="true" />
                    ) : (
                        <FaBars aria-hidden="true" />
                    )}

                    <span>Menu</span>
                </button>

                <a 
                    href="mailto:ola@exemplo.com?subject=Agendamento%20de%20demonstra%C3%A7%C3%A3o" 
                    className={desktopButtonClasses}>
                    <FaEnvelope aria-hidden="true" />
                    Agende uma demonstração
                </a>
            </header>

            <div
                ref={mobileMenuRef}
                id="mobile-menu"
                aria-hidden={!menuOpen}
                onKeyDown={handleMenuKeyDown}
                className={`fixed left-1/2 top-20 z-40 w-[min(95%,72rem)] -translate-x-1/2 rounded-2xl border border-zinc-800 bg-zinc-900/95 p-4 backdrop-blur-xl shadow-xl transition-all duration-300 md:hidden ${menuOpen
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-4 opacity-0"
                    }`}
            >
                <nav
                    aria-label="Navegação mobile"
                    className="flex flex-col  items-center gap-3 text-center text-base font-semibold text-zinc-300"
                >
                    {navigation.map(({ label, href }, index) => (
                        <a
                            key={href}
                            ref={
                                index === 0
                                    ? firstMenuLinkRef
                                    : undefined   
                            }
                            href={href}
                            onClick={handleCloseMenu}
                            className={navLinkClasses}
                        >
                            {label}
                        </a>
                    ))}

                    <a
                        href="mailto:ola@exemplo.com?subject=Agendamento%20de%20demonstra%C3%A7%C3%A3o"
                        onClick={handleCloseMenu}
                        className={mobileButtonClasses}
                    >
                        <FaEnvelope aria-hidden="true" />
                        Agende uma demonstração
                    </a>
                </nav>
            </div>
        </>
    )
}