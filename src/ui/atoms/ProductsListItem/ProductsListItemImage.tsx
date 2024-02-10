import React from "react";

interface ProductsListItemImageProps {
	alt: string;
	src: string;
}

export const ProductsListItemItemImage = ({ alt, src }: ProductsListItemImageProps) => {
	return (
		<div className="relative flex h-2/3 items-center justify-center overflow-hidden bg-white">
			<img src={src} alt={alt} className="absolute h-full transition hover:scale-125" />
		</div>
	);
};
