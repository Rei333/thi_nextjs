"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/supabase/supabaseClient";

type Store = {
    id: number;
    address: string;
    city: string;
    zip: number;
    phone: string;
    mail: string;
};

const list_emotes = ["🍓", "🍫", "🥚", "🧈", "🫓", "🍞", "🍪", "🔥", "🍩"];

function emote(nb: number) {
    let arr = [];
    for(let i = 0; i < nb; i++) {
        arr.push(list_emotes[Math.floor(Math.random() * list_emotes.length)]);
    }
    return arr;
}

export default function Store({ datas }: { datas: Store[]}) {
    const [stores, set_stores] = useState<Store[]>(datas);
    const [emotes, set_emotes] = useState<string[]>([]);

    useEffect(() => {
        const channel = supabase.channel("stores");
        channel.on(
            "postgres_changes", { event: "*", schema: "public", table: "stores" }, async (payload) => {
                const { data, error } = await supabase.from("stores").select("*");
                if (error) throw error;
                set_stores(data || []);
            }
        ).subscribe();

        return () => {supabase.removeChannel(channel)};
    }, []);

    useEffect(() => {
        set_emotes(emote(stores.length));
    }, [])

	return (
        <div className="flex gap-[40px] flex-wrap">
            {stores.map((store, index) => (
                <article key={store.id} className="flex flex-col gap-[8px] bg-[var(--backgroundDark)] w-[556px] p-[32px] border border-[var--(foreground)] rounded">
                    <h3 className="mb-[8px]">{emotes[index]} THI Pâtisserie {store.city}</h3>
                    <span>📍 {store.address}, {store.zip} {store.city}</span>
                    <span>📞 {store.phone}</span>
                    <span>📧 {store.mail}</span>
                </article>
            ))}
        </div>
	);
}