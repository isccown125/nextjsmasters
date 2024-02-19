"use client";
import React, { type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type ActiveLinkProps = {
	href: string;
	children?: ReactNode;
	exact: boolean;
};

export const ActiveLink = ({ href, children, exact = false }: ActiveLinkProps) => {
	let currentLink = usePathname();

	if (!exact) {
		const link = currentLink.split("/");
		link.splice(2);
		currentLink = link.join("/");
	}

	return (
		<Link
			href={href}
			className={clsx(
				{
					underline: currentLink === href,
				},
				"font-bold uppercase decoration-amber-300  decoration-2",
			)}
		>
			{children}
		</Link>
	);
};
