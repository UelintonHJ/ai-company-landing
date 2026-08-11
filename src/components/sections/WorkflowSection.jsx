import { workflowSteps } from "../../data/landingData";

export default function WorkflowSection() {
    return (
        <section
            data-reveal
            className="reveal-up rounded-2xl border border-zinc-800 bg-zinc-900/35 p-8"
        >
            <h2 className="mb-8 text-2xl font-semibold md:text-3xl">
                Como Desenvolvemos uma IA que Faz Você Crescer
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
                {workflowSteps.map((item) => (
                    <article
                        key={item.step}
                        className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40"
                    >
                        <p className="mb-3 text-sm font-semibold tracking-widest text-blue-300">
                            {item.step}
                        </p>

                        <h3 className="mb-3 text-xl font-semibold">
                            {item.title}
                        </h3>

                        <p className="text-zinc-300">
                            {item.detail}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}