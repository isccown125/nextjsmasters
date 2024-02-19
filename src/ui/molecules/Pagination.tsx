"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import { PaginationButton } from "@/ui/atoms/Pagination/PaginationButton";
import { Container } from "@/ui/atoms/utils/Container";
import { PaginationPageNumber } from "@/ui/atoms/Pagination/PaginationPageNumber";
import { countPagesAndConvertToArray } from "@/utils";
import { ActiveLink } from "@/ui/atoms/ActiveLink/ActiveLink";

type PaginationProps = {
	fullNumberOfProducts: number;
	productsPerPage: number;
	currentPage: number;
};

type paginationState = {
	currentPage: number;
	maxPages: number;
	minPageForPagination: number;
	maxPageForPagination: number;
	pages: number[];
};

const BASE_URL = "http://localhost:3000/products/";

export const Pagination = ({
	currentPage,
	fullNumberOfProducts,
	productsPerPage,
}: PaginationProps) => {
	const [paginationState, setPaginationState] = useState<paginationState>({
		currentPage,
		maxPages: Math.ceil(fullNumberOfProducts / productsPerPage),
		pages: [],
		minPageForPagination: 1,
		maxPageForPagination: 10,
	});
	const router = useRouter();

	const path = usePathname().split("/");

	useEffect(() => {
		setPaginationState(({ currentPage, maxPages }) => {
			const pageNumber = Number(path[path.length - 1]) ?? 1;
			const minPage = currentPage - 5;
			const maxPage = currentPage + 5;
			const pages = countPagesAndConvertToArray(fullNumberOfProducts, productsPerPage) ?? [];
			return {
				currentPage: pageNumber,
				pages,
				maxPages,
				minPageForPagination: minPage < 1 ? 0 : minPage,
				maxPageForPagination:
					maxPage > Number(pages[pages.length - 1])
						? Number(pages[pages.length - 1])
						: currentPage + 5,
			};
		});
	}, []);

	const nextPage = () => {
		const { maxPageForPagination, currentPage: currentPageInState } = paginationState;
		const nextPage =
			currentPageInState + 1 > maxPageForPagination ? currentPageInState : currentPageInState + 1;
		const url = new URL(nextPage.toString(), BASE_URL).toString();
		router.push(url);
	};

	const prevPage = () => {
		const { minPageForPagination, currentPage: currentPageInState } = paginationState;
		const prevPage =
			currentPageInState - 1 < minPageForPagination + 1
				? currentPageInState
				: currentPageInState - 1;
		const url = new URL(prevPage.toString(), BASE_URL).toString();
		router.push(url);
	};
	return (
		<Container>
			<div aria-label="pagination" className="flex w-full items-center justify-center gap-2">
				<PaginationButton onClick={prevPage}>
					<IoIosArrowBack />
				</PaginationButton>
				<div className="flex flex-row gap-2">
					{paginationState.pages
						.map((page, index) => (
							<ActiveLink key={index} href={"/products/" + page} exact={true}>
								<PaginationPageNumber>{page}</PaginationPageNumber>
							</ActiveLink>
						))
						.slice(paginationState.minPageForPagination, paginationState.maxPageForPagination)}
				</div>
				<PaginationButton onClick={nextPage}>
					<IoIosArrowForward />
				</PaginationButton>
			</div>
		</Container>
	);
};
