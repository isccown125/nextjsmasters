import React from "react";

type SingleProductDescriptionProps = {
	children?: React.ReactNode;
};

export const SingleProductDescription = ({ children }: SingleProductDescriptionProps) => {
	return <p className={"text-2xl text-amber-50"}>{children}</p>;
};
