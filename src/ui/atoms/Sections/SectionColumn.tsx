import React from "react";
type SectionColumnProps = {
	columns: number;
	children?: React.ReactNode;
	gap?: number;
};

export const SectionColumn = ({ columns, children, gap }: SectionColumnProps) => {
	return (
		<div
			className={`grid grid-cols-1 sm:grid-cols-${columns} gap-[${gap}px]`}
			style={{ gap: gap + "px" }}
		>
			{children}
		</div>
	);
};
