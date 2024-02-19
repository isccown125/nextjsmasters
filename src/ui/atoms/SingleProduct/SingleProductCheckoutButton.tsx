import React from "react";

type SingleProductCheckoutButtonProps = {
	children?: React.ReactNode;
};
export function SingleProductCheckoutButton({ children }: SingleProductCheckoutButtonProps) {
	return (
		<button className="rounded bg-amber-400 px-8 py-4 text-2xl font-bold text-black">
			{children}
		</button>
	);
}
