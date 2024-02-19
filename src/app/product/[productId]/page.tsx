import React from "react";
import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { getProductById } from "@/api/functions";
import { SingleProductPageImageAndPriceSectionColumn } from "@/ui/organisms/SingleProductPageImageAndPriceSectionColumn";
import { SingleProductDescriptionSection } from "@/ui/molecules/SingleProductDescriptionSection";

interface SingleProductPageProps {
	params: {
		productId: string;
	};
}

export async function generateMetadata({ params }: SingleProductPageProps): Promise<Metadata> {
	const product = await getProductById(params.productId);

	return {
		title: `${product?.name} -  ${product?.description}`,
		description: product?.description,
	};
}

const Page = async ({ params: { productId } }: SingleProductPageProps) => {
	const product = await getProductById(productId);

	if (product === null) {
		return notFound();
	}

	return (
		<>
			<SingleProductPageImageAndPriceSectionColumn
				title={product.name}
				image={product.image}
				price={product.price}
			/>
			<SingleProductDescriptionSection description={product.description}>
				{product.description}
			</SingleProductDescriptionSection>
		</>
	);
};

export default Page;
