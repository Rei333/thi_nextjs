"use client";

import { useEffect, useState } from "react";
import { updateEvent } from "@/actions/events";
import FormEvent from "../../form";
import { supabase } from "@/supabase/supabaseClient";
import Link from "next/link";
import { useParams } from "next/navigation";

async function handleSubmit(event: React.FormEvent<HTMLFormElement>, id: string) {
    const datas = new FormData(event.currentTarget);
    await updateEvent(datas, id);
}

export default function UpdateForm() {
    const { id } = useParams<{ id: string }>();
    const [event, setEvent] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchEvent() {
            const { data, error } = await supabase.from("events").select("*").eq("id", id).single();
            if (error) {
                console.error("Erreur Supabase :", error);
            } else {
                setEvent(data);
            }

            setLoading(false);
        }

        fetchEvent();
    }, [id]);

    if (loading) return (
        <section className="section104 justify-center items-center">
            <h1>Chargement 🍰</h1>
        </section>
    );

    if (!event) return (
        <section className="section104 justify-center items-center gap-[40px]">
            <h1>Pas d'évènement trouvé 🍰</h1>
            <Link href="/evenementiel"><button className="btn secondary">Revenir sur les évènements</button></Link>
        </section>
    );

    return (
        <section className="section104 gap-[40px]">
            <h1>Modifier un évènement</h1>
            <FormEvent onSubmit={(event) => handleSubmit(event, id)} values={event} />
        </section>
    );
}