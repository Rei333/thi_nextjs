import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Polices locales
const manrope = localFont({
	src: "../public/fonts/Manrope/static/Manrope-Regular.ttf",
	variable: "--font-manrope",
	display: "swap",
});

const goudy = localFont({
	src: "../public/fonts/Goudy/GoudyBookletter1911-Regular.ttf",
	variable: "--font-goudy",
	display: "block",
});

export const metadata: Metadata = {
	title: "THI",
	description: "Pâtisserie créative à Muret",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="fr" className={`${manrope.variable} ${goudy.variable}`}>
			<body className="antialiased">
				<Header />
				<main className="container">{children}</main>
				<Footer />
			</body>
		</html>
	);
}