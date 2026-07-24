import { useEffect } from "react";

export function useAutoRotate(setter, itemLength, delayMs) {
    useEffect(() => {
        const interval = setInterval(() => {
            setter((prev) => (prev + 1) % itemLength)
        }, delayMs)

        return () => clearInterval(interval)
    }, [setter, itemLength, delayMs])
}