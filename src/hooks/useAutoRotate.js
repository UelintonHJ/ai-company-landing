import { useEffect } from "react";

/**
 * Rotaciona automaticamente um índice utilizando um intervalo.
 * @param {Function} setActiveItem Setter do useState.
 * @param {number} itemCount Quantidade total de itens. 
 * @param {number} intervalMs Intervalo em milissegundos. 
 */

export function useAutoRotate(setActiveItem, itemCount, intervalMs) {
    useEffect(() => {
        if (itemCount <= 1) return;

        const interval = setInterval(() => {
            setActiveItem((prev) => (prev + 1) % itemCount);
        }, intervalMs);

        return () => clearInterval(interval);
    }, [setActiveItem, itemCount, intervalMs]);
}