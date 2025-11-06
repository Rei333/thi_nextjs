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

				<div className="flex justify-center pt-[40px]">
					<PictureAnim img="/home_hero.jpg" alt="Pâtisserie Créative"/>
				</div>
			</section>

			<section className="reveal section104 flex !flex-row justify-between items-center gap-[80px]">
				<div className="flex flex-col w-[50%]">
					<h2 className="mb-[24px]">Notre pâtissière en chef</h2>

					<p className="mb-[40px]">Formée chez Lenôtre, Thi a longtemps évolué dans l’univers exigeant de la haute pâtisserie française.<br/><br/>
					Elle y apprend la rigueur, la précision du geste, le goût du détail. Mais avec le temps, elle sent que ce qui lui avait fait aimer ce métier lui échappe.<br/><br/>
					Tout bascule lors d’une pause professionnelle au Vietnam. Là-bas, au contact des gens et des saveurs, elle retrouve ce qui comptait vraiment : le partage, la gourmandise, la sincérité.<br/><br/>
					C’est de là qu’est née THI : une pâtisserie créative à la croisée de deux cultures.<br/><br/>
					Un lieu de vie à son image.<br/><br/>
					Subtile, généreuse et sincère.</p>

					<button className="btn primary">Voir la carte</button>
				</div>
				<Image src="/home_section.png" alt="Notre pâtissière" width={500} height={575} />
			</section>

			<section className="reveal delay-500 section104 flex !flex-row justify-between items-center gap-[80px]">
				<div className="flex flex-col w-[50%]">
					<h2 className="mb-[24px]">Reveal fade in 500ms</h2>
					<p>Reveal fade in 500ms</p>
				</div>
				<Image src="/home_section.png" alt="Notre pâtissière" width={500} height={575} />
			</section>
		</>
	);
}