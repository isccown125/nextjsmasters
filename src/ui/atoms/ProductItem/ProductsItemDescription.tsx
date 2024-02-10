import React from "react";
import { formatNumberCurrency } from "@/utils";

interface ProductsItemDescriptionProps {
	name: string;
	price: number;
	description: string;
}

const ProductsItemDescription = ({ name, description, price }: ProductsItemDescriptionProps) => {
	return (
		<div className="h-1/3 bg-slate-400 px-4 py-2">
			<div className="flex justify-between">
				<div>{name}</div>
				<div>{formatNumberCurrency(price, "pl-PL", "USD")}</div>
			</div>
			<div className="mt-2.5">{description}</div>
		</div>
	);
};

export default ProductsItemDescription;
