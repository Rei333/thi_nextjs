"use client"

import Link from "next/link";

export default function Error({error, reset}: { error: Error; reset: () => void }) {
    return (
        <section className="section104 gap-8">
            <h1 className="text-center mb-[32px]">Une erreur s'est produite 💔</h1>
            <div className="bg-[var(--foreground)] text-[var(--background)] p-[20px] rounded-[20px]">{error.message}</div>
            <div className="flex justify-center gap-[10px]">
                <Link href="/"><button className="btn primary">Accueil</button></Link>
                <button className="btn secondary" onClick={() => reset()}>Réessayer</button>
            </div>
        </section>
    )
}