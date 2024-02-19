import React from "react";
import { Container } from "@/ui/atoms/utils/Container";
import { SingleProductPrice } from "@/ui/atoms/SingleProduct/SingleProductPrice";
import { SingleProductCheckoutButton } from "@/ui/atoms/SingleProduct/SingleProductCheckoutButton";

type SingleProductCheckoutSectionProps = {
	price: number;
};

export function SingleProductCheckoutSection({ price }: SingleProductCheckoutSectionProps) {
	return (
		<Container
			className={
				"ml-auto flex max-w-[500px] flex-col items-end justify-start gap-10 bg-slate-700 p-4 pr-10 pt-20"
			}
		>
			<SingleProductPrice price={price} locales={"pl-Pl"} typeCurrency={"USD"} />
			<SingleProductCheckoutButton>KUP TERAZ!</SingleProductCheckoutButton>
		</Container>
	);
}
