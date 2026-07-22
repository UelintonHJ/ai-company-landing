import { FaArrowLeft, FaArrowRight, FaCheckCircle } from "react-icons/fa";

export default function LandingSections({
    stats,
    workflowSteps,
    services,
    showcases,
    activeShowcase,
    setActiveShowcase,
    features,
    testimonials,
    activeTestimonial,
    setActiveTestimonial,
    integrations,
    pricing,
    annualBilling,
    setAnnualBilling,
    team,
    faqs,
    openFaq,
    setOpenFaq
}) {
    return (
        <main className="space-y-24">
            <section data-reveal className="reveal-up grid gap-12 lg:grid-cols-2 lg:items-center">
                <div>
                    <p className="mb-4 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1 text-sm text-blue-300 animate-pulse">
                        Infraestrutura de IA Moderna para Equipes que Querem Crescer
                    </p>
                    <h1 className="mb-6 bg-linear-to-r from-white to-blue-200 bg-clip-text tex-4xl font-bold leading-tight text-transparent sm:text-5xl">
                        Crie produtos mais inteligentes com IA que entregam valor desde o primeiro dia.
                    </h1>
                    <p className="mb-8 max-w-xl text-lg text-zinc-300">
                        Ajudamos startups e empresas a lançar produtos de IA confiáveis com rapidez, segurança e impacto real nos negócios.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-400">
                            Comece o Teste Grátis
                        </button>
                        <button className="rounded-lg border border-zinc-600 px-6 py-3 font-semibold transition hover:border-blue-400 hover:text-blue-300">
                            Ver Plataforma
                        </button>
                    </div>

                    <div className="mt-8 grid-cols-2 gap-4 sm:grid-cols-4">
                        {stats.map((item) => (
                            <div key={item.label} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40">
                                <p className="text-xl font-bold text-blue-300">{item.value}</p>
                                <p className="text-xl text-zinc-400">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-2xl shadow-blue-500/10">
                    <div className="absolute -inset-0.5 -z-10 rounded-2xl bg-linear-to-r from-blue-500/15 to-white/10 blur-md">
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-lg font-semibold">Operações com IA</h2>
                            <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-300">
                                +127% de Produtividade
                            </span>
                        </div>

                        <div className="space-y-4">
                            {['Customer Support', 'Sales Enablement', 'Data Processing'].map((item) => (
                                <div key={item} className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 py-3 transition-all duration-300 hover:border-blue-400/40 hover:bg-zinc-900">
                                    <span className="text-zinc-200">{item}</span>
                                    <span className="text-sm text-blue-300">IA Ativa</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section data-reveal className="reveal-up">
                <div className="mb-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-zinc-400">
                    <span>Recomendado por</span>
                    {['Orbitly', 'CloudPeak', 'PulseOps', 'QuantaFin', 'BrightLoop'].map((brand) => (
                        <span key={brand} className="rounded-full border border-zinc-700 px-3 py-1">{brand}</span>
                    ))}
                </div>
            </section>

            <section data-reveal className="reveal-up rounded-2xl border border-zinc-800 bg-zinc-900/35 p-8">
                <h2 className="mb-8 text-2xl font-semibold md:text-3xl">Como Lançamos IA Que Vence</h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {workflowSteps.map((item) => (
                        <article key={item.step} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40">
                            <p className="mb-3 text-sm font-semibold tracking-widest text-blue-300">{item.step}</p>
                            <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                            <p className="text-zinc-300">{item.detail}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section data-reveal className="reveal-up">
                <h2 className="mb-8 text-2xl font-semibold md:text-3xl">Por que as Equipes nos Escolhem</h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {features.map((feature) => (
                        <article key={feature.title} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10">
                            <feature.ico className="mb-3 text-xl text-blue-300" />
                            <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                            <p className="text-zinc-300">{feature.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section data-reveal className="reveal-up rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
                <div className="mb-6 flex items-center justify-between gap-3">
                    <h2 className="text-2xl font-semibold md:text-3xl">O que dizem os clientes</h2>
                    <div className="flex gap-2">
                        <button onClick={setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)} className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-700 text-sm transition hover:border-blue-400" aria-label="Volte o comentário">
                            <FaArrowLeft />
                        </button>
                        <button onClick={setActiveTestimonial((prev) => (prev + 1) % testimonials.length)} className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-700 text-sm transition hover:border-blue-400" aria-label="Próximo comentário">
                            <FaArrowRight />
                        </button>
                    </div>
                </div>

                <div className="overflow-hidden ">
                    <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
                        {testimonials.map((item) => (
                            <article key={item.author} className="min-w-full rounded-xl border border-zinc-800 bg-zinc-950/50 p-8">
                                <p className="mb-6 text-xl leading-relaxed text-zinc-200">{item.quote}</p>
                                <p className="font-medium text-blue-300">{item.author}</p>
                                <p className="text-sm text-zinc-300">{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="mt-4 flex justify-center gap-2">
                    {testimonials.map((item, index) => (
                        <button key={item.author} onClick={() => setActiveTestimonial(index)} className={`h-2.5 rounded-full transition-all ${setActiveTestimonial === index ? 'w-8 bg-blue-300' : 'w-2.5 bg-zinc-600'}`} />
                    ))}
                </div>
            </section>

            <section data-reveal className="reveal-up rounded-2xl border border-zinc-800 bg-zinc-900/35 p-8">
                <h2 className="mb-8 text-2xl font-semibold md:text-3xl">Construído para se Integrar à Sua Stack</h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                    {integrations.map((item) => (
                        <div key={item.name} className="rounded-lg border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-center text-sm font-medium text-zinc-200 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/40">
                            <item.ico className="mx-auto mb-2 text-base text-blue-300" />
                            {item.name}
                        </div>
                    ))}
                </div>
            </section>

            <section id="pricing" data-reveal className="reveal-up rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8">
                <div className="mb-8 flex flex-wrap items-center justify-center gap-4 md:justify-between">
                    <h2 className="w-full text-center text-2xl font-semibold md:w-auto md:text-left md:text-3xl">
                        Melhores Preços Para Cada Etapa
                    </h2>
                    <div className="mx-auto rounded-lg border border-zinc-700 p-1 text-sm md:mx-0">
                        <button onClick={() => setAnnualBilling(false)} className={`rounded-md px-4 py-2 transition-all duration-300 ${annualBilling ? 'text-zinc-400' : 'bg-zinc-100 text-zinc-900'}`}>
                            Mensal
                        </button>
                        <button onClick={() => setAnnualBilling(true)} className={`rounded-md px-4 py-2 transition-all duration-300 ${annualBilling ? 'bg-zinc-400 text-white' : 'text-zinc-400'}`}>
                            Anual
                        </button>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {pricing.map((plan) => (
                        <article key={plan.tier} className={`rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${plan.popular ? 'border-blue-400 bg-blue-400/10 shadow-lg shadow-blue-500/20' : 'border-zinc-800 bg-zinc-950/50 hover:border-blue-400/40 hover:shadow-blue-500/10'}`}>
                            <p className="mb-2 text-sm text-zinc-400">{plan.tier}</p>
                            <p className="mb-3 text-3xl font-bold transition-all duration-300">
                                {annualBilling ? plan.annual : plan.monthly}
                                {plan.monthly !== 'Custom' && <span className="text-sm text-zinc-400">/mês</span>}
                            </p>
                            <p className="mb-4 text-zinc-300">{plan.description}</p>
                            <ul className="mb-6 space-y-2 text-sm text-zinc-300">
                                {plan.features.map((item) => (
                                    <li key={item} className="flex items-center gap-2">
                                        <FaCheckCircle className="mt-0.5 text-blue-300" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full rounded-lg border border-zinc-600 px-4 py-2 font-medium transition hover:border-blue-400 hover:text-blue-300">Comece</button>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}