import { CaretLeft, CaretRight } from 'phosphor-react'

import {
	PaginationContainer,
	PaginationNumber,
	PaginationList,
	PaginationLeftArrow,
	PaginationRightArrow,
} from './styles'

interface PaginationProps {
	currentPage: number
	transactionsPerPage: number
	totalTransactions: number
	paginate: (pageNumber: number) => void
	previousPage: () => void
	nextPage: () => void
}

export function Pagination({
	currentPage,
	transactionsPerPage,
	totalTransactions,
	paginate,
	previousPage,
	nextPage,
}: PaginationProps) {
	const pageNumbers = []

	for (
		let i = 1;
		i <= Math.ceil(totalTransactions / transactionsPerPage);
		i++
	) {
		pageNumbers.push(i)
	}

	return (
		<PaginationContainer>
			<PaginationList>
				<PaginationLeftArrow onClick={previousPage} variant={currentPage === 1}>
					<CaretLeft size={24}></CaretLeft>
				</PaginationLeftArrow>
				{pageNumbers.map((number) => (
					<PaginationNumber
						key={number}
						onClick={() => paginate(number)}
						variant={currentPage === number ? 'current' : 'not-current'}
					>
						{number}
					</PaginationNumber>
				))}
				<PaginationRightArrow
					onClick={nextPage}
					variant={
						currentPage < Math.ceil(totalTransactions / transactionsPerPage)
					}
				>
					<CaretRight size={24}></CaretRight>
				</PaginationRightArrow>
			</PaginationList>
		</PaginationContainer>
	)
}
