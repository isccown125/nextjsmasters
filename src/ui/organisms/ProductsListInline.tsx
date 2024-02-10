import React from "react";
import { type Product } from "@/ui/types";
import { ProductsListItem } from "@/ui/molecules/ProductsListItem";

type ProductListProps = {
	products: Product[];
	heading: string;
};
export const ProductsListInline = ({ products, heading }: ProductListProps) => {
	return (
		<section className="h-full` flex justify-center p-4">
			<div className="container">
				<h4 className="my-4 text-4xl font-bold text-amber-300">{heading}</h4>
				<ul
					data-testid="products-list"
					className="mx-auto my-2 grid w-full snap-x auto-cols-max grid-flow-col gap-5 overflow-x-auto py-4"
				>
					{products.map((product) => (
						<ProductsListItem key={product.id} {...product} />
					))}
				</ul>
			</div>
		</section>
	);
};
