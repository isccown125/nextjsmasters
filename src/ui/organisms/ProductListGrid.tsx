import React from "react";
import { type Route } from "next";
import { type Product } from "@/ui/types";
import { ProductsListItem } from "@/ui/molecules/ProductsListItem";
import { SectionHeading } from "@/ui/atoms/typography/SectionHeading";

type ProductListGridProps = {
	products: Product[];
	heading: string;
};
export function ProductsListGrid({ products, heading }: ProductListGridProps) {
	let dynamicContent;

	if (products.length <= 0) {
		dynamicContent = <h1>Nie ma tu czego szukać ;/</h1>;
	} else {
		dynamicContent = (
			<ul
				data-testid="products-list"
				className="my-2 flex snap-x flex-col justify-center gap-5 py-4 sm:grid sm:grid-cols-2 sm:justify-evenly sm:px-5 md:mx-auto md:grid-cols-3 lg:grid-cols-4 lg:justify-center"
			>
				{products.map((product) => {
					return (
						<ProductsListItem
							product={product}
							key={product.id}
							href={`/product/${product.id}` as Route}
						/>
					);
				})}
			</ul>
		);
	}

	return (
		<section className="h-full` flex justify-center p-4">
			<div className="container">
				<SectionHeading>{heading}</SectionHeading>
				{dynamicContent}
			</div>
		</section>
	);
}
