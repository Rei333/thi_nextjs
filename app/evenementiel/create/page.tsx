"use client";

import { createEvent } from "@/actions/events";
import FormEvent from "../form";

async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const datas = new FormData(event.currentTarget);
    await createEvent(datas);
}

export default function AddForm() {
    return (
        <section className="section104 gap-[40px]">
            <h1>Ajouter un évènement</h1>
            <FormEvent onSubmit={(event) => handleSubmit(event)} />
        </section>
    );
}