import { team } from "../../data/landingData";

export default function AboutSection() {
    return (
        <section
            id="about"
            data-reveal
            className="scroll-mt-28 reveal-up grid gap-8 rounded-2xl border border-zinc-800 bg-linear-to-r from-zinc-900 to-zinc-900/40 p-8 md:grid-cols-2"
        >
            <div>
                <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
                    Construído por especialistas em IA para equipes de produção
                </h2>

                <p className="text-zinc-300">
                    Somos uma equipe multifuncional formado por pesquisadores de IA, engenheiros e líderes de produto focados em fornecer inteligência prática na velocidade de uma startup.
                </p>
            </div>

            <div className="space-y-4">
                {team.map((member) => (
                    <div
                        key={member.name}
                        className="rounded-lg border border-zinc-700 bg-zinc-950/50 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/40"
                    >
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-zinc-400">{member.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}