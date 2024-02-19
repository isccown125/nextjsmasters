import React from "react";
type SingleProductDescriptionTitleProps = {
	children?: React.ReactNode;
};

export const SingleProductDescriptionTitle = ({ children }: SingleProductDescriptionTitleProps) => {
	return <h4 className="py-5 text-6xl font-bold uppercase text-amber-50">{children}</h4>;
};
