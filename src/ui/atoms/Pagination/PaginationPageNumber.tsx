import React from "react";
type PaginationPageNumberProps = {
	children?: React.ReactNode;
};
export function PaginationPageNumber({ children }: PaginationPageNumberProps) {
	return (
		<span className=" flex-grow-1 aspect-square h-full w-[30px]  p-3 text-3xl hover:bg-white">
			{children}
		</span>
	);
}
