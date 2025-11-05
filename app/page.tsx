import Image from "next/image";
import type { Metadata } from "next";
import PictureAnim from "@/components/PictureAnim";

export const metadata: Metadata = {
	title: "Page d'accueil — THI",
	description: "Découvrez nos pâtisseries fines et audacieuses à Muret.",
};

export default function Home() {
	return (
		<>
			<section className="section80 !pb-[24px]">
				<div className="flex flex-col desk:flex-row justify-between">
					<div>
						<span className="surtitre">Thi Pâtisserie</span>
						<h1>Pâtisserie<br />créative à Muret</h1>
					</div>

					<div className="flex flex-col gap-[24px] w-[450px]">
						<p>Chez THI, chacune de nos créations conjugue la tradition française et l'originalité de saveurs d'ailleurs. Savourez des pâtisseries fines, audacieuses et surprenantes qui éveillent vos sens et ravivent le plaisir du partage, dans un lieu de vie hors du temps.</p>
						<button className="btn primary">Voir la carte</button>
					</div>
				</div>

				<div className="flex justify-center h-[700px] pt-[40px]">
					<PictureAnim img="/home_hero.jpg" alt="Pâtisserie Créative"/>
				</div>
			</section>
		</>
	);
}