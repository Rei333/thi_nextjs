import type { Metadata } from "next";
import {supabaseServer} from "@/supabase/supabaseServer";
import ContactForm from "./form";

export const metadata: Metadata = {
	title: "Contact — THI",
	description: "Contactez la Pâtisserie THI.",
};

export default async function Contact() {
	return (
		<section className="section104">
			<h1 className="mb-[24px]">Contactez-nous !</h1>
			<ContactForm />
		</section>
	);
}