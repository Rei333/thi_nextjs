"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealOnScroll() {
    const pathname = usePathname();

    useEffect(() => {
        const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
        const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add("is_visible");
                    io.unobserve(e.target); // déclenche une seule fois
                }
            });
        }, { threshold: 0.15 });

        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, [[pathname]]);
    return null;
}