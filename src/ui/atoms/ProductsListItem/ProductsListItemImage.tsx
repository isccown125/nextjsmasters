import React from "react";

interface ProductsListItemImageProps {
	alt: string;
	src: string;
}

export const ProductsListItemItemImage = ({ alt, src }: ProductsListItemImageProps) => {
	return (
		<div className="flex h-2/3 items-center justify-center overflow-hidden">
			<img src={src} alt={alt} className="h-full w-full" />
		</div>
	);
};
