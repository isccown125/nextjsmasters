import React from "react";

interface ProductsListItemImageProps {
	alt: string;
	src: string;
}

export const ProductsListItemItemImage = ({ alt, src }: ProductsListItemImageProps) => {
	return (
		<div className="flex h-80 min-h-80 justify-center overflow-hidden bg-white">
			<img src={src} alt={alt} className="object-cover object-center transition hover:scale-125 " />
		</div>
	);
};
