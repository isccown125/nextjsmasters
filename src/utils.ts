import { number } from "prop-types";

export const formatNumberCurrency = (value: number, locales: string, currency: string) => {
	return new Intl.NumberFormat(locales, { style: "currency", currency }).format(value);
};
