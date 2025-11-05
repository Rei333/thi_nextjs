"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		// Vérifie si un thème est stocké
		const saved = localStorage.getItem("theme");
		const initial = saved || "light";
		setTheme(initial);
		document.documentElement.classList.toggle("dark", initial === "dark");
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		document.documentElement.classList.toggle("dark", newTheme === "dark");
		localStorage.setItem("theme", newTheme);
	};

	return (
		<button
			onClick={toggleTheme}
			className="rounded-full bg-[var(--foreground)] px-4 py-2 shadow-md hover:bg-amber-600 transition"
		>
			{theme === "light" ? "🌙" : "☀️"}
		</button>
	);
}