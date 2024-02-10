export interface Product {
	id: string;
	name: string;
	price: number;
	description: string;
	image: {
		alt: string;
		src: string;
	};
}

export type Products = Product[];
