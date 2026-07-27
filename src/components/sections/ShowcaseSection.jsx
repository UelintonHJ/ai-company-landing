export default function ShowcaseSection({
    showcases,
    activeShowcase,
    setActiveShowcase,
}) {
    const showcase = showcases[activeShowcase];

    return (
        <section
            id="showcase"
            data-reveal
            className="scroll-mt-28 reveal-up"
        >
            <div className="mb-8 max-w-3xl">
                <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
                    Veja a plataforma em ação
                </h2>

                <p className="text-zinc-300">
                    Conheça alguns dos principais módulos da plataforma e descubra como eles ajudam equipes a automatizar processos, monitorar operações e tomar decisões baseadas em dados.
                </p>
            </div>

            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)]">
                <div className="flex justify-around gap-3 overflow-x-auto pb-2 lg:block lg:space-y-3">
                    {showcases.map((item, index) => (
                        <button
                            key={item.title}
                            onClick={() => setActiveShowcase(index)}
                            className={`grop flex h-16 p-5 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 md:gap-2 lg:min-h-38 lg:w-full lg:justify-start lg:gap-4 ${
                                activeShowcase === index
                                    ? "border-blue-400 bg-blue-500/10"
                                    : "border-zinc-800 bg-zinc-900/40 hover:border-blue-400/40"
                                }`}
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300">
                                <item.icon className="text-xl" />
                            </div>

                            <h3 className="hidden font-semibold md:text-sm md:block lg:text-base">
                                {item.title}
                            </h3>
                        </button>
                    ))}
                </div>

                <article className="flex min-h-100 flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
                    <div>
                        <div className="mb-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300">
                            <showcase.icon className="text-3xl" />
                        </div>

                        <h3 className="mb-4 text-3xl font-bold">
                            {showcase.title}
                        </h3>

                        <p className="max-w-2xl leading-relaxed text-zinc-300">
                            {showcase.description}
                        </p>
                    </div>

                    <div className="mt-10 rounded-xl border border-blue-400/20 bg-blue-500/10 p-5">
                        <p className="text-sm uppercase tracking-widest text-blue-300">
                            Resultado
                        </p>

                        <p className="mt-2 text-3xl font-bold text-white">
                            {showcase.metric}
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
}