import React from "react";
import { ProductsListItemDescription } from "@/ui/atoms/ProductsListItem/ProductsListItemDescription";
import { type Product } from "@/ui/types";
import { ProductsListItemItemImage } from "@/ui/atoms/ProductsListItem/ProductsListItemImage";

type ProductListItemProps = Product;
export const ProductsListItem = ({ name, description, price, image }: ProductListItemProps) => {
	return (
		<li className="overflow-hidden rounded shadow-sm sm:w-full">
			<article>
				<div className="flex h-full w-full flex-col">
					<ProductsListItemItemImage {...image} />
					<ProductsListItemDescription name={name} description={description} price={price} />
				</div>
			</article>
		</li>
	);
};
