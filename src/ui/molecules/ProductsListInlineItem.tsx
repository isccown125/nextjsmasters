import React from "react";
import { ProductsListItemDescription } from "@/ui/atoms/ProductsListItem/ProductsListItemDescription";
import { type Product } from "@/ui/types";
import { ProductsListItemItemImage } from "@/ui/atoms/ProductsListItem/ProductsListItemImage";

type ProductListItemProps = Product;
export const ProductsListInlineItem = ({
	name,
	description,
	price,
	image,
}: ProductListItemProps) => {
	return (
		<li className="flex-grow-1 block w-[250px] snap-center overflow-hidden rounded shadow-sm sm:w-[400px]">
			<article>
				<div className="flex h-full w-full flex-col">
					<ProductsListItemItemImage {...image} />
					<ProductsListItemDescription name={name} description={description} price={price} />
				</div>
			</article>
		</li>
	);
};
