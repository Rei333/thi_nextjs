import type { Metadata } from "next";
import {supabaseServer} from "@/supabase/supabaseServer";
import CardEvent from "./CardEvent";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Évènementiel — THI",
	description: "Découvrez nos pâtisseries fines et audacieuses à Muret.",
};

export default async function Evenementiel() {
    const { data: events, error } = await supabaseServer.from("events").select("*");
    if (error) console.error("Erreur Supabase :", error);

	return (
		<>
			<section className="section80">
				<h1 className="mb-[16px]">Nos évènements</h1>
                <span className="mb-[40px]">Découvrez nos évènements :</span>

                <CardEvent datas={events ?? []} />
			</section>
            <section className="section80 items-center gap-[16px]">
                <h2>Ajouter un nouvel évènement</h2>
                <span className="text-center">Votre évènement n'est pas encore répertorié sur notre site ?<br />
                Vous pouvez l'ajouter en cliquant sur ce lien : <Link href="/evenementiel/create" className="underline">Ajouter mon évènement</Link>.</span>
            </section>
		</>
	);
}