import React from "react";

export const Spinner = () => {
	return (
		<span
			aria-busy={true}
			className="aspect-square h-full w-full animate-spin rounded-full border-[30px] border-amber-300 border-t-amber-600"
		/>
	);
};
