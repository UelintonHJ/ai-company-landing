export default function CTASection() {
    return (
        <section
            data-reveal
            className="reveal-up rounded-2xl border border-blue-400/30 bg-blue-500/10 p-8 text-center"
        >
            <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
                Pronto para crescer?
            </h2>

            <p className="mx-auto mb-6 max-w-2xl text-zinc-200">
                Lance seu primeiro workflow em dias, não meses.
                Junte-se às grandes empresas que usam Synapse para automatizar, prever e crescer mais rápido.
            </p>

            <a 
                href="mailto:ola@exemplo.com?subject=Contato%20-%20Synapse%20IA"
                className="inline-flex rounded-lg bg-blue-500 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-500/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
                Fale conosco
            </a>
        </section>
    )
}