import type { Metadata } from "next";
import React, { Suspense } from "react";
import { ProductsListGrid } from "@/ui/organisms/ProductListGrid";
import { getProductsList } from "@/api/functions";
import { Pagination } from "@/ui/molecules/Pagination";
import { Spinner } from "@/ui/atoms/Loader/Spinner";
import { countPagesAndConvertToArray } from "@/utils";

export const metadata: Metadata = {
	title: "Products",
	description: "Products page",
};

type ProductsPageProps = {
	params: {
		pageNumber: string;
	};
};

export function generateStaticParams() {
	const pages = countPagesAndConvertToArray(100, 20);

	return pages?.map((el) => ({ pageNumber: el.toString() })) ?? [];
}

const Page = async ({ params }: ProductsPageProps) => {
	const products = await getProductsList(20, Number(params.pageNumber));

	return (
		<>
			<Pagination
				fullNumberOfProducts={100}
				productsPerPage={20}
				currentPage={Number(params.pageNumber)}
			/>
			<Suspense fallback={<Spinner />}>
				<ProductsListGrid products={products} heading={"Wszystkie produkty"} />
			</Suspense>
		</>
	);
};

export default Page;
