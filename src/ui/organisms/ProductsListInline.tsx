import React from "react";
import { type Product } from "@/ui/types";
import { ProductsListItem } from "@/ui/molecules/ProductsListItem";
import { SectionHeading } from "@/ui/atoms/typography/SectionHeading";

type ProductListProps = {
	products: Product[];
	heading: string;
};
export const ProductsListInline = ({ products, heading }: ProductListProps) => {
	return (
		<section className="h-full` flex justify-center p-4">
			<div className="container">
				<SectionHeading>{heading}</SectionHeading>
				<ul
					data-testid="products-list"
					className="mx-auto my-2 grid w-[350px] snap-x auto-cols-max grid-flow-col gap-5 overflow-x-auto py-4 md:w-full"
				>
					{products.map((product) => (
						<ProductsListItem key={product.id} {...product} />
					))}
				</ul>
			</div>
		</section>
	);
};
