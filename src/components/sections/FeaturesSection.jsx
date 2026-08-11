import { features } from "../../data/landingData";

export default function FeaturesSection() {
    return (
        <section id="features" data-reveal className="scroll-mt-28 reveal-up">
            <h2 className="mb-8 text-2xl font-semibold md:text-3xl">
                Os Motivos por Sermos A Escolha das Empresas
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
                {features.map((feature) => (
                    <article
                        key={feature.title}
                        className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10"
                    >
                        <feature.icon className="mb-3 text-xl text-blue-300" aria-hidden="true" />

                        <h3 className="mb-3 text-xl font-semibold">
                            {feature.title}
                        </h3>

                        <p className="text-zinc-300">
                            {feature.description}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}