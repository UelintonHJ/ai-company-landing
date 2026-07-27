import { FaBars, FaEnvelope } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

const navigation = [
    { label: "Recursos", href: "#services" },
    { label: "Preços", href: "#pricing" },
    { label: "Sobre", href: "#about" },
    { label: "FAQ", href: "#faq" },
];

export default function SiteHeader({
    isScrolled,
    menuOpen,
    onToggleMenu,
    onCloseMenu
}) {
    const navLinkClasses =
        "relative transition-colors duration-200 hover:text-blue-300 focus-visible:outline-none focus-visible:text-blue-300";

    const desktopButtonClasses =
        "hidden cursor-pointer items-center gap-2 rounded-lg border border-zinc-700 px-5 py-2 text-sm font-medium transition-all duration-200 hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 md:inline-flex";

    const mobileButtonClasses =
        "mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white transition-colors duration-200 hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950";

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
                    className="flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]"
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
                    type="button"
                    onClick={onToggleMenu}
                    aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    className="mr-2 cursor-pointer rounded-lg border border-zinc-700 px-3 py-2 text-xs transition-all duration-200 hover:border-blue-400 hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 md:hidden"
                >
                    <span className="flex items-center gap-2">
                        <FaBars aria-hidden="true" />
                        Menu
                    </span>
                </button>

                <button type="button" className={desktopButtonClasses}>
                    <FaEnvelope aria-hidden="true" />
                    Agende uma demonstração
                </button>
            </header>

            <div
                id="mobile-menu"
                className={`fixed left-1/2 top-20 z-40 w-[min(95%,72rem)] -translate-x-1/2 rounded-2xl border border-zinc-800 bg-zinc-900/95 p-4 backdrop-blur-xl shadow-xl transition-all duration-300 md:hidden ${menuOpen
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-4 opacity-0"
                    }`}
            >
                <nav
                    aria-label="Menu mobile"
                    className="flex flex-col gap-3 text-sm text-zinc-300"
                >
                    {navigation.map(({ label, href }) => (
                        <a
                            key={href}
                            href={href}
                            onClick={onCloseMenu}
                            className={navLinkClasses}
                        >
                            {label}
                        </a>
                    ))}

                    <button
                        type="button"
                        onClick={onCloseMenu}
                        className={mobileButtonClasses}
                    >
                        <FaEnvelope aria-hidden="true" />
                        Agende uma demonstração
                    </button>
                </nav>
            </div>
        </>
    )
}