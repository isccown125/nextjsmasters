import React from "react";

interface ProductsItemImage {
	alt: string;
	src: string;
}

const ProductItemImage = ({ alt, src }: ProductsItemImage) => {
	return (
		<div className="flex h-2/3 items-center justify-center overflow-hidden">
			<img src={src} alt={alt} className="h-full w-full" />
		</div>
	);
};

export default ProductItemImage;
