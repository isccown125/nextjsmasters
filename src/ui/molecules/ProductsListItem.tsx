import React from "react";
import { type Route } from "next";
import { ProductsListItemDescription } from "@/ui/atoms/ProductsListItem/ProductsListItemDescription";
import { type Product } from "@/ui/types";
import { ProductsListItemItemImage } from "@/ui/atoms/ProductsListItem/ProductsListItemImage";
import { ActiveLink } from "@/ui/atoms/ActiveLink/ActiveLink";

type ProductListItemProps = {
	product: Product;
	href: Route;
};
export const ProductsListItem = ({
	product: { name, description, price, image },
	href,
}: ProductListItemProps) => {
	return (
		<li className="overflow-hidden rounded shadow-sm sm:w-full">
			<ActiveLink href={href} exact={true}>
				<article>
					<div className="flex h-full w-full flex-col">
						<ProductsListItemItemImage {...image} />
						<ProductsListItemDescription name={name} description={description} price={price} />
					</div>
				</article>
			</ActiveLink>
		</li>
	);
};
