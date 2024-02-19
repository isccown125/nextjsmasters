import React from "react";
import { type Route } from "next";
import { type Product } from "@/ui/types";
import { SectionHeading } from "@/ui/atoms/typography/SectionHeading";
import { ProductsListInlineItem } from "@/ui/molecules/ProductsListInlineItem";
import { ActiveLink } from "@/ui/atoms/ActiveLink/ActiveLink";

type ProductListProps = {
	products: Product[];
	heading: string;
};
export function ProductsListInline({ products, heading }: ProductListProps) {
	return (
		<section className="flex h-full w-full justify-center p-4">
			<div className="container">
				<SectionHeading>{heading}</SectionHeading>
				<ul data-testid="products-list" className="flex snap-x gap-8 overflow-x-scroll px-5">
					{products.map((product) => (
						<ActiveLink key={product.id} exact href={("/product/" + product.id) as Route}>
							<ProductsListInlineItem key={product.id} {...product} />
						</ActiveLink>
					))}
				</ul>
			</div>
		</section>
	);
}
