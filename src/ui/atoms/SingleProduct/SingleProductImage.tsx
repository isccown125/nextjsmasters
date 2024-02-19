import React, { Suspense } from "react";
import { Spinner } from "@/ui/atoms/Loader/Spinner";

type SingleProductImageProps = {
	alt: string;
	src: string;
};

export function SingleProductImage({ alt, src }: SingleProductImageProps) {
	return (
		<div className="max-h-[600px] bg-white">
			<Suspense fallback={<Spinner />}>
				<img src={src} alt={alt} className="h-full w-full object-contain object-center" />
			</Suspense>
		</div>
	);
}
