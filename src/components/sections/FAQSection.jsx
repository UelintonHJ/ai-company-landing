export default function FAQSection({
    faqs,
    openFaq,
    setOpenFaq,
}) {
    return (
        <section
            id="faq"
            data-reveal
            className="scroll-mt-28 reveal-up rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8"
        >
            <h2 className="mb-6 text-2xl font-semibold md:text-3xl">
                Perguntas Frequentes
            </h2>

            <div className="space-y-3">
                {faqs.map((item, index) => {
                    const isOpen = openFaq === index

                    return (
                        <div
                            key={item.q}
                            className="rounded-lg border border-zinc-700 bg-zinc-950/40 transition-colors duration-300 hover:border-blue-400/40"
                        >
                            <button
                                onClick={() => 
                                    setOpenFaq(isOpen ? -1 : index)
                                }
                                className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors duration-300 hover:text-blue-200"
                            >
                                <span className="font-medium">
                                    {item.q}
                                </span>

                                <span
                                    className={`text-blue-300 transition-transform duration-300 ${
                                        isOpen ? "rotate-180" : ""
                                    }`}
                                >
                                    +
                                </span>
                            </button>

                            <div
                                className={`faq-content px-4 text-zinc-300 ${
                                    isOpen ? "faq-open pb-4" : ""
                                }`}
                            >
                                <p>{item.a}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}