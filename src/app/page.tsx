import type { Metadata } from "next";
import { ProductsListInline } from "@/ui/organisms/ProductsListInline";
import { getProductsList } from "@/api/functions";
import { FullWidthInfoWithButtons } from "@/ui/molecules/FullWidthInfoWithButtons";
export const metadata: Metadata = {
	title: "Home",
	description: "Created by isccown125",
};

export default async function Home() {
	const products = await getProductsList(10);
	return (
		<>
			<ProductsListInline heading={"Polecane produkty"} products={products} />
			<FullWidthInfoWithButtons
				buttonText={"zobacz więcej"}
				heading={"Odkryj więcej naszych wyjątkowych produktów!"}
				description={
					"Zapraszamy do zapoznania się z szeroką gamą starannie " +
					"wyselekcjonowanych artykułów, które połączyły w sobie najwyższą jakość wykonania z niepowtarzalnym designem. " +
					"Nie przegap okazji, aby znaleźć coś idealnego dla siebie lub na prezent!"
				}
			/>
		</>
	);
}
