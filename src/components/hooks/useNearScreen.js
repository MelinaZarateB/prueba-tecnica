'use client'
import { useEffect, useState } from "react";

function useNearScreen (elementRef) {
    const [nearScreen, setNearScreen] = useState()

    useEffect(() => {
        const onChange = (entries) => {
            const entry = entries[0];
            setNearScreen(entry.isIntersecting); // booleano (true/false)
        };

        const observer = new IntersectionObserver(onChange, {
            rootMargin: '50px'
        });

        observer.observe(elementRef.current) // que observe el elemento con la referencia
        return () => observer.disconnect() // limpia el evento cuando se desmonta el component

    }, [])
    return nearScreen
}
export default useNearScreen;