"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealOnScroll() {
    const pathname = usePathname();

    useEffect(() => {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add("is_visible");
                    io.unobserve(e.target); // déclenche une seule fois
                }
            });
        }, { threshold: 0.15 });

        const observeAll = () => {
            document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => io.observe(el));
        };

        observeAll();

        const mo = new MutationObserver(observeAll);
        mo.observe(document.body, { childList: true, subtree: true });

        return () => {
            io.disconnect();
            mo.disconnect();
        };
    }, [pathname]);

    return null;
}