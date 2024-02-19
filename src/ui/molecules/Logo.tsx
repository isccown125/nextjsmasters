import React from "react";
import Link from "next/link";
import { PageTitle } from "@/ui/atoms/typography/PageTitle";

export const Logo = () => {
	return (
		<Link href={"/"}>
			<PageTitle>SHOPLAND</PageTitle>
		</Link>
	);
};
