import React from "react";
import { SingleProductImage } from "@/ui/atoms/SingleProduct/SingleProductImage";

type SingleProductImageSection = {
	image: {
		src: string;
		alt: string;
	};
	title: string;
};

export function SingleProductImageSection({ image, title }: SingleProductImageSection) {
	return (
		<div className="bg-slate-700 p-4">
			<div className="flex h-full w-full flex-col gap-20">
				<SingleProductImage {...image} />
				<h1 className="text-3xl font-bold text-amber-50">{title}</h1>
			</div>
		</div>
	);
}
