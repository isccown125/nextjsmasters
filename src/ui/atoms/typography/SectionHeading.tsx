import React from "react";

interface SectionHeadingProps {
	children?: React.ReactNode;
}

export const SectionHeading = ({ children }: SectionHeadingProps) => {
	return (
		<h4 className="my-4 text-center text-4xl font-bold text-amber-300 sm:text-left">{children}</h4>
	);
};
