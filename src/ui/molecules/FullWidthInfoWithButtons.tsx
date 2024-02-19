import React from "react";
import { Container } from "@/ui/atoms/utils/Container";
import { ActiveLink } from "@/ui/atoms/ActiveLink/ActiveLink";

type FullWidthInfoWithButtonsProps = {
	heading: string;
	description?: string;
	buttonText: string;
};
export const FullWidthInfoWithButtons = ({
	buttonText,
	heading,
	description,
}: FullWidthInfoWithButtonsProps) => {
	return (
		<article className="my-8 w-full bg-slate-700 py-10">
			<Container className="flex h-full flex-col items-center text-center">
				<h4 className="max-w-[600px] text-5xl font-bold text-amber-50">{heading}</h4>
				{description && <p className="mt-6 max-w-[900px] text-xl text-amber-50">{description}</p>}
				<ActiveLink exact href={"/products"}>
					<button className="mx-auto mt-4 w-fit max-w-[300px] bg-amber-300 px-5 py-3 font-bold uppercase text-black">
						{buttonText}
					</button>
				</ActiveLink>
			</Container>
		</article>
	);
};
