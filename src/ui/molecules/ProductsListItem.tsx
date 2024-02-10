import React from "react";
import { ProductsListItemDescription } from "@/ui/atoms/ProductsListItem/ProductsListItemDescription";
import { type Product } from "@/ui/types";
import { ProductsListItemItemImage } from "@/ui/atoms/ProductsListItem/ProductsListItemImage";

type ProductListItemProps = Product;
export const ProductsListItem = ({ name, description, price, image }: ProductListItemProps) => {
	return (
		<li className="h-[400px] w-[400px] max-w-72 snap-center overflow-hidden rounded-2xl bg-amber-200">
			<article className="flex h-full flex-col">
				<ProductsListItemItemImage {...image} />
				<ProductsListItemDescription name={name} description={description} price={price} />
			</article>
		</li>
	);
};
