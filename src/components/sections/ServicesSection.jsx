import { services } from "../../data/landingData";

export default function ServicesSection() {
    return (
        <section 
            id="services"
            data-reveal
            className="scroll-mt-28 reveal-up"
        >
            <div className="mb-8 max-w-3xl">
                <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
                    Soluções de IA para acelerar sua empresa
                </h2>

                <p className="text-zinc-300">
                    Combine inteligência artificial, automação e análise preditiva para transformar processos complexos em operações mais eficientes.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {services.map((item) => (
                    <article
                        key={item.name}
                        className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10"
                    >
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300 transition-colors duration-300 group-hover:bg-blue-500/20">
                            <item.icon className="text-2xl" aria-hidden="true" />
                        </div>

                        <h3 className="mb-3 text-xl font-semibold">
                            {item.name}
                        </h3>

                        <p className="leading-relaxed text-zinc-300">
                            {item.summary}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}