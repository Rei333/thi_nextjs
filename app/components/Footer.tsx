import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[var(--foreground)] w-full px-[5%]">
            <div className="flex flex-col max-w-[1152] m-auto text-[var(--background)]">
                <div className="flex flex-col tab:flex-row gap-[32px] tab:justify-between py-[40px]">
                    <div className="flex flex-col gap-[4px]">
                        <h4>Horaires</h4>
                        <span>Mar. - Sam. : 8h - 19h</span>
                        <span>Dim. : 9h30 - 13h</span>
                    </div>

                    <div className="flex flex-col gap-[4px]">
                        <h4>Adresse</h4>
                        <span>31 avenue des Pyrénées</span>
                        <span>31600 Muret</span>
                    </div>

                    <div className="flex flex-col gap-[4px]">
                        <h4>Téléphone</h4>
                        <span>05.34.53.06.56</span>
                    </div>
                </div>

                <Image src="/footer_banner.jpg" alt="logo" width={1152} height={533} />

                <div className="flex flex-col tab:flex-row justify-between gap-[24px] py-[40px]">
                    <nav className="flex flex-col tab:flex-row gap-[24px] tab:gap-10 tab:items-center underline-offset-8 decoration-[var(--background)] w-fit">
                        <Link className="hover:underline" href="/evenementiel">Évènementiel</Link>
                        <Link className="hover:underline" href="/partenaires">Nos partenaires</Link>
                        <Link className="hover:underline" href="/contact">Nous contacter</Link>
                    </nav>

                    <div className="flex items-center gap-[16px]">
                        <span className="surtitre">Nous suivre sur :</span>
                        <Link href="https://facebook.com" target="_blank">
                            <Image src="/rs_facebook.svg" alt="Facebook" width={24} height={24}/>
                        </Link>
                        <Link href="https://instagram.com" target="_blank">
                            <Image src="/rs_instagram.svg" alt="Instagram" width={24} height={24}/>
                        </Link>
                        <Link href="https://linkedin.com" target="_blank">
                            <Image src="/rs_linkedin.svg" alt="LinkedIn" width={24} height={24}/>
                        </Link>
                        <Link href="https://youtube.com" target="_blank">
                            <Image src="/rs_youtube.svg" alt="YouTube" width={24} height={24}/>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col tab:flex-row justify-between gap-[16px] py-[20px] text-[14px] border-t border-t-[var(--background)]">
                    <nav className="flex gap-10 items-center">
                        <Link href="/politique-de-confidentialite">Politique de confidentialité</Link>
                        <Link href="/mentions-legales">Mentions légales</Link>
                    </nav>

                    <span>Un site imaginé et réalisé avec ❤️ par <Link href="https://standout-france.fr" target="_blank">StandOut</Link></span>
                </div>
            </div>
        </footer>
    )
}