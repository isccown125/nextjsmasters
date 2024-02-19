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
		<div className="flex h-32 flex-col justify-between overflow-hidden bg-slate-400 px-4 py-2 text-amber-300 2xl:h-24">
			<div className="flex grid-cols-2 flex-col sm:grid sm:justify-items-end ">
				<div className="w-fit">
					<h3 role="heading" className=" font-bold">
						{name}
					</h3>
				</div>
				<div>
					<p className="font-medium">{formatNumberCurrency(price, "pl-PL", "USD")}</p>
				</div>
			</div>
			<div>
				<p className="mt-2.5 overflow-hidden text-ellipsis whitespace-nowrap">{description}</p>
			</div>
		</div>
	);
};
