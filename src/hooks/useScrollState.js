import { useEffect, useState } from "react";

/**
 * Controla estados relacionados ao scroll da página.
 * 
 * @param {number} headerOffset Distância para ativar o header.
 * @param {number} topButtonOffset Distância para exibir o botão "voltar ao topo".
 */

export function useScrollState(
    headerOffset = 10,
    topButtonOffset = 420
) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showTopButton, setShowTopButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > headerOffset);
            setShowTopButton(window.scrollY > topButtonOffset);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [headerOffset, topButtonOffset]);

    return { isScrolled, showTopButton };
}