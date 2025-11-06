"use client";

import { useEffect, useState } from "react";
import { deleteEvent } from "@/actions/events";
import Link from "next/link";

type Event = {
    id: number;
    name: string;
    description: string | null;
    event_date_start: string | null;
    event_date_end: string | null;
};

function formatDate(dateStr: string | null) {
    if (!dateStr) return null;
    const date = new Date(dateStr);

    return date.toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}

async function handleDelete(id: number) {
    await deleteEvent(id);
}

export default function CardEvent({ datas }: { datas: Event[]}) {
    const [events, set_events] = useState<Event[]>([]);

    useEffect(() => {
        set_events(datas);
    }, [datas]);

	return (
        <div className="flex gap-[40px] flex-wrap">
            {events ? events.map(event => (
                <article key={event.id} className="flex flex-col gap-[8px] bg-[var(--backgroundDark)] w-[556px] p-[32px] border border-[var--(foreground)] rounded">
                    <h3>{event.name}</h3>
                    <p>{event.description}</p>
                    <span>{event.event_date_end ? "🎂 Du " + formatDate(event.event_date_start) + " au " + formatDate(event.event_date_end) : "🍰 Le " + formatDate(event.event_date_start)}</span>
                    <div className="flex justify-end items-center gap-[10px]">
                        <Link href={`/evenementiel/${event.id}/update`}><button className="btn secondary">Modifier</button></Link>
                        <button className="btn bg-[var(--foreground)] text-[var(--background)]" onClick={() => {
                            if(confirm("Voulez-vous vraiment supprimer cet évènement ?")) {
                                handleDelete(event.id)
                            }
                        }}>Supprimer</button>
                    </div>
                </article>
            )) : <span>🍰 Pas d'évènement en ce moment !</span>}
        </div>
	);
}