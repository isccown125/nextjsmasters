import React from "react";
import { Container } from "@/ui/atoms/utils/Container";
import { SingleProductDescription } from "@/ui/atoms/SingleProduct/SingleProductDescription";
import { SingleProductDescriptionTitle } from "@/ui/atoms/SingleProduct/SingleProductDescriptionTitle";

type SingleProductDescriptionSectionProps = {
	children?: React.ReactNode;
};

export function SingleProductDescriptionSection({
	children,
}: SingleProductDescriptionSectionProps) {
	return (
		<Container className="mt-10 h-full">
			<SingleProductDescriptionTitle>Opis</SingleProductDescriptionTitle>
			<SingleProductDescription>{children}</SingleProductDescription>
		</Container>
	);
}
