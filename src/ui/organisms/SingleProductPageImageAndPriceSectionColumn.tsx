import React from "react";
import { SectionColumn } from "@/ui/atoms/Sections/SectionColumn";
import { SingleProductImageSection } from "@/ui/molecules/SingleProductImageSection";
import { SingleProductCheckoutSection } from "@/ui/molecules/SingleProductCheckoutSection";

type SingleProductPageImageAndPriceSectionProps = {
	image: {
		alt: string;
		src: string;
	};
	price: number;
	title: string;
};

export function SingleProductPageImageAndPriceSectionColumn({
	image,
	price,
	title,
}: SingleProductPageImageAndPriceSectionProps) {
	return (
		<SectionColumn columns={2} gap={20}>
			<SingleProductImageSection title={title} image={image} />
			<SingleProductCheckoutSection price={price} />
		</SectionColumn>
	);
}
