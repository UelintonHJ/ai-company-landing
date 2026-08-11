import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { pricing } from "../../data/landingData";

export default function PricingSection() {
    const [annualBilling, setAnnualBilling] = useState(true);

    return (
        <section
            id="pricing"
            data-reveal
            className="scroll-mt-28 reveal-up rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8"
        >
            <div className="mb-8 flex flex-wrap items-center justify-center gap-4 md:justify-between">
                <h2 className="w-full text-center text-2xl font-semibold md:w-auto md:text-left md:text-3xl">
                    Melhores Preços Para a Sua Etapa
                </h2>

                <div className="mx-auto rounded-lg border border-zinc-700 p-1 text-sm md:mx-0">
                    <button
                        type="button"
                        onClick={() => setAnnualBilling(false)}
                        className={`rounded-md px-4 py-2 transition-all duration-300 ${
                            annualBilling
                                ? "text-zinc-400"
                                : "bg-zinc-100 text-zinc-900"
                            }`}
                            aria-pressed={!annualBilling}
                    >
                        Mensal
                    </button>

                    <button
                        type="button"
                        onClick={() => setAnnualBilling(true)}
                        className={`rounded-md px-4 py-2 transition-all duration-300 ${annualBilling
                                ? "bg-zinc-400 text-white"
                                : "text-zinc-400"
                            }`}
                            aria-pressed={annualBilling}
                    >
                        Anual
                    </button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {pricing.map((plan) => (
                    <article
                        key={plan.tier}
                        className={`flex h-full flex-col rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                            plan.popular
                                ? "border-blue-400 bg-blue-400/10 shadow-lg shadow-blue-500/20"
                                : "border-zinc-800 bg-zinc-950/50 hover:border-blue-400/40 hover:shadow-blue-500/10"
                        }`}
                    >
                        <p className="mb-2 text-sm text-zinc-400">
                            {plan.tier}
                        </p>

                        <p className="mb-3 text-3xl font-bold transition-all duration-300">
                            {annualBilling ? plan.annual : plan.monthly}

                            {plan.monthly !== "Sob consulta" && (
                                <span className="text-sm text-zinc-400">
                                    /mês
                                </span>
                            )}
                        </p>

                        <p className="mb-4 text-zinc-300">
                            {plan.description}
                        </p>

                        <ul className="mb-6 flex-1 space-y-2 text-sm text-zinc-300">
                            {plan.features.map((feature) => (
                                <li
                                    key={feature}
                                    className="flex items-center gap-2"
                                >
                                    <FaCheckCircle className="mt-0.5 text-blue-300" aria-hidden="true" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button type="button" className="mt-auto w-full rounded-lg border border-zinc-600 px-4 py-2 font-medium transition hover:border-blue-400 hover:text-blue-300">
                            Comece
                        </button>
                    </article>
                ))}
            </div>
        </section>
    );
}