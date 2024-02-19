import React, { type MouseEventHandler } from "react";

type PaginationButtonProps = {
	children?: React.ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const PaginationButton = ({ children, onClick }: PaginationButtonProps) => {
	return (
		<button onClick={onClick} className="aspect-square bg-amber-300 px-2 text-3xl text-black">
			{children}
		</button>
	);
};
