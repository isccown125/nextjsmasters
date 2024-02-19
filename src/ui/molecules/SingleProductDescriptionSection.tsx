import React from "react";
import { Container } from "@/ui/atoms/utils/Container";
import { SingleProductDescription } from "@/ui/atoms/SingleProduct/SingleProductDescription";
import { SingleProductDescriptionTitle } from "@/ui/atoms/SingleProduct/SingleProductDescriptionTitle";

type SingleProductDescriptionSectionProps = {
	children?: React.ReactNode;
	description: string;
};

export function SingleProductDescriptionSection({
	children,
	description,
}: SingleProductDescriptionSectionProps) {
	return (
		<Container className="mt-10 h-full">
			<SingleProductDescriptionTitle>Opis</SingleProductDescriptionTitle>
			<SingleProductDescription description={description}>{children}</SingleProductDescription>
		</Container>
	);
}
