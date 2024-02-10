import React from "react";
import { PageTitle } from "@/ui/atoms/typography/PageTitle";

export const Navigation = () => {
	return (
		<header className="flex h-24 items-center justify-center bg-slate-800 px-4">
			<div className="container">
				<PageTitle>SHOPLAND</PageTitle>
			</div>
		</header>
	);
};
