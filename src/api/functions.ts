import { type Product } from "@/ui/types";

type ProductFromApi = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: { rate: number; count: number };
	image: string;
	longDescription: string;
};

export const productFromApiToProductListItem = (product: ProductFromApi) => {
	return {
		id: product.id,
		price: product.price,
		description: product.longDescription,
		name: product.title,
		image: {
			alt: product.description,
			src: product.image,
		},
	};
};
const BASE_URL = "https://naszsklep-api.vercel.app/api/products";

export const getProductsList = async (countOfProduct?: number, currentPage?: number) => {
	const url = new URL(BASE_URL);
	if (countOfProduct) {
		countOfProduct && url.searchParams.set("take", countOfProduct.toString());
	}
	if (currentPage && countOfProduct) {
		const minNumberOfProducts = Number(currentPage * countOfProduct - countOfProduct);
		const offset = minNumberOfProducts < 0 ? 0 : minNumberOfProducts;
		currentPage && url.searchParams.set("offset", offset.toString());
	}

	const data = await fetch(url.toString());
	if (!data.ok) {
		return [] as Product[];
	}
	const result = (await data.json()) as ProductFromApi[];

	return result.map(productFromApiToProductListItem) ?? [];
};

export const getProductById = async (id: string) => {
	const url = new URL(BASE_URL);
	url.pathname += "/" + encodeURIComponent(`${id}`);

	const result = await fetch(url.toString());
	if (!result.ok) {
		return null;
	}
	const data = (await result.json()) as ProductFromApi;

	return productFromApiToProductListItem(data);
};
