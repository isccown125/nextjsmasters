import React from "react";

interface PageTitleProps {
	children?: React.ReactNode;
}

const PageTitle = ({ children }: PageTitleProps) => {
	return <h1 className="p-0 text-center text-5xl font-bold text-amber-300">{children}</h1>;
};

export default PageTitle;
