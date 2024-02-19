import React from "react";
import { Nav } from "@/ui/molecules/Nav";
import { Logo } from "@/ui/molecules/Logo";

export function Navigation() {
	return (
		<header className="flex h-24 items-center justify-center bg-slate-800 px-4">
			<div className="container flex h-full flex-col items-center justify-evenly sm:flex-row sm:justify-between">
				<Logo />
				<Nav />
			</div>
		</header>
	);
}
