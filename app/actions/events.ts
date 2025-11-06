"use server";

import {supabaseServer} from "@/supabase/supabaseServer";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createEvent(datas: FormData) {
    const name = datas.get("name");
    const desc = datas.get("desc");
    const start = datas.get("date_start");
    const end = datas.get("date_end");

    await supabaseServer.from("events").insert([{"name": name, "description": desc, "event_date_start": start, "event_date_end": end || null}]);
    redirect("/evenementiel");
}

export async function updateEvent(datas: FormData, id: string) {
    const name = datas.get("name");
    const desc = datas.get("desc");
    const start = datas.get("date_start");
    const end = datas.get("date_end");

    await supabaseServer.from("events").update([{"name": name, "description": desc, "event_date_start": start, "event_date_end": end || null}]).eq("id", id);
    redirect("/evenementiel");
}

export async function deleteEvent(id: number) {
    await supabaseServer.from("events").delete().eq("id", id);
    revalidatePath("/evenementiel");
}