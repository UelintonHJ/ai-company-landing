export default function IntegrationsSection({ integrations }) {
    return (
        <section
            data-reveal
            className="reveal-up rounded-2xl border border-zinc-800 bg-zinc-900/35 p-8"
        >
            <h2 className="mb-8 text-2xl font-semibold md:text-3xl text-center md:text-start">
                Construído para se Integrar à Sua Stack
            </h2>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {integrations.map((item) => (
                    <div
                        key={item.name}
                        className="rounded-lg border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-center text-sm font-medium text-zinc-200 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/40"
                    >
                        <item.icon className="w-8 h-8 mx-auto mb-2 text-base text-blue-300" />
                        {item.name}
                    </div>
                ))}
            </div>
        </section>
    )
}