import { useEffect } from "react";

/**
 * Revela elementos com o atributo `data-reveal`
 * quando entram na área visível da tela.
 * 
 * @param {number} threshold Percentual mínimo do elemento visível
 */

export function useRevealOnScroll(threshold = 0.16) {
    useEffect(() => {
        const elements = document.querySelectorAll('[data-reveal]');

        if (!elements.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                     
                    entry.target.classList.add('reveal-visible');
                    observer.unobserve(entry.target);
                });
            },
            { threshold }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, [threshold])
}