"use client";

import { signIn, useSession  } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
    const { data: session } = useSession();
    const router = useRouter();
    useEffect(() => {if (session) router.replace("/")}, [session]);

    return (
        <section className="section80 items-center gap-8">
            <h1>Connexion</h1>
            <button className="btn primary" onClick={() => signIn("google", { callbackUrl: "/" })}>Se connecter avec Google</button>
        </section>
    )
}