import { stats } from "../../data/landingData";

export default function HeroSection() {
    return (
        <section
            data-reveal
            className="reveal-up grid gap-12 lg:grid-cols-2 lg:items-center"
        >
            <div className="text-center lg:text-start">
                <p className="mb-4 inline-flex rounded-full text-center border-blue-400/30 bg-blue-400/10 px-4 py-1 text-sm text-blue-300 animate-pulse">
                    Infraestrutura de IA Moderna para Equipes que Querem Crescer
                </p>

                <h1 className="mb-6 bg-linear-to-r from-white to-blue-200 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl">
                    Use uma IA que entrega valor desde o primeiro dia.
                </h1>
                
                <div className="flex flex-col items-center lg:text-start">
                    <p className="mb-8 max-w-xl text-lg text-zinc-300">
                        Ajudamos startups e empresas a lançar seus produtos com confiança, rapidez e segurança. Gerando impacto real nos seus negócios.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="#pricing"
                        className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                        Comece o Teste Grátis
                    </a>

                    <a
                        href="#showcase"
                        className="rounded-lg border border-zinc-600 px-6 py-3 font-semibold transition hover:border-blue-400 hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                        Ver Plataforma
                    </a>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-2 lg:gap-12 md:grid-cols-4">
                    {stats.map((item) => (
                        <div
                            key={item.label}
                            className="flex min-w-30 flex-col items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40"
                        >
                            <p className="text-3xl tracking-tight font-bold text-blue-300">
                                {item.value}
                            </p>

                            <p className="mt-3 max-w-[14ch] text-sm text-center font-semibold uppercase leading-relaxed tracking-wide text-zinc-400">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-2xl shadow-blue-500/10">
                <div className="absolute -inset-0.5 -z-10 rounded-2xl bg-linear-to-r from-blue-500/15 to-white/10 blur-md" />

                <div className="flex flex-col lg:flex-row mb-6 items-center lg:justify-between gap-2">
                    <h2 className="text-lg font-semibold">
                        Operações com IA
                    </h2>

                    <span className="rounded-full bg-emerald-400/15 w-45 p-2 lg:p-2 text-center text-sm font-semibold text-emerald-300">
                        +127% de Produtividade
                    </span>
                </div>

                <div className="space-y-4">
                    {[
                        "Suporte ao Cliente",
                        "Apoio a Vendas",
                        "Processamento de Dados",
                    ].map((item) => (
                        <div
                            key={item}
                            className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 py-3 transition-all duration-300 hover:border-blue-400/40 hover:bg-zinc-900"
                        >
                            <span className="text-zinc-200">
                                {item}
                            </span>

                            <span className="text-sm text-blue-300">
                                IA Ativa
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}