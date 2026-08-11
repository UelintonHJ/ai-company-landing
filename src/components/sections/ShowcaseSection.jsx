import { useState } from "react";
import { useAutoRotate } from "../../hooks/useAutoRotate";
import { showcase as showcases } from "../../data/landingData";

export default function ShowcaseSection() {
    const [activeShowcase, setActiveShowcase] = useState(0);

    useAutoRotate(setActiveShowcase, showcases.length, 3600);

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
                <div className="flex justify-around gap-3 overflow-x-auto pb-2 lg:flex lg:flex-col lg:justify-center lg:gap-3 lg:overflow-visible lg:pb-0">
                    {showcases.map((item, index) => (
                        <button
                            key={item.title}
                            type="button"
                            onClick={() => setActiveShowcase(index)}
                            className={`group flex h-16 shrink-0 items-center justify-center rounded-xl border p-4 transition-all duration-300 md:gap-2 lg:min-h-28 lg:w-full lg:justify-start lg:gap-4 ${
                                activeShowcase === index
                                    ? "border-blue-400 bg-blue-500/10"
                                    : "border-zinc-800 bg-zinc-900/40 hover:border-blue-400/40"
                                }`}
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300">
                                <item.icon className="text-xl" aria-hidden="true" />
                            </div>

                            <h3 className="hidden font-semibold md:text-sm md:block lg:text-base">
                                {item.title}
                            </h3>
                        </button>
                    ))}
                </div>

                <article className="flex min-h-100 md:min-h-80 lg:h-auto flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                    <div>
                        <div className="mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300">
                            <showcase.icon className="text-3xl" aria-hidden="true" />
                        </div>

                        <h3 className="mb-3 text-2xl font-bold">
                            {showcase.title}
                        </h3>

                        <p className="max-w-3xl leading-relaxed text-zinc-300">
                            {showcase.description}
                        </p>
                    </div>

                    <div className="mt-6 rounded-xl border border-blue-400/20 bg-blue-500/10 p-4">
                        <p className="text-sm uppercase tracking-widest text-blue-300">
                            Resultado
                        </p>

                        <p className="mt-1 text-2xl font-bold text-white">
                            {showcase.metric}
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
}