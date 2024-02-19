import React from "react";

type StaticLayoutProps = {
	children?: React.ReactNode;
};

const StaticLayout = ({ children }: StaticLayoutProps) => {
	return <div>{children}</div>;
};

export default StaticLayout;
