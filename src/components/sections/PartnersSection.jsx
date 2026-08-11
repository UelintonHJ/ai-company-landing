import { partners } from "../../data/landingData";

export default function PartnersSection() {
    return (
        <section data-reveal className="reveal-up">
            <div className="mb-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-zinc-400">
                <span>Recomendado por</span>

                {partners.map((brand) => (
                    <span
                        key={brand}
                        className="rounded-full border border-zinc-700 px-3 py-1 transition-all duration-300 hover:border-blue-400 hover:text-blue-300"
                    >
                        {brand}
                    </span>
                ))}
            </div>
        </section>
    )
}