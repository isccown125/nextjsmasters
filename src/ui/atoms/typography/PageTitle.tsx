import React from "react";

interface PageTitleProps {
	children?: React.ReactNode;
}

export const PageTitle = ({ children }: PageTitleProps) => {
	return (
		<h4 className="w-fit p-0 text-center text-3xl font-bold text-amber-300 sm:text-5xl">
			{children}
		</h4>
	);
};
