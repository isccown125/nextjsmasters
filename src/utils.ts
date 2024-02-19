export const formatNumberCurrency = (value: number, locales: string, currency: string) => {
	return new Intl.NumberFormat(locales, { style: "currency", currency }).format(value);
};

export const countPagesAndConvertToArray = (countOfProducts: number, productPerPage: number) => {
	const numberOfPages = Number(Math.ceil(countOfProducts / productPerPage));

	if (!isNaN(numberOfPages)) {
		return Array.from({ length: numberOfPages }, (_, index) => index + 1);
	}
	return null;
};
