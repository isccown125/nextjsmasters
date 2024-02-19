import React from "react";

import { Container } from "@/ui/atoms/utils/Container";
import { ActiveLink } from "@/ui/atoms/ActiveLink/ActiveLink";

export function Footer() {
	return (
		<footer className="static bottom-0  min-h-[100px] bg-slate-900 py-5">
			<Container className="flex flex-col items-center justify-between gap-6 px-4 sm:h-[50px] sm:flex-row sm:gap-0">
				<h4 className="text-3xl font-bold text-amber-300">SHOPLAND</h4>
				<div className="flex gap-4">
					<ActiveLink exact href={"/regulamin"}>
						<span className={"text-amber-50"}>Regulamin</span>
					</ActiveLink>
					<ActiveLink exact href={"/polityka-prywatnosci"}>
						<span className={"text-amber-50"}>Polityka prywatności</span>
					</ActiveLink>
				</div>
			</Container>
		</footer>
	);
}
