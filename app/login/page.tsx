"use client";

import { signIn } from "next-auth/react";

export default function Login() {

    return (
        <section className="section80 items-center gap-8">
            <h1>Connexion</h1>
            <button className="btn primary" onClick={() => signIn("google", { callbackUrl: "/" })}>Se connecter avec Google</button>
        </section>
    )
}