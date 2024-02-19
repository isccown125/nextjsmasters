import React from "react";
import { formatNumberCurrency } from "@/utils";

type SingleProductPriceProps = {
	price: number;
	locales: string;
	typeCurrency: string;
};

export const SingleProductPrice = ({ price, locales, typeCurrency }: SingleProductPriceProps) => {
	return (
		<p className="w-min text-5xl font-bold text-amber-50">
			{formatNumberCurrency(price, locales, typeCurrency)}
		</p>
	);
};
