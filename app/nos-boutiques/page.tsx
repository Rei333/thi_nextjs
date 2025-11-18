import type { Metadata } from "next";
import Store from "./Store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
	title: "Nos boutiques — THI",
	description: "Partout en France, retrouvez le meilleur des pâtisseries chez THI Pâtisserie",
};

export default async function Boutiques() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/stores`, {next: {revalidate: 30}});
    const datas = await res.json();
    const stores = datas.data;

	return (
		<>
			<section className="section80">
				<h1 className="mb-[40px]">Nos boutiques</h1>
                <h2 className="mb-[24px]">Nos pâtisseries dans toute la France</h2>
                <Store datas={stores ?? []} />
			</section>
		</>
	);
}