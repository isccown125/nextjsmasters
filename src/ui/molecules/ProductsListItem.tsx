import React from "react";
import ProductsItemImage from "@/ui/atoms/ProductItem/ProductsItemImage";
import ProductsItemDescription from "@/ui/atoms/ProductItem/ProductsItemDescription";
import { Product } from "@/ui/types";

type ProductListItemProps = Product;
const ProductsListItem = ({ name, description, price, image, id }: ProductListItemProps) => {
	return (
		<li
			key={id}
			className="h-[400px] w-[400px] max-w-72 snap-center overflow-hidden rounded-2xl bg-amber-200"
		>
			<article className="flex h-full flex-col">
				<ProductsItemImage {...image} />
				<ProductsItemDescription name={name} description={description} price={price} />
			</article>
		</li>
	);
};

export default ProductsListItem;
