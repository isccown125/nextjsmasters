import React from "react";
import clsx from "clsx";

interface ContainerProps {
	children?: React.ReactNode;
	className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
	return <div className={clsx("container mx-auto", className)}>{children}</div>;
};
