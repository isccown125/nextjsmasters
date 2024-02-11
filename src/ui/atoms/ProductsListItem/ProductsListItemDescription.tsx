import React from "react";
import { formatNumberCurrency } from "@/utils";

interface ProductsItemDescriptionProps {
	name: string;
	price: number;
	description: string;
}

export const ProductsListItemDescription = ({
	name,
	description,
	price,
}: ProductsItemDescriptionProps) => {
	return (
		<div className="h-1/3 bg-slate-400 px-4 py-2">
			<div className="flex justify-between">
				<h3 role="heading" className="font-bold">
					{name}
				</h3>
				<p className="font-medium">{formatNumberCurrency(price, "pl-PL", "USD")}</p>
			</div>
			<p className="mt-2.5">{description}</p>
		</div>
	);
};
