import React from "react";
import { type Product } from "@/ui/types";
import { ProductsListItem } from "@/ui/molecules/ProductsListItem";
import { SectionHeading } from "@/ui/atoms/typography/SectionHeading";

type ProductListGridProps = {
	products: Product[];
	heading: string;
};
export const ProductsListGrid = ({ products, heading }: ProductListGridProps) => {
	return (
		<section className="h-full` flex justify-center p-4">
			<div className="container">
				<SectionHeading>{heading}</SectionHeading>
				<ul
					data-testid="products-list"
					className="grid-cols-fit lg`:justify-center mx-auto my-2 grid w-full snap-x justify-center gap-5 py-4 sm:justify-evenly"
				>
					{products.map((product) => (
						<ProductsListItem key={product.id} {...product} />
					))}
				</ul>
			</div>
		</section>
	);
};
