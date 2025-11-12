"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { data: session, status } = useSession();

    return (
        <header className="fixed top-0 left-0 z-50 bg-[var(--background)] w-full border-b border-b-[var(--foreground)] px-[5%]">
            <div className="relative flex justify-between max-w-[1152] m-auto py-3">
                <Link href="/" aria-label="Accueil">
                    <Image src="/thi_logo.svg" alt="logo" width={75} height={30} />
                </Link>

                <div className="flex gap-2">
                    {/* MENU BURGER */}
                    <button className="block desk:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        <Image src={`burger_${menuOpen ? "close" : "open"}.svg`} alt="Ouvrir/fermer le menu" width={34} height={34} />
                    </button>

                    {/* NAVBAR */}
                    <nav className={`${menuOpen ? "open" : ""} gap-10 items-center font-semibold underline-offset-8`}>
                        <Link href="/evenementiel" className="hover:underline">Évènementiel</Link>
                        <Link href="/partenaires" className="hover:underline">Nos partenaires</Link>
                        <Link href="#nous-trouver" className="hover:underline">Où nous trouver</Link>
                        <button className="btn primary">Voir la carte</button>
                        <Link href={session ? "/logout" : "/login"}><button className="btn secondary mt-[-15px] desk:mt-0 desk:ml-[-30px]">{session ? "Déconnexion" : "Connexion"}</button></Link>
                    </nav>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}