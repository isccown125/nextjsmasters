import React from "react";
import { ActiveLink } from "@/ui/atoms/ActiveLink/ActiveLink";

export const Nav = () => {
	return (
		<nav className="inline-flex gap-2">
			<ActiveLink exact={false} href={"/"}>
				<span className="text-amber-50">home</span>
			</ActiveLink>
			<ActiveLink exact={false} href={"/products"}>
				<span className="text-amber-50">products</span>
			</ActiveLink>
		</nav>
	);
};
