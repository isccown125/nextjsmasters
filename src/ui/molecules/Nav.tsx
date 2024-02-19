import React from "react";
import { ActiveLink } from "@/ui/atoms/ActiveLink/ActiveLink";

export const Nav = () => {
	return (
		<nav role="navigation" className="inline-flex gap-2">
			<ActiveLink exact={false} aria-description="Home" href={"/"}>
				<span className="text-amber-50">Home</span>
			</ActiveLink>
			<ActiveLink exact={false} aria-description="All" href={"/products"}>
				<span className="text-amber-50">All</span>
			</ActiveLink>
		</nav>
	);
};
