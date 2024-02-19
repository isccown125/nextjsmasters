import React from "react";

type SingleProductDescriptionProps = {
	children?: React.ReactNode;
	description: string;
};

export const SingleProductDescription = ({
	children,
	description,
}: SingleProductDescriptionProps) => {
	return (
		<p aria-description={description} className={"text-2xl text-amber-50"}>
			{children}
		</p>
	);
};
