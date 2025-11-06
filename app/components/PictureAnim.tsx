"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from 'react';

export default function PictureAnim({img, alt}: {img: string, alt: string}) {
    const [anim_width, set_width] = useState(50);
    const picture_anim = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const on_scroll = () => {
            if (!picture_anim.current) return;

            const rect = picture_anim.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Bottom de l'image par rapport au top du viewport
            const imgBottom = rect.bottom;

            // Progress de 0 à 1 basé sur la position de l'image
            const scrollStart = windowHeight; // Image commence à entrer
            const scrollEnd = windowHeight * 0.5; // 50% du haut = 100%

            const progress = Math.min(Math.max((scrollStart - imgBottom) / (scrollStart - scrollEnd), 0), 1);
            const newWidth = 50 + progress * 50;

            set_width(newWidth);
        };

        on_scroll();
        window.addEventListener('scroll', on_scroll);
        return () => window.removeEventListener('scroll', on_scroll);
    }, []);

    return (
        <div ref={picture_anim} style={{ width: `${anim_width}%` }} className="relative h-[700px]">
            <Image src={img} alt={alt} fill className="object-cover" />
        </div>
    );
}