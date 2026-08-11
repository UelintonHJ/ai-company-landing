import { useState } from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useAutoRotate } from "../../hooks/useAutoRotate";
import { testimonials } from "../../data/landingData";

export default function TestimonialsSection() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    useAutoRotate(setActiveTestimonial, testimonials.length, 4500);

    return (
        <section
            data-reveal
            className="reveal-up rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8"
        >
            <div className="mb-6 flex items-center justify-between gap-3">
                <h2 className="text-2xl font-semibold md:text-3xl">
                    O que dizem os nossos clientes
                </h2>

                <div className="flex gap-2">
                    <button
                        type="button"
                        onClick={() =>
                            setActiveTestimonial(
                                (prev) =>
                                    (prev - 1 + testimonials.length) %
                                    testimonials.length       
                            )
                        }
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-700 text-sm transition hover:border-blue-400"
                        aria-label="Voltar depoimento"
                    >
                        <FaArrowLeft aria-hidden="true" />
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            setActiveTestimonial(
                                (prev) => (prev + 1) % testimonials.length
                            )
                        }
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-700 text-sm transition hover:border-blue-400"
                        aria-label="Próximo depoimento"
                    >
                        <FaArrowRight aria-hidden="true" />
                    </button>
                </div>
            </div>

            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-700 ease-out"
                    style={{
                        transform: `translateX(-${activeTestimonial * 100}%)`,
                    }}
                >
                    {testimonials.map((item) => (
                        <article
                            key={item.author}
                            className="flex min-h-15 min-w-full flex-col rounded-xl border border-zinc-800 bg-zinc-950/50 p-8"
                        >
                            <p className="flex-1 mb-6 text-xl leading-relaxed text-zinc-200">
                                "{item.quote}"
                            </p>

                            <p className="font-medium text-blue-300">
                                {item.author}
                            </p>

                            <p className="text-sm text-zinc-300">
                                {item.role}
                            </p>
                        </article>
                    ))}
                </div>
            </div>

            <div>
                {testimonials.map((item, index) => (
                    <button 
                        type="button"
                        key={item.author}
                        onClick={() => setActiveTestimonial(index)}
                        className={`h-2.5 mr-1 rounded-full transition-all ${
                            activeTestimonial === index
                                ? "w-8 bg-blue-300"
                                : "w-2.5 bg-zinc-600"
                        }`}
                        aria-label={`Ir para depoimento ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}